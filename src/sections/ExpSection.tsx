import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { headerTextVariants } from "../animations/headerText";

function ExpSection() {
  const [refHeader, inViewHeader] = useInView({
    triggerOnce: true,
    threshold: 0.25,
  });
  const [refDesc, inViewDesc] = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  const workInfo = [
    {
      company: "Liberty Dev",
      position: "Full-Stack Engineer",
      location: "Kyiv, Ukraine",
      date: "2023-present",
      description:
        "Full-Stack Developer, dedicated to crafting user-centric solutions with a focus on both front-end and back-end development. Expert in creating responsive and user-friendly interfaces, ensuring cross-browser compatibility, and adapting designs for various screen sizes on the front end. Proficient in implementing user interface logic and design principles. On the back-end side, skilled in server, database, and application logic development, ensuring seamless data flow and integration between front-end and back-end components. Experienced in using a wide range of frameworks and technologies to develop scalable, efficient, and maintainable web applications.I also do testing.",
      techStack: [
        "TypeScript",
        "React",
        "Redux",
        "Framer Motion",
        "i18next",
        "Material UI",
        "Node.js",
        "MySQL",
      ],
    },
  ];

  return (
    <div className="w-full pt-14 flex flex-col items-center min-h-[75vh]">
      <div className="text-center flex flex-col items-center w-5/12 mb-12">
        <motion.h2
          className="text-5xl font-bold py-4 border-b-4 border-custom-green"
          ref={refHeader}
          variants={headerTextVariants}
          initial="initial"
          animate={inViewHeader ? "inView" : "outOfView"}
        >
          Experience
        </motion.h2>
        <motion.p
          className="mt-4 text-xl"
          ref={refHeader}
          initial={{ y: "50%", opacity: 0 }}
          animate={inViewHeader ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Explore my professional journey
        </motion.p>
      </div>
      <div className="flex flex-col items-center" ref={refDesc}>
        {workInfo.map((work, i) => (
          <motion.div
            key={i}
            className="flex m-4 gap-2 flex-col items-start border rounded-3xl border-custom-green mt-8 p-6 bg-custom-black w-9/12 837px:w-3/5 1300px:w-[50rem]"
            initial={{ y: "40%", opacity: 0 }}
            animate={inViewDesc ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex justify-between w-full">
              <p className="text-2xl font-semibold">{work.company}</p>
              <p className="text-xl font-semibold">{work.date}</p>
            </div>
            <div className="flex justify-between w-full">
              <p className="text-xl font-semibold text-custom-green">
                {work.position}
              </p>
              <p className="text-xl font-semibold">{work.location}</p>
            </div>
            <p className="text-lg">{work.description}</p>
            <div className="flex flex-wrap flex-start">
              {work.techStack.map((tech, i) => (
                <motion.div
                  key={tech}
                  transition={{ duration: 0.5, delay: 0.2 + i / 30 }}
                >
                  <p className="py-1.5 px-3 rounded-2xl m-1 bg-custom bg-custom-black-main">
                    {tech}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default ExpSection;
