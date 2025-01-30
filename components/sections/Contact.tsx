"use client";
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import {
  m,
  useInView,
  LazyMotion,
  domAnimation,
  AnimatePresence,
} from "framer-motion";
import { cont, opacityAnimation } from "@/variants";
import { useForm, ValidationError } from "@formspree/react";
import { Instagram, LinkedinIcon, MailIcon } from "@/assets/icons";
import Link from "next/link";
import NoiseText from "../NoiseText";
import Background from "./Background";
import useLanguageStore from "@/store/languageStore";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORMSPREE_API!);
  const [isSuccess, setIsSuccess] = useState(false);
  const { language } = useLanguageStore();

  useEffect(() => {
    if (state.succeeded) {
      setIsSuccess(true);
    }
  }, [state.succeeded]);

  return (
    <LazyMotion features={domAnimation}>
      <m.section
        id="contact"
        className="w-full h-screen relative flex items-center justify-center overflow-hidden z-10"
        style={{ scrollSnapAlign: "center" }}
      >
        <m.div
          initial="hidden"
          animate={isInView && "visible"}
          variants={cont}
          ref={ref}
          className="w-full max-w-[95%] max-h-[95vh] mx-auto flex flex-col md:flex-row justify-center items-center gap-10 lg:gap-4 backdrop-blur-md bg-primero/50 p-4 md:p-6 relative rounded-xl"
        >
          <Background isInView={isInView} />

          <m.div className="w-full flex flex-col gap-10 items-center justify-center ">
            <NoiseText
              text={language === "en" ? "CONTACT US" : "CONTACTANOS"}
              addClass="tracking-wider font-bold text-center neon font-primary"
              fontSizeClass="text-fluidTitle"
              variantProp={opacityAnimation}
            />
            {/* SOCIALS */}
            <m.div className="w-full flex flex-wrap gap-4 items-center justify-center ">
              {/* INSTAGRAM */}
              <NoiseText
                text={
                  <Link
                    href="https://www.instagram.com/miraiweblab/"
                    target="_blank"
                    className="flex flex-wrap items-center justify-center gap-2 p-2 transition ease-in-out duration-300 bg-primero/50 rounded-lg hover:bg-primero"
                    style={{
                      boxShadow: "0 1px 5px 1px var(--quinto)",
                      textShadow: "0px 0px 10px var(--cuarto)",
                    }}
                  >
                    <Instagram className="w-6 h-6" />
                    <span className="font-secondary font-bold text-fluid">
                      {" "}
                      miraiweblab
                    </span>
                  </Link>
                }
                variantProp={opacityAnimation}
              />

              {/* LINKEDIN */}
              {/* <NoiseText
                text={
                  <Link
                    href=""
                    target="_blank"
                    className="flex flex-wrap items-center justify-center gap-2 p-2 transition ease-in-out duration-300 bg-primero/50 rounded-lg hover:bg-primero/80"
                    style={{
                      boxShadow: "0 1px 5px 1px var(--quinto)",
                      textShadow: "0px 0px 10px var(--cuarto)",
                    }}
                  >
                    <LinkedinIcon className="w-6 h-6" />
                    <span className="font-secondary font-bold text-fluid">
                      {" "}
                      MiraiWebLab
                    </span>
                  </Link>
                }
                variantProp={opacityAnimation}
              /> */}

              {/* MAIL */}
              <NoiseText
                text={
                  <Link
                    href="mailto:miraiweblab@gmail.com"
                    target="_blank"
                    className="flex flex-wrap items-center justify-center gap-2 p-2 transition ease-in-out duration-300 bg-primero/50 rounded-lg hover:bg-primero/80"
                    style={{
                      boxShadow: "0 1px 5px 1px var(--quinto)",
                      textShadow: "0px 0px 10px var(--cuarto)",
                    }}
                  >
                    <MailIcon className="w-6 h-6" />
                    <span className="font-secondary font-bold text-fluid">
                      {" "}
                      miraiweblab@gmail.com
                    </span>
                  </Link>
                }
                variantProp={opacityAnimation}
              />
            </m.div>
            {/* FORM */}
            <form
              onSubmit={handleSubmit}
              className="w-full lg:max-w-[950px] flex flex-wrap items-center justify-center gap-4"
            >
              {/* Name */}
              <NoiseText
                text={
                  <div className="flex flex-col gap-2 md:gap-4 ">
                    <label
                      htmlFor="name"
                      className="text-cuarto font-bold font-secondary text-fluidBig"
                      style={{ textShadow: "0px 0px 10px var(--cuarto)" }}
                    >
                      {language === "en" ? "Your Name" : " Tu Nombre"}
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder={
                        language === "en"
                          ? "What's your name?"
                          : "¿Cuál es tu nombre?"
                      }
                      className="bg-primero/50 py-2 md:py-4 px-6 text-quinto placeholder-quinto rounded-lg font-medium font-secondary text-fluidBig focus:outline-none border border-cuarto focus:border-quinto focus:bg-primero focus:scale-95 transition ease-in-out duration-300"
                      style={{ boxShadow: "0 1px 5px 1px var(--quinto)" }}
                    />
                  </div>
                }
                variantProp={opacityAnimation}
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />

              {/* Email */}
              <NoiseText
                text={
                  <div className="flex flex-col gap-2 md:gap-4">
                    <label
                      htmlFor="email"
                      className="text-cuarto font-bold font-secondary text-fluidBig"
                      style={{ textShadow: "0px 0px 10px var(--cuarto)" }}
                    >
                      {language === "en" ? "Your Email" : "Tu Email"}
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="What's your email?"
                      className="bg-primero/50 py-2 md:py-4 px-6 text-quinto placeholder-quinto rounded-lg font-medium font-secondary text-fluidBig focus:outline-none border border-cuarto focus:border-quinto focus:bg-primero focus:scale-95 transition ease-in-out duration-300"
                      style={{ boxShadow: "0 1px 5px 1px var(--quinto)" }}
                    />
                  </div>
                }
                variantProp={opacityAnimation}
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />

              {/* Message */}
              <NoiseText
                text={
                  <div className="flex flex-col gap-2 md:gap-4">
                    <label
                      htmlFor="message"
                      className="text-cuarto font-bold font-secondary text-fluidBig"
                      style={{ textShadow: "0px 0px 10px var(--cuarto)" }}
                    >
                      {language === "en" ? "Your Message" : "Tu Mensaje"}
                    </label>
                    <textarea
                      rows={3}
                      name="message"
                      id="message"
                      placeholder={
                        language === "en"
                          ? "What do you want to say?"
                          : "¿Qué quieres decirnos?"
                      }
                      className="bg-primero/50 py-2 md:py-4 px-6 text-quinto placeholder-quinto rounded-lg font-medium font-secondary text-fluidBig focus:outline-none border border-cuarto focus:border-quinto focus:bg-primero focus:scale-95 transition ease-in-out duration-300"
                      style={{ boxShadow: "0 1px 5px 1px var(--quinto)" }}
                    />
                  </div>
                }
                variantProp={opacityAnimation}
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </form>
            {/* Button */}
            <NoiseText
              text={
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="mx-auto uppercase border border-cuarto text-quinto text-sm font-primary  cursor-pointer flex items-center justify-center relative z-0 btn w-[250px] h-[40px]"
                  style={{
                    filter: "drop-shadow(0 1px 3px)",
                    textShadow: "0px 0px 5px var(--cuarto)",
                  }}
                >
                  {state.submitting ? "Sending..." : "Transmit Message"}
                </button>
              }
              variantProp={opacityAnimation}
            />
            <ValidationError errors={state.errors} />
          </m.div>
        </m.div>
        {/* SUCCES MESSAGE */}
        <AnimatePresence>
          {isSuccess && (
            <m.div
              initial={{ y: "-1vh", opacity: 0 }}
              animate={{ y: "10vh", opacity: 1 }}
              exit={{ y: ["11vh", "-10vh"], opacity: 0 }}
              transition={{
                type: "spring",
                visualDuration: 2.5,
                bounce: 0.6,
              }}
              onAnimationComplete={() =>
                setTimeout(() => setIsSuccess(false), 500)
              }
              className="absolute top-0 rounded-lg bg-primero p-4 z-50"
            >
              <span className="text-quinto font-bold font-secondary text-fluid">
                Message sent successfully!
              </span>
            </m.div>
          )}
        </AnimatePresence>
      </m.section>
    </LazyMotion>
  );
};

export default Contact;
