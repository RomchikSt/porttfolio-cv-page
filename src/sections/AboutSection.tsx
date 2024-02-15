import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-scroll";

import {
  SiRedux,
  SiNextdotjs,
  SiVite,
  SiReact,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
} from "react-icons/si";
import { RiSupabaseFill } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa6";
import { BiLogoNodejs, BiLogoDocker } from "react-icons/bi";

import { headerTextVariants } from "../animations/headerText";

function AboutSection() {
  const [refHeader, inViewHeader] = useInView({
    triggerOnce: true,
    threshold: 0.25,
  });
  const [refSkill, inViewSkill] = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  const knowMe = [
    {
      text: `I am a Web Developer. My work involves creating and optimizing interactive features of websites and web applications. You can view some of my projects in the `,
      link: "portfolio",
      textLink: "Portfolio.",
    },
    {
      text: `My development skills are focused on creating user-friendly interfaces, developing responsive interfaces, optimizing for cross-browser compatibility and implementing user interface logic and design principles.`,
    },
    {
      text: `My ability to constantly learn and keep up with the latest technologies allows me to effectively solve the challenges of modern projects, ensuring flexibility and a high level of development quality.`,
    },
    {
      text: `In my free time, I enjoy playing tennis and chess, which helps me develop strategic thinking and focus. Additionally, I love engaging in outdoor activities, which keeps me energetic and inspired for new projects.
      `,
    },
    {
      text: `Open to collaboration opportunities where I can contribute, learn, and grow. If you have a good opportunity that matches my skills and experience, don't hesitate to `,
      link: "contact",
      textLink: "contact me.",
    },
  ];

  const frontStack = [
    {
      logo: <SiHtml5 size={"3rem"} className="mb-2" />,
      name: "HTML",
    },
    {
      logo: <SiCss3 size={"3rem"} className="mb-2" />,
      name: "CSS",
    },
    {
      logo: <SiJavascript size={"3rem"} className="mb-2" />,
      name: "JavaScript",
    },
    {
      logo: <SiTypescript size={"3rem"} className="mb-2" />,
      name: "TypeScript",
    },
    {
      logo: <SiReact size={"3rem"} className="mb-2" />,
      name: "React",
    },
    {
      logo: <SiNextdotjs size={"3rem"} className="mb-2" />,
      name: "Next.js",
    },
  ];

  const backStack = [
    {
      logo: <SiNodedotjs size={"3rem"} className="mb-2" />,
      name: "Node.js",
    },
    {
      logo: <SiMongodb size={"3rem"} className="mb-2" />,
      name: "MongoDB",
    },
    {
      logo: <RiSupabaseFill size={"3rem"} className="mb-2" />,
      name: "Supabase",
    },
    {
      logo: <SiRedux size={"3rem"} className="mb-2" />,
      name: "Redux",
    },
    {
      logo: <BiLogoDocker size={"3rem"} className="mb-2" />,
      name: "Docker",
    },
    {
      logo: <FaGitAlt size={"3rem"} className="mb-2" />,
      name: "Git",
    },
    {
      logo: <SiVite size={"3rem"} className="mb-2" />,
      name: "Vite",
    },
  ];

  const reactTechStack = [
    "Material UI",
    "Tailwind CSS",
    "CSS Modules",
    "Styled-Components",
    "React Bootstrap",
    "Framer Motion",
  ];

  return (
    <div className="m-auto text-center flex flex-col items-center py-[3%] min-h-[60vh] 1300px:items-center">
      <motion.h2
        className="text-5xl font-bold py-4 border-b-4 border-custom-green"
        ref={refHeader}
        variants={headerTextVariants}
        initial="initial"
        animate={inViewHeader ? "inView" : "outOfView"}
      >
        About
      </motion.h2>
      <motion.p
        className="mt-4 text-xl w-3/5 1300px:w-5/12"
        ref={refHeader}
        initial={{ y: "50%", opacity: 0 }}
        animate={inViewHeader ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Here you will find more information about me, what I do, and my current
        skills of programming and technology
      </motion.p>
      <motion.div
        className="flex mt-20 items-center justify-around 1300px:justify-between"
        ref={refSkill}
        initial={{ y: "50%", opacity: 0 }}
        animate={inViewHeader ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="flex flex-col items-center 1300px:items-start gap-20 1300px:flex-row 1300px:justify-center 1400px:justify-around 1400px:gap-0">
          <div className="w-9/12 837px:w-3/5 flex flex-col justify-center 1300px:w-5/12">
            <motion.p
              className="text-2xl text-custom-green font-semibold mb-6"
              ref={refSkill}
              initial={{ y: "50%", opacity: 0 }}
              animate={inViewHeader ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Get to know me!
            </motion.p>
            {knowMe.map((text, i) => (
              <motion.p
                key={i}
                className="mt-4 text-l text-start"
                ref={refSkill}
                initial={{ y: "50%", opacity: 0 }}
                animate={inViewHeader ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i / 10 }}
              >
                {text.text}
                {text.textLink ? (
                  <Link to={text.link} smooth duration={500}>
                    <span className=" text-custom-green cursor-pointer">
                      {text.textLink}
                    </span>
                  </Link>
                ) : null}
              </motion.p>
            ))}
          </div>
          <div className="flex-col w-9/12 837px:w-3/5 1300px:w-5/12">
            <p className="text-2xl text-custom-green font-semibold">
              Tech Stack
            </p>
            <div className="flex justify-center gap-[3%] mt-8 450px:gap-[5%]">
              {frontStack.map((tech, i) => (
                <motion.div
                  key={tech.name}
                  ref={refSkill}
                  initial={{ y: "20%", opacity: 0 }}
                  animate={inViewSkill ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + i / 10 }}
                >
                  <div className="flex flex-col items-center text-center">
                    <div>{tech.logo}</div>
                    <p>{tech.name}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="flex justify-center gap-[3%] mt-8 450px:gap-[5%]">
              {backStack.map((tech, i) => (
                <motion.div
                  key={tech.name}
                  ref={refSkill}
                  initial={{ y: "20%", opacity: 0 }}
                  animate={inViewSkill ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + i / 10 }}
                >
                  <div className="flex flex-col items-center text-center">
                    <div>{tech.logo}</div>
                    <p>{tech.name}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="flex flex-col justify-center border rounded-3xl border-custom-green mt-8 p-6 bg-custom-black w-full">
              <motion.p
                className="text-xl text-custom-green font-semibold text-start mb-4"
                ref={refSkill}
                initial={{ y: "20%", opacity: 0 }}
                animate={inViewSkill ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                React UI Libraries :
              </motion.p>
              <div className="flex flex-wrap">
                {reactTechStack.map((tech, i) => (
                  <motion.div
                    key={tech}
                    ref={refSkill}
                    initial={{ y: "20%", opacity: 0 }}
                    animate={inViewSkill ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + i / 30 }}
                  >
                    <p className="p-1.5 px-2.5 rounded-2xl m-1 bg-custom bg-custom-black-main">
                      {tech}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default AboutSection;
