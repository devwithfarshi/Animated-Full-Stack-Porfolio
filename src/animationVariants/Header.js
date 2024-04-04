export const headerLogoVariants = {
  inVisible: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

//sidebar

export const sidebarVariants = {
  visible: {
    clipPath: "circle(120rem at 5rem 5rem)",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  inVisible: {
    clipPath: "circle(3rem at 5rem 5rem)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

// links

export const linksVariants = {
  inVisible: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
  visible: {
    transition: {
      staggerChildren: 0.1,
      when: "beforeChildren",
    },
  },
};
export const linksItemsVariants = {
  inVisible: {
    y: 50,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 120,
    },
  },
  hover: {
    scale: 1.2,
  },
  tap: {
    scale: 0.9,
  },
};
