import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

export const metadata = { title: "Case Studies | Momently" };

const studies = [
  {
    title: "EchoWave Tech",
    category: "Website Design & Branding",
    description:
      "A complete brand overhaul and website redesign that helped EchoWave Tech increase online engagement by 150%.",
  },
  {
    title: "Eagle Aid",
    category: "Brand Identity",
    description:
      "Crafted a compelling brand identity that resonated with Eagle Aid's humanitarian mission and expanded their donor reach.",
  },
  {
    title: "Prosper Labs Ltd",
    category: "AI & Automation",
    description:
      "Implemented intelligent automation workflows that reduced manual processes by 60% and improved operational efficiency.",
  },
  {
    title: "GreenField Analytics",
    category: "Web Scraping & SEO",
    description:
      "Built a comprehensive data extraction pipeline and SEO strategy that tripled organic traffic within 6 months.",
  },
];

export default function CaseStudiesPage() {
  return (
    <main className="pt-24 pb-16">
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Case <span className="text-accent">Studies</span>
        </h1>
        <p className="text-muted text-lg max-w-2xl leading-relaxed mb-16">
          Explore our portfolio of impactful projects that have helped businesses
          grow, innovate, and stand out.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {studies.map((study) => (
            <div
              key={study.title}
              className="bg-dark-card border border-dark-border rounded-2xl p-8 hover:border-muted/50 transition group"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-xs text-accent bg-accent/10 px-3 py-1 rounded-full">
                  {study.category}
                </span>
                <ExternalLink
                  size={16}
                  className="text-muted group-hover:text-white transition"
                />
              </div>
              <h3 className="text-2xl font-bold mb-3">{study.title}</h3>
              <p className="text-sm text-muted leading-relaxed">
                {study.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-accent text-black px-7 py-3.5 rounded-full font-semibold hover:bg-accent-dim transition"
          >
            Start your project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
