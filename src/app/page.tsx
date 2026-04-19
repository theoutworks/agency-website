import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { WorkProcess } from "@/components/sections/work-process";
import { Solutions } from "@/components/sections/solutions";
import { Testimonials } from "@/components/sections/testimonials";
import { FAQ } from "@/components/sections/faq";
import { CTA } from "@/components/sections/cta";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <WorkProcess />
      <Solutions />
      <Testimonials />
      <FAQ />
      <CTA />
    </main>
  );
}
