"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Search, PenTool, Rocket, FolderOpen, TrendingUp, Heart } from "lucide-react";

const steps = [
  { icon: <Search className="w-5 h-5" />, label: "Discover project & market study" },
  { icon: <PenTool className="w-5 h-5" />, label: "Design, develop & optimize" },
  { icon: <Rocket className="w-5 h-5" />, label: "Launch project & gather feedback" },
];

const stats = [
  {
    icon: <FolderOpen className="w-5 h-5 text-accent" />,
    title: "More than 10 projects",
    description:
      "Our portfolio showcases a selection of our most impactful client projects we worked on throughout our journey.",
    link: "/case-studies",
    linkText: "See our latest case studies",
  },
  {
    icon: <TrendingUp className="w-5 h-5 text-accent" />,
    title: "Rapidly Growing",
    description:
      "Our commitment to excellence and creativity drives every project we deliver.",
    link: "/about#our-mission",
    linkText: "Read about our story",
  },
  {
    icon: <Heart className="w-5 h-5 text-accent" />,
    title: "Driven by passion",
    description:
      "Our team lives and breathes creativity, bringing genuine passion to every project we contribute on.",
    link: "/about#meet-the-team",
    linkText: "Meet the team",
  },
];

export function WorkProcess() {
  return (
    <section className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        {/* Work Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-dark-card border border-dark-border rounded-2xl p-8 md:p-12 mb-6"
        >
          <h3 className="text-xl font-bold mb-2">
            A work process that drives results
          </h3>
          <p className="text-muted text-sm leading-relaxed max-w-2xl mb-8">
            We work with a solid plan and a clear process. By combining
            creativity with strategic planning, we deliver solutions that not
            only look great but also drive meaningful results for your business.
          </p>
          <Link
            href="/about#our-passion"
            className="inline-flex items-center gap-2 text-sm text-accent font-medium mb-10 hover:gap-3 transition-all"
          >
            Learn more about our work process <ArrowRight size={14} />
          </Link>

          <div className="grid md:grid-cols-3 gap-4 mt-6">
            {steps.map((step, i) => (
              <div
                key={step.label}
                className="flex items-center gap-3 bg-dark rounded-xl border border-dark-border p-4"
              >
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">
                  {step.icon}
                </div>
                <div>
                  <span className="text-xs text-muted">Step {i + 1}</span>
                  <p className="text-sm font-medium">{step.label}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Stats cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-dark-card border border-dark-border rounded-2xl p-6 flex flex-col justify-between hover:border-muted/50 transition group"
            >
              <div>
                <div className="mb-4">{stat.icon}</div>
                <h4 className="text-lg font-bold mb-2">{stat.title}</h4>
                <p className="text-sm text-muted leading-relaxed">
                  {stat.description}
                </p>
              </div>
              <Link
                href={stat.link}
                className="mt-4 inline-flex items-center gap-2 text-sm text-accent font-medium group-hover:gap-3 transition-all"
              >
                {stat.linkText} <ArrowRight size={14} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
