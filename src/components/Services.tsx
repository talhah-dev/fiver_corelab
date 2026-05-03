import TiltedCard from "@/components/TiltedCard";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Websites & Web Apps",
    badge: "Launch",
    text: "Fast, polished digital experiences built to convert visitors into real leads.",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "CRM Systems",
    badge: "Organize",
    text: "Custom dashboards that organize leads, clients, tasks, and follow-ups in one place.",
    image: "https://images.unsplash.com/photo-1585247226801-bc613c441316?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "AI Automation",
    badge: "Automate",
    text: "Smart workflows that handle repetitive work, content tasks, and internal operations.",
    image: "https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?q=80&w=996&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Business Automation",
    badge: "Scale",
    text: "Connected tools, forms, alerts, and processes that keep your team moving faster.",
    image: "https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "YouTube A-Z Marketing",
    badge: "Grow",
    text: "Strategy, packaging, content systems, and growth plans for channels that need momentum.",
    image: "https://images.unsplash.com/photo-1646446835625-4f23efd5c662?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Content Systems",
    badge: "Create",
    text: "Repeatable production workflows for short-form, long-form, and brand storytelling.",
    image: "https://images.unsplash.com/photo-1676287571987-2f98ced3e6c4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function Services() {
  return (
    <section
      className="bg-white px-5 py-20 text-[#0F2D0F] sm:py-24 2xl:px-10"
      id="services"
    >
      <div className="mx-auto max-w-[1580px]">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-sm font-normal text-[#4E7A22]">My services</p>
            <h2 className="mt-4 max-w-3xl text-4xl font-semibold sm:text-6xl">
              What Corelabs can build for your business.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-[#284C16]/75">
              From launch-ready websites to automation systems and YouTube
              growth engines, we build the digital infrastructure that helps
              your brand move with less friction.
            </p>
          </div>

          <Link
            className="group inline-flex min-h-14 w-full items-center justify-between gap-4 rounded-full bg-[#0F2D0F] py-2 pl-7 pr-2 text-sm font-normal text-white transition hover:bg-[#173D17] sm:w-56"
            href="#contact"
          >
            <span>Talk to us</span>
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#F4FFE7] text-[#0F2D0F] transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <ArrowRight className="h-4 w-4 -rotate-45" />
            </span>
          </Link>
        </div>

        <div className="mt-12 grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.title}>
              <TiltedCard
                altText={service.title}
                captionText={service.title}
                containerHeight="360px"
                containerWidth="100%"
                imageHeight="100%"
                imageSrc={service.image}
                imageWidth="100%"
                displayOverlayContent
                overlayContent={
                  <div className="flex h-full w-full items-start justify-end p-4">
                    <span className="rounded-full border border-white/25 bg-[#0F2D0F]/72 px-4 py-2 text-xs font-normal text-[#D9FF8A] backdrop-blur-md">
                      {service.badge}
                    </span>
                  </div>
                }
                rotateAmplitude={8}
                scaleOnHover={1.03}
                showMobileWarning={false}
                showTooltip={false}
              />
              <div className="mt-5">
                <h3 className="text-2xl font-semibold leading-tight">
                  {service.title}
                </h3>
                <p className="mt-2 max-w-sm text-sm leading-6 text-[#284C16]/75">
                  {service.text}
                </p>
                <Link
                  className="group mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#0F2D0F] transition hover:text-[#4E7A22]"
                  href="#contact"
                >
                  View service
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
