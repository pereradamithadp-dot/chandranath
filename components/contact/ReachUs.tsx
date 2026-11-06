import ContactInfoCard from "@/components/ContactInfoCard";
import SectionLabel from "@/components/SectionLabel";
import SocialLinks from "@/components/SocialLinks";

export default function ReachUs() {
  return (
    <section className="bg-surface-200 pb-16 pt-20">
      <div className="mx-auto flex max-w-page flex-col gap-12 px-4">
        <div className="flex items-end justify-between gap-16">
          <div className="flex flex-col gap-4">
            <SectionLabel>GET IN TOUCH</SectionLabel>
            <h2 className="text-h2 text-ink">
              <span className="block">Let&apos;s talk about</span>
              <span className="block text-text-brand">your business</span>
            </h2>
          </div>
          <p className="w-[420px] text-body text-ink-muted">
            Call, email or visit us. Our offices are in Panadura and Rathnapura.
          </p>
        </div>

        <div className="flex items-stretch gap-6">
          <div className="flex w-[360px] shrink-0">
            <ContactInfoCard
              icon="phone"
              title="Call us"
              value="+94 38 2237256"
              note={"Mobile +94 76 1950780\n+94 76 2557685"}
            />
          </div>
          <div className="flex min-w-0 flex-1">
            <ContactInfoCard
              icon="mail"
              title="Email us"
              value="info@chandranath.com"
              note="Send your questions any time"
            />
          </div>
          <div className="flex w-[360px] shrink-0">
            <ContactInfoCard
              icon="pin"
              title="Visit us"
              value="No. 08, Kulathunga Road"
              note="Panadura · Branch in Rathnapura"
            />
          </div>
        </div>

        <div className="flex items-center gap-6">
          <p className="text-body whitespace-nowrap text-ink-muted">Follow us</p>
          <SocialLinks />
        </div>
      </div>
    </section>
  );
}
