import "../../../styles/Navbar.scss";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTelegramPlane, FaFacebook } from "react-icons/fa";
import { motion } from "framer-motion";
import SideBar from "./Sidebar/SideBar";
const NavBar = () => {
  return (
    <header className="navbar">
      <div className="container">
        <SideBar />
        <div className="nav_wrapper">
          <motion.figure className="logo" initial="inVisible" animate="visible">
            <img src="/images/logo_icon_white.svg" />
            <span>DevWithFarshi</span>
          </motion.figure>
          <div className="nav__icons">
            <div className="nav__icon">
              <a href="https://www.linkedin.com/in/devwithfarshi/">
                <FaLinkedinIn />
              </a>
            </div>
            <div className="nav__icon">
              <a href="https://t.me/sfsalman">
                <FaTelegramPlane />
              </a>
            </div>
            <div className="nav__icon">
              <a href="https://www.facebook.com/devwithfarshi">
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default NavBar;
