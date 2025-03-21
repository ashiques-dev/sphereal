"use client";
import Border from "@/components/border";
import Button from "@/components/button";
import Content from "@/components/content";
import Logo from "@/components/logo";
import Orbit from "@/components/orbit";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
export const features = [
  "Effortless integration",
  "Intelligent automation",
  "Robust security",
];

export const logos = [
  {
    src: "/slack-logo.png",
    alt: "slack logo",
    rotate: 0,
  },
  {
    src: "/docker-logo.png",
    alt: "docker logo",
    rotate: 45,
  },
  {
    src: "/figma-logo.png",
    alt: "figma logo",
    rotate: 90,
  },
  {
    src: "/github-logo.png",
    alt: "github logo",
    rotate: 135,
  },
  {
    src: "/vs-code-logo.png",
    alt: "vs code logo",
    rotate: 180,
  },
  {
    src: "/notion-logo.png",
    alt: "notion logo",
    rotate: 225,
  },
  {
    src: "/jira-logo.png",
    alt: "jira logo",
    rotate: 270,
  },
  {
    src: "/gcp-logo.png",
    alt: "gcp logo",
    rotate: 315,
  },
];

const Features = () => {
  return (
    <section id="features">
      <div className="container">
        <Border borderTop>
          <Content className="md:px-20 lg:px-40">
            <div className="grid gap-20 lg:grid-cols-2">
              <div className="">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-200 leading-tight">
                  Your AI-powered collaboration companion{" "}
                </h2>
                <ul className="mt-12 flex-col flex gap-8">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-center gap-4">
                      <div className="size-6 bg-violet-400 rounded-full flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="size-4 text-black"
                        >
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                      </div>
                      <span className="text-xl font-medium">{feature}</span>{" "}
                    </li>
                  ))}
                </ul>
                <Button className="mt-16">Try it now</Button>
              </div>
              <div className="flex justify-center ">
                <div className="size-[270px] md:size-[450px] relative flex flex-shrink-0">
                  <div className="absolute inset-0 ">
                    <Orbit className="size-full" />
                  </div>
                  <div className="absolute-center ">
                    <Orbit className="size-[180px] md:size-[300px] " />
                  </div>
                  <div className="absolute-center ">
                    <Logo className="size-24" />
                  </div>

                  {logos.map(({ alt, rotate, src }) => (
                    <motion.div
                      key={alt}
                      className=" absolute inset-0"
                      initial={{
                        rotate: rotate,
                      }}
                      animate={{
                        rotate: [
                          rotate,
                          rotate + 45,
                          rotate + 45,
                          rotate + 90,
                          rotate + 90,
                          rotate + 135,
                          rotate + 135,
                          rotate + 180,
                          rotate + 180,
                          rotate + 225,
                          rotate + 225,
                          rotate + 270,
                          rotate + 270,
                          rotate + 315,
                          rotate + 315,
                          rotate + 360,
                          rotate + 360,
                        ],
                      }}
                      transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <motion.div
                        className=" inline-flex size-10 md:size-14 items-center justify-center border border-[var(--color-border)] rounded-lg absolute left-0 top-1/2 bg-gray-950 "
                        initial={{
                          translate: "-50% -50%",
                          rotate: -rotate,
                        }}
                        animate={{
                          rotate: [
                            -rotate,
                            -rotate - 45,
                            -rotate - 45,
                            -rotate - 90,
                            -rotate - 90,
                            -rotate - 135,
                            -rotate - 135,
                            -rotate - 180,
                            -rotate - 180,
                            -rotate - 225,
                            -rotate - 225,
                            -rotate - 270,
                            -rotate - 270,
                            -rotate - 315,
                            -rotate - 315,
                            -rotate - 360,
                            -rotate - 360,
                          ],
                        }}
                        transition={{
                          duration: 10,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <Image
                          src={src}
                          height={32}
                          width={32}
                          alt={alt}
                          className="size-6 md:size-9"
                        />
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>{" "}
          </Content>
        </Border>
      </div>
    </section>
  );
};

export default Features;
