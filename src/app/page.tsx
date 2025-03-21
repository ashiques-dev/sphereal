import Companies from "@/section/companies";
import Features from "@/section/features";
import Hero from "@/section/hero";
import Navbar from "@/section/navbar";
import Pricing from "@/section/pricing";
import React from "react";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Companies />
      <Features />
      <Pricing />
    </>
  );
};

export default Home;
