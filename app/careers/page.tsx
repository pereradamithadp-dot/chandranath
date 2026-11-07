import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import ApplicationForm from "@/components/careers/ApplicationForm";
import OpenPositions from "@/components/careers/OpenPositions";
import WhyJoinUs from "@/components/careers/WhyJoinUs";
import YourPath from "@/components/careers/YourPath";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = pageMetadata({
  title: "Careers",
  description:
    "We are a small firm where you work directly with chartered accountants and learn on real client work.",
  path: "/careers",
});

export default function CareersPage() {
  return (
    <>
      <Header active="/careers" />
      <main>
        <PageHero
          title="Careers at CHANDRANATH & COMPANY"
          breadcrumb="Home  /  Careers"
          lead="We are a small firm where you work directly with chartered accountants and learn on real client work."
          image="/images/home/about-team.png"
        />
        <WhyJoinUs />
        <YourPath />
        <OpenPositions />
        <ApplicationForm />
      </main>
      <Footer />
    </>
  );
}
