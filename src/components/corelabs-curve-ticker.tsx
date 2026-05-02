import { Mic, Sparkles } from "lucide-react";
import styles from "./corelabs-curve-ticker.module.css";

const phrases = [
  "Websites that convert into leads",
  "AI workflows that remove busywork",
  "CRM systems that keep teams aligned",
  "Content engines that keep brands moving",
];

const marqueeText = `${phrases.join("     *     ")}     *     ${phrases.join(
  "     *     ",
)}`;

export default function CorelabsCurveTicker() {
  return (
    <section className={`${styles.section} overflow-hidden px-5 pb-20 pt-8 sm:px-6 sm:pb-24`}>
      <div className="mx-auto max-w-6xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#0F2D0F]/12 bg-white px-4 py-2 text-sm text-[#0F2D0F]/70 shadow-[0_10px_30px_rgba(15,45,15,0.05)]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#9BFF00]" />
          <span>Corelabs motion system</span>
        </div>

        <h2 className="mx-auto mt-6 max-w-4xl text-balance text-4xl font-semibold leading-tight tracking-tight text-[#0F2D0F] sm:text-6xl">
          Don&apos;t juggle tools. Let your systems move together.
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#0F2D0F]/68 sm:text-lg">
          Websites, CRM, automation, and content workflows connected into one
          clean operating rhythm for your brand.
        </p>
      </div>

      <div className={`${styles.tickerWrap} mt-12`}>
        <div className="pointer-events-none absolute left-1/2 top-[58%] z-20 h-11 w-[35%] min-w-[260px] -translate-x-1/2 rounded-[999px] bg-[#4A5F58] shadow-[0_18px_45px_rgba(15,45,15,0.18)] sm:h-12" />

        <div className="pointer-events-none absolute left-1/2 top-[58%] z-30 flex -translate-x-1/2 -translate-y-1/2 items-center gap-3 rounded-[999px] border border-[#0F2D0F]/24 bg-[#F4FFE7] px-5 py-2.5 shadow-[0_12px_40px_rgba(15,45,15,0.12)]">
          <Mic className="h-4 w-4 text-[#0F2D0F]" />
          <span className="text-sm font-medium text-[#0F2D0F]">
            Corelabs flow
          </span>
        </div>

        <svg
          viewBox="0 0 1440 360"
          className={styles.curveSvg}
          aria-hidden="true"
          role="presentation"
        >
          <defs>
            <path
              id="corelabs-curve-path"
              d="M 30 120 C 280 310, 1160 310, 1410 120"
            />
          </defs>

          <path
            d="M 30 120 C 280 310, 1160 310, 1410 120"
            fill="none"
            stroke="rgba(15,45,15,0.08)"
            strokeWidth="2"
          />

          <path
            d="M 505 244 C 635 266, 805 266, 935 244"
            fill="none"
            stroke="#4A5F58"
            strokeLinecap="round"
            strokeWidth="42"
          />

          <g className={styles.track}>
            <text
              className={styles.mutedText}
              fontSize="39"
              fontWeight="500"
              letterSpacing="0"
            >
              <textPath href="#corelabs-curve-path" startOffset="0%">
                {marqueeText}
              </textPath>
            </text>
          </g>

          <g className={styles.track}>
            <text
              className={styles.strongText}
              fontSize="39"
              fontWeight="500"
              letterSpacing="0"
            >
              <textPath href="#corelabs-curve-path" startOffset="36.6%">
                systems that move together for growth
              </textPath>
            </text>
          </g>
        </svg>

        <div className="mt-6 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#0F2D0F]/10 bg-white px-4 py-2 text-sm text-[#0F2D0F]/66">
            <Sparkles className="h-4 w-4 text-[#9BFF00]" />
            <span>Websites, CRM, AI, automation, and content</span>
          </div>
        </div>
      </div>
    </section>
  );
}
