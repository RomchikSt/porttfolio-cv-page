import styled from "styled-components";
import { motion } from "framer-motion";
import {
  scrollArrowBoxVariants,
  scrollArrowVariants,
} from "@/animations/scrollArrow";

const AnimatedSpan = styled(motion.span)`
  position: absolute;
  top: 0;
  left: 50%;
  width: 24px;
  height: 24px;
  margin-left: -12px;
  border-left: 2px solid green;
  border-bottom: 2px solid green;
  transform: rotate(-45deg);
`;

function ScrollArrow() {
  return (
    <motion.div
      className="mb-[4rem] absolute left-1/2 bottom-[4rem] -translate-x-1/2 1200px:hidden 1024px:ml-[4rem] 1024px:mb-[4rem]"
      variants={scrollArrowBoxVariants}
      initial="initial"
      animate="animate"
    >
      {[0, 0.5, 1].map((item: number, i: number) => (
        <AnimatedSpan
          key={i}
          variants={scrollArrowVariants}
          animate="animate"
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 2,
            times: [0, 0.5, 1],
            delay: item,
          }}
          style={{ top: `${i * 16}px` }}
        />
      ))}
    </motion.div>
  );
}

export default ScrollArrow;
