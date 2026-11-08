import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import CtaBand from "@/components/CtaBand";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Industries from "@/components/sections/Industries";
import Overview from "@/components/services/Overview";
import ServiceDetail from "@/components/services/ServiceDetail";

export const metadata: Metadata = pageMetadata({
  title: "Services",
  description:
    "Six services, each led by a chartered accountant and delivered by a qualified team.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <Header active="/services" />
      <main>
        <PageHero
          title="Services"
          lead="Six services, each led by a chartered accountant and delivered by a qualified team."
          image="/images/home/industry-investments.png"
        />
        <Overview />
        <ServiceDetail
          number="01"
          title="Audit & Assurance"
          description="Independent audits that give owners, lenders and regulators confidence in your accounts. We plan the audit around the risks in your business and tell you plainly what we find."
          items={[
            "Statutory audits of companies",
            "Audits for banks, donors and special purposes",
            "Review engagements and agreed-upon procedures",
            "A management letter with practical recommendations",
          ]}
          cta="Send an enquiry about audit"
          image="/images/home/mission.png"
          badge="Audits planned around your risks"
        />
        <ServiceDetail
          panel
          number="02"
          title="Tax Advisory"
          description="Tax compliance and planning that keeps you on the right side of the rules and avoids paying more than you owe."
          items={[
            "Income tax computation and return filing",
            "VAT registration and returns",
            "PAYE and withholding tax",
            "Tax planning",
            "Representation before the Inland Revenue Department",
          ]}
          cta="Send an enquiry about tax"
          image="/images/news/tax-returns.png"
          badge="Returns filed on time"
          badgeLeft={248}
        />
        <ServiceDetail
          number="03"
          title="Risk Advisory"
          description="Independent reviews that find weak points in how your business runs, before they cost you money."
          items={[
            "Review of internal controls",
            "Compliance testing against your own policies",
            "Cost and performance reviews",
            "Improving and restructuring business processes",
          ]}
          cta="Send an enquiry about risk advisory"
          image="/images/home/vision.png"
          badge="Weak points found early"
        />
        <ServiceDetail
          panel
          number="04"
          title="Business Process Outsourcing (BPO) Operations"
          description="We take on finance and administration tasks so you can concentrate on running the business."
          items={[
            "Bookkeeping and transaction accounting",
            "Payroll administration",
            "Monthly management reports",
            "Help with statutory compliance",
            "Inventory verification and fixed asset registers",
            "Finance staff placed with your team",
          ]}
          cta="Send an enquiry about outsourcing"
          image="/images/home/about-team.png"
          badge="Your finance team, extended"
          badgeLeft={246}
        />
        <ServiceDetail
          number="05"
          title="Company Secretarial Services"
          description="We look after the statutory side of running a company, so filings are made on time and your records are always in order."
          items={[
            "Company incorporation and registration",
            "Annual returns and statutory filings",
            "Maintaining statutory registers and records",
            "Preparing board and shareholder meeting documents",
            "Changes to directors, shareholders and share capital",
            "Advice on corporate governance and compliance",
          ]}
          cta="Send an enquiry about company secretarial"
          image="/images/home/about-office.png"
          badge="Filings made on time"
        />
        <ServiceDetail
          panel
          number="06"
          title="Accounting & Bookkeeping"
          description="Reliable day-to-day accounting that gives you accurate numbers when you need them, for decisions, tax and audit."
          items={[
            "Recording and reconciling daily transactions",
            "Bank and ledger reconciliations",
            "Preparation of financial statements",
            "Monthly management accounts",
            "Accounting software setup and support",
            "Year-end preparation for audit and tax",
          ]}
          cta="Send an enquiry about accounting"
          image="/images/home/service-bpo.jpg"
          badge="Books you can rely on"
          badgeLeft={246}
        />
        <Industries />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
