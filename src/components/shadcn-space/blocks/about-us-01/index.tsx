"use client";
import AboutUs from "@/components/shadcn-space/blocks/about-us-01/about-us";
import { Bot, Clapperboard, Code2 } from "lucide-react";

const aboutusData = [
    {
      icon: Code2,
      title: "Software",
      color: "bg-[#A8D8FF]/35 text-[#0B2436]"
    },
    {
      icon: Bot,
      title: "Automation",
      color: "bg-[#FF5C4D]/15 text-[#C7362B]" 
    },
    {
      icon: Clapperboard,
      title: "Growth",
      color: "bg-[#101820]/8 text-[#101820]" 
    }
];

const statisticsCounter = [
    {
        title: "Projects delivered",
        count: 40
    },
    {
        title: "Core service tracks",
        count: 6
    },
    {
        title: "Growth systems built",
        count: 12
    },
]

const AboutAndStats01 = () => {
  return (
    <>
      <AboutUs aboutusData={aboutusData} statisticsCounter={statisticsCounter} />
    </>
  );
};

export default AboutAndStats01;
