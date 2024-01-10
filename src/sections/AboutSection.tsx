import { SiRedux, SiVite } from "react-icons/si";
import { RiSupabaseFill } from "react-icons/ri";
import {
  BiLogoNodejs,
  BiLogoDocker,
  BiLogoReact,
  BiLogoCss3,
  BiLogoHtml5,
  BiLogoJavascript,
  BiLogoTypescript,
} from "react-icons/bi";
import { FaGitAlt } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-scroll";

function AboutSection() {
  const [refHeader, inViewHeader] = useInView({
    triggerOnce: true,
    threshold: 0.25,
  });
  const [refSkill, inViewSkill] = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  const headerAnimation = {
    initial: { y: "50%", opacity: 0 },
    animate: inViewHeader ? { y: 0, opacity: 1 } : {},
  };

  const skillAnimation = {
    initial: { y: "20%", opacity: 0 },
    animate: inViewSkill ? { y: 0, opacity: 1 } : {},
  };

  const knowMe = [
    {
      text: `I am a Web Developer. My work involves building and optimizing interactive features of websites and web applications, contributing to the success of the end product. Take a look at some of my diverse projects in the  `,
      link: "portfolio",
      textLink: "Portfolio",
    },
    {
      text: `My development skills are focused on cross-browser development, ensuring compatibility and optimal functioning of web applications across different browsers and devices. This includes effective adaptation of web applications for desktops, mobile phones, and tablets.`,
    },
    {
      text: `My ability to continuously learn and keep up with the latest technologies allows me to effectively meet the challenges of modern projects, ensuring flexibility and a high level of quality in development.`,
    },
    {
      text: `In my free time, I enjoy playing tennis and chess, which helps me develop strategic thinking and focus. Additionally, I love engaging in outdoor activities, which keeps me energetic and inspired for new projects.
      `,
    },
    {
      text: `Open to collaboration opportunities where I can contribute, learn, and grow. If you have a good opportunity that matches my skills and experience, don't hesitate to `,
      link: "contact",
      textLink: "contact me",
    },
  ];

  const frontStack = [
    {
      logo: <BiLogoHtml5 size={"4rem"} />,
      name: "HTML",
    },
    {
      logo: <BiLogoCss3 size={"4rem"} />,
      name: "CSS",
    },
    {
      logo: <BiLogoJavascript size={"4rem"} />,
      name: "JavaScript",
    },
    {
      logo: <BiLogoTypescript size={"4rem"} />,
      name: "TypeScript",
    },
    {
      logo: <BiLogoReact size={"4rem"} />,
      name: "React",
    },
  ];

  const backStack = [
    {
      logo: <BiLogoNodejs size={"4rem"} />,
      name: "Node.js",
    },
    {
      logo: <RiSupabaseFill size={"3.4rem"} className="mt-2.5 pb-1" />,
      name: "Supabase",
    },
    {
      logo: <SiRedux size={"3.4rem"} className="mt-2.5 pb-2.5" />,
      name: "Redux",
    },
    {
      logo: <BiLogoDocker size={"4rem"} />,
      name: "Docker",
    },
    {
      logo: <FaGitAlt size={"3.6rem"} className="mt-1.5 pb-1.5" />,
      name: "Git",
    },
    {
      logo: <SiVite size={"3.4rem"} className="mt-2 pb-1.5" />,
      name: "Vite",
    },
  ];

  const reactTechStack = [
    "React Hooks",
    "React Hook Form",
    "React Router",
    "React Query",
    "Axios",
    "Framer Motion",
    "i18next",
    "Next.js",
    "Styled-Components",
    "Material UI",
    "Tailwind CSS",
    "CSS Modules",
    "Bootstrap",
    "and many more...",
  ];

  return (
    <div className="m-auto text-center flex flex-col items-center py-[3%] min-h-[60vh] 1300px:items-center">
      <motion.h2
        className="text-5xl font-bold py-4 border-b-4 border-custom-green"
        ref={refHeader}
        {...headerAnimation}
        transition={{ duration: 0.5 }}
      >
        About
      </motion.h2>
      <motion.p
        className="mt-4 text-xl w-3/5 1300px:w-5/12"
        ref={refHeader}
        {...headerAnimation}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Here you will find more information about me, what I do, and my current
        skills of programming and technology
      </motion.p>
      <motion.div
        className="flex mt-20 items-center justify-around 1300px:justify-between"
        ref={refSkill}
        {...headerAnimation}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="flex flex-col items-center 1300px:items-start gap-20 1300px:flex-row 1300px:justify-center 1400px:justify-around 1400px:gap-0">
          <div className="w-9/12 837px:w-3/5 flex flex-col justify-center 1300px:w-5/12">
            <motion.p
              className="text-2xl text-custom-green font-semibold mb-6"
              ref={refSkill}
              {...headerAnimation}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Get to know me!
            </motion.p>
            {knowMe.map((text, i) => (
              <motion.p
                key={i}
                className="mt-4 text-l text-start"
                ref={refSkill}
                {...headerAnimation}
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
                  {...skillAnimation}
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
                  {...skillAnimation}
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
                {...skillAnimation}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                React Tech Stack:
              </motion.p>
              <div className="flex flex-wrap">
                {reactTechStack.map((tech, i) => (
                  <motion.div
                    key={tech}
                    ref={refSkill}
                    {...skillAnimation}
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
