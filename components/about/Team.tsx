import Button from "@/components/Button";
import SectionLabel from "@/components/SectionLabel";
import TeamCard from "@/components/TeamCard";

export default function Team() {
  return (
    <section className="bg-surface-200 py-16">
      <div className="mx-auto flex max-w-page flex-col gap-12 px-4">
        <div className="flex items-end justify-between gap-16">
          <div className="flex flex-col gap-4">
            <SectionLabel>OUR TEAM</SectionLabel>
            <h2 className="text-h2 text-ink">
              <span className="block">The people behind</span>
              <span className="block text-text-brand">your accounts</span>
            </h2>
          </div>
          <p className="w-[400px] text-body text-ink-muted">
            Qualified people who handle your work, in Panadura and Rathnapura.
          </p>
        </div>
        <div className="flex items-stretch gap-6">
          <TeamCard
            name="Ms. Nilmini Wijerathna"
            role="Managing Partner"
            bio="More than 10 years of experience in the audit and non-audit sector, especially engaged in client assignments."
            photo="/images/about/team-nilmini.png"
          />
          <TeamCard
            name="Mr. Nishantha Dharmapriya"
            role="Audit Manager, Rathnapura Branch"
            bio="More than 12 years of experience in the audit and non-audit sector, serving clients in the Sabaragamuwa Province."
            photo="/images/about/team-nishantha.png"
          />
          <div className="flex min-w-0 flex-1 flex-col items-start justify-end gap-4 rounded-lg bg-surface-brand-soft p-8">
            <SectionLabel tone="onBrand">CAREERS</SectionLabel>
            <h3 className="text-h3 text-on-brand">Join our team</h3>
            <p className="text-body text-on-brand-muted">
              We are glad to hear from people who want a career in audit, tax and
              accounting.
            </p>
            <Button href="/careers" variant="onBrandSolid">
              View open positions
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
