import { ContactSection } from "@/components/contact-section";
import { CtaSection } from "@/components/cta-section";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TestimonialsSection } from "@/components/testimonials-section";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <TestimonialsSection />
        <CtaSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
