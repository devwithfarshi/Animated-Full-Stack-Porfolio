import Parallax from "../components/common/Parallax/Parallax";
import Hero from "../components/screen/Hero/Hero";
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
      <section id="about">About</section>
      <section>
        <Parallax type="portfolio" />
      </section>
      <section id="portfolio">portfolio1</section>
      <section>portfolio2</section>
      <section>portfolio3</section>
      <section id="contact">Contact</section>
    </>
  );
};
export default Home;
