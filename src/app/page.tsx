'use client';
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Skills from "@/components/skills"
import Contact from "@/components/contact";
import About from "@/components/about";
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";

export default function Home() {
  useEffect(()=>{
    AOS.init({
      easing: "ease-out-back",
      duration:1200,
      delay: 100,
      mirror: true,
      anchorPlacement: "bottom-bottom",
      offset: 160,
    });
    AOS.refresh();
  },[])
  return (
    <main>
      <Hero />
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
    </main>
  );
}
