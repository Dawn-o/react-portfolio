import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./sections/header";
import Navigation from "./sections/navigation";
import Hero from "./sections/Hero";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Footer from "./sections/footer";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <Header />
      <Navigation />
      <Hero />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
