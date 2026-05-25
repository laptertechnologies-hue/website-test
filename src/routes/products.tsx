import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import dairy from "@/assets/dairy-outlet.jpg";
import maize from "@/assets/maize-field.jpg";
import beans from "@/assets/beans-bags.jpg";
import rice from "@/assets/gallery/g04.jpg";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Musikuli Dairies Ltd" },
      { name: "description", content: "Fresh and processed milk, maize, beans, rice and ground nuts sourced from smallholder farmers in Luwero, Nakaseke and Nakasongola." },
      { property: "og:title", content: "Products — Musikuli Dairies Ltd" },
      { property: "og:description", content: "Milk and agro produce from Luwero, Uganda." },
    ],
  }),
  component: Products,
});

const products = [
  { img: dairy, title: "Fresh & processed milk", desc: "Sourced daily from farmer communities in Luwero, Nakaseke and Nakasongola; sold at our Kasana–Luwero dairy retail outlet." },
  { img: maize, title: "Maize", desc: "Cleanly sorted and properly dried maize from our out-grower network — supplied in bulk to wholesalers and processors." },
  { img: beans, title: "Beans & ground nuts", desc: "Premium-grade legumes handled with strict post-harvest standards for consistent quality." },
      { img: rice, title: "Rice", desc: "Quality rice from selected smallholder farmers trained in modern agronomy and post-harvest handling." },
];

function Products() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Our products</p>
          <h1 className="mt-3 text-4xl font-bold text-foreground md:text-5xl">Milk &amp; the staples of Ugandan agriculture.</h1>
          <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
            We buy from trusted farming communities and supply two enterprises: a dairy business serving the Greater Luwero region, and an agro-produce business focused on Uganda's most important food crops.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-2">
          {products.map((p) => (
            <article key={p.title} className="overflow-hidden rounded-2xl bg-card ring-1 ring-border shadow-sm">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={p.img} alt={p.title} className="h-full w-full object-cover" />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-foreground">{p.title}</h2>
                <p className="mt-3 text-muted-foreground">{p.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
