import Navbar from "../../components/Navbar";
import HeroSection from "../../components/HeroSection";
import ServiceSection from "../../components/ServiceSection";
import RecentProjects from "../../components/RecentProjects";
import ContactSections from "../../components/ContactSections";
import ContactForm from "../../components/ContactForm";
import Footer from "../../components/footer";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <HeroSection />
      <ServiceSection />
      <RecentProjects />
      <ContactSections />
      <ContactForm />
      <Footer />
    </div>
  );
}
