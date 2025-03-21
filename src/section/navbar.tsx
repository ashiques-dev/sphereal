"use client";
import Button, { ButtonProps } from "@/components/button";
import Logo from "@/components/logo";
import Orbit from "@/components/orbit";
import Link from "next/link";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

export const navItems = [
  {
    name: "Features",
    href: "#features",
  },
  {
    name: "Pricing",
    href: "#pricing",
  },
  {
    name: "Testimonials",
    href: "#testimonials",
  },
];

export const loginItems = [
  {
    buttonVariant: "tertiary",
    name: "Login",
    href: "#login",
  },
  {
    buttonVariant: "primary",
    name: "Sign Up",
    href: "#sign-up",
  },
] satisfies {
  name: string;
  href: string;
  buttonVariant: ButtonProps["variant"];
}[];

const Navbar = () => {
  const [isMobilNavOpen, setIsMobilNavOpen] = useState(false);
  return (
    <>
      <header className="border-b border-[var(--color-border)] relative z-40">
        <div className="container">
          <div className="h-18 flex justify-between items-center">
            <div className="flex gap-4 items-center">
              <Logo />

              <div className="font-extrabold text-2xl">sphereal.ai</div>
            </div>
            <div className="h-full hidden lg:block">
              <nav className="h-full">
                {navItems.map(({ name, href }) => (
                  <Link
                    href={href}
                    key={href}
                    className="px-10 relative font-bold text-xs tracking-widest text-gray-400 uppercase h-full inline-flex items-center before:content-[''] before:absolute before:bottom-0 before:h-2 before:w-px before:bg-gray-200/20 before:left-0 last:after:content-[''] last:after:absolute last:after:bottom-0 last:after:h-2 last:after:w-px last:after:bg-gray-200/20 last:after:right-0  "
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.querySelector(href);
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
                    {name}
                  </Link>
                ))}
              </nav>
            </div>
            <div className="hidden lg:flex gap-4">
              {loginItems.map(({ buttonVariant, href, name }) => (
                <Link href={href} key={href}>
                  <Button variant={buttonVariant}>{name}</Button>
                </Link>
              ))}
            </div>
            <div className=" flex  items-center lg:hidden">
              <button
                className="size-10 rounded-lg  relative border-2 border-transparent [background:linear-gradient(var(--color-gray-950),var(--color-gray-950))_content-box,conic-gradient(from_45deg,var(--color-violet-400),var(--color-fuchsia-400),var(--color-amber-300),var(--color-teal-300),var(--color-violet-400))_border-box] "
                onClick={() => {
                  setIsMobilNavOpen(!isMobilNavOpen);
                }}
              >
                <div className="absolute-center">
                  <div
                    className={twMerge(
                      "w-4 h-0.5 bg-gray-100 -translate-y-1 transition duration-300",
                      isMobilNavOpen && " translate-y-0 rotate-45"
                    )}
                  ></div>
                </div>
                <div className="absolute-center">
                  <div
                    className={twMerge(
                      "w-4 h-0.5 bg-gray-100 translate-y-1 transition duration-300",
                      isMobilNavOpen && " translate-y-0 -rotate-45"
                    )}
                  ></div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {isMobilNavOpen && (
        <div className="fixed z-30 top-18 left-0 bottom-0 right-0 bg-gray-950 overflow-hidden">
          <div className="absolute-center isolate -z-10">
            <Orbit />
          </div>
          <div className="absolute-center isolate -z-10">
            <Orbit className="size-[350px]" />
          </div>
          <div className="absolute-center isolate -z-10">
            <Orbit className="size-[500px]" />
          </div>
          <div className="absolute-center isolate -z-10">
            <Orbit className="size-[650px]" />
          </div>
          <div className="absolute-center isolate -z-10">
            <Orbit className="size-[800px]" />
          </div>

          <div className="container h-full">
            <nav className="flex h-full justify-center items-center flex-col gap-4 py-8">
              {navItems.map(({ name, href }) => (
                <Link
                  href={href}
                  key={href}
                  className="text-gray-400 uppercase tracking-wider font-bold text-xs h-10"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector(href);
                    if (element) {
                      setIsMobilNavOpen(false);
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  {name}
                </Link>
              ))}
              {loginItems.map(({ buttonVariant, href, name }) => (
                <Link href={href} key={href} className="w-full max-w-xs">
                  <Button block variant={buttonVariant}>
                    {name}
                  </Button>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
