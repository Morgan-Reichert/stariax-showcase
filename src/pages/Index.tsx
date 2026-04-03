import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import StatsSection from "@/components/StatsSection";
import SubsidiariesSection from "@/components/SubsidiariesSection";
import ValuesSection from "@/components/ValuesSection";
import SurveySection from "@/components/SurveySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <StatsSection />
    <SubsidiariesSection />
    <ValuesSection />
    <SurveySection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
