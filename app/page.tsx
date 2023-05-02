import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Service from "@/components/service";
import About from "@/components/About";
import Portfolio from "@/components/portfolio";
import Testimonial from "@/components/testimonial";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Service />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </main>
  );
}
