"use client";

import { useEffect, useRef, WheelEvent } from "react";
import {
  Hero,
  About,
  Service,
  Templates,
  Contact,
} from "@/components/sections";
import Image from "next/image";

const SnapContainer = () => {
  const containerRef = useRef<HTMLDivElement>(null); // Referencia al contenedor principal
  const isScrolling = useRef(false); // Estado para evitar múltiples scrolls simultáneos

  const handleScroll = (event: WheelEvent<HTMLDivElement>) => {
    const deltaY = event.deltaY;
    const container = containerRef.current;

    if (!container || isScrolling.current) return;

    const sections = Array.from(container.querySelectorAll("section")); // Todas las secciones
    const currentScroll = container.scrollTop; // Posición actual del scroll
    const sectionHeight = container.offsetHeight; // Altura de cada sección

    // Calcula la sección actual
    const currentSectionIndex = Math.round(currentScroll / sectionHeight);

    let nextSectionIndex = currentSectionIndex;

    // Decide hacia qué sección moverse
    if (deltaY > 0) {
      nextSectionIndex = Math.min(currentSectionIndex + 1, sections.length - 1); // Ir hacia abajo
    } else if (deltaY < 0) {
      nextSectionIndex = Math.max(currentSectionIndex - 1, 0); // Ir hacia arriba
    }

    // Si no hay cambio de sección, no hacer nada
    if (nextSectionIndex === currentSectionIndex) return;

    isScrolling.current = true; // Bloquea múltiples eventos

    // Desplázate automáticamente a la sección deseada
    container.scrollTo({
      top: nextSectionIndex * sectionHeight,
      behavior: "smooth",
    });

    // Espera a que termine el desplazamiento
    setTimeout(() => {
      isScrolling.current = false;
    }, 700); // Ajusta el tiempo según la velocidad deseada
  };

  return (
    <div
      ref={containerRef}
      className="overflow-y-scroll overflow-x-hidden relative w-full h-screen scroll-smooth snap-y snap-mandatory"
      onWheel={handleScroll}
    >
      <div className="fixed inset-0 z-0 pointer-events-none">
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
        className="fixed inset-0 z-[1] bg-cuarto/30 pointer-events-none"
        style={{ mixBlendMode: "overlay" }}
      />

      <Hero />
      <About />
      <Service />
      <Templates />
      <Contact />
    </div>
  );
};


export default SnapContainer;
