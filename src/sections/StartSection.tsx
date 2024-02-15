import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";

import ScrollArrow from "../ui/ScrollArrow";
import ScrollMouse from "../ui/ScrollMouse";
import Button from "../ui/Button";
import { startSectionButtonVariants } from "../animations/button";

function StartSection() {
  const [imgWidth, setImgWidth] = useState<number>(500);
  const [animation, setAnimation] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerHeight > 500) setAnimation(true);
      if (window.innerHeight < 500) setAnimation(false);
      if (window.innerWidth < 1300) setImgWidth(430);
      if (window.innerWidth > 1300) setImgWidth(500);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const introductionText = [
    {
      text: "Hi, my name is",
      className: "text-xl text-custom-green pb-1 pl-1",
    },
    {
      text: "Roman Stakhiv",
      className: "text-7xl font-bold",
    },
    {
      text: "and I'm",
      className: "text-xl text-custom-green pb-1 pl-1 mt-4",
    },
    {
      text: "Full-Stack Engineer",
      className: "text-5xl font-bold pl-0.5",
    },
  ];

  return (
    <div
      className="flex gap-2 justify-center min-h-[30rem] h-full
    1300px:gap-3 1200px:justify-around 1400px:m-auto "
    >
      <div className="min-h-screen flex flex-col justify-center">
        {introductionText.map((item, i) => (
          <motion.p
            key={i}
            className={item.className}
            initial={{ y: "70%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.75, delay: 0.2 + i / 10 }}
          >
            {item.text}
          </motion.p>
        ))}
        <div className="flex justify-start mt-14">
          <Link to="portfolio" smooth duration={500}>
            <Button
              animationVariants={startSectionButtonVariants}
              animateState={"animate"}
            >
              <motion.p className="m-0 w-full h-full text-center flex items-center justify-center hover:text-black transition-colors duration-300">
                My Projects
              </motion.p>
            </Button>
          </Link>
        </div>
        {animation && (
          <div>
            <ScrollMouse />
            <ScrollArrow />
          </div>
        )}
      </div>
      <motion.div
        className="hidden items-center 1200px:flex"
        initial={{ x: "20%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.1 }}
      >
        <Image
          src="/img/mainPhoto.jpg"
          alt="Roma Stakhiv on the photo"
          width={imgWidth}
          height={400}
          priority
          style={{ height: "auto", width: "auto" }}
        />
      </motion.div>
    </div>
  );
}

export default StartSection;
