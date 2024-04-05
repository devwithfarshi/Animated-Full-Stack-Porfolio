import "../../../styles/Portfolio.scss";
import { portfolio_data } from "../../../data/portfolioData";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h2>Featured Works</h2>
        <motion.div className="progressBar" style={{ scaleX }}></motion.div>
      </div>
      {portfolio_data.map((value) => {
        return <SinglePortfolio key={value.id} {...value} />;
      })}
    </div>
  );
};
export default Portfolio;

// single portfolio component
const SinglePortfolio = ({ title, desc, img, techStack, link }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  return (
    <section className="portfolioSection">
      <div className="portfolioItem">
        <div className="container">
          <div className="portfolioItemWrapper">
            <figure ref={ref}>
              <img src={img} alt={title} />
            </figure>
            <motion.div className="textContainer" style={{ y }}>
              <h4>{title}</h4>
              <p>{desc}</p>
              <h6>
                Tech Stack : <span>{techStack}</span>
              </h6>
              <a href={link && link} target="__devwithfarshi">
                see demo
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
