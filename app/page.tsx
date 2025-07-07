import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Project from "@/components/Project";
import Demo from "@/components/Demo";
import Platform from "@/components/Platform";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Mission />
        <Project />
        <Demo />
        <Platform />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
