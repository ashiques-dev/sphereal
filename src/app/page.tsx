import Companies from "@/section/companies";
import Features from "@/section/features";
import Hero from "@/section/hero";
import Navbar from "@/section/navbar";
import React from "react";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Companies />
      <Features />
    </>
  );
};

export default Home;
