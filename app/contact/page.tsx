import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import ContactMain from "@/components/contact/ContactMain";
import ReachUs from "@/components/contact/ReachUs";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = pageMetadata({
  title: "Contact Us",
  description:
    "Call, write or visit. We reply to every message within one working day.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <Header active="/contact" />
      <main>
        <PageHero
          title="Contact us"
          breadcrumb="Home  /  Contact Us"
          lead="Call, write or visit. We reply to every message within one working day."
          image="/images/home/industry-investments.png"
        />
        <ReachUs />
        <ContactMain />
      </main>
      <Footer />
    </>
  );
}
