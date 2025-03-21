"use client";
import Border from "@/components/border";
import Button from "@/components/button";
import Content from "@/components/content";
import Orbit from "@/components/orbit";
import Planet from "@/components/planet";
import {  useSpring, useTransform, motion } from "motion/react";
import React from "react";
import { useMousePosition } from "./hero";

const CallToAction = () => {

 
  const { xProgress, yProgress } = useMousePosition();
  const spingX = useSpring(xProgress);
  const spingY = useSpring(yProgress);
  const translateLargeX = useTransform(spingX, [0, 1], ["-50%", "50%"]);
  const translateLargeY = useTransform(spingY, [0, 1], ["-50%", "50%"]);
  const translateMediumX = useTransform(spingX, [0, 1], ["-100%", "100%"]);
  const translateMediumY = useTransform(spingY, [0, 1], ["-100%", "100%"]);
  const translateSmallX = useTransform(spingX, [0, 1], ["-250%", "250%"]);
  const translateSmallY = useTransform(spingY, [0, 1], ["-250%", "250%"]);
  return (
    <section>
      <div className="container">
        <Border borderTop>
          <Content className="relative isolate">
            <div className="absolute -z-10 inset-0 bg-[radial-gradient(circle_farthest-corner,var(--color-fuchsia-900)_50%,var(--color-indigo-900)_75%,transparent)] [mask-image:radial-gradient(circle_farthest-side,black,transparent)] "></div>
            <div className="absolute -z-10 inset-0">
              <Orbit className="size-[200px] absolute-center" />
              <Orbit className="size-[350px] absolute-center" />
              <Orbit className="size-[500px] absolute-center" />
              <Orbit className="size-[650px] absolute-center" />
              <Orbit className="size-[800px] absolute-center" />
            </div>
            <div className="absolute-center -z-10">
              <motion.div
                style={{
                  x: translateLargeX,
                  y: translateLargeY,
                }}
                className=""
              >
                <Planet
                  size="lg"
                  color="violet"
                  className=" translate-y-[200px] -translate-x-[200px] rotate-45"
                />
              </motion.div>
              <motion.div
                style={{
                  x: translateLargeX,
                  y: translateLargeY,
                }}
                className=""
              >
                <Planet
                  size="lg"
                  color="violet"
                  className=" -translate-y-[200px] translate-x-[200px] -rotate-135"
                />
              </motion.div>
              <motion.div
                style={{
                  x: translateMediumX,
                  y: translateMediumY,
                }}
                className=""
              >
                <Planet
                  size="md"
                  color="teal"
                  className=" -translate-x-[500px] rotate-90"
                />
              </motion.div>
              <motion.div
                style={{
                  x: translateMediumX,
                  y: translateMediumY,
                }}
                className=""
              >
                <Planet
                  size="md"
                  color="teal"
                  className=" translate-x-[500px] -translate-y-[100px] -rotate-135"
                />
              </motion.div>
              <motion.div
                style={{
                  x: translateSmallX,
                  y: translateSmallY,
                }}
                className=""
              >
                <Planet
                  size="sm"
                  color="fuchsia"
                  className=" -translate-x-[400px] -translate-y-[250px] rotate-135"
                />
              </motion.div>
              <motion.div
                style={{
                  x: translateSmallX,
                  y: translateSmallY,
                }}
                className=""
              >
                <Planet
                  size="sm"
                  color="fuchsia"
                  className=" translate-x-[400px] translate-y-[150px] -rotate-45"
                />
              </motion.div>
            </div>

            <h2 className="text-gray-200 font-semibold text-3xl md:text-4xl max-w-3xl mx-auto lg:text-5xl leading-tight  text-center">
              Join the AI Revolution with{" "}
              <span className="relative">
                <span>Sphereal</span>
                <span
                  className="absolute w-full left-0 top-full -translate-y-1/2 bg-[linear-gradient(to_right,var(--color-amber-300),var(--color-teal-300),var(--color-violet-400),var(--color-fuchsia-400))] h-4 "
                  style={{
                    maskImage: "url('underline.svg')",
                    maskSize: "contain",
                    maskPosition: "top",
                    maskRepeat: "no-repeat",
                  }}
                ></span>
              </span>
            </h2>
            <p className="text-center text-xl mt-8 max-w-2xl mx-auto">
              Experience the transformative power of AI with Sphereal. Boost
              your productivity and streamline your workflow with our innovative
              AI chat platform.
            </p>
            <div className="flex justify-center mt-10">
              <Button variant="secondary">Get started</Button>
            </div>
          </Content>
        </Border>
      </div>
    </section>
  );
};

export default CallToAction;
