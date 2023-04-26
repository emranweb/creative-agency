import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Service from "@/components/service";
import About from "@/components/About";
import Portfolio from "@/components/portfolio";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Service />
      <Portfolio />
    </main>
  );
}
