import type { Metadata } from "next";
import { Suspense } from "react";
import { pageMetadata, SITE_DESCRIPTION, SITE_NAME } from "@/lib/seo";
import CtaBand from "@/components/CtaBand";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import AboutCompany from "@/components/home/AboutCompany";
import HeroCarousel from "@/components/home/HeroCarousel";
import HomeClients from "@/components/home/HomeClients";
import HomeNews from "@/components/home/HomeNews";
import HomeServices from "@/components/home/HomeServices";
import HowWeWork from "@/components/home/HowWeWork";
import StatsStrip from "@/components/home/StatsStrip";
import VisionMission from "@/components/home/VisionMission";
import Industries from "@/components/sections/Industries";
import Reveal from "@/components/Reveal";
import ScrollProgress from "@/components/ScrollProgress";

export const metadata: Metadata = {
  ...pageMetadata({
    title: `${SITE_NAME} | Chartered Accountants`,
    description: SITE_DESCRIPTION,
    path: "/",
  }),
  // Full title on the home page, without the "| Chandranath & Company" template.
  title: { absolute: `${SITE_NAME} | Chartered Accountants` },
};

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Header active="/" />
      <main>
        <HeroCarousel />
        <Reveal effect="scale">
          <StatsStrip />
        </Reveal>
        <Reveal effect="up">
          <AboutCompany />
        </Reveal>
        <Reveal effect="up">
          <HomeServices />
        </Reveal>
        <Reveal effect="blur">
          <Industries />
        </Reveal>
        <Reveal effect="up">
          <HowWeWork />
        </Reveal>
        <Reveal effect="scale">
          <VisionMission />
        </Reveal>
        <Reveal effect="up">
          <Suspense fallback={<div className="min-h-[360px]" />}>
            <HomeClients />
          </Suspense>
        </Reveal>
        <Reveal effect="blur">
          <Suspense fallback={<div className="min-h-[560px]" />}>
            <HomeNews />
          </Suspense>
        </Reveal>
        <Reveal effect="scale">
          <CtaBand />
        </Reveal>
      </main>
      <Footer />
    </>
   );
}
