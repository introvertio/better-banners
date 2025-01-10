import React from "react";

type buttonProps = {
  text: string;
  className?: string;
  href?: string;
};

export const Button = ({ text, className, href }: buttonProps) => {
  return (
    <button className={className}>
      <a href={href}>{text}</a>
    </button>
  );
};
