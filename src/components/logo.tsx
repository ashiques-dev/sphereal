import React, { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

const Logo = (props: HTMLAttributes<HTMLDivElement>) => {
  const { className, style, ...otherProps } = props;
  return (
    <div
      className={twMerge(
        "size-10 bg-[conic-gradient(from_45deg,var(--color-violet-400),var(--color-fuchsia-400),var(--color-amber-300),var(--color-teal-300),var(--color-violet-400))] ",
        className
      )}
      style={{
        maskImage: "url('sphereal-logo.svg')",
        maskSize: "contain",
        ...style,
      }}
      {...otherProps}
    ></div>
  );
};

export default Logo;
