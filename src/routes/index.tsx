import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import heroFarm from "@/assets/hero-farm.jpg";
import maizeField from "@/assets/maize-field.jpg";
import beans from "@/assets/beans-bags.jpg";
import dairyOutlet from "@/assets/dairy-outlet.jpg";
import harvest from "@/assets/harvest-loading.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Musikuli Dairies Ltd — Milk & Agro Produce, Luwero Uganda" },
      { name: "description", content: "Musikuli Dairies Ltd supplies quality milk and agro produce from Luwero, Uganda — supporting 200+ smallholder farmers across the Greater Luwero region." },
      { property: "og:title", content: "Musikuli Dairies Ltd — Milk & Agro Produce" },
      { property: "og:description", content: "Quality dairy and agro produce from the heart of Luwero, Uganda." },
    ],
  }),
  component: Home,
});

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl bg-card/10 p-6 ring-1 ring-primary-foreground/15 backdrop-blur">
      <div className="text-3xl font-bold text-accent md:text-4xl">{value}</div>
      <div className="mt-1 text-sm text-primary-foreground/75">{label}</div>
    </div>
  );
}

function ProductCard({ img, title, desc }: { img: string; title: string; desc: string }) {
  return (
    <article className="group overflow-hidden rounded-2xl bg-card shadow-sm ring-1 ring-border transition hover:shadow-[var(--shadow-soft)]">
      <div className="aspect-[4/3] overflow-hidden">
        <img src={img} alt={title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
      </div>
    </article>
  );
}

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden text-primary-foreground" style={{ background: "var(--gradient-hero)" }}>
        <div className="absolute inset-0 opacity-40" style={{ backgroundImage: `url(${heroFarm})`, backgroundSize: "cover", backgroundPosition: "center", mixBlendMode: "overlay" }} />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2 md:py-32">
          <div>
            <span className="inline-block rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-accent">
              Rooted in Luwero · Growing with Uganda
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              Fresh milk, honest harvests — straight from the farming heart of Luwero.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-primary-foreground/85">
              Musikuli Dairies Ltd buys, processes and supplies quality milk and agro produce while empowering hundreds of smallholder farmers across Luwero, Nakaseke and Nakasongola.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/products" className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-lg transition hover:brightness-110">
                Explore our products
              </Link>
              <Link to="/about" className="rounded-full border border-primary-foreground/30 px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary-foreground/10">
                Our story
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 self-end sm:grid-cols-2">
            <Stat value="200+" label="Smallholder families supported" />
            <Stat value="60+" label="Direct jobs created" />
            <Stat value="3" label="Districts sourced from" />
            <Stat value="2023" label="Year incorporated" />
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-5xl px-6 py-20 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Who we are</p>
        <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">
          A community-rooted dairy &amp; agro-produce enterprise.
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          Founded by Mr. Ibrahim Musikuli and Ms. Reginah Nabateregga, Musikuli Dairies sources milk and produce directly from farming communities — cutting waste, raising incomes and bringing quality Ugandan agriculture to more tables.
        </p>
      </section>

      {/* Products */}
      <section className="bg-secondary/50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">What we offer</p>
              <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">Products &amp; produce</h2>
            </div>
            <Link to="/products" className="hidden text-sm font-medium text-primary hover:underline md:inline">View all →</Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <ProductCard img={dairyOutlet} title="Fresh & processed milk" desc="Daily-sourced milk from Luwero, Nakaseke and Nakasongola, sold at our Kasana retail outlet." />
            <ProductCard img={maizeField} title="Maize, beans & rice" desc="Quality grains grown by our network of 200+ out-grower farmers under strict agronomy standards." />
            <ProductCard img={beans} title="Ground nuts & legumes" desc="Carefully sorted and stored produce ready for wholesale and retail distribution." />
          </div>
        </div>
      </section>

      {/* Initiative CTA */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid items-center gap-12 overflow-hidden rounded-3xl bg-card p-8 ring-1 ring-border md:grid-cols-2 md:p-0">
          <div className="order-2 p-4 md:order-1 md:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Farmer community initiative</p>
            <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">
              Bringing the milk collection point closer to the farmer.
            </h2>
            <p className="mt-5 text-muted-foreground">
              Up to 60% of farm milk is lost in transit. Our planned Milk Collection Centers in Luwero, Nakaseke and Nakasongola will cut that waste, stabilise farmer income and grow Uganda's dairy value chain.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-foreground">
              <li>• Bulk chilling at every collection center</li>
              <li>• Tailored agriculture finance for smallholders</li>
              <li>• Training at our Nsozibirye dairy &amp; learning center</li>
            </ul>
            <Link to="/initiatives" className="mt-8 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
              Learn more
            </Link>
          </div>
          <div className="order-1 aspect-[5/4] overflow-hidden md:order-2 md:rounded-l-none md:rounded-r-3xl">
            <img src={harvest} alt="Farmers loading harvested produce" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
