import TemplatesSlider from "@/components/sliders/TemplatesSlider";
import Image from "next/image";

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative w-full min-h-screen overflow-x-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-50"
        >
          <source src="/video-static.mp4" type="video/mp4" />
        </video>
        {/* <Image
          alt=""
          src="/video-bg.gif"
          width={1000}
          height={1000}
          className=" w-full h-full object-cover"
        /> */}
      </div>
      <TemplatesSlider />
      {children}
    </div>
  );
}
