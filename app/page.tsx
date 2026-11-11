import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Research from "@/components/Research";
import Features from "@/components/Features";
import Copilot from "@/components/Copilot";
import Expectations from "@/components/Expectations";
import Academy from "@/components/Academy";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <Research />
        <Features />
        <Copilot />
        <Expectations />
        <Academy />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
