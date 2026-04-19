import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-dark-border bg-dark">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-xl font-bold mb-4">momently</h3>
            <p className="text-sm text-muted leading-relaxed">
              Crafting unforgettable digital experiences for your brand through
              innovative design, strategy, marketing and storytelling.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-muted">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-muted">
              <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
              <li><Link href="/services" className="hover:text-white transition">Services</Link></li>
              <li><Link href="/case-studies" className="hover:text-white transition">Case Studies</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-muted">
              Services
            </h4>
            <ul className="space-y-2 text-sm text-muted">
              <li><Link href="/services#website-design" className="hover:text-white transition">Website Design</Link></li>
              <li><Link href="/services#ai-automation" className="hover:text-white transition">AI & Automation</Link></li>
              <li><Link href="/services#web-scraping" className="hover:text-white transition">Web Scraping</Link></li>
              <li><Link href="/services#seo" className="hover:text-white transition">SEO</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-muted">
              Open for projects
            </h4>
            <Link
              href="/contact"
              className="inline-block bg-accent text-black px-5 py-2.5 rounded-full text-sm font-medium hover:bg-accent-dim transition"
            >
              Get in touch
            </Link>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-dark-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted">
          <p>&copy; {new Date().getFullYear()} Momently. All rights reserved.</p>
          <p>Crafted with passion and precision.</p>
        </div>
      </div>
    </footer>
  );
}
