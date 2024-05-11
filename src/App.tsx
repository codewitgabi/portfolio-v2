import Navbar from "./Components/Nav/Navbar";
import AboutSection from "./Components/Sections/AboutSection";
import ContactSection from "./Components/Sections/ContactSection";
import FooterSection from "./Components/Sections/FooterSection";
import HeroSection from "./Components/Sections/HeroSection";
import ProjectSection from "./Components/Sections/ProjectSection";
import SkillSection from "./Components/Sections/SkillSection";
import SpecialtySection from "./Components/Sections/SpecialtySection";

function PortfolioApp() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillSection />
      <SpecialtySection />
      <ProjectSection />
      <ContactSection />
      <FooterSection />
    </>
  );
}

export default PortfolioApp;
