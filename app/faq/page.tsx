import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import FaqSection from "@/components/faq/FaqSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "FAQs | Chandranath & Company",
  description:
    "Short answers to common questions about our services, fees, documents and working with us.",
};

export default function FaqPage() {
  return (
    <>
      <Header active="/faq" />
      <main>
        <PageHero
          title="Frequently asked questions"
          breadcrumb="Home  /  FAQs"
          lead="Short answers to common questions. If yours is not here, call +94 38 2237256 or send us a message."
          image="/images/home/mission.png"
        />
        <FaqSection />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
