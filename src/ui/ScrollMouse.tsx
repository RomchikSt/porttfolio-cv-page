import { motion } from "framer-motion";

function ScrollMouse() {
  return (
    <motion.div
      className="hidden 1200px:block absolute ml-[3rem] scroll-mouse w-[30px] h-[50px] shadow-[inset_0_0_3px_1px_white] rounded-full left-1/2 bottom-[3rem] -translate-x-1/2 z-50"
      initial={{ y: "50%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      <motion.div
        className="absolute w-[6px] h-[6px] bg-custom-green left-[40%] top-[9px] -translate-x-1/2 rounded-full"
        animate={{ y: [0, 25], opacity: [1, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      />
    </motion.div>
  );
}

export default ScrollMouse;
/* import styled, { keyframes } from "styled-components";

const appear = keyframes`
  from {
    opacity: 0;
    transform: translateY(50%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const scroll = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(25px);
  }
`;

const ScrollMouseContainer = styled.div`
  display: none;
  @media (min-width: 1200px) {
    display: block;
  }
  position: absolute;
  margin-left: 3rem;
  width: 30px;
  height: 50px;
  box-shadow: inset 0 0 3px 1px white;
  border-radius: 16px;
  left: 50%;
  bottom: 3rem;
  transform: translateX(-50%);
  z-index: 50;
  animation: ${appear} 0.5s 0.6s forwards;
`;

const ScrollCircle = styled.div`
  position: absolute;
  width: 6px;
  height: 6px;
  background-color: #0aff9d;
  left: 40%;
  top: 9px;
  transform: translateX(-50%);
  border-radius: 50%;
  animation: ${scroll} 1.6s infinite;
`;

function ScrollMouse() {
  return (
    
    <ScrollMouseContainer>
      <ScrollCircle />
    </ScrollMouseContainer>
  );
}

export default ScrollMouse;
 */
