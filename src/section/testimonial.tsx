"use client";
import Border from "@/components/border";
import Content from "@/components/content";
import { AnimatePresence, LayoutGroup, motion } from "motion/react";
import Image from "next/image";
import React, { useState } from "react";
export const testimonials = [
  {
    quote:
      "Sphereal has completely transformed the way we collaborate. The AI chatbot's ability to automate tasks and provide insightful recommendations has saved us hours each week. It's now an indispensable part of our workflow.",
    name: "Ashwin Santiago",
    title: "Operations Manager",
    image: "/ashwin-santiago.jpg",
  },
  {
    quote:
      "Sphereal integrates effortlessly with our existing tools, and the AI chatbot feels like a natural extension of our team. The responses are impressively accurate, and it's always learning from our interactions.",
    name: "Alec Whitten",
    title: "Lead Developer",
    image: "/alec-whitten.jpg",
  },
  {
    quote:
      "Sphereal's AI has elevated our customer service to a whole new level. Its real-time responses and personalized recommendations help us address client needs faster than ever. I can't imagine our support team without it.",
    name: "Rene Wells",
    title: "Customer Success Manager",
    image: "/rene-wells.jpg",
  },
  {
    quote:
      "I've never seen a tool like Sphereal. It's intuitive, responsive, and has helped us streamline projects that would normally take days. The AI capabilities are unmatched in terms of accuracy and speed.",
    name: "Mollie Hall",
    title: "Product Designer",
    image: "/mollie-hall.jpg",
  },
];
const Testimonial = () => {
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  return (
    <section id="testimonials">
      <div className="container">
        <Border borderTop>
          <Content>
            <LayoutGroup>
              <motion.div
                layout
                className="border-gradient rounded-3xl px-6 md:px-10 lg:px-16 lg:py-24 py-16 relative flex flex-col md:flex-row  gap-12 md:mx-10 lg:mx-20"
              >
                <div className="absolute size-20 top-0 -translate-y-1/2 left-6 md:left-10 lg:left-16 text-violet-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-full "
                  >
                    <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
                    <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
                  </svg>
                </div>
                <AnimatePresence mode="wait" initial={false}>
                  {testimonials.map((testimonial, index) =>
                    testimonialIndex === index ? (
                      <motion.blockquote
                        initial={{
                          opacity: 0,
                          y: 25,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        exit={{
                          opacity: 0,
                          y: 25,
                        }}
                        transition={{
                          duration: 0.5,
                        }}
                        key={testimonial.name}
                        layout
                        className="flex flex-col lg:flex-row gap-12"
                      >
                        <p className="text-xl md:text-2xl font-medium">
                          {testimonial.quote}{" "}
                        </p>
                        <cite className="not-italic lg:text-right">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            height={720}
                            width={1080}
                            className="rounded-xl size-28 max-w-none"
                          />
                          <div className="font-bold mt-4">
                            {testimonial.name}
                          </div>
                          <div className="text-xs text-gray-400 mt-2">
                            {testimonial.title}
                          </div>
                        </cite>
                      </motion.blockquote>
                    ) : null
                  )}
                </AnimatePresence>
                <motion.div layout='position' className=" flex md:flex-col gap-2">
                  {testimonials.map((_, index) => (
                    <div
                      className="size-6 relative isolate inline-flex items-center justify-center"
                      key={index}
                      onClick={() => setTestimonialIndex(index)}
                    >
                      {testimonialIndex === index && (
                        <motion.div
                          layoutId="testimonial-dot"
                          className="absolute -z-10 border-gradient size-full  rounded-full"
                        ></motion.div>
                      )}

                      <div className="size-1.5 bg-gray-200 rounded-full"></div>
                    </div>
                  ))}
                </motion.div>
              </motion.div>
            </LayoutGroup>
          </Content>
        </Border>
      </div>
    </section>
  );
};

export default Testimonial;
