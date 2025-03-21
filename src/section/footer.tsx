"use client";
import Link from "next/link";
import React from "react";

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
  {
    name: "Login",
    href: "#login",
  },
];

export const socialLinks = [
  {
    name: "Youtube",
    icon: (
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
        className="size-4"
      >
        <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
        <path d="m10 15 5-3-5-3z" />
      </svg>
    ),
    href: "#youtube",
  },
  {
    name: "X",
    icon: (
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
        className="size-4"
      >
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
      </svg>
    ),
    href: "#x",
  },
  {
    name: "Discord",
    icon: (
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
        className="size-4"
      >
        <path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7" />
      </svg>
    ),
    href: "#discord",
  },
];

const Footer = () => {
  return (
    <footer className="border-t border-[var(--color-border)]">
      <div className="container py-8 ">
        <div className="flex items-center flex-col lg:flex-row lg:justify-between gap-8">
          {" "}
          <div className="font-extrabold text-2xl ">sphereal.ai</div>
          <nav className="flex flex-col md:flex-row md:gap-16 gap-8 items-center ">
            {navItems.map((item) => (
              <Link
                href={item.href}
                key={item.href}
                className="uppercase text-xs tracking-widest font-bold text-gray-400"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector(item.href);
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                {item.name}{" "}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-16 flex flex-col md:flex-row-reverse md:justify-between  items-center gap-8">
          <div className="flex justify-center gap-6">
            {socialLinks.map((link) => (
              <Link href={link.href} key={link.name}>
                <div className="size-10 rounded-full bg-gray-900 inline-flex justify-center items-center">
                  {link.icon}
                </div>
              </Link>
            ))}
          </div>
          <p className="text-gray-500 text-sm">
            &copy;Asqe, All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
