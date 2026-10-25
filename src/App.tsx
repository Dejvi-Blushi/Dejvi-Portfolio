import Hero from "@/src/sections/Hero";
import Projects from "./sections/Projects";
import Navbar from "./sections/Navbar";
import TechStack from "./sections/TechStack";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <TechStack />
      <Contact />
      <Footer />
    </>
  );
}
