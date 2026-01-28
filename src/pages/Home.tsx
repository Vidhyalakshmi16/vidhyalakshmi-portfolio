import Hero from "../components/hero/Hero";
import Services from "../components/services/Services";
import Skills from "../components/skills/Skills";
import Projects from "../components/projects/Projects";
import Signature from "../components/signature/Signature";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Skills />
      <Projects />
      <Signature />
      <Contact />
      <Footer />
    </>
  );
}
