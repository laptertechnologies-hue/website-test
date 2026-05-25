import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import hero from "@/assets/hero-farm.jpg";
import cowsBarn from "@/assets/cows-barn.jpg";
import cowsTrough from "@/assets/cows-trough.jpg";
import dairy from "@/assets/dairy-outlet.jpg";
import maize from "@/assets/maize-field.jpg";
import beans from "@/assets/beans-bags.jpg";
import harvest from "@/assets/harvest-loading.jpg";
import g01 from "@/assets/gallery/g01.jpg";
import g02 from "@/assets/gallery/g02.jpg";
import g03 from "@/assets/gallery/g03.jpg";
import g04 from "@/assets/gallery/g04.jpg";
import g05 from "@/assets/gallery/g05.jpg";
import g06 from "@/assets/gallery/g06.jpg";
import g07 from "@/assets/gallery/g07.jpg";
import g08 from "@/assets/gallery/g08.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Musikuli Dairies Ltd" },
      { name: "description", content: "Photos of our dairy farm, milk collection, agro produce harvest and the farming community we work with in Luwero, Uganda." },
      { property: "og:title", content: "Gallery — Musikuli Dairies Ltd" },
      { property: "og:description", content: "Inside the Musikuli Dairies farm and community." },
    ],
  }),
  component: Gallery,
});

const images: { src: string; alt: string }[] = [
  { src: hero, alt: "Friesian dairy cows grazing across rolling Luwero hills at dawn" },
  { src: cowsBarn, alt: "Dairy cows feeding inside the Musikuli barn" },
  { src: dairy, alt: "Fresh milk being bottled from the collection can" },
  { src: g01, alt: "Stainless steel milk cans at a collection centre" },
  { src: g06, alt: "Farmers greeted at a milk collection centre" },
  { src: cowsTrough, alt: "A dairy cow at the feeding trough" },
  { src: g07, alt: "Herd being walked home along a country road" },
  { src: maize, alt: "Maize field under a clear blue sky" },
  { src: g02, alt: "Farmer holding freshly harvested maize cobs" },
  { src: g08, alt: "Baskets of golden maize at market" },
  { src: beans, alt: "Sacks of dried red kidney beans in storage" },
  { src: g05, alt: "Grains and legumes on display at a produce store" },
  { src: harvest, alt: "Workers loading sacks of harvest onto a truck" },
  { src: g03, alt: "Delivery truck loaded with fresh farm produce" },
  { src: g04, alt: "Paddy rice field at sunrise" },
];

function Gallery() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Gallery</p>
          <h1 className="mt-3 text-4xl font-bold text-foreground md:text-5xl">A look inside the farm, the herd and the harvest.</h1>
          <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
            From sunrise milking to the season's harvest moving out by truck — a few moments from our work with farming communities across the Greater Luwero region.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [column-fill:_balance]">
          {images.map((img, i) => (
            <figure key={i} className="mb-4 break-inside-avoid overflow-hidden rounded-2xl ring-1 ring-border bg-card shadow-sm">
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-auto w-full object-cover transition duration-700 hover:scale-[1.02]"
              />
            </figure>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-muted-foreground">
          Have a photo from a delivery, training or collection day? Send it to{" "}
          <a href="mailto:musikuliimran@gmail.com" className="text-primary underline">musikuliimran@gmail.com</a> and we'll feature it here.
        </p>
      </section>

      <SiteFooter />
    </div>
  );
}
