"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Galaxy from "@/components/Galaxy";

gsap.registerPlugin(ScrollTrigger);

const steps = ["Discover", "Design", "Build", "Automate", "Grow"];

export default function SplitDoorSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const topPanelRef = useRef<HTMLDivElement | null>(null);
  const bottomPanelRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const topPanel = topPanelRef.current;
    const bottomPanel = bottomPanelRef.current;
    const content = contentRef.current;

    if (!section || !topPanel || !bottomPanel || !content) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set(content, { autoAlpha: 0, y: 42, scale: 0.94 });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "+=150%",
            scrub: 1,
            pin: true,
            anticipatePin: 1,
          },
        })
        .to(topPanel, { yPercent: -100, ease: "none" }, 0)
        .to(bottomPanel, { yPercent: 100, ease: "none" }, 0)
        .to(
          content,
          { autoAlpha: 1, y: 0, scale: 1, ease: "power2.out" },
          0.18,
        );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="relative h-screen overflow-hidden bg-[#091e09] text-white"
      ref={sectionRef}
    >
      <div className="absolute inset-0">
        <Galaxy
          className="h-full w-full"
          mouseRepulsion
          mouseInteraction
          density={1}
          glowIntensity={0.3}
          saturation={0}
          hueShift={140}
          twinkleIntensity={0.3}
          rotationSpeed={0.1}
          repulsionStrength={2}
          autoCenterRepulsion={0}
          starSpeed={0.5}
          speed={1}
          transparent
        />
      </div>
      <div className="absolute inset-0 bg-[#091e09]/35" />
      <div
        className="absolute inset-0 z-20 flex items-center justify-center px-5"
        ref={contentRef}
      >
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-normal text-[#9BFF00]">Our process</p>
          <h2 className="mt-5 text-4xl font-bold leading-tight sm:text-6xl">
            We turn messy ideas into systems that work every day.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/72 sm:text-lg">
            Corelabs connects strategy, software, AI automation, and content
            growth into one clean execution path, so your website, CRM, and
            marketing engine move together.
          </p>
        </div>
      </div>

      <div
        className="absolute left-0 top-0 z-30 flex h-1/2 w-full items-end justify-center overflow-hidden border-b border-[#9BFF00]/20 bg-[#0F2D0F]/88 px-4 backdrop-blur-[2px]"
        ref={topPanelRef}
      >
        <span className="translate-y-1/2 select-none text-[clamp(4rem,18vw,16rem)] font-bold leading-none text-[#f7f9f2]">
          CORELABS
        </span>
      </div>

      <div
        className="absolute bottom-0 left-0 z-30 flex h-1/2 w-full items-start justify-center overflow-hidden border-t border-[#9BFF00]/20 bg-[#0F2D0F]/88 px-4 backdrop-blur-[2px]"
        ref={bottomPanelRef}
      >
        <span className="-translate-y-1/2 select-none text-[clamp(4rem,18vw,16rem)] font-bold leading-none text-[#f7f9f2]">
          CORELABS
        </span>
      </div>
    </section>
  );
}
