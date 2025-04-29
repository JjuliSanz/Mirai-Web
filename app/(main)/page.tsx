import {
  Hero,
  About,
  Service,
  Templates,
  Contact,
} from "@/components/sections";
import Image from "next/image";
import React, { useRef, useEffect } from "react";

import SnapScroll from "./SnapContainer";
import SnapContainer from "./SnapContainer";

export default async function Home() {
  return (
    // <SnapContainer/>
    <main className="overflow-x-hidden relative w-full flex flex-col gap-40">
      <div className="fixed inset-0 z-0 ">
        <Image
          unoptimized
          src="/video-bg-4R.gif"
          width={500}
          height={500}
          alt="Background Web Image"
          className="w-full h-full object-cover"
        />
      </div>
      <div
        // className="fixed inset-0 z-[1] bg-primero/80 pointer-events-none"
        className="fixed inset-0 z-[1] bg-cuarto/30 "
        style={{ mixBlendMode: "overlay" }}
      />

      <Hero />
      <About />
      <Service />
      <Templates />
      <Contact />
    </main>
  );
}
