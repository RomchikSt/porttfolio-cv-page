import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FaHome } from "react-icons/fa";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { FaBriefcase } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { MdHomeWork } from "react-icons/md";

function HeaderSection({ activeSection }: { activeSection: string }) {
  const headerListItems = [
    {
      id: "home",
      text: "Home",
      icon: <FaHome fill={"#0aff9d"} size={"1.4rem"} />,
    },
    {
      id: "about",
      text: "About",
      icon: <BsFillInfoCircleFill fill={"#0aff9d"} size={"1.4rem"} />,
    },
    {
      id: "experience",
      text: "Experience",
      icon: <MdHomeWork fill={"#0aff9d"} size={"1.6rem"} />,
    },
    {
      id: "portfolio",
      text: "Portfolio",
      icon: <FaBriefcase fill={"#0aff9d"} size={"1.4rem"} />,
    },
    {
      id: "contact",
      text: "Contact",
      icon: <IoIosMail fill={"#0aff9d"} size={"1.8rem"} />,
    },
  ];

  return (
    <motion.div
      className="hidden w-32 fixed min-h-screen flex-row justify-center items-center border-r border-custom-green 1024px:flex"
      initial={{ x: -200 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <ul className="text-center relative ">
        {headerListItems.map((item, i) => (
          <motion.li
            key={item.id}
            className={`pointer-events-auto p-3 ${
              i !== headerListItems.length - 1 ? "border-b" : ""
            }`}
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link to={item.id} smooth duration={1200}>
              <motion.button
                className="flex items-center justify-center w-16 h-6 relative"
                initial={{ x: -100 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + i / 10 }}
              >
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  initial={false}
                  animate={{
                    opacity: activeSection === `${item.id}` ? 1 : 0,
                    scale: activeSection === `${item.id}` ? 1 : 0.5,
                  }}
                  transition={{ duration: 0.15, ease: "easeInOut" }}
                >
                  {item.icon}
                </motion.div>
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  initial={false}
                  whileHover={{
                    color: "#0aff9d",
                    transition: { duration: 0.2, ease: "easeInOut" },
                  }}
                  animate={{
                    opacity: activeSection === `${item.id}` ? 0 : 1,
                    scale: activeSection === `${item.id}` ? 0.5 : 1,
                  }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                  {item.text}
                </motion.div>
              </motion.button>
            </Link>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}

export default HeaderSection;
