import Image from "next/image";
import Link from "next/link";

const proofPoints = [
  "Conversion-first website structure",
  "Automation mapped around your workflow",
  "CRM and content systems built to scale",
];

export default function DarkProcessSection() {
  return (
    <section className="bg-[#101820] px-6 py-20 text-white sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#FF5C4D]">
            Built as one system
          </p>
          <h2 className="mt-4 max-w-2xl text-pretty font-satoshi text-4xl font-semibold tracking-tight sm:text-5xl">
            We connect your website, tools, and content into a growth engine.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-white/72">
            Corelabs designs the front-end experience your customers see and the
            behind-the-scenes systems your team uses every day, so leads,
            follow-ups, automation, and content all move together.
          </p>

          <div className="mt-8 grid gap-3">
            {proofPoints.map((point) => (
              <div
                key={point}
                className="flex items-center gap-3 text-base text-white/82"
              >
                <span className="h-2.5 w-2.5 rounded-full bg-[#A8D8FF]" />
                <span>{point}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#"
              className="inline-flex h-12 items-center justify-center rounded-full bg-[#FF5C4D] px-6 text-sm font-semibold text-[#101820] transition hover:bg-[#ff7468]"
            >
              Plan Your System
            </Link>
            <Link
              href="#"
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/18 px-6 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/8"
            >
              See What We Build
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-5 top-8 h-24 w-24 rounded-full bg-[#A8D8FF]/18 blur-2xl" />
          <div className="absolute -bottom-6 right-8 h-32 w-32 rounded-full bg-[#FF5C4D]/18 blur-2xl" />
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-white/12 bg-white/6 shadow-[18px_18px_0_rgba(168,216,255,0.12)]">
            <Image
              src="https://www.fffuel.co/images/dddepth-preview/dddepth-181.jpg"
              alt="Abstract digital system visual"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover opacity-90 saturate-75"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
