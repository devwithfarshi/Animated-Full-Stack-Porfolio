const servicesContainerVariants = {
  inVisible: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  visible: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
      staggerChildren: 0.1,
    },
  },
};

export { servicesContainerVariants };
