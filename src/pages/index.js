import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import Medsos from "@/components/Medsos";
import Portfolio from "@/components/Portfolio";

export default function Home() {
  return (
    <>
      <Layout />
      <Hero />
      <About />
      <Portfolio />
      <Contact />
      <Medsos />
      <Footer />
    </>
  );
}
