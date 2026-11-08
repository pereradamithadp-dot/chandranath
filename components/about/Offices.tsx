import Button from "@/components/Button";
import ContactInfoCard from "@/components/ContactInfoCard";
import SectionLabel from "@/components/SectionLabel";

export default function Offices() {
  return (
    <section className="bg-surface-200 py-12 lg:py-20">
      <div className="mx-auto flex max-w-page flex-col gap-12 px-4">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end lg:gap-16">
          <div className="flex flex-col gap-4">
            <SectionLabel>OUR OFFICES</SectionLabel>
            <h2 className="text-h2 text-ink">
              <span className="block">Visit us in</span>
              <span className="block text-text-brand">
                Panadura or Rathnapura
              </span>
            </h2>
          </div>
          <Button href="/contact">Contact us</Button>
        </div>
        <div className="flex flex-col items-stretch gap-8 md:flex-row md:items-start md:gap-6">
          <div className="flex min-w-0 flex-1 flex-col gap-4">
            <h3 className="text-h4 text-ink">Panadura (Head Office)</h3>
            <ContactInfoCard
              icon="pin"
              title="Address"
              value="No. 08, Kulathunga Road"
              note="Panadura"
            />
            <ContactInfoCard
              icon="phone"
              title="Call"
              value="+94 38 2237256"
              note={"Mobile +94 76 1950780\n+94 76 2557685"}
            />
            <ContactInfoCard
              icon="mail"
              title="Email"
              value="info@chandranath.com"
              note="Send your questions any time"
            />
          </div>
          <div className="flex min-w-0 flex-1 flex-col gap-4">
            <h3 className="text-h4 text-ink">Rathnapura (Branch)</h3>
            <ContactInfoCard
              icon="pin"
              title="Address"
              value="Ganegama, Pelwadiya"
              note="Rathnapura"
            />
            <ContactInfoCard
              icon="phone"
              title="Call"
              value="+94 719103351"
              note={"Rathnapura Branch\nbranch@chandranath.com"}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
