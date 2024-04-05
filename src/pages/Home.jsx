import { useEffect } from "react";
import Parallax from "../components/common/Parallax/Parallax";
import Hero from "../components/screen/Hero/Hero";
import Portfolio from "../components/screen/Porffolio/Portfolio";
import Services from "../components/screen/Services/Services";
import NavBar from "../components/shared/Navbar/NavBar";

const Home = () => {
  return (
    <>
      <NavBar />
      <section>
        <Hero />
      </section>
      <section id="services">
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section>
      {/* <section id="about">About</section> */}
      <section id="portfolio">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
      {/* <section id="contact">Contact</section> */}
    </>
  );
};
export default Home;
