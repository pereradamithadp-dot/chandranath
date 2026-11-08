import ContactForm from "@/components/ContactForm";
import SectionLabel from "@/components/SectionLabel";
import OfficesPanel from "./OfficesPanel";

export default function ContactMain() {
  return (
    <section className="bg-surface-100 py-12 lg:py-20">
      <div className="mx-auto flex max-w-page flex-col items-stretch gap-10 px-4 lg:flex-row lg:items-start lg:gap-16">
        <div className="flex min-w-0 flex-1 flex-col items-start gap-4 rounded-lg bg-surface-200 p-5 shadow-md sm:p-10">
          <SectionLabel>SEND A MESSAGE</SectionLabel>
          <div className="w-full">
            <ContactForm />
          </div>
        </div>
        <OfficesPanel />
      </div>
    </section>
  );
}
