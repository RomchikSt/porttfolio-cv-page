import { Variants, motion } from "framer-motion";

type HeaderTextProps = {
  children: React.ReactNode;
  ref: any;
  variants: Variants;
  animate?: "inView" | "outOfView";
};

function HeaderText({ children, ref, variants, animate }: HeaderTextProps) {
  return (
    <motion.h2
      className="text-5xl font-bold py-4 border-b-4 border-custom-green"
      ref={ref}
      variants={variants}
      initial="initial"
      animate={animate}
    >
      {children}
    </motion.h2>
  );
}

export default HeaderText;
