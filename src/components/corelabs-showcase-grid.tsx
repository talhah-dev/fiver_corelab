"use client";

import gsap from "gsap";
import Image from "next/image";
import { Sparkles } from "lucide-react";
import { useEffect, useRef } from "react";

const cards = [
  {
    title: "Websites that convert",
    tags: ["Fast", "Flexible", "High-impact"],
    description:
      "Landing pages and full websites designed to turn attention into leads, calls, and sales.",
    image: "https://media.istockphoto.com/id/1324696780/photo/search-bar-concept.jpg?s=612x612&w=0&k=20&c=g9liMZrcvkHu_xEUuqh6mXwP8Ap4j6XgFH5VBCu1XhI=",
    variant: "light",
  },
  {
    title: "AI-powered workflows",
    tags: ["Automation", "Smart", "Efficient"],
    description:
      "Connect your forms, follow-ups, and internal actions so work keeps moving without manual bottlenecks.",
    image: "https://media.istockphoto.com/id/2246847369/photo/3d-icon-of-an-ai-image-generation-tool-with-a-picture-frame-and-generate-button-symbolizing.jpg?s=612x612&w=0&k=20&c=bwqZts21x4UGFVAM9zM8Pl2yDdU-AddV7_223kmVt30=",
    variant: "light",
  },
  {
    title: "CRM systems that organize",
    tags: ["Clean", "Scalable", "Reliable"],
    description:
      "Pipelines, records, dashboards, and follow-up systems built around the way your team actually works.",
    image: "https://media.istockphoto.com/id/2184118611/photo/abstract-colorful-gradient-layers-in-modern-artistic-design.jpg?s=612x612&w=0&k=20&c=F4wKrGf79Upt6k67UEFB7BrrhvfAt5rci6bvjBCMUjI=",
    variant: "light",
  },
];

export default function CorelabsShowcaseGrid() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    const ctx = gsap.context(() => {
      const headingItems = section.querySelectorAll("[data-showcase-heading]");
      const cardsEls = section.querySelectorAll("[data-showcase-card]");
      const images = section.querySelectorAll("[data-showcase-image]");
      const darkCard = section.querySelector("[data-showcase-dark]");

      gsap.set(headingItems, { autoAlpha: 0, y: 24, filter: "blur(8px)" });
      gsap.set(cardsEls, { autoAlpha: 0, y: 44, scale: 0.97 });
      gsap.set(images, { scale: 1.08 });
      gsap.set(darkCard, { autoAlpha: 0, y: 32, scale: 0.98 });

      const tl = gsap.timeline({
        paused: true,
        defaults: { ease: "power3.out" },
      });

      tl.to(headingItems, {
        autoAlpha: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.75,
        stagger: 0.1,
      })
        .to(
          cardsEls,
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.08,
          },
          "-=0.3",
        )
        .to(
          images,
          {
            scale: 1,
            duration: 1,
            stagger: 0.06,
          },
          "-=0.72",
        )
        .to(
          darkCard,
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.85,
          },
          "-=0.45",
        );

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            tl.play();
            observer.disconnect();
          }
        },
        { threshold: 0.18 },
      );

      observer.observe(section);

      return () => observer.disconnect();
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#f7f9f2] px-5 py-20 text-[#0F2D0F] sm:px-6 sm:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center text-center">
          <div
            data-showcase-heading
            className="inline-flex items-center gap-2 rounded-full border border-[#0F2D0F]/12 bg-white px-4 py-2 text-sm text-[#0F2D0F]/72 shadow-[0_8px_30px_rgba(15,45,15,0.05)]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#0f2d0f]" />
            <span>What Corelabs includes</span>
          </div>
          <h2
            data-showcase-heading
            className="mt-6 max-w-4xl text-balance text-3xl font-semibold tracking-tight sm:text-5xl leading-tight"
          >
            Systems, automation, and design that actually move the business.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 lg:grid-cols-12">
          {cards.map((card) => (
            <article
              key={card.title}
              data-showcase-card
              className="group relative overflow-hidden rounded-[2rem] border border-[#0F2D0F]/10 bg-white p-6 shadow-[0_10px_35px_rgba(15,45,15,0.04)] lg:col-span-4"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="max-w-[14ch] text-3xl font-semibold leading-tight tracking-tight">
                  {card.title}
                </h3>
                <Sparkles className="mt-1 h-5 w-5 shrink-0 text-[#0F2D0F]" />
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {card.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#0F2D0F]/18 px-3 py-1 text-xs text-[#0F2D0F]/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="mt-5 max-w-sm text-base line-clamp-2 text-[#0F2D0F]/70">
                {card.description}
              </p>

              <div className="relative mt-8 aspect-[1.25/1] overflow-hidden rounded-[1.5rem]">
                <Image
                  data-showcase-image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0)_35%,rgba(247,249,242,0.14)_100%)]" />
              </div>
            </article>
          ))}

          <article
            className="relative overflow-hidden rounded-[2rem] border border-[#0F2D0F]/10 bg-white p-6 shadow-[0_10px_35px_rgba(15,45,15,0.04)] lg:col-span-4"
            data-showcase-card
          >
            <div className="absolute -left-12 top-6 h-36 w-36 rounded-full bg-[#9BFF00]/14 blur-3xl" />
            <div className="relative flex h-full flex-col justify-between">
              <div>
                <p className="text-7xl font-semibold leading-none tracking-tight text-[#0F2D0F] sm:text-8xl">
                  03
                </p>
                <p className="mt-4 text-lg leading-8 text-[#0F2D0F]/72">
                  Core service lanes
                </p>
                <p className="text-lg leading-8 text-[#0F2D0F]/72">
                  Websites, automation, and growth systems
                </p>
              </div>

              <div className="mt-10 flex items-center justify-between gap-4 text-sm text-[#0F2D0F]/70">
                <span>AI + Web + Content</span>
                <span className="rounded-full border border-[#0F2D0F]/18 px-4 py-2">
                  Built for scale
                </span>
              </div>
            </div>
          </article>

          <article
            data-showcase-dark
            className="relative overflow-hidden rounded-[2rem] bg-[#101820] p-6 text-white lg:col-span-8"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(155,255,0,0.18),transparent_32%),linear-gradient(135deg,#101820_10%,#0F2D0F_100%)]" />
            <div className="relative grid gap-8 lg:grid-cols-[1.05fr_1fr]">
              <div className="flex flex-col justify-between">
                <div>
                  <Sparkles className="h-5 w-5 text-[#D9FF8A]" />
                  <h3 className="mt-6 max-w-sm text-4xl font-semibold leading-tight tracking-tight">
                    Dynamic design with systems behind it.
                  </h3>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {["Design", "Automation", "Growth"].map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/16 px-3 py-1 text-xs text-white/72"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="mt-6 max-w-md text-base leading-7 text-white/74">
                    Corelabs builds modern front-end experiences and the backend
                    systems that keep brands responsive, organized, and ready to
                    scale.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {[
                  "https://www.fffuel.co/images/dddepth-preview/dddepth-051.jpg",
                  "https://www.fffuel.co/images/dddepth-preview/dddepth-034.jpg",
                  "https://www.fffuel.co/images/dddepth-preview/dddepth-181.jpg",
                ].map((image, index) => (
                  <div
                    key={image}
                    className={`relative overflow-hidden rounded-[1.35rem] border border-white/10 bg-white/5 ${
                      index === 0 ? "col-span-2 aspect-[1.7/1]" : "aspect-[1/1.08]"
                    }`}
                  >
                    <Image
                      src={image}
                      alt=""
                      fill
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className="object-cover opacity-92"
                    />
                  </div>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
