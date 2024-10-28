import gsap from "gsap";
import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <div className="flex flex-col w-auto justify-center items-center">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
