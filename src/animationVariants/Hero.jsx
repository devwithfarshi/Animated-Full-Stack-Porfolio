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
    width: "0rem",
    marginRight: 0,
  },
  visible: {
    opacity: 1,
    marginRight: 15,
    width: "6rem",
    transition: {
      delay: 0.25,
      duration: 1,
      ease: "easeIn",
    },
  },
};
export {
  logoVariant,
  textContainerVariants,
  heroImageVariant,
  scrollIconVariant,
};
