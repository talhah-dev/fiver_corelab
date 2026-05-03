import Image from "next/image";

const pages = [
  {
    title: "Landing page",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "CRM dashboard",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Automation flow",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Content system",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "YouTube growth",
    image:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=900&q=80",
  },
];

export default function CorelabsInnerPages() {
  const repeatedPages = [...pages, ...pages, ...pages];

  return (
    <section className="overflow-hidden bg-white pb-20 md:pt-10 text-[#0F2D0F] sm:pb-24 pt-5">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-5 text-center sm:px-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#0F2D0F]/12 bg-white px-5 py-2 text-sm text-[#0F2D0F]/72">
          <span className="h-1.5 w-1.5 rounded-full bg-[#0F2D0F]" />
          <span>Website systems</span>
        </div>
        <h2 className="mt-6 max-w-3xl text-4xl font-semibold  leading-tight capitalize tracking-tight sm:text-6xl">
          Elegant pages for every part of the business.
        </h2>
      </div>

      <div className="mt-14 overflow-hidden">
        <div className="corelabs-inner-pages-track flex w-max gap-6 pr-6">
          {repeatedPages.map((page, index) => (
            <article
              className="relative h-[430px] w-[78vw] shrink-0 overflow-hidden rounded-lg border border-[#0F2D0F]/12 bg-white p-1 sm:w-[360px] lg:h-[520px] lg:w-[430px]"
              key={`${page.title}-${index}`}
            >
              <div className="flex items-center justify-between border-b border-[#0F2D0F]/10 px-3 py-3 text-xs text-[#0F2D0F]/62">
                <span className="font-medium text-[#0F2D0F]">Corelabs</span>
                <span>{page.title}</span>
              </div>
              <div className="relative mt-3 h-[calc(100%-54px)] overflow-hidden rounded-md bg-[#eef1e8]">
                <Image
                  alt={page.title}
                  className="object-cover"
                  fill
                  sizes="(max-width: 640px) 78vw, 430px"
                  src={page.image}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(247,249,242,0)_38%,rgba(15,45,15,0.52)_100%)]" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-left text-xl font-medium leading-none text-white">
                    {page.title}
                  </h3>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
