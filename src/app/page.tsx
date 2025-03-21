import CallToAction from "@/section/call-to-action";
import Companies from "@/section/companies";
import Features from "@/section/features";
import Hero from "@/section/hero";
import Navbar from "@/section/navbar";
import Pricing from "@/section/pricing";
import Testimonial from "@/section/testimonial";
import React from "react";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Companies />
      <Features />
      <Pricing />
      <Testimonial />
      <CallToAction />
    </>
  );
};

export default Home;
