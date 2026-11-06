import type { Metadata } from "next";
import ClientsIntro from "@/components/clients/ClientsIntro";
import LogoGrid from "@/components/clients/LogoGrid";
import CtaBand from "@/components/CtaBand";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Industries from "@/components/sections/Industries";

export const metadata: Metadata = {
  title: "Our Clients | Chandranath & Company",
  description:
    "Businesses and organisations that trust CHANDRANATH & COMPANY with their accounts, tax and advice.",
};

export default function ClientsPage() {
  return (
    <>
      <Header active="/clients" />
      <main>
        <PageHero
          title="Our Clients"
          lead="Businesses and organisations that trust CHANDRANATH & COMPANY with their accounts, tax and advice."
          image="/images/home/about-office.png"
        />
        <ClientsIntro />
        <LogoGrid />
        <Industries
          heading={["Experience across", "Sri Lankan industries"]}
          description="Our clients include hotels, tea estates, traders, manufacturers and investment companies."
          spacing="pb-20 pt-16"
          descriptionWidth="w-[420px]"
        />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
