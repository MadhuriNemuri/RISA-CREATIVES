import React from "react";
import Hero from "../../components/Hero";
import Services from "../../components/Services";
import Process from "../../components/Process";
import WhyChoose from "../../components/WhyChoose";
import Contact from "../../components/Contact";

export default function Home() {
  return (
    <div className="home-page page-container">
      <Hero />
      <Services />
      <Process />
      <WhyChoose />
      <Contact />
    </div>
  );
}
