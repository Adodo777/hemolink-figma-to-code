import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FloatingReserves from "@/components/FloatingReserves";
import WhyDonate from "@/components/WhyDonate";
import EligibilitySimulator from "@/components/EligibilitySimulator";
import ProcessSteps from "@/components/ProcessSteps";
import CentersDirectory from "@/components/CentersDirectory";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-svh flex flex-col">
      <Header />
      <Hero />
      <FloatingReserves />
      <WhyDonate />
      <ProcessSteps />
      <CentersDirectory />
      <EligibilitySimulator />
      <FaqSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
