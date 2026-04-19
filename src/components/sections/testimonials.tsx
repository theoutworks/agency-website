"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "They're a true partner in our growth. Their work has been instrumental in helping us reach new heights, and we look forward to continuing our commercial relationship.",
    name: "Farhan Ahmed",
    company: "EchoWave Tech",
  },
  {
    text: "Their team took the time to truly understand our vision and delivered a brand identity that exceeded our expectations. The feedback from our customers has been positive.",
    name: "Omeed Karimi",
    company: "Eagle Aid",
  },
  {
    text: "Momently brought our ideas to life in ways we never imagined. Their innovative approach and attention to detail made our project a huge success. Highly recommended.",
    name: "Aarush Goyal",
    company: "Automation Company",
  },
  {
    text: "We came with a challenge, and they delivered beyond our expectations. Their team was not only creative but also strategic, helping us navigate the digital landscape with ease.",
    name: "Liam Copping",
    company: "Prosper Labs Ltd",
  },
];

export function Testimonials() {
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
            Trusted by industry leaders and{" "}
            <span className="text-accent">loved by clients</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto leading-relaxed">
            At Momently, our clients&apos; success stories are our greatest
            achievement. Hear what our partners have to say.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-dark-card border border-dark-border rounded-2xl p-8 hover:border-muted/50 transition"
            >
              <Quote className="w-8 h-8 text-accent/30 mb-4" />
              <p className="text-light leading-relaxed mb-6">{t.text}</p>
              <div>
                <p className="font-semibold">{t.name}</p>
                <p className="text-sm text-muted">{t.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
