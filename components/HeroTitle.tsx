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
        fontSize: "clamp(5rem, 20vw, 7rem)",
        filter: "drop-shadow(0 1px 3px)",
      }}
    >
      <span>{letter}</span>
    </h2>
  );
};

const HeroTitle = () => {
  return (
    <m.div
      variants={opacityAnimation}
      className="flex flex-col items-center justify-center gap-2 "
    >
      <Letter data_text="M" letter="M" />
      <Letter data_text="I" letter="I" />
      <Letter data_text="R" letter="R" />
      <Letter data_text="A" letter="A" />
      <Letter data_text="I" letter="I" />
    </m.div>
  );
};

export default HeroTitle;

{
  /* <Letter data_text="K" letter="K" />
      <Letter data_text="A" letter="A" />
      <Letter data_text="I" letter="I" />
      <Letter data_text="Z" letter="Z" />
      <Letter data_text="E" letter="E" />
      <Letter data_text="N" letter="N" /> */
}
