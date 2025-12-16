import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import VisionMission from "@/components/VisionMission";
import DevelopmentFields from "@/components/DevelopmentFields";
import OperationFields from "@/components/OperationFields";
import Features from "@/components/Features";
import Process from "@/components/Process";
import Technology from "@/components/Technology";
import GreenJourney from "@/components/GreenJourney";
import PartnersCustomers from "@/components/PartnersCustomers";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <About />
        <VisionMission />
        <DevelopmentFields />
        <OperationFields />
        <Features />
        <Process />
        <Technology />
        <GreenJourney />
        <PartnersCustomers />
      </main>
      <Footer />
    </div>
  );
}
