import Navbar from "../components/layout/Navbar";

import Hero from "../components/hero/Hero";

import About from "../components/about/About";
import Journey from "../components/about/Journey";

import Snapshot from "../components/snapshot/Snapshot";

//import ProjectsSection from "../components/projects/ProjectsSection";

function Home() {
  return (
    <main className="bg-zinc-950 text-white">

      <Navbar />

      <Hero />

      <About />

      <Snapshot />

      <Journey />

     

    </main>
  );
}

export default Home;