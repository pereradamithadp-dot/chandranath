import Button from "@/components/Button";
import ClientTile from "@/components/ClientTile";
import SectionLabel from "@/components/SectionLabel";
import { getClients } from "@/lib/sanity/queries";

export default async function HomeClients() {
  const featured = (await getClients()).filter((c) => c.showOnHome).slice(0, 6);
  const row1 = featured.slice(0, 3);
  const row2 = featured.slice(3, 6);

  return (
    <section className="bg-surface-200 py-12 lg:py-16">
      <div className="mx-auto flex max-w-page flex-col gap-10 px-4 lg:flex-row lg:items-center lg:gap-16">
        <div className="flex w-full shrink-0 flex-col lg:w-[380px] items-start gap-5">
          <SectionLabel>OUR CLIENTS</SectionLabel>
          <h2 className="text-h2 text-ink">
            <span className="block">Trusted by</span>
            <span className="block text-text-brand">125+ businesses</span>
          </h2>
          <p className="text-body text-ink-muted">
            Hotels, plantations, traders, manufacturers and investment companies
            rely on us for their accounts, tax and advice.
          </p>
          <Button href="/clients" variant="secondary">
            View all clients
          </Button>
        </div>
        <div className="flex min-w-0 flex-1 flex-col gap-6">
          <div className="flex flex-wrap gap-4 sm:flex-nowrap sm:gap-6">
            {row1.map((c) => (
              <ClientTile key={c.id} name={c.name} logo={c.logo} />
            ))}
          </div>
          <div className="flex flex-wrap gap-4 sm:flex-nowrap sm:gap-6">
            {row2.map((c) => (
              <ClientTile key={c.id} name={c.name} logo={c.logo} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
