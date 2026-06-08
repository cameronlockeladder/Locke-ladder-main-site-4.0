import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, NAP } from "@/data/content";

const slug = (s) => s.toLowerCase().replace(/[^a-z]+/g, "-").replace(/(^-|-$)/g, "");

const Wordmark = ({ onClick }) => (
  <Link
    to="/"
    onClick={onClick}
    data-testid="nav-logo"
    className="flex items-center gap-3 shrink-0"
    aria-label="Locke and Ladder home"
  >
    <img
      src="/brand/ll-icon.webp"
      width="32"
      height="32"
      alt=""
      aria-hidden="true"
      className="h-7 w-7 object-contain"
    />
    <span className="font-display text-base md:text-lg font-medium tracking-tight text-paper">
      Locke &amp; Ladder
    </span>
  </Link>
);

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.body.style.overflow = open ? "hidden" : "";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
    <header
      data-testid="site-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "bg-ink/90 backdrop-blur-md border-b border-line"
          : "bg-gradient-to-b from-black/50 to-transparent"
      }`}
    >
      <nav className="shell flex items-center justify-between h-16 md:h-20" aria-label="Primary">
        <Wordmark />

        <div className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              data-testid={`nav-link-${slug(l.label)}`}
              className="text-[0.82rem] tracking-wide text-paper/70 hover:text-paper transition-colors duration-200"
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/start-here/"
            data-testid="nav-cta-start"
            className="ml-1 inline-flex items-center bg-paper text-ink px-5 py-2.5 text-[0.82rem] font-medium tracking-wide hover:bg-copper hover:text-paper transition-colors duration-200"
          >
            Start here
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          data-testid="mobile-menu-toggle"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="lg:hidden inline-flex items-center justify-center h-11 w-11 -mr-2 text-paper"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>
      </header>

      {open && (
        <div
          id="mobile-menu"
          data-testid="mobile-menu"
          className="lg:hidden fixed inset-x-0 top-16 md:top-20 h-[calc(100dvh-4rem)] md:h-[calc(100dvh-5rem)] bg-ink z-40 overflow-y-auto"
        >
          <div className="shell py-10 flex flex-col">
            <ul className="flex flex-col">
              {NAV_LINKS.map((l, i) => (
                <li key={l.href} className="border-b border-line">
                  <Link
                    to={l.href}
                    onClick={() => setOpen(false)}
                    data-testid={`mobile-nav-link-${slug(l.label)}`}
                    className="block py-5 font-display text-2xl font-medium text-paper"
                  >
                    <span className="eyebrow mr-4 align-middle text-copper">0{i + 1}</span>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              to="/start-here/"
              onClick={() => setOpen(false)}
              data-testid="mobile-nav-cta-start"
              className="mt-8 inline-flex items-center justify-center bg-paper text-ink px-6 py-4 text-sm font-medium tracking-wide"
            >
              Start with your project
            </Link>

            <div className="mt-10 text-sm text-paper/60 space-y-1">
              <a href={NAP.phoneHref} className="block hover:text-paper transition-colors">
                {NAP.phone}
              </a>
              <a href={`mailto:${NAP.email}`} className="block hover:text-paper transition-colors">
                {NAP.email}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Nav;
