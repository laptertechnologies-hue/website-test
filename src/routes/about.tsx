import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import founder from "@/assets/dairy-outlet.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Musikuli Dairies Ltd" },
      { name: "description", content: "Learn about Musikuli Dairies Ltd, our mission, vision and values as a Ugandan dairy and agro-produce enterprise." },
      { property: "og:title", content: "About Musikuli Dairies Ltd" },
      { property: "og:description", content: "Our mission, vision and values." },
    ],
  }),
  component: About,
});

const values = [
  "Ethics, integrity and excellence",
  "Professionalism",
  "Sustainability",
  "Total quality management",
  "Productivity",
  "Continuous improvement",
  "Efficiency and effectiveness",
];

function About() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">About us</p>
          <h1 className="mt-3 text-4xl font-bold text-foreground md:text-5xl">
            A Ugandan dairy &amp; agro-produce company built on community.
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
            Musikuli Dairies Limited is a limited liability company incorporated on 29 June 2023 (Reg. No. 80034163888407). Our farm sits at Nsozibirye Village, Kigombe parish, Luwero Sub-County — where we buy and sell agricultural produce and milk.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2">
        <img src={founder} alt="Musikuli Dairies office" className="w-full rounded-2xl object-cover shadow-[var(--shadow-soft)]" />
        <div>
          <h2 className="text-2xl font-bold text-foreground">Founded with purpose</h2>
          <p className="mt-4 text-muted-foreground">
            Musikuli Dairies was founded and is managed by <strong>Mr. Ibrahim Musikuli</strong> and <strong>Ms. Reginah Nabateregga</strong>, who are deeply involved in both farming and business across Uganda.
          </p>
          <p className="mt-4 text-muted-foreground">
            Uganda boasts a diverse range of agricultural produce, and we focus on the staples that matter most: maize, beans, rice, ground nuts, and both processed &amp; unprocessed milk.
          </p>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Mission</p>
            <p className="mt-4 text-lg leading-relaxed text-primary-foreground/90">
              To become the premier supplier of agricultural products and milk — building long-term relationships with suppliers, customers and consumers through consistent, sustainable supply of quality products, and improving livelihoods of local farmers across Uganda.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Vision</p>
            <p className="mt-4 text-lg leading-relaxed text-primary-foreground/90">
              To be the market leader of affordable high-quality agricultural products — recognised for our commitment to quality and for contributing to the economic and social development of the country.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Core values</p>
        <h2 className="mt-3 text-3xl font-bold text-foreground">What we stand for</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {values.map((v) => (
            <div key={v} className="rounded-xl border border-border bg-card p-5 shadow-sm">
              <div className="text-sm font-semibold text-primary">{v}</div>
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
