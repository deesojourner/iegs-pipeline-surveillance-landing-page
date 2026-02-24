import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import RiskOverview from "@/components/RiskOverview";
import HowItWorks from "@/components/HowItWorks";
import Capabilities from "@/components/Capabilities";
import TechStack from "@/components/TechStack";
import Applications from "@/components/Applications";
import Compliance from "@/components/Compliance";
import CaseStudy from "@/components/CaseStudy";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <RiskOverview />
        <HowItWorks />
        <Capabilities />
        <TechStack />
        <Applications />
        <Compliance />
        <CaseStudy />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
