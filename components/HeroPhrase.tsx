"use client";
import { m } from "framer-motion";
import { opacityAnimation } from "@/variants";

const Letter = ({
  letter,
  data_text,
}: {
  letter: string;
  data_text: string;
}) => {
  return (
    <h2
      className="font-logo text-cuarto leading-none inline-block font-bold z-10 tracking-[10px] glitch layers-text"
      data-text={data_text}
      style={{
        fontSize: "clamp(1.5rem, 6vw, 2.5rem)",
        filter: "drop-shadow(0 1px 3px)",
      }}
    >
      <span>{letter}</span>
    </h2>
  );
};

const HeroPhrase = () => {
  return (
    <m.div
      variants={opacityAnimation}
      className="self-center flex flex-col items-center justify-center gap-4 "
    >
      <div className="flex flex-col gap-2 items-center justify-center">
        <Letter letter="W" data_text="W" />
        <Letter letter="E" data_text="E" />
        <Letter letter="B" data_text="B" />
      </div>

      <div className="flex flex-col gap-2 items-center justify-center">
        <Letter letter="L" data_text="L" />
        <Letter letter="A" data_text="A" />
        <Letter letter="B" data_text="B" />
      </div>
    </m.div>
  );
};

export default HeroPhrase;
