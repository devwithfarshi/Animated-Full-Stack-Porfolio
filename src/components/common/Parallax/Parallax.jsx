import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";
const Parallax = ({ type }) => {
  const backgroundRef = useRef();
  const { scrollYProgress } = useScroll({
    target: backgroundRef,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      ref={backgroundRef}
      className="parallax"
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg,#111132, #0c0c1d )"
            : "linear-gradient(180deg,#111132, #505064)",
      }}
    >
      <motion.h2 style={{ y: yText }}>
        {type === "services" ? "What I Do?" : "What I did?"}
      </motion.h2>
      <div className="mountains"></div>
      <motion.div
        style={{ y: yBg }}
        className={`planets_sun_bg ${type === "services" ? "planets" : "sun"}`}
      ></motion.div>
      <motion.div style={{ x: yBg }} className="stars"></motion.div>
    </div>
  );
};
export default Parallax;
