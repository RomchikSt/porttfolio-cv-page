export const scrollMouseBoxVariants = {
  initial: { y: "50%", opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.6 } },
};

export const scrollMouseWheelVariants = {
  animate: {
    y: [0, 25],
    opacity: [1, 0],
    transition: { duration: 1.5, repeat: Infinity },
  },
};
