"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SPONSORS } from "@/lib/codeissance/constants";
import { CheckeredPattern, ConcentricCircles, VerticalBars } from "@/components/codeissance/ui/DecorativePatterns";
import LogoLoop from "@/components/codeissance/LogoLoop";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function InRotation() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: headerRef.current, start: "top 75%" },
        }
      );

      if (gridRef.current) {
        gsap.fromTo(
          gridRef.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: { trigger: gridRef.current, start: "top 75%" },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="sponsors"
      className="section-dark grain-overlay relative overflow-hidden pt-12 pb-24 md:pt-2 md:pb-36"
      style={{ backgroundColor: "#1A1A1A" }}
    >
      {/* Checkered pattern background */}
      <div className="absolute bottom-0 left-0 pointer-events-none opacity-20">
        <CheckeredPattern cols={12} rows={4} size={30} color1="#FFFFFF" color2="transparent" warp />
      </div>

      {/* Decorative: Concentric Circles — top right */}
      <div className="absolute -top-[20%] -right-[15%] w-[55vw] h-[55vw] md:w-[35vw] md:h-[35vw] opacity-[0.05] pointer-events-none">
        <ConcentricCircles size={700} rings={10} baseColor="#1DB954" altColor="#1A1A1A" highlightRing={4} highlightColor="#8B7CFF" />
      </div>

      {/* Decorative: Vertical Bars — left edge */}
      <div className="absolute top-[40%] left-6 opacity-[0.08] pointer-events-none hidden md:block">
        <VerticalBars bars={3} color="#FFFFFF" className="h-24" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div ref={headerRef} className="mb-16 max-w-3xl opacity-0">
          
          <h2
            className="text-3xl sm:text-6xl md:text-7xl font-normal leading-[1.1] text-white tracking-tight"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Our <strong className="font-black text-white block mt-2">Sponsors</strong>
          </h2>
        </div>

        {/* Title Sponsor + Partners */}
        <div ref={gridRef} className="opacity-0">

          {/* Title Sponsor */}
          <div className="mb-6">
            <p
              className="text-sm uppercase tracking-[0.4em] font-bold mb-8 text-center"
              style={{ color: "rgba(255,255,255,0.75)", fontFamily: "var(--font-body)" }}
            >
              Title Sponsor
            </p>
            <div className="flex justify-center items-center">
              <div
                className="relative flex items-center justify-center rounded-2xl px-14 py-10 transition-all duration-500 hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  boxShadow: "0 0 60px rgba(29,185,84,0.08), inset 0 1px 0 rgba(255,255,255,0.05)",
                }}
              >
                {/* Subtle glow ring */}
                <div
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  style={{
                    background: "radial-gradient(ellipse at 50% 0%, rgba(29,185,84,0.12) 0%, transparent 70%)",
                  }}
                />
                <img
                  src="/sponsors/choice.png"
                  alt="Choice TechLab — Title Sponsor"
                  style={{
                    height: "90px",
                    width: "auto",
                    objectFit: "contain",
                    borderRadius: "10px",
                  }}
                  draggable={false}
                />
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-6 mb-12">
            <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.12)" }} />
            <p
              className="text-sm uppercase tracking-[0.4em] font-bold whitespace-nowrap"
              style={{ color: "rgba(255,255,255,0.75)", fontFamily: "var(--font-body)" }}
            >
              Partners
            </p>
            <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.12)" }} />
          </div>

          {/* Animated Partners LogoLoop */}
          <div className="w-full overflow-hidden py-6">
            <LogoLoop
              logos={[
                { src: "/sponsors/unstop.png", alt: "Unstop" },
                { src: "/sponsors/protech.png", alt: "Protech" },
                { src: "/sponsors/dobra.jpeg", alt: "Dobra" },
                { src: "/sponsors/impulse.png", alt: "Impulse" },
                { src: "/sponsors/flextra.jpeg", alt: "Flextra" },
              ]}
              speed={50}
              direction="left"
              logoHeight={90}
              gap={80}
              pauseOnHover
              scaleOnHover
              fadeOut
              fadeOutColor="#1A1A1A"
              renderItem={(item) => (
                <div
                  style={{
                    width: "240px",
                    height: "90px",
                    backgroundColor: "#ffffff",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                    boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
                    padding: "12px 20px",
                  }}
                >
                  <img
                    src={item.src}
                    alt={item.alt ?? ""}
                    style={{
                      height: "100%",
                      width: "100%",
                      objectFit: "contain",
                    }}
                    draggable={false}
                  />
                </div>
              )}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
