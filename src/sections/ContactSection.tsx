import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaLinkedin, FaGithub, FaInstagram, FaTelegram } from "react-icons/fa";
import styled from "styled-components";

const ReactIcon = styled.div`
  svg {
    fill: #f0fdf4;
    transition: all 0.3s ease-in-out;
    transform: translateY(0);
  }
  svg:hover {
    fill: #0aff9d;
    transform: translateY(-5px);
  }
`;

function ContactSection() {
  const [refHeader, inViewHeader] = useInView({
    triggerOnce: true,
    threshold: 0.25,
  });
  const [refDesc, inViewDesc] = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  const headerAnimation = {
    initial: { y: "50%", opacity: 0 },
    animate: inViewHeader ? { y: 0, opacity: 1 } : {},
  };

  const descAnimation = {
    initial: { y: "20%", opacity: 0 },
    animate: inViewDesc ? { y: 0, opacity: 1 } : {},
  };

  const contactInfo = [
    {
      id: "LinkedIn",
      link: "https://www.linkedin.com/in/romchik-stakhiv/",
      icon: <FaLinkedin size={"2rem"} />,
    },
    {
      id: "GitHub",
      link: "https://github.com/RomchikSt",
      icon: <FaGithub size={"2rem"} />,
    },
    {
      id: "Instagram",
      link: "https://www.instagram.com/romchik_sta/",
      icon: <FaInstagram size={"2rem"} />,
    },
    {
      id: "Telegram",
      link: "https://t.me/Romchik_St",
      icon: <FaTelegram size={"2rem"} />,
    },
  ];

  return (
    <div className="w-full overflow-y-auto min-h-[50rem] h-screen pt-14 flex flex-col justify-between items-center 2100px:h-[60rem]">
      <div className="text-center flex flex-col items-center w-5/12">
        <motion.h2
          className="inline-block text-5xl font-bold py-4 border-b-4 border-custom-green"
          ref={refHeader}
          {...headerAnimation}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Contact
        </motion.h2>
        <motion.p
          className="mt-4 text-xl "
          ref={refHeader}
          {...headerAnimation}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Feel free to contact with me
        </motion.p>
      </div>
      <div className="flex flex-col items-center mt-4">
        <motion.p
          className="text-xl w-8/12 1300px:w-5/12 text-center"
          ref={refDesc}
          {...descAnimation}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {`Let's Connect! If you're interested in web development collaborations, have questions, or just want to exchange ideas, feel free to reach out. I'm open to discussing projects that challenge and expand the boundaries of web technology, and I'm always eager to connect with like-minded individuals. Contact me here or through my social media channels – I'm looking forward to our conversation and the opportunity to collaborate on exciting projects.`}
        </motion.p>
        <div className="mt-14 mb-8 flex flex-col gap-6 450px:flex-row">
          <motion.button
            className="pointer-events-auto  w-44 h-12 bg-transparent border rounded-xl border-custom-green ml-1 flex items-center justify-center"
            ref={refDesc}
            initial={{ y: "50%", opacity: 0 }}
            animate={
              inViewDesc
                ? {
                    y: 0,
                    opacity: 1,
                    transition: { duration: 0.5, delay: 0.35 },
                  }
                : {}
            }
            whileHover={{
              backgroundColor: "#0aff9d",
              scale: 1.05,
              transition: { duration: 0.3 },
            }}
            transition={{
              backgroundColor: { duration: 0.3 },
              scale: { duration: 0.3 },
            }}
          >
            <motion.a
              href="mailto:roma.stakhiv@gmail.com"
              className="m-0 absolute top-0 left-0 w-full h-full text-center flex items-center justify-center"
              initial={{ color: "#FFFFFF" }}
              whileHover={{ color: "#111111" }}
            >
              Say Hello!
            </motion.a>
          </motion.button>
          <motion.button
            className="pointer-events-auto w-44 h-12 bg-transparent border rounded-xl border-custom-green ml-1 flex items-center justify-center"
            ref={refDesc}
            initial={{ y: "50%", opacity: 0 }}
            animate={
              inViewDesc
                ? {
                    y: 0,
                    opacity: 1,
                    transition: { duration: 0.5, delay: 0.35 },
                  }
                : {}
            }
            whileHover={{
              backgroundColor: "#0aff9d",
              scale: 1.05,
              transition: { duration: 0.3 },
            }}
            transition={{
              backgroundColor: { duration: 0.3 },
              scale: { duration: 0.3 },
            }}
          >
            <motion.a
              href="./img/socialImg.png"
              download="socialImg.png"
              className="m-0 absolute top-0 left-0 w-full h-full text-center flex items-center justify-center"
              initial={{ color: "#FFFFFF" }}
              whileHover={{ color: "#111111" }}
            >
              Download CV
            </motion.a>
          </motion.button>
        </div>
        <motion.div
          className="flex gap-4 flex-col"
          initial={{ y: "50%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <div>
            <p className="text-center font-semibold text-2xl">
              Or write me here:
            </p>
          </div>
          <div className="flex justify-around w-[14rem]">
            {contactInfo.map((info) => (
              <a key={info.id} href={info.link} target="/">
                <button>
                  <ReactIcon>{info.icon}</ReactIcon>
                </button>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
      <motion.p
        className="pb-8 text-sm"
        initial={{ y: "50%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
      >
        Designed & Built by Roma Stakhiv
      </motion.p>
    </div>
  );
}

export default ContactSection;
