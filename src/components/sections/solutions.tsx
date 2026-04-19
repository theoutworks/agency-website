"use client";

import { motion } from "framer-motion";
import { Settings, Lightbulb, Users } from "lucide-react";

const solutions = [
  {
    icon: <Settings className="w-6 h-6 text-accent" />,
    title: "Tailored solutions",
    description:
      "We take the time to understand your specific needs, challenges, and goals.",
  },
  {
    icon: <Lightbulb className="w-6 h-6 text-accent" />,
    title: "Innovative thinking",
    description:
      "We thrive on pushing boundaries, exploring ideas, and staying ahead of trends.",
  },
  {
    icon: <Users className="w-6 h-6 text-accent" />,
    title: "Collaborative approach",
    description:
      "From the initial concept to the final delivery, we work closely with you.",
  },
];

export function Solutions() {
  return (
    <section className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Impactful solutions
          </h2>
          <p className="text-muted max-w-2xl mx-auto leading-relaxed">
            We focus on more than just delivering a service; we create solutions
            that make a difference. Each project is crafted to align with your
            goals, bringing impact to the forefront.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {solutions.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-dark-card border border-dark-border rounded-2xl p-8 text-center hover:border-muted/50 transition"
            >
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-5">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold mb-3">{item.title}</h3>
              <p className="text-sm text-muted leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
