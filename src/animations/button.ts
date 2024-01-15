import { delay } from "framer-motion";

export const startSectionButtonVariants = {
  initial: { y: "70%", opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: 0.7 },
  },
  whileHover: {
    backgroundColor: "#0aff9d",
    scale: 1.05,
    color: "#000",
    transition: { duration: 0.3 },
  },
};

export const contactSectionButtonVariants = {
  initial: { y: "70%", opacity: 0 },
  inView: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.35 } },
  outOfView: {},
  whileHover: {
    backgroundColor: "#0aff9d",
    scale: 1.05,
    color: "#000",
    transition: { duration: 0.3, delay: 0.8 },
  },
};
