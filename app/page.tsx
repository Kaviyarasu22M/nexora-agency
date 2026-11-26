import Navbar from "../Component/Navbar";
import Hero from "../Component/Hero";
import Services from "../Component/Services";
import Portfolio from "../Component/Portfolio";
import Contact from "../Component/Contact";
import Footer from "../Component/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}