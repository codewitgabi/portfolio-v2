import Navbar from "./Components/Nav/Navbar";
import AboutSection from "./Components/Sections/AboutSection";
import HeroSection from "./Components/Sections/HeroSection";
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
    </>
  );
}

export default PortfolioApp;
