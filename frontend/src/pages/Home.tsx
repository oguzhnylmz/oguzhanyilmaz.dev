import Navbar from "../components/layout/Navbar";
import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import Snapshot from "../components/snapshot/Snapshot";
import Journey from "../components/about/Journey";
import ProjectsSection from "../components/projects/ProjectsSection";
import Contact from "../components/contact/Contact";
import Footer from "../components/layout/Footer";

function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Navbar />

      <main>
        <Hero />

        <About />

        <Snapshot />

        <Journey />

        <ProjectsSection />

        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default Home;