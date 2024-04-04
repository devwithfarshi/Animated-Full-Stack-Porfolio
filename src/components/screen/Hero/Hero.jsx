import "../../../styles/Hero.scss";
import { Link } from "react-router-dom";
import { IoMdCall } from "react-icons/io";
import { MdOutlineDeveloperMode } from "react-icons/md";
import { SlMouse } from "react-icons/sl";
import { motion } from "framer-motion";
import {
  heroImageVariant,
  logoVariant,
  scrollIconVariant,
  textVariant,
  textSlideVariant,
} from "../../../animationVariants/HeroAnimation";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <motion.div
          className="bannerWrapper"
          initial="inVisible"
          animate="visible"
        >
          <motion.div className="textContainer" variants={textVariant}>
            <motion.h4 variants={textVariant}>@devwithfarshi</motion.h4>
            <motion.h6 variants={textVariant}>Hello, I&apos;m</motion.h6>
            <motion.h2 variants={textVariant}>
              <motion.img variants={logoVariant} src="favicon.svg" alt="dev" />
              <span>Salman Farshi</span>
            </motion.h2>
            <motion.h3 variants={textVariant}>2D & 3D Web Developer</motion.h3>
            <motion.div variants={textVariant} className="heroActions">
              <Link to="#">
                <motion.button variants={textVariant}>
                  <MdOutlineDeveloperMode fontSize={20} />
                  See The Latest works
                </motion.button>
              </Link>
              <Link to="#">
                <motion.button variants={textVariant}>
                  <IoMdCall fontSize={20} /> Contact Me
                </motion.button>
              </Link>
            </motion.div>
            <motion.div className="scrollIcon" variants={scrollIconVariant}>
              <SlMouse />
            </motion.div>
          </motion.div>
          <motion.div
            variants={textSlideVariant}
            className="slidingTextContainer"
          >
            Develop Your business with DevWithFarshi
          </motion.div>
          <motion.figure className="imageContainer" variants={heroImageVariant}>
            <img src="/images/heroImg.png" alt="Salman farshi" />
          </motion.figure>
        </motion.div>
      </div>
    </div>
  );
};
export default Hero;
