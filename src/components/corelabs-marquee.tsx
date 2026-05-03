import { Asterisk } from "lucide-react";

const items = [
  { label: "Website Studio", outlined: false },
  { label: "AI Workflow Systems", outlined: true },
  { label: "Brand Growth Agency", outlined: false },
  { label: "CRM Automation", outlined: true },
  { label: "Content Engines", outlined: false },
];

function MarqueeRow() {
  return (
    <div className="flex shrink-0 items-center gap-8 pr-8">
      {items.map((item) => (
        <div key={item.label} className="flex items-center gap-8">
          <span
            className={`whitespace-nowrap text-4xl font-semibold tracking-tight sm:text-6xl ${item.outlined
                ? "text-transparent [-webkit-text-stroke:1px_rgba(15,45,15,0.45)]"
                : "text-[#0F2D0F]"
              }`}
          >
            {item.label}
          </span>
          <Asterisk className="h-10 w-10 shrink-0 text-[#9BFF00] sm:h-12 sm:w-12" />
        </div>
      ))}
    </div>
  );
}

export default function CorelabsMarquee() {
  return (
    <div className="bg-white md:py-10">
      <section className="overflow-hidden bg-white py-8">
        <div className="corelabs-marquee-track flex w-max min-w-full items-center">
          <MarqueeRow />
          <MarqueeRow />
        </div>
      </section>
    </div>
  );
}
