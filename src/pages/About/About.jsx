import React from "react";
import AboutPageHero from "../../components/AboutpagesHero/AboutPageHero";
import AboutSection from "../../components/AboutSection/AboutSection";
import ServicesSection from "../../components/ServicesSection/ServicesSection";
import AboutAwardSection from "../../components/AboutAwardSection/AboutAwardSection";

const About = () => {
  return (
    <>
      <AboutPageHero />
      <AboutSection />
      <ServicesSection />
      <AboutAwardSection />
    </>
  );
};

export default About;
