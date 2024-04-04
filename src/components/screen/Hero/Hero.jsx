import "../../../styles/Hero.scss";
import { Link } from "react-router-dom";
import { IoMdCall } from "react-icons/io";
import { MdOutlineDeveloperMode } from "react-icons/md";
import { SlMouse } from "react-icons/sl";
import { motion, useMotionValue, useTransform } from "framer-motion";
import {
  heroImageVariant,
  logoVariant,
  scrollIconVariant,
  textContainerVariants,
} from "../../../animationVariants/Hero";

const Hero = () => {
  const x = useMotionValue(200);
  const y = useMotionValue(200);
  const rotateX = useTransform(y, [0, 400], [45, -45]);
  const rotateY = useTransform(x, [0, 400], [-45, 45]);
  function handleMouse(event) {
    const rect = event.currentTarget.getBoundingClientRect();

    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  }
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
                <button>
                  <MdOutlineDeveloperMode fontSize={20} />
                  See The Latest works
                </button>
              </Link>
              <Link to="#">
                <button>
                  <IoMdCall fontSize={20} /> Contact Me
                </button>
              </Link>
            </div>
            <motion.div className="scrollIcon" variants={scrollIconVariant}>
              <SlMouse />
            </motion.div>
          </motion.div>
          <motion.figure onMouseMove={handleMouse} className="imageContainer">
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
