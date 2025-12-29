import Background from "@/components/Background";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Method from "@/components/Method";
import Founder from "@/components/Founder";
import Institutional from "@/components/Institutional";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Background />
      <Header />
      <main>
        <Hero />
        <Services />
        <Method />
        <Founder />
        <Institutional />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
