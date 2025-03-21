"use client";
import Border from "@/components/border";
import Button from "@/components/button";
import Content from "@/components/content";
import Orbit from "@/components/orbit";
import Planet from "@/components/planet";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";

export const useMousePosition = () => {
  const [innerWidth, setInnerWidth] = useState(1);
  const [innerHeight, setInnerHeight] = useState(1);
  const clientX = useMotionValue(0);
  const clientY = useMotionValue(0);
  const xProgress = useTransform(clientX, [0, innerWidth], [0, 1]);
  const yProgress = useTransform(clientY, [0, innerHeight], [0, 1]);
  useEffect(() => {
    setInnerHeight(window.innerHeight);
    setInnerWidth(window.innerWidth);
    window.addEventListener("resize", () => {
      setInnerHeight(window.innerHeight);
      setInnerWidth(window.innerWidth);
    });
  }, []);
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      clientX.set(e.clientX);
      clientY.set(e.clientY);
    });
  }, []);
  return { xProgress, yProgress };
};

const Hero = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["end start", "start end"],
  });
  const { xProgress, yProgress } = useMousePosition();
  const transformY = useTransform(scrollYProgress, [0, 1], [200, -100]);
  const spingX = useSpring(xProgress);
  const spingY = useSpring(yProgress);
  const translateLargeX = useTransform(spingX, [0, 1], ["-50%", "50%"]);
  const translateLargeY = useTransform(spingY, [0, 1], ["-50%", "50%"]);
  const translateMediumX = useTransform(spingX, [0, 1], ["-100%", "100%"]);
  const translateMediumY = useTransform(spingY, [0, 1], ["-100%", "100%"]);
   const translateSmallX = useTransform(spingX, [0, 1], ["-250%", "250%"]);
   const translateSmallY = useTransform(spingY, [0, 1], ["-250%", "250%"]);
  return (
    <section ref={sectionRef} className="">
      <div className="container">
        <Border>
          <Content className=" relative isolate  [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] ">
            <div className="absolute -z-10 inset-0 bg-[radial-gradient(circle_farthest-corner,var(--color-fuchsia-900)_50%,var(--color-indigo-900)_75%,transparent)] [mask-image:radial-gradient(circle_farthest-side,black,transparent)] "></div>

            <div className="absolute inset-0 -z-10  ">
              <div className="absolute-center">
                <Orbit className="size-[350px]" />
              </div>
              <div className="absolute-center">
                <Orbit className="size-[600px]" />
              </div>
              <div className="absolute-center">
                <Orbit className="size-[850px]" />
              </div>
              <div className="absolute-center">
                <Orbit className="size-[1100px]" />
              </div>
              <div className="absolute-center">
                <Orbit className="size-[1350px]" />
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-100 text-center leading-tight">
              Unlock the Future of AI Conversations with
              <span className="relative">
                <span>Sphereal</span>
                <span
                  className="absolute w-full left-0 top-full -translate-y-1/2 bg-[linear-gradient(to_right,var(--color-amber-300),var(--color-teal-300),var(--color-violet-400),var(--color-fuchsia-400))] h-4 "
                  style={{
                    maskImage: "url('underline.svg')",
                    maskSize: "contain",
                    maskPosition: "center",
                    maskRepeat: "no-repeat",
                  }}
                ></span>
              </span>
            </h1>
            <p className="text-center text-lg md:text-xl mt-8 max-w-3xl mx-auto">
              Harness the power of AI with Sphereal. Elevate your productivity
              and streamline your workflow with our cutting-edge AI chat
              platform
            </p>
            <div className="flex justify-center mt-10">
              <Button variant="secondary" className="">
                Start Chatting
              </Button>
            </div>
            <div className="relative isolate max-w-5xl mx-auto">
              <div className="absolute left-1/2 top-0">
                <motion.div
                  className=""
                  style={{
                    x: translateLargeX,
                    y: translateLargeY,
                  }}
                >
                  <Planet
                    size="lg"
                    color="violet"
                    className="-translate-x-[316px] -translate-y-[76px] rotate-135"
                  />
                </motion.div>
                <motion.div
                  className=""
                  style={{
                    x: translateLargeX,
                    y: translateLargeY,
                  }}
                >
                  <Planet
                    size="lg"
                    color="violet"
                    className="-translate-y-[188px] translate-x-[334px] -rotate-135"
                  />
                </motion.div>
                <motion.div
                  className=""
                  style={{
                    x: translateSmallX,
                    y: translateSmallY,
                  }}
                >
                  <Planet
                    size="sm"
                    color="fuchsia"
                    className="-translate-y-[372px] -translate-x-[508px] rotate-135"
                  />
                </motion.div>
                <motion.div
                  className=""
                  style={{
                    x: translateMediumX,
                    y: translateMediumY,
                  }}
                >
                  <Planet
                    size="md"
                    color="teal"
                    className="-translate-y-[342px] translate-x-[488px] -rotate-135"
                  />
                </motion.div>
              </div>

              <div className="absolute top-[30%] -translate-x-10 z-10 hidden lg:block">
                <motion.div
                  className="bg-gray-800/70 backdrop-blur-md border border-gray-700 rounded-xl p-4 w-72"
                  style={{
                    y: transformY,
                  }}
                >
                  <div className="">
                    Can you generate an incredible frontend dev video tutorial?
                  </div>
                  <div className="text-right text-gray-400 text-sm font-semibold">
                    1m ago
                  </div>
                </motion.div>
              </div>

              <div className="absolute right-0 top-[50%] translate-x-10 z-10 hidden lg:block">
                <motion.div
                  className="bg-gray-800/70 backdrop-blur-md border border-gray-700 rounded-xl p-4 w-72"
                  style={{
                    y: transformY,
                  }}
                >
                  <div className="">
                    <strong>Brainwave:</strong> I created one based on videos
                    from Youtube
                  </div>
                  <div className="text-right text-gray-400 text-sm font-semibold">
                    Just now
                  </div>
                </motion.div>
              </div>

              <div className="mt-20 rounded-2xl border-gradient overflow-hidden relative flex  ">
                <Image
                  src={"/robot.jpg"}
                  alt="robot image"
                  height={720}
                  width={1080}
                />

                <div className="absolute bottom-2 md:bottom-4 lg:bottom-10 left-1/2 -translate-x-1/2 w-full max-w-xs px-[15px]">
                  <div className="bg-gray-950/80 flex items-center gap-4 px-4 py-2 rounded-2xl w-[320px] max-w-full">
                    <div className="text-violet-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                      >
                        <g stroke="currentColor">
                          <circle
                            cx="12"
                            cy="12"
                            r="9.5"
                            fill="none"
                            strokeLinecap="round"
                            strokeWidth="3"
                          >
                            <animate
                              attributeName="stroke-dasharray"
                              calcMode="spline"
                              dur="1.5s"
                              keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1"
                              keyTimes="0;0.475;0.95;1"
                              repeatCount="indefinite"
                              values="0 150;42 150;42 150;42 150"
                            />
                            <animate
                              attributeName="stroke-dashoffset"
                              calcMode="spline"
                              dur="1.5s"
                              keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1"
                              keyTimes="0;0.475;0.95;1"
                              repeatCount="indefinite"
                              values="0;-16;-59;-59"
                            />
                          </circle>
                          <animateTransform
                            attributeName="transform"
                            dur="2s"
                            repeatCount="indefinite"
                            type="rotate"
                            values="0 12 12;360 12 12"
                          />
                        </g>
                      </svg>
                    </div>
                    <div className="font-semibold text-xl text-gray-100">
                      AI is generating
                      <span className="animate-cursor-blink">|</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Content>
        </Border>
      </div>
    </section>
  );
};

export default Hero;
