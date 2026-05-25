import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Musikuli Dairies Ltd" },
      { name: "description", content: "Get in touch with Musikuli Dairies Ltd in Luwero, Uganda for milk and agro produce inquiries." },
      { property: "og:title", content: "Contact Musikuli Dairies Ltd" },
      { property: "og:description", content: "Reach our team in Luwero, Uganda." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Contact</p>
          <h1 className="mt-3 text-4xl font-bold text-foreground md:text-5xl">Let's talk milk &amp; produce.</h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Whether you are a buyer, a farmer, or a partner — we'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Reach us directly</h2>
          <dl className="mt-8 space-y-6 text-sm">
            <div>
              <dt className="font-semibold uppercase tracking-widest text-accent">Office &amp; farm</dt>
              <dd className="mt-2 text-foreground">Nsozibirye–Kigombe, Luwero Sub-County<br />Luwero District, Uganda</dd>
            </div>
            <div>
              <dt className="font-semibold uppercase tracking-widest text-accent">Postal</dt>
              <dd className="mt-2 text-foreground">P.O. Box 170174, Luwero, Uganda</dd>
            </div>
            <div>
              <dt className="font-semibold uppercase tracking-widest text-accent">Phone</dt>
              <dd className="mt-2 text-foreground">+256 200 933 861 · 0414 667 589</dd>
            </div>
            <div>
              <dt className="font-semibold uppercase tracking-widest text-accent">Email</dt>
              <dd className="mt-2 text-foreground">musikuliimran@gmail.com</dd>
            </div>
          </dl>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="rounded-2xl border border-border bg-card p-8 shadow-sm"
        >
          <h2 className="text-xl font-bold text-foreground">Send us a message</h2>
          <div className="mt-6 space-y-4">
            <div>
              <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Name</label>
              <input required className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Email</label>
              <input type="email" required className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Message</label>
              <textarea required rows={5} className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
            </div>
            <button type="submit" className="w-full rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90">
              {sent ? "Thank you — we'll be in touch." : "Send message"}
            </button>
          </div>
        </form>
      </section>

      <SiteFooter />
    </div>
  );
}
