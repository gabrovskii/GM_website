import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import TopButton from "@/components/TopButton";
import RedesSociais from "@/components/RedesSociais";

const Home = () => {
  /* em contrução
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <TopButton />
  */
  return (
    <>
      <Hero />
      <About />
      <RedesSociais/>
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
