import "../../../styles/Hero.scss";
import { Link } from "react-router-dom";
import { IoMdCall } from "react-icons/io";
import { MdOutlineDeveloperMode } from "react-icons/md";
import { SlMouse } from "react-icons/sl";
import { motion } from "framer-motion";

const scrollIconVariant = {
  visible: {
    y: -50,
    transition: {
      repeat: Infinity,
      repeatType: "reverse",
      duration: 0.7,
    },
  },
};

const heroImageVariant = {
  inVisible: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.1,
      duration: 2.5,
      ease: "easeInOut",
    },
  },
};

const textContainerVariants = {
  inVisible: {
    flexBasis: "40%",
  },
  visible: {
    flexBasis: "70%",
    transition: {
      delay: 0.1,
      duration: 1,
      ease: "easeInOut",
      when: "beforeChildren",
    },
  },
};

const logoVariant = {
  inVisible: {
    opacity: 0,
    width: 0,
    marginRight: 0,
  },
  visible: {
    opacity: 1,
    marginRight: 15,
    width: "auto",
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <motion.div
          className="bannerWrapper"
          initial="inVisible"
          animate="visible"
        >
          <motion.div
            className="textContainer"
            variants={textContainerVariants}
          >
            <h6>Hello, I&apos;m</h6>
            <h2>
              <motion.img variants={logoVariant} src="favicon.svg" alt="dev" />
              <span>Salman Farshi</span>
            </h2>
            <h3>2D & 3D Web Developer</h3>
            <div className="heroActions">
              <Link to="#">
                <MdOutlineDeveloperMode fontSize={20} />
                See The Latest works
              </Link>
              <Link to="#">
                <IoMdCall fontSize={20} /> Contact Me
              </Link>
            </div>
            <motion.div className="scrollIcon" variants={scrollIconVariant}>
              <SlMouse />
            </motion.div>
          </motion.div>
          <motion.figure className="imageContainer">
            <motion.img
              variants={heroImageVariant}
              src="/images/heroImg.png"
              alt="Salman farshi"
            />
          </motion.figure>
        </motion.div>
      </div>
    </div>
  );
};
export default Hero;
