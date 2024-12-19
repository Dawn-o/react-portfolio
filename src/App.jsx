import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./sections/header";
import Navigation from "./sections/navigation";
import Banner from "./sections/banner";
import Profile from "./sections/profile";
import Portfolio from "./sections/portfolio";
import Footer from "./sections/footer";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <Header />
      <Navigation />
      <Banner />
      <Profile />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
