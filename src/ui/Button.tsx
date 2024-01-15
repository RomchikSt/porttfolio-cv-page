import { Variants, motion } from "framer-motion";

type ButtonProps = {
  children: React.ReactNode;
  animationVariants: Variants;
  animateState?: "inView" | "outOfView" | "animate";
};

function Button({ children, animationVariants, animateState }: ButtonProps) {
  return (
    <motion.button
      className="pointer-events-auto w-44 h-12 bg-transparent border rounded-xl border-custom-green ml-1 flex items-center justify-center"
      variants={animationVariants}
      initial="initial"
      animate={animateState}
      whileHover="whileHover"
    >
      {children}
    </motion.button>
  );
}

export default Button;
