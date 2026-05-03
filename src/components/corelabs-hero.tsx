import CorelabsStepGallery from "@/components/corelabs-step-gallery";
import Shuffle from "@/components/Shuffle";
import StaggeredMenu from "@/components/StaggeredMenu";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const menuItems = [
  { label: "Home", ariaLabel: "Go to home section", link: "#" },
  { label: "Services", ariaLabel: "View our services", link: "#services" },
  { label: "Work", ariaLabel: "View our work", link: "#work" },
  { label: "Contact", ariaLabel: "Get in touch", link: "#contact" },
];

const socialItems = [
  { label: "YouTube", link: "https://youtube.com" },
  { label: "LinkedIn", link: "https://linkedin.com" },
  { label: "Email", link: "mailto:hello@corelabs.agency" },
];

function HeroButton({
  href,
  children,
  variant = "solid",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "ghost";
}) {
  const isSolid = variant === "solid";

  return (
    <Link
      className={`group inline-flex min-h-12 w-full items-center justify-between gap-4 rounded-full py-1.5 pl-6 pr-1.5 text-sm font-medium transition sm:min-h-14 sm:w-auto sm:min-w-52 sm:py-2 sm:pl-7 sm:pr-2 ${isSolid
        ? "bg-[#9BFF00] text-[#0F2D0F] hover:bg-[#C8FF5E]"
        : "border border-white/22 bg-white/8 text-white hover:border-[#9BFF00]/70 hover:bg-[#9BFF00]/10"
        }`}
      href={href}
    >
      <span>{children}</span>
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#F4FFE7] text-[#0F2D0F] transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 sm:h-10 sm:w-10">
        <ArrowRight className="h-3.5 w-3.5 -rotate-45 sm:h-4 sm:w-4" />
      </span>
    </Link>
  );
}

export default function CorelabsHero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#0F2D0F] px-4 pt-16 text-white sm:px-8 md:pt-10">
      <div className="absolute inset-0">
        <StaggeredMenu
          accentColor="#9BFF00"
          changeMenuColorOnOpen
          colors={["#9BFF00", "#D9FF8A"]}
          displayItemNumbering
          displaySocials
          items={menuItems}
          logoText="Corelabs"
          menuButtonColor="#F4FFE7"
          openMenuButtonColor="#0F2D0F"
          position="right"
          socialItems={socialItems}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(circle_at_78%_26%,rgba(155,255,0,0.16),transparent_26%),radial-gradient(circle_at_12%_84%,rgba(217,255,138,0.08),transparent_24%),linear-gradient(90deg,#071607_0%,rgba(7,22,7,0.92)_45%,#0F2D0F_100%)]" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-[3] h-40 bg-gradient-to-t from-[#071607] to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-4rem)] max-w-7xl flex-col justify-end pt-20 md:min-h-[calc(100vh-12rem)]">
        <div className="grid gap-8 lg:gap-10">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mx-auto max-w-3xl text-center text-[clamp(2.35rem,11vw,3.25rem)] font-bold leading-[1.02] text-white sm:hidden">
              Build systems that grow.
            </h1>

            <div className="hidden sm:block">
              <Shuffle
                animationMode="evenodd"
                className="corelabs-hero-heading max-w-3xl text-center font-bold text-white"
                duration={1}
                ease="power3.out"
                loop={false}
                loopDelay={2}
                respectReducedMotion
                shuffleDirection="right"
                shuffleTimes={1}
                stagger={0.03}
                tag="h1"
                text="Build systems that grow."
                textAlign="center"
                threshold={0.1}
                triggerOnce
                triggerOnHover
              />
            </div>

            <div className="mx-auto mt-5 grid max-w-3xl gap-4 sm:mt-2">
              <p className="mx-auto max-w-3xl text-sm leading-6 text-white/76 sm:text-lg sm:leading-7">
                We create conversion websites, CRM dashboards, AI workflows, and
                YouTube growth engines for brands that need sharper operationsand better attention.
              </p>
              {/* <p className="mx-auto max-w-xl border-t border-[#9BFF00]/35 pt-4 text-xs leading-5 text-[#D9FF8A] sm:text-sm sm:leading-6">
                Not a template. A working digital system for how your business
                sells, serves, and scales.
              </p> */}
            </div>

            <div className="mx-auto mt-7 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
              <HeroButton href="#contact">Start a Project</HeroButton>
              <HeroButton href="#services" variant="ghost">
                Explore Services
              </HeroButton>
            </div>
          </div>

        </div>


        <div className="relative left-1/2 w-screen -translate-x-1/2">
          <CorelabsStepGallery />
        </div>
      </div>
    </section>
  );
}
