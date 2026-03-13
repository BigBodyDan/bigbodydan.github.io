import {type IParallax, Parallax } from "@react-spring/parallax";
import { useRef } from "react";
import Hero from "./app/pages/Hero.tsx";
import About from "./app/pages/About.tsx";

function App() {

    // Reference to parallax object
    const parallaxRef = useRef<IParallax>(null);

  return (
    <main className="font-sans">
        {/* Parallax container that will hold each page*/}
        <Parallax
            ref={parallaxRef}
            pages={4}
            style={{ top: "0", left: "0" }}
            className="p-animation"
        >
            {/* Hero for the homepage */}
            <Hero parallaxRef={parallaxRef} />

            <About />

        </Parallax>
    </main>
  )
}

export default App
