import Link from "next/link";
import { ArrowRight, Target, Eye, Users } from "lucide-react";

export const metadata = { title: "About Us | Momently" };

export default function AboutPage() {
  return (
    <main className="pt-24 pb-16">
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          About <span className="text-accent">Momently</span>
        </h1>
        <p className="text-muted text-lg max-w-2xl leading-relaxed mb-16">
          We are a team of visionaries, designers, and strategists working in
          harmony to deliver digital experiences that resonate with your
          audience.
        </p>

        <div id="our-mission" className="grid md:grid-cols-3 gap-6 mb-20">
          {[
            {
              icon: <Target className="w-6 h-6 text-accent" />,
              title: "Our Mission",
              text: "To empower brands with innovative digital solutions that drive real, measurable growth.",
            },
            {
              icon: <Eye className="w-6 h-6 text-accent" />,
              title: "Our Vision",
              text: "To be the go-to digital partner for businesses seeking creative excellence and strategic impact.",
            },
            {
              icon: <Users className="w-6 h-6 text-accent" />,
              title: "Our Values",
              text: "Creativity, transparency, collaboration, and a relentless pursuit of quality in everything we do.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-dark-card border border-dark-border rounded-2xl p-8"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        <div id="our-passion" className="mb-20">
          <h2 className="text-3xl font-bold mb-6">Our Passion</h2>
          <p className="text-muted leading-relaxed max-w-3xl">
            Every project we take on is fuelled by a genuine passion for digital
            craft. We don&apos;t just build websites &mdash; we create
            experiences that leave lasting impressions. Our process blends
            creative intuition with data-driven strategy to ensure every pixel
            serves a purpose.
          </p>
        </div>

        <div id="meet-the-team">
          <h2 className="text-3xl font-bold mb-6">Meet the Team</h2>
          <p className="text-muted leading-relaxed max-w-3xl mb-8">
            Our diverse team brings together expertise in design, development,
            marketing, and strategy. Together, we turn ambitious ideas into
            digital realities.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-accent text-black px-6 py-3 rounded-full font-semibold hover:bg-accent-dim transition"
          >
            Work with us <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
