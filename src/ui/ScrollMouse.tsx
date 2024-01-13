import { motion } from "framer-motion";
import {
  scrollMouseBoxVariants,
  scrollMouseWheelVariants,
} from "../animations/share/scrollMouse";

function ScrollMouse() {
  return (
    <motion.div
      className="hidden 1200px:block absolute ml-[3rem] scroll-mouse w-[30px] h-[50px] shadow-[inset_0_0_3px_1px_white] rounded-full left-1/2 bottom-[3rem] -translate-x-1/2 z-50"
      variants={scrollMouseBoxVariants}
      initial="initial"
      animate="animate"
    >
      <motion.div
        className="absolute w-[6px] h-[6px] bg-custom-green left-[40%] top-[9px] -translate-x-1/2 rounded-full"
        variants={scrollMouseWheelVariants}
        animate="animate"
      />
    </motion.div>
  );
}

export default ScrollMouse;
