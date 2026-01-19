import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { TEMPLATE_CONFIG } from "./config/template";


import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Info from "./components/Info";
import Services from "./components/Services";
import About from "./components/About";
import ContactVisit from "./components/ContactVisit";
import Footer from "./components/Footer";

export default function App() {

  useEffect(() => {
    AOS.init({
      duration: 650,
      easing: "ease-out-cubic",
      once: true,
      offset: 90,
    });
  }, []);

  return (
    <div className="bg-dark text-gray-200 antialiased">
      <Navbar config={TEMPLATE_CONFIG} />
      <main>
        <Hero config={TEMPLATE_CONFIG} />
        <Info />
        <Services config={TEMPLATE_CONFIG} />
        <About config={TEMPLATE_CONFIG} />
        <ContactVisit config={TEMPLATE_CONFIG} />
      </main>
      <Footer config={TEMPLATE_CONFIG} />
    </div>
  );
}
