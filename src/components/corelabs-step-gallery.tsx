import Image from "next/image";

const topRow = [
  {
    label: "Discovery",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
  },
  {
    label: "Interface Design",
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    label: "Automation Map",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
  },
];

const bottomRow = [
  {
    label: "CRM Build",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
  },
  {
    label: "Content Engine",
    image:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=1200&q=80",
  },
  {
    label: "Growth System",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
  },
];

function GalleryRow({
  items,
  reverse = false,
}: {
  items: typeof topRow;
  reverse?: boolean;
}) {
  return (
    <div className="overflow-hidden">
      <div
        className={`flex w-max ${
          reverse
            ? "corelabs-step-gallery-track-reverse"
            : "corelabs-step-gallery-track"
        }`}
      >
        {[0, 1].map((groupIndex) => (
          <div className="flex shrink-0 gap-5 pr-5" key={groupIndex}>
            {items.map((item) => (
              <article
                aria-hidden={groupIndex === 1}
                className="group relative h-[8.5rem] w-[76vw] shrink-0 overflow-hidden rounded-lg border border-white/12 bg-white/5 sm:h-64 sm:w-[520px] lg:h-72 lg:w-[620px]"
                key={`${groupIndex}-${item.label}`}
              >
                <Image
                  alt={item.label}
                  className="object-cover transition duration-700 group-hover:scale-105"
                  fill
                  sizes="(max-width: 640px) 78vw, 620px"
                  src={item.image}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,22,7,0.08)_0%,rgba(7,22,7,0.78)_100%)]" />
                <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-3 sm:bottom-4 sm:left-4 sm:right-4 sm:gap-4">
                  <h3 className="text-lg font-semibold leading-none text-white sm:text-3xl">
                    {item.label}
                  </h3>
                  <span className="rounded-full bg-[#9BFF00] px-2.5 py-1 text-[10px] font-medium text-[#0F2D0F] sm:px-3 sm:text-xs">
                    Corelabs
                  </span>
                </div>
              </article>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function CorelabsStepGallery() {
  return (
    <div className="overflow-hidden py-4 text-white sm:py-8">
      <div className="space-y-3 sm:space-y-5">
        <GalleryRow items={topRow} />
        <GalleryRow items={bottomRow} reverse />
      </div>
    </div>
  );
}
