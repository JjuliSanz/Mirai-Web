import { cn } from "@/utils/cn";
import { Variants } from "framer-motion";
import Link from "next/link";
import React from "react";

interface ButtonProps {
  title: string;
  href: string;
  target?: string;
  width?: string;
  height?: string;
  variantsProps?: Variants;
}

const Button = ({
  title,
  href,
  target,
  width,
  height,
  variantsProps,
}: ButtonProps) => {
  return (
    <Link
      href={href}
      target={target}
      className={cn(
        "uppercase border border-cuarto text-center font-primary cursor-pointer flex items-center justify-center relative z-0 btn ",
        width,
        height
      )}
      style={{
        fontSize: "clamp(0.8rem, 2vw, 1.2rem)",
        filter: "drop-shadow(0 1px 3px)",
        textShadow: "0px 0px 5px var(--cuarto)",
      }}
    >
      <span>{title}</span>
    </Link>
  );
};

export default Button;
