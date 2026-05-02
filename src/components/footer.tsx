"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { X } from "lucide-react";
import { LiaLinkedin } from "react-icons/lia";

const footerLinks = {
  explore: [
    { label: "Websites & landing pages", href: "#", key: 1 },
    { label: "Custom web apps", href: "#", key: 2 },
    { label: "CRM systems", href: "#", key: 3 },
    { label: "AI automation", href: "#", key: 4 },
    { label: "YouTube marketing", href: "#", key: 5 },
  ],
  company: [
    { label: "About", href: "/about", key: 1 },
    { label: "Work", href: "#", key: 2 },
    { label: "Blog", href: "/blog", key: 3 },
    { label: "Contact", href: "/contact", key: 4 },
  ],
};

export default function SiteFooterLight() {
  return (
    <footer className="rounded-t-[2rem] bg-[#10201a] text-white md:p t-10">
      <div className="mx-auto max-w-full sm:p-6 lg:p-6">
        <div className="overflow-hidden">
          <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <div data-aos="fade" className="text-balance text-center text-xl font-semibold tracking-tight text-white md:text-start sm:text-3xl">
                Join the Corelabs list for sharp ideas on
                <span className="text-white/70"> websites, automation, AI, and online growth.</span>
              </div>
            </div>

            <div data-aos="fade" className="lg:col-span-5">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex w-full items-center gap-2 rounded-full border border-white/10 bg-white/6 p-2 backdrop-blur-sm"
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="h-11 flex-1 bg-transparent pl-4 text-white outline-none placeholder:text-white/42"
                />
                <Button
                  type="submit"
                  className="h-11 rounded-full bg-[#9BFF00] px-6 text-[#0F2D0F] hover:bg-[#c8ff5e]"
                >
                  Submit
                </Button>
              </form>
            </div>
          </div>

          <div className="border-t border-white/10">
            <div className="grid gap-10 p-6 sm:p-8 lg:grid-cols-12">
              <div className="lg:col-span-3">
                <div className="text-lg font-semibold text-white">Start a Conversation</div>
                <div className="mt-3 space-y-2 text-sm text-white/68">
                  <div>hello@corelabs.com</div>
                  <div>Websites, CRM, AI, automation, and content systems</div>
                  <div>Book a project call</div>
                </div>

                <div className="mt-8 flex items-center gap-3">
                  <Link href="/" className="flex items-center gap-2">
                    <Image src="/logo.png" alt="Corelabs logo" width={200} height={100} className="h-10 w-auto invert" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="grid gap-10 sm:grid-cols-2">
                  <div>
                    <div className="font-semibold tracking-wide text-[#D9FF8A]">
                      EXPLORE
                    </div>
                    <div className="mt-4 flex flex-col gap-3">
                      {footerLinks.explore.map((l) => (
                        <Link
                          key={l.key}
                          href={l.href}
                          className="text-white/68 transition hover:text-[#D9FF8A]"
                        >
                          {l.label}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="font-semibold tracking-wide text-[#D9FF8A]">
                      COMPANY
                    </div>
                    <div className="mt-4 flex flex-col gap-3">
                      {footerLinks.company.map((l) => (
                        <Link
                          key={l.href}
                          href={l.href}
                          className="text-white/68 transition hover:text-[#D9FF8A]"
                        >
                          {l.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-3 lg:flex lg:justify-end">
                <div className="flex items-center gap-3">
                  {[
                    { Icon: FaFacebook, href: "https://facebook.com" },
                    { Icon: BsInstagram, href: "https://instagram.com" },
                    { Icon: X, href: "https://x.com" },
                    { Icon: LiaLinkedin, href: "https://linkedin.com" },
                  ].map(({ Icon, href }) => (
                    <Link
                      key={href}
                      href={href}
                      target="_blank"
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/7 text-white transition hover:border-[#9BFF00]/35 hover:bg-[#9BFF00]/10 hover:text-[#D9FF8A]"
                      aria-label="Social link"
                    >
                      <Icon className="h-5 w-5" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-3 px-6 pb-6 pt-2 text-sm text-white/45 sm:flex-row sm:justify-between sm:px-8 sm:pb-8">
              <div>Corelabs. All rights reserved. Copyright {new Date().getFullYear()}</div>
              <div className="flex gap-4">
                <Link href="/privacy" className="transition hover:text-[#D9FF8A]">
                  Privacy
                </Link>
                <Link href="/terms" className="transition hover:text-[#D9FF8A]">
                  Terms
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
