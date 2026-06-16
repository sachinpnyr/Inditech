/**
 * Services list page
 * Style: Precision Industrial — service grid with detailed cards
 */
import { Link } from "wouter";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { asset } from "@/lib/utils";
import { SERVICES, BLUEPRINT_PATTERN, SITE } from "@/lib/site-data";

export default function Services() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-30 pointer-events-none" />
        <div className="container relative">
          <div className="section-number mb-4">— SERVICES</div>
          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight max-w-4xl">
            A complete support stack <span className="text-primary">engineered for fabs.</span>
          </h1>
          <p className="mt-6 text-base md:text-lg text-foreground/75 max-w-2xl leading-relaxed">
            Six specialized service lines — from urgent OEM spare parts to scheduled
            cleanroom consumable deliveries. All under one roof, all to fab-grade standards.
          </p>
        </div>
      </section>

      {/* Services grid - alternating */}
      <section className="border-t border-border relative">
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <img src={asset(BLUEPRINT_PATTERN)} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container relative py-10">
          {SERVICES.map((service, i) => (
            <div
              key={service.slug}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center py-16 md:py-20 ${
                i !== 0 ? "border-t border-border" : ""
              }`}
            >
              {/* Image */}
              <div
                className={`lg:col-span-6 reveal ${
                  i % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <div className="relative">
                  <div className={`absolute -inset-3 ${i % 2 === 0 ? "border-l-2 border-t-2" : "border-r-2 border-t-2"} border-primary/40`} style={{
                    [i % 2 === 0 ? "right" : "left"]: "30%",
                    [i % 2 === 0 ? "bottom" : "bottom"]: "30%",
                  }} />
                  <img
                    src={asset(service.image)}
                    alt={service.title}
                    className="relative w-full h-auto object-cover aspect-[4/3]"
                  />
                  <div className="absolute top-4 left-4 font-mono text-xs tracking-[0.15em] text-primary bg-background/80 px-3 py-1.5 backdrop-blur">
                    0{i + 1} / 0{SERVICES.length}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div
                className={`lg:col-span-6 reveal ${
                  i % 2 === 1 ? "lg:order-1" : ""
                }`}
              >
                <div className="section-number mb-3">— SERVICE / 0{i + 1}</div>
                <h2 className="font-display font-bold text-3xl md:text-4xl leading-tight tracking-tight mb-5">
                  {service.title}
                </h2>
                <p className="text-foreground/75 leading-relaxed mb-6">{service.description}</p>

                {/* Highlights */}
                <ul className="space-y-2.5 mb-7">
                  {service.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3 text-sm">
                      <span className="font-mono text-primary mt-0.5">›</span>
                      <span className="text-foreground/85">{h}</span>
                    </li>
                  ))}
                </ul>

                {/* Spec pills */}
                <div className="flex flex-wrap gap-2 mb-7">
                  {service.spec.map((s) => (
                    <div key={s.label} className="border border-border px-3 py-1.5">
                      <div className="font-mono text-[9px] tracking-[0.15em] text-muted-foreground mb-0.5">
                        {s.label}
                      </div>
                      <div className="font-mono text-xs text-primary font-medium">
                        {s.value}
                      </div>
                    </div>
                  ))}
                </div>

                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
                >
                  Service details <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 border-t border-border bg-card/30">
        <div className="container text-center max-w-3xl mx-auto reveal">
          <div className="section-number mb-3">— GET STARTED</div>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight mb-5">
            Talk to an engineer.
          </h2>
          <p className="text-foreground/70 leading-relaxed mb-8">
            Send us your part number, equipment model, or service requirement.
            We'll respond within 24 hours.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="btn-cta inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-sm">
              Request a Quote <ArrowRight size={16} />
            </Link>
            <a href={SITE.whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-medium border border-primary/40 text-primary hover:bg-primary/5 transition-all rounded-sm">
              WhatsApp Direct
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
