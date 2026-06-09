import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Seo } from "@/components/seo/Seo";
import { ROBOTS, SITE } from "@/data/siteMeta";
import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";

// Lightweight placeholder so navigation targets resolve cleanly.
// The full service / cost / area pages are intentionally not built in this task.
export default function ComingSoon({ title = "Page" }) {
  const seo = {
    metaTitle: `${title} - Locke & Ladder`,
    metaDescription: "This Locke & Ladder page is in progress.",
    robots: ROBOTS,
    canonical: `${SITE.baseUrl}/`,
  };
  return (
    <>
      <Seo seo={seo} />
      <Nav />
      <main data-testid="coming-soon" className="flex min-h-[100svh] items-center bg-ink">
        <div className="shell py-40">
          <p className="eyebrow">Locke &amp; Ladder</p>
          <h1 className="font-display mt-5 text-4xl leading-tight tracking-tight text-paper sm:text-5xl md:text-6xl text-balance">
            {title} is on the way.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-paper/65 md:text-lg">
            This page is not built yet. The homepage and the roofing page are the live experiences for now.
            Head back and start with the question that matters most.
          </p>
          <Link
            to="/"
            data-testid="coming-soon-home"
            className="group mt-9 inline-flex items-center gap-2 bg-paper px-7 py-4 text-sm font-medium tracking-wide text-ink transition-colors duration-200 hover:bg-copper hover:text-paper"
          >
            <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
            Back to homepage
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
