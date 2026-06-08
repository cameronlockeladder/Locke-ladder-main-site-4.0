import { Link } from "react-router-dom";
import { NAP, NAV_LINKS } from "@/data/content";

export const Footer = () => (
  <footer data-testid="site-footer" className="border-t border-line bg-ink-2">
    <div className="shell py-16 md:py-20">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
        {/* Brand */}
        <div className="md:col-span-4">
          <Link to="/" className="flex items-center gap-3" aria-label="Locke and Ladder home">
            <img src="/brand/ll-icon.webp" width="36" height="36" alt="" aria-hidden="true" className="h-8 w-8 object-contain" />
            <span className="font-display text-xl font-medium tracking-tight text-paper">Locke &amp; Ladder</span>
          </Link>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-paper/60">
            Premium exterior design and roofing for high-end homes in the Indianapolis metro and the
            western Chicago suburbs.
          </p>
          <p className="mt-5 text-xs uppercase tracking-eyebrow text-paper/40">Brava preferred / Pella certified</p>
        </div>

        {/* Offices (visible NAP) */}
        <div className="md:col-span-4">
          <h2 className="eyebrow">Offices</h2>
          <address className="mt-5 grid grid-cols-1 gap-6 not-italic sm:grid-cols-2">
            {NAP.offices.map((o) => (
              <div key={o.label} data-testid={`footer-office-${o.label.split(" ")[0].toLowerCase()}`}>
                <p className="text-sm font-medium text-paper">{o.label}</p>
                {o.lines.map((line) => (
                  <p key={line} className="text-sm text-paper/60">{line}</p>
                ))}
                <a href={o.phoneHref} className="mt-1 inline-block text-sm text-paper/80 hover:text-copper transition-colors">
                  {o.phone}
                </a>
              </div>
            ))}
          </address>
        </div>

        {/* Contact + hours + explore */}
        <div className="md:col-span-4">
          <h2 className="eyebrow">Contact</h2>
          <div className="mt-5 space-y-1 text-sm">
            <a href={NAP.phoneHref} data-testid="footer-phone" className="block text-paper/80 hover:text-copper transition-colors">
              {NAP.phone}
            </a>
            <a href={`mailto:${NAP.email}`} data-testid="footer-email" className="block text-paper/80 hover:text-copper transition-colors">
              {NAP.email}
            </a>
          </div>
          <dl className="mt-6 space-y-1 text-sm">
            {NAP.hours.map((h) => (
              <div key={h.day} className="flex justify-between gap-4 max-w-[18rem]">
                <dt className="text-paper/50">{h.day}</dt>
                <dd className="text-paper/80">{h.time}</dd>
              </div>
            ))}
          </dl>
          <nav className="mt-8 flex flex-wrap gap-x-5 gap-y-2" aria-label="Footer">
            {NAV_LINKS.map((l) => (
              <Link key={l.href} to={l.href} className="text-xs text-paper/50 hover:text-paper transition-colors">
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <div className="mt-14 flex flex-col gap-2 border-t border-line pt-6 text-xs text-paper/40 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Locke &amp; Ladder. All rights reserved.</p>
        <p>Indianapolis Metro and Western Chicago Suburbs</p>
      </div>
    </div>
  </footer>
);

export default Footer;
