import Hero from "../components/screen/Hero/Hero";
import NavBar from "../components/shared/Navbar/NavBar";

const Home = () => {
  return (
    <main>
      <NavBar />
      <section>
        <Hero />
      </section>
      <section id="about">parallax</section>
      <section id="services">services</section>
      <section>parallax</section>
      <section id="portfolio">portfolio1</section>
      <section>portfolio2</section>
      <section>portfolio3</section>
      <section id="contact">Contact</section>
    </main>
  );
};
export default Home;
