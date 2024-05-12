import Navbar from "./Components/Nav/Navbar";
import AboutSection from "./Components/Sections/AboutSection";
import ContactSection from "./Components/Sections/ContactSection";
import ExperienceSection from "./Components/Sections/ExperienceSection";
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
      <ExperienceSection />
      <ContactSection />
      <FooterSection />
    </>
  );
}

export default PortfolioApp;
