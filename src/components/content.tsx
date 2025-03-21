import React, { HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

const Content = (props: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={twMerge(
        "container py-24 md:py-36 lg:py-48 overflow-hidden",
        props.className
      )}
    >
      {props.children}
    </div>
  );
};

export default Content