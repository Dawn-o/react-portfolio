import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./components/header";
import Navigation from "./components/navigation";
import Banner from "./components/banner";
import Profile from "./components/profile";
import Portfolio from "./components/portfolio";
import Footer from "./components/footer";

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
