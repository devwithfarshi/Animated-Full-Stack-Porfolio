import { useState } from "react";
import "../../../../styles/Sidebar.scss";
import Links from "./Links";
import ToggleButton from "./ToggleButton";
import { motion } from "framer-motion";
import { sidebarVariants } from "../../../../animationVariants/Header";
const SideBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <motion.aside
        className="sidebar"
        animate={open ? "visible" : "inVisible"}
      >
        <motion.div className="bg" variants={sidebarVariants}>
          <Links />
        </motion.div>
        <ToggleButton setOpen={setOpen} />
      </motion.aside>
    </>
  );
};
export default SideBar;
