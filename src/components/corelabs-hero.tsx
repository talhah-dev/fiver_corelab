import Ballpit from "@/components/Ballpit";
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

const stats = [
  { value: "01", label: "Strategy mapped before design starts" },
  { value: "AI", label: "Automation layered into daily operations" },
  { value: "A-Z", label: "YouTube systems from idea to distribution" },
];

const capabilities = [
  "Websites",
  "CRM",
  "AI Automation",
  "Business Workflows",
  "YouTube Growth",
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
      className={`group inline-flex min-h-14 w-full items-center justify-between gap-4 rounded-full py-2 pl-7 pr-2 text-sm font-medium transition sm:w-auto sm:min-w-52 ${isSolid
          ? "bg-[#9BFF00] text-[#0F2D0F] hover:bg-[#C8FF5E]"
          : "border border-white/22 bg-white/8 text-white hover:border-[#9BFF00]/70 hover:bg-[#9BFF00]/10"
        }`}
      href={href}
    >
      <span>{children}</span>
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#F4FFE7] text-[#0F2D0F] transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
        <ArrowRight className="h-4 w-4 -rotate-45" />
      </span>
    </Link>
  );
}

export default function CorelabsHero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0F2D0F] px-5 py-24 text-white sm:px-8 lg:px-10">
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

      <div className="absolute inset-0 opacity-70">
        <Ballpit
          ambientColor={0xf4ffe7}
          ambientIntensity={1.6}
          colors={[0x9bff00, 0xc8ff5e, 0xe8ffb8]}
          count={115}
          friction={0.9975}
          gravity={0.01}
          lightIntensity={320}
          materialParams={{
            metalness: 0.18,
            roughness: 0.26,
            clearcoat: 1,
            clearcoatRoughness: 0.06,
          }}
          wallBounce={0.95}
        />
      </div>
      {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_38%,rgba(155,255,0,0.18),transparent_28%),linear-gradient(90deg,#071607_0%,rgba(7,22,7,0.5)_38%,rgba(15,45,15,0.5)_100%)]" /> */}
      <div className="absolute bottom-0 left-0 right-0 h-full bg-[#071607]/20" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-12rem)] max-w-7xl flex-col justify-end pt-20">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(340px,0.62fr)] lg:items-end">
          <div className="max-w-4xl">
            <div className="mb-8 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-[#9BFF00]/35 bg-[#9BFF00]/10 px-5 py-2 text-sm font-normal text-[#D9FF8A]">
                Corelabs
              </span>
              <span className="text-sm text-white/62">
                AI, software, automation, and content growth
              </span>
            </div>

            <Shuffle
              animationMode="evenodd"
              className="max-w-5xl text-left text-5xl font-bold leading-tight text-white sm:text-7xl"
              duration={1}
              ease="power3.out"
              loop={false}
              loopDelay={2}
              respectReducedMotion
              shuffleDirection="right"
              shuffleTimes={1}
              stagger={0.03}
              tag="h1"
              text="Build systems that grow while you sleep."
              textAlign="left"
              threshold={0.1}
              triggerOnce
              triggerOnHover
            />

            <div className="mt-7 grid gap-6 md:grid-cols-[minmax(0,0.78fr)_minmax(220px,0.34fr)] md:items-end">
              <p className="max-w-2xl text-base leading-7 text-white/76 sm:text-lg">
                We create conversion websites, CRM dashboards, AI workflows, and
                YouTube growth engines for brands that need sharper operations,
                cleaner execution, and better attention.
              </p>
              <p className="border-l border-[#9BFF00]/35 pl-5 text-sm leading-6 text-[#D9FF8A]">
                Not a template. A working digital system for how your business
                sells, serves, and scales.
              </p>
            </div>

            <div className="mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <HeroButton href="#contact">Start a Project</HeroButton>
              <HeroButton href="#services" variant="ghost">
                Explore Services
              </HeroButton>
            </div>
          </div>

          <div className="grid gap-4 lg:pb-2">
            <div className="rounded-lg border border-white/12 bg-[#071607]/72 p-5 backdrop-blur-md">
              <p className="text-sm text-[#9BFF00]">Core operating stack</p>
              <div className="mt-5 grid gap-3">
                {stats.map((item) => (
                  <div
                    className="grid grid-cols-[52px_1fr] items-center gap-4 border-t border-white/10 pt-3 first:border-t-0 first:pt-0"
                    key={item.label}
                  >
                    <span className="text-2xl font-bold text-white">
                      {item.value}
                    </span>
                    <span className="text-sm leading-5 text-white/68">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-lg border border-[#9BFF00]/25 bg-[#9BFF00] p-5 text-[#0F2D0F]">
              <p className="text-sm font-medium">Landing page today</p>
              <p className="mt-3 text-2xl font-bold leading-tight">
                Then expand the rest without losing quality.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap gap-2 border-t border-white/12 pt-5">
          {capabilities.map((item) => (
            <span
              className="rounded-full border border-white/12 bg-white/6 px-4 py-2 text-sm text-white/68"
              key={item}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
