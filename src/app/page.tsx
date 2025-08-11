import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import Footer from "@/components/Footer";
import Ericsson from "@/components/Ericsson";

export default function Home() {
  return (
    <main className="bg-[#0d0d0d] text-white">
      <Hero />
      <About />
      {/* <Ericsson /> */}
      <Experience />
      <Projects />
      <TechStack />
      <Footer />
    </main>
  );
}
