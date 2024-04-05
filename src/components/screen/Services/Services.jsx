import { useRef } from "react";
import { servicesContainerVariants } from "../../../animationVariants/ServicesAnimation";
import "../../../styles/Services.scss";
import { motion, useInView } from "framer-motion";
const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });
  return (
    <motion.div
      className="services"
      variants={servicesContainerVariants}
      initial="inVisible"
      // whileInView="visible"
      ref={ref}
      animate={isInView && "visible"}
    >
      <motion.div className="textContainer">
        <motion.p>
          I focus on helping your brand grow <br /> and move forward
        </motion.p>
        <hr />
      </motion.div>

      <motion.div className="titleContainer">
        <div className="title">
          <img src="/images/people.webp" alt="services" />
          <h2>
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
          </h2>
        </div>
        <div className="title">
          <h2>
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>{" "}
            Business.
          </h2>
          <button>What I did</button>
        </div>
      </motion.div>
      <motion.div className="listContainer">
        <div className="container">
          <div className="listContainerWrapper">
            {[...Array(4).keys()].map((value) => (
              <motion.div
                key={value}
                className="box"
                whileHover={{
                  background: "lightgray",
                  color: "#0a0a0a",
                }}
              >
                <h2>Branding</h2>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Exercitationem obcaecati amet itaque debitis veniam suscipit
                  iste soluta nulla natus esse.
                </p>
                <button>Go</button>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
export default Services;
