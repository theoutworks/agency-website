"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-dark-card border border-dark-border rounded-3xl p-12 md:p-20 text-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(200,255,0,0.05)_0%,_transparent_70%)]" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              Let&apos;s bring your vision to life
            </h2>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-accent text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent-dim transition"
            >
              Book a discovery call <ArrowRight size={18} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
