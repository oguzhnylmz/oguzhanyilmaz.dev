import Navbar from "../components/layout/Navbar";
import Hero from "../components/hero/Hero";
import About from "../components/about/About";
//import Journey from "../components/about/Journey";

function Home() {
  return (
    <main className="bg-zinc-950 text-white">

      <Navbar />

      <Hero />

      <About />

      

    </main>
  );
}

export default Home;