import React, { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

const Border = (
  props: { borderTop?: boolean } & HTMLAttributes<HTMLDivElement>
) => {
  return (
    <div
      className={twMerge(
        "border-l border-r border-[var(--color-border)] relative",
        props.className,
        props.borderTop && "border-t"
      )}
    >
      {props.borderTop && (
        <>
          <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2">
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
              className="size-4 text-gray-200"
            >
              <path d="M5 12h14" />
              <path d="M12 5v14" />
            </svg>
          </div>
          <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2">
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
              className="size-4 text-gray-200"
            >
              <path d="M5 12h14" />
              <path d="M12 5v14" />
            </svg>
          </div>
        </>
      )}
      {props.children}
    </div>
  );
};

export default Border;
