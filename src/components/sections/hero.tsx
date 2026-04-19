"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--color-dark-card)_0%,_var(--color-dark)_70%)]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 border border-dark-border rounded-full px-2 py-1.5 pr-4 text-xs text-muted mb-8"
        >
          {/* Overlapping avatar stack */}
          <div className="flex -space-x-2">
            {[
              "https://randomuser.me/api/portraits/women/44.jpg",
              "https://randomuser.me/api/portraits/men/32.jpg",
              "https://randomuser.me/api/portraits/women/68.jpg",
              "https://randomuser.me/api/portraits/men/75.jpg",
              "https://randomuser.me/api/portraits/women/90.jpg",
            ].map((src, i) => (
              <img
                key={i}
                src={src}
                alt=""
                className="w-7 h-7 rounded-full border-2 border-dark object-cover"
              />
            ))}
          </div>
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          Trusted by 200+ clients
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-6"
        >
          Elevate your brand with{" "}
          <span className="text-accent">digital marketing</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Crafting unforgettable digital experiences for your brand through
          innovative design, strategy, marketing and storytelling.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            href="/contact"
            className="bg-accent text-black px-7 py-3.5 rounded-full font-semibold hover:bg-accent-dim transition flex items-center gap-2"
          >
            Book a discovery call <ArrowRight size={16} />
          </Link>
          <Link
            href="/services"
            className="border border-dark-border px-7 py-3.5 rounded-full font-medium text-white hover:border-muted transition"
          >
            Explore services
          </Link>
        </motion.div>

        {/* Service pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 flex flex-wrap justify-center gap-3"
        >
          {["Website Design", "AI & Automation", "Web Scraping", "SEO"].map(
            (service) => (
              <span
                key={service}
                className="border border-dark-border rounded-full px-5 py-2 text-sm text-muted hover:text-white hover:border-muted transition cursor-default"
              >
                {service}
              </span>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
}
