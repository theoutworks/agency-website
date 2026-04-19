"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Palette, Sparkles } from "lucide-react";

const cards = [
  {
    icon: <Palette className="w-6 h-6 text-accent" />,
    title: "Delivering creative digital solutions",
    description:
      "We believe that great branding is the key to success. We pride ourselves on pushing the boundaries of creativity and delivering solutions that help our clients stand out.",
    link: "/services",
    linkText: "Explore services",
  },
  {
    icon: <Sparkles className="w-6 h-6 text-accent" />,
    title: "Crafting compelling brand identities",
    description:
      "Our team of visionaries, designers, and strategists work in harmony to deliver results that resonate with your audience. We're here to turn your vision into reality.",
    link: "/case-studies",
    linkText: "View case studies",
  },
];

export function About() {
  return (
    <section className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm text-muted mb-4 uppercase tracking-wider"
        >
          Trusted by local businesses around you!
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-dark-card border border-dark-border rounded-2xl p-8 flex flex-col justify-between hover:border-muted/50 transition group"
            >
              <div>
                <div className="mb-5">{card.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
                <p className="text-muted leading-relaxed">{card.description}</p>
              </div>
              <Link
                href={card.link}
                className="mt-6 inline-flex items-center gap-2 text-sm text-accent font-medium group-hover:gap-3 transition-all"
              >
                {card.linkText} <ArrowRight size={14} />
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-6 bg-dark-card border border-dark-border rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold mb-4">
            At Momently, our priority is to deliver{" "}
            <span className="text-accent">real results</span>
          </h3>
          <p className="text-muted leading-relaxed max-w-3xl">
            We&apos;re committed to exceeding your expectations, delivering
            projects on time, within budget, and to a high standard.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
