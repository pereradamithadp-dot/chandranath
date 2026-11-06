import IndustryTile from "@/components/IndustryTile";
import SectionLabel from "@/components/SectionLabel";

const industries = [
  {
    title: "Hospitality",
    text: "Saru Blue Sapphire Hotel, Royal Reach Family Resort",
    image: "/images/home/industry-hospitality.png",
  },
  {
    title: "Plantations",
    text: "Milla Plantations, Millavitiya Ceylon Tea",
    image: "/images/home/industry-plantations.png",
  },
  {
    title: "Trading",
    text: "Anru Trading, G S Auto Spares",
    image: "/images/home/industry-trading.png",
  },
  {
    title: "Manufacturing",
    text: "Anoma Chemicals, Top Notch Water System",
    image: "/images/home/industry-manufacturing.png",
  },
  {
    title: "Investments",
    text: "SARU Investments, Chethana Investments",
    image: "/images/home/industry-investments.png",
  },
];

type IndustriesProps = {
  /** Two-line heading: [plain line, crimson line] */
  heading?: [string, string];
  description?: string;
  /** Vertical padding classes for the section. */
  spacing?: string;
  descriptionWidth?: string;
};

export default function Industries({
  heading = ["Trusted across", "Sri Lankan industries"],
  description = "From hotels and tea estates to traders, manufacturers and investment companies, we work with businesses of every size.",
  spacing = "py-20",
  descriptionWidth = "w-[440px]",
}: IndustriesProps) {
  return (
    <section className={`bg-surface-200 ${spacing}`}>
      <div className="mx-auto flex max-w-page flex-col gap-12 px-4">
        <div className="flex items-end justify-between gap-16">
          <div className="flex w-[600px] flex-col gap-4">
            <SectionLabel>INDUSTRIES WE SERVE</SectionLabel>
            <h2 className="text-h2 text-ink">
              <span className="block">{heading[0]}</span>
              <span className="block text-text-brand">{heading[1]}</span>
            </h2>
          </div>
          <p className={`${descriptionWidth} text-body text-ink-muted`}>
            {description}
          </p>
        </div>
        <div className="flex gap-6">
          {industries.map((i) => (
            <IndustryTile key={i.title} {...i} />
          ))}
        </div>
      </div>
    </section>
  );
}
