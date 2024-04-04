import {
  linksItemsVariants,
  linksVariants,
} from "../../../../animationVariants/Header";
import { navigationLinks } from "../../../../data/sidebar";
import { motion } from "framer-motion";

const Links = () => {
  return (
    <motion.div className="links" variants={linksVariants}>
      {navigationLinks.map((curItem) => (
        <motion.a
          variants={linksItemsVariants}
          whileHover="hover"
          whileTap="tap"
          key={curItem.id}
          href={`#${curItem.path}`}
        >
          {curItem.title}
        </motion.a>
      ))}
    </motion.div>
  );
};
export default Links;
