import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import CtaBand from "@/components/CtaBand";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Introduction from "@/components/about/Introduction";
import Offices from "@/components/about/Offices";
import PrecedentPartner from "@/components/about/PrecedentPartner";
import Team from "@/components/about/Team";
import Values from "@/components/about/Values";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = pageMetadata({
  title: "About Us",
  description:
    "Who leads the firm, since when, and where to find us.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <Header active="/about" />
      <main>
        <PageHero
          title="About Us"
          lead="Who leads the firm, since when, and where to find us."
        />
        <Introduction />
        <PrecedentPartner />
        <Team />
        <Values />
        <Offices />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
