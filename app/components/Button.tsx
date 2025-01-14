import React from "react";

type buttonProps = {
  text: string;
  className?: string;
  href?: string;
  type?: "submit" | "reset" | "button";
  disabled?: boolean;
  handleClick?: () => void;
};

export const Button = ({
  text,
  className,
  href,
  type,
  disabled,
  handleClick,
}: buttonProps) => {
  return (
    <button
      className={className}
      type={type}
      disabled={disabled}
      onClick={handleClick}
    >
      <a href={href}>{text}</a>
    </button>
  );
};
