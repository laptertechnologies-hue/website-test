import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="text-lg font-bold tracking-wide">MUSIKULI DAIRIES LTD</div>
          <p className="mt-3 max-w-md text-sm text-primary-foreground/75">
            Dealers in milk &amp; agro produce. Building long-term partnerships with smallholder farmers across the Greater Luwero region of Uganda.
          </p>
        </div>
        <div>
          <div className="text-sm font-semibold uppercase tracking-wider text-accent">Explore</div>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            <li><Link to="/about" className="hover:text-accent">About us</Link></li>
            <li><Link to="/products" className="hover:text-accent">Products</Link></li>
            <li><Link to="/initiatives" className="hover:text-accent">Initiatives</Link></li>
            <li><Link to="/gallery" className="hover:text-accent">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold uppercase tracking-wider text-accent">Reach us</div>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            <li>Nsozibirye–Kigombe, Luwero</li>
            <li>P.O. Box 170174, Luwero, Uganda</li>
            <li>+256 200 933 861 · 0414 667 589</li>
            <li>musikuliimran@gmail.com</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-2 px-6 py-5 text-xs text-primary-foreground/60 md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} Musikuli Dairies Limited. All rights reserved.</span>
          <span>Reg. No. 80034163888407</span>
        </div>
      </div>
    </footer>
  );
}
