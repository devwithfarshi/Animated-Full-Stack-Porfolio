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
    x: 500,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.5,
      ease: "easeInOut",
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
      delay: 2,
      duration: 1,
      ease: "easeIn",
    },
  },
};

const textVariant = {
  inVisible: {
    opacity: 0,
    x: -500,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
      staggerChildren: 0.1,
      ease: "easeInOut",
    },
  },
};
const textSlideVariant = {
  inVisible: {
    x: 0,
  },
  visible: {
    x: "-100vw",
    transition: {
      duration: 20,
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
};
export {
  logoVariant,
  heroImageVariant,
  scrollIconVariant,
  textSlideVariant,
  textVariant,
};
