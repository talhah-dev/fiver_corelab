import Image from "next/image";

const features = [
  {
    title: "Websites & Landing Pages",
    description:
      "Modern, conversion-focused websites with sharp visuals, smooth motion, and responsive experiences for every screen.",
    image: "https://www.fffuel.co/images/dddepth-preview/dddepth-028.jpg",
  },
  {
    title: "Web Apps & Software",
    description:
      "Custom portals, dashboards, internal tools, and product experiences built around the way your business actually works.",
    image: "https://www.fffuel.co/images/dddepth-preview/dddepth-051.jpg",
  },
  {
    title: "CRM Systems",
    description:
      "Lead pipelines, client records, booking flows, follow-up systems, and team dashboards in one clean operating hub.",
    image: "https://www.fffuel.co/images/dddepth-preview/dddepth-248.jpg",
  },
  {
    title: "AI Automation",
    description:
      "AI assistants, smart forms, automated replies, content helpers, and workflow logic that saves time every week.",
    image: "https://www.fffuel.co/images/dddepth-preview/dddepth-045.jpg",
  },
  {
    title: "Business Automation",
    description:
      "Connect your tools, remove repetitive tasks, and create reliable systems for sales, operations, and support.",
    image: "https://www.fffuel.co/images/dddepth-preview/dddepth-034.jpg",
  },
  {
    title: "YouTube A-Z Marketing",
    description:
      "Channel strategy, content systems, thumbnails, packaging, publishing workflows, and growth support for creators and brands.",
    image: "https://www.fffuel.co/images/dddepth-preview/dddepth-012.jpg",
  },
];

const Features = () => {
  return (
    <section className="bg-white px-6 py-16 text-[#101820] sm:py-20">
      <div className="mx-auto flex max-w-7xl flex-col">
        <p className="text-center text-sm font-bold uppercase tracking-[0.18em] text-[#FF5C4D]">
          Corelabs services
        </p>
        <h2 className="mt-4 max-w-3xl mx-auto leading-tight text-pretty text-center font-satoshi text-4xl font-semibold tracking-tight sm:text-5xl">
          Everything you need to build, automate, and grow online.
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-[#415366] sm:text-xl">
          We combine software development, AI systems, business automation, and
          content growth so your brand has a complete digital engine.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              className="group overflow-hidden rounded-lg border border-[#101820]/10 bg-[#F7FBFF] transition duration-300 hover:-translate-y-1 hover:border-[#A8D8FF] hover:shadow-[10px_10px_0_#A8D8FF]"
              key={feature.title}
            >
              <div className="mask-b-from-50% aspect-square w-full rounded-t-lg">
                <Image
                  alt=""
                  className="size-full rounded-t-lg object-cover opacity-80 saturate-75 transition duration-300 group-hover:scale-105 group-hover:opacity-100"
                  height={600}
                  src={feature.image}
                  width={800}
                />
              </div>

              <div className="p-6">
                <div className="mb-5 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#A8D8FF]">
                    0{index + 1}
                  </span>
                  <span className="h-2 w-10 rounded-full bg-[#FF5C4D]" />
                </div>
                <h3 className="font-medium text-2xl tracking-[-0.005em]">
                  {feature.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-[#415366]">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
