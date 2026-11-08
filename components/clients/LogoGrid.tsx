import ClientTile from "@/components/ClientTile";
import { getClients } from "@/lib/sanity/queries";

export default async function LogoGrid() {
  const clients = await getClients();

  return (
    <section className="bg-surface-200 pb-16 pt-4">
      <div className="mx-auto max-w-page px-4">
        <ul className="grid grid-cols-2 gap-4 rounded-lg border border-line bg-surface-100 p-4 sm:grid-cols-3 sm:gap-6 sm:p-8 lg:grid-cols-6 lg:p-10">
          {clients.map((c) => (
            <li key={c.id} className="flex">
              <ClientTile name={c.name} logo={c.logo} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
