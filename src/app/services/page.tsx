import Link from "next/link";
import { ArrowRight, Globe, Bot, Database, Search } from "lucide-react";

export const metadata = { title: "Services | Momently" };

const services = [
  {
    id: "website-design",
    icon: <Globe className="w-8 h-8 text-accent" />,
    title: "Website Design",
    description:
      "We design and develop stunning, responsive websites that captivate users and drive conversions. From landing pages to full-scale platforms.",
  },
  {
    id: "ai-automation",
    icon: <Bot className="w-8 h-8 text-accent" />,
    title: "AI & Automation",
    description:
      "Leverage the power of artificial intelligence and automation to streamline your workflows, reduce costs, and scale your business efficiently.",
  },
  {
    id: "web-scraping",
    icon: <Database className="w-8 h-8 text-accent" />,
    title: "Web Scraping",
    description:
      "Extract valuable data from the web with our reliable, scalable scraping solutions. Get the insights you need to make data-driven decisions.",
  },
  {
    id: "seo",
    icon: <Search className="w-8 h-8 text-accent" />,
    title: "SEO",
    description:
      "Boost your online visibility and organic traffic with our proven SEO strategies. We optimize every aspect to help you rank higher and reach more customers.",
  },
];

export default function ServicesPage() {
  return (
    <main className="pt-24 pb-16">
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Our <span className="text-accent">Services</span>
        </h1>
        <p className="text-muted text-lg max-w-2xl leading-relaxed mb-16">
          We offer a comprehensive range of digital services designed to help
          your brand stand out and succeed in the digital landscape.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              id={service.id}
              className="bg-dark-card border border-dark-border rounded-2xl p-8 hover:border-muted/50 transition"
            >
              <div className="mb-5">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-muted leading-relaxed mb-6">
                {service.description}
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm text-accent font-medium hover:gap-3 transition-all"
              >
                Get started <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
