import { motion } from "framer-motion";
import { useEffect } from "react";
import { Link } from "react-scroll";

import { BsFillInfoCircleFill } from "react-icons/bs";
import { FaBriefcase, FaHome } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { MdHomeWork } from "react-icons/md";

type MobileNavSectionProps = {
  isOpenMobileNav: boolean;
  activeSection: string;
  handleChangeMobileNav: (isOpenMobileNav: boolean) => void;
  handleCloseMobileNav: () => void;
};

function MobileNavSection({
  isOpenMobileNav,
  activeSection,
  handleChangeMobileNav,
  handleCloseMobileNav,
}: MobileNavSectionProps) {
  useEffect(() => {
    if (isOpenMobileNav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpenMobileNav]);

  const MENU_ITEMS = [
    {
      id: "home",
      text: "Home",
      icon: <FaHome fill={"#0aff9d"} size={"3.5rem"} />,
    },
    {
      id: "about",
      text: "About",
      icon: <BsFillInfoCircleFill fill={"#0aff9d"} size={"3.5rem"} />,
    },
    {
      id: "experience",
      text: "Experience",
      icon: <MdHomeWork fill={"#0aff9d"} size={"4rem"} />,
    },
    {
      id: "portfolio",
      text: "Portfolio",
      icon: <FaBriefcase fill={"#0aff9d"} size={"3.5rem"} />,
    },
    {
      id: "contact",
      text: "Contact",
      icon: <IoIosMail fill={"#0aff9d"} size={"4rem"} />,
    },
  ];
  const burgeSpans = [
    {
      id: "firstL",
      position: "top-0 right-0",
      animate: {
        rotate: isOpenMobileNav ? -45 : 0,
        top: isOpenMobileNav ? 3 : 0,
        transition: { duration: 0.2 },
      },
    },
    {
      id: "firstR",
      position: "top-0 left-0",
      animate: {
        rotate: isOpenMobileNav ? 45 : 0,
        top: isOpenMobileNav ? 3 : 0,
        transition: { duration: 0.2 },
      },
    },
    {
      id: "secondL",
      position: "top-[9px] right-0",
      animate: {
        opacity: isOpenMobileNav ? 0 : 1,
        x: isOpenMobileNav ? 10 : 0,
        transition: { duration: 0.3 },
      },
    },
    {
      id: "secondR",
      position: "top-[9px] left-0",
      animate: {
        opacity: isOpenMobileNav ? 0 : 1,
        x: isOpenMobileNav ? -10 : 0,
        transition: { duration: 0.3 },
      },
    },
    {
      id: "thirdL",
      position: "top-[18px] right-0",
      animate: {
        rotate: isOpenMobileNav ? 45 : 0,
        top: isOpenMobileNav ? 15 : 18,
        transition: { duration: 0.2 },
      },
    },
    {
      id: "thirdR",
      position: "top-[18px] left-0",
      animate: {
        rotate: isOpenMobileNav ? -45 : 0,
        top: isOpenMobileNav ? 15 : 18,
        transition: { duration: 0.2 },
      },
    },
  ];

  return (
    <div className="fixed top-[20px] right-[70px] 1024px:hidden z-50">
      <input
        type="checkbox"
        id="active"
        style={{ display: "none" }}
        checked={isOpenMobileNav}
        onChange={() => handleChangeMobileNav(isOpenMobileNav)}
        className="z-50"
      />
      <motion.label
        className={`absolute h-[50px] w-[50px] text-center bg-[#f0fdf4] rounded-full flex justify-center items-center cursor-pointer z-[51] shadow-[0px_0px_0.5rem_2px_#f0fdf4]`}
        htmlFor="active"
        initial={{ x: "40%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.1, delay: 0.1 }}
      >
        <motion.div className="w-[30px] h-[23px] relative">
          {burgeSpans.map((item) => (
            <motion.span
              key={item.id}
              className={`block absolute h-[5px] w-[60%] bg-[#111111] rounded-[9px] ${item.position}`}
              animate={item.animate}
            />
          ))}
        </motion.div>
      </motion.label>
      <div className="fixed top-0 right-0">
        <motion.div
          className="fixed top-0 left-0 w-full h-full bg-[#0aff9d] z-49"
          initial={{ opacity: isOpenMobileNav ? 1 : 0 }}
          animate={{
            clipPath: isOpenMobileNav
              ? "circle(200% at 50% 50%)"
              : "circle(25px at calc(100% - 45px) 45px)",
            opacity: isOpenMobileNav ? 1 : 0,
          }}
          transition={{ duration: 0.5 }}
        />
        <motion.div
          className="fixed top-0 right-0 w-full h-full bg-[#111111] z-[50] shadow-lg"
          initial={{ opacity: isOpenMobileNav ? 1 : 0 }}
          animate={{
            clipPath: isOpenMobileNav
              ? "circle(75% at 50% 50%)"
              : "circle(25px at calc(100% - 45px) 45px)",
            opacity: isOpenMobileNav ? 1 : 0,
          }}
          transition={{ duration: 0.5 }}
        >
          <ul className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center gap-8 z-50 overflow-y-auto max-h-screen">
            {MENU_ITEMS.map((item, i) => (
              <motion.li key={i} className="cursor-pointer">
                <Link
                  to={item.id}
                  smooth
                  duration={900}
                  onClick={handleCloseMobileNav}
                >
                  <p className="text-6xl font-bold transition-all z-50 ">
                    {activeSection === `${item.id}` ? item.icon : item.text}
                  </p>
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
}

export default MobileNavSection;
