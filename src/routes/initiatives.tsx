import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import cows from "@/assets/cows-trough.jpg";
import harvest from "@/assets/harvest-loading.jpg";

export const Route = createFileRoute("/initiatives")({
  head: () => ({
    meta: [
      { title: "Initiatives — Musikuli Dairies Ltd" },
      { name: "description", content: "Milk Collection Centers, farmer training and out-grower schemes empowering 200+ smallholder families across Greater Luwero." },
      { property: "og:title", content: "Community Initiatives — Musikuli Dairies" },
      { property: "og:description", content: "How we support farmers across Luwero, Nakaseke and Nakasongola." },
    ],
  }),
  component: Initiatives,
});

function Initiatives() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Community initiatives</p>
          <h1 className="mt-3 text-4xl font-bold text-foreground md:text-5xl">
            Closer to the farmer. Stronger food systems.
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
            Our work goes beyond buying and selling. We invest in the infrastructure, training and finance Ugandan smallholders need to thrive — reducing waste and improving livelihoods.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <img src={cows} alt="Dairy farm" className="rounded-2xl object-cover shadow-[var(--shadow-soft)]" />
          <div>
            <h2 className="text-3xl font-bold text-foreground">Milk Collection Centers (MCCs)</h2>
            <p className="mt-4 text-muted-foreground">
              Poor roads and long transport distances cause up to <strong>50–60% of farm milk to be lost</strong> before it reaches market. Our planned Milk Collection Centers across Luwero, Nakaseke and Nakasongola will bring chilling and aggregation right next to the farming community.
            </p>
            <ul className="mt-6 space-y-3 text-foreground">
              <li className="flex gap-3"><span className="text-accent">●</span> Bulk chilling tanks at every collection point</li>
              <li className="flex gap-3"><span className="text-accent">●</span> Reduced transport costs for farmers</li>
              <li className="flex gap-3"><span className="text-accent">●</span> Reliable, daily market access for fresh milk</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2 md:items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold text-foreground">Out-grower scheme &amp; training</h2>
            <p className="mt-4 text-muted-foreground">
              Our social agriculture enterprise trains farmers in modern agronomy, post-harvest handling and financial literacy. We also provide tailored agriculture finance and run a learning centre at our Nsozibirye zero-grazing farm.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-xl bg-card p-5 text-center ring-1 ring-border">
                <div className="text-2xl font-bold text-primary">200+</div>
                <div className="mt-1 text-xs text-muted-foreground">Smallholder families</div>
              </div>
              <div className="rounded-xl bg-card p-5 text-center ring-1 ring-border">
                <div className="text-2xl font-bold text-primary">60+</div>
                <div className="mt-1 text-xs text-muted-foreground">Direct jobs</div>
              </div>
              <div className="rounded-xl bg-card p-5 text-center ring-1 ring-border">
                <div className="text-2xl font-bold text-primary">~1.5K</div>
                <div className="mt-1 text-xs text-muted-foreground">Lives impacted</div>
              </div>
            </div>
          </div>
          <img src={harvest} alt="Out-grower farmers loading harvest" className="order-1 rounded-2xl object-cover shadow-[var(--shadow-soft)] md:order-2" />
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Our partners</p>
        <h2 className="mt-3 text-2xl font-bold text-foreground">Working alongside trusted institutions</h2>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
          <span>Housing Finance Bank</span>
          <span>· dfcu Bank</span>
          <span>· Dairy Development Authority</span>
          <span>· DAFAN Uganda</span>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
