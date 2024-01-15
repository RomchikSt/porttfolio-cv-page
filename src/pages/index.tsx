import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Element, scroller } from "react-scroll";

import HeadSection from "./HeadSection";

import StartSection from "../sections/StartSection";
import HeaderSection from "../sections/HeaderSection";
import AboutSection from "../sections/AboutSection";
import PortfolioSection from "../sections/PortfolioSection";
import ContactSection from "../sections/ContactSection";
import ExpSection from "../sections/ExpSection";
import MobileNavSection from "../sections/MobileNavSection";

export default function Home() {
  const [isOpenMobileNav, setIsOpenMobileNav] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const [refStart, inViewStart] = useInView({ threshold: 0.5 });
  const [refAbout, inViewAbout] = useInView({ threshold: 0.5 });
  const [refExp, inViewExp] = useInView({ threshold: 0.5 });
  const [refPortfolio, inViewPortfolio] = useInView({ threshold: 0.25 });
  const [refContact, inViewContact] = useInView({ threshold: 0.5 });

  useEffect(() => {
    scroller.scrollTo("home", {
      duration: 100,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  }, []);

  useEffect(() => {
    if (inViewStart) setActiveSection("home");
    if (inViewAbout) setActiveSection("about");
    if (inViewExp) setActiveSection("experience");
    if (inViewPortfolio) setActiveSection("portfolio");
    if (inViewContact) setActiveSection("contact");
  }, [inViewStart, inViewAbout, inViewExp, inViewPortfolio, inViewContact]);

  const handleChangeMobileNav = (isOpenMobileNav: boolean) => {
    setIsOpenMobileNav(!isOpenMobileNav);
  };

  const handleCloseMobileNav = () => {
    setIsOpenMobileNav(false);
  };

  return (
    <>
      <HeadSection />
      <HeaderSection activeSection={activeSection} />
      <MobileNavSection
        activeSection={activeSection}
        isOpenMobileNav={isOpenMobileNav}
        handleChangeMobileNav={handleChangeMobileNav}
        handleCloseMobileNav={handleCloseMobileNav}
      />
      <div className="max-w-[100rem] mx-auto 1024px:pl-[8rem]">
        <Element name="home">
          <div ref={refStart}>
            <StartSection />
          </div>
        </Element>
        <Element name="about">
          <div ref={refAbout}>
            <AboutSection />
          </div>
        </Element>
        <Element name="experience">
          <div ref={refExp}>
            <ExpSection />
          </div>
        </Element>
        <Element name="portfolio">
          <div ref={refPortfolio}>
            <PortfolioSection />
          </div>
        </Element>
        <Element name="contact">
          <div ref={refContact}>
            <ContactSection />
          </div>
        </Element>
      </div>
    </>
  );
}
