/**
 * Home page — Inditech Semicon Support
 * Style: Precision Industrial
 * Sections: Hero, Trust Stats, About, Services Grid, Process, Featured Products,
 *           Why Choose Us, Brand Coverage, FAQ, CTA, Footer
 */
import { Link } from "wouter";
import { ArrowRight, ArrowUpRight, Boxes, Wrench, Shield, Search, ChevronDown, Globe, Building2 } from "lucide-react";
import { useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { asset } from "@/lib/utils";
import {
  HERO_IMAGE,
  CTA_IMAGE,
  BLUEPRINT_PATTERN,
  SERVICES,
  FEATURED_PRODUCTS,
  FAQ,
  TRUST_STATS,
  PARTNER_BRANDS,
  PROCESS_STEPS,
  SITE,
  REGIONS,
  TARGET_INDUSTRIES,
} from "@/lib/site-data";

export default function Home() {
  return (
    <SiteLayout>
      <Hero />
      <TrustBar />
      <About />
      <Services />
      <Process />
      <FeaturedProducts />
      <WhyChooseUs />
      <BrandCoverage />
      <Faq />
      <CtaBanner />
    </SiteLayout>
  );
}

/* ========== HERO ========== */
function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center pt-20 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={asset(HERO_IMAGE)}
          alt="Semiconductor cleanroom corridor with precision equipment"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/92 to-background/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-transparent to-transparent" />
      </div>

      {/* Faint blueprint grid */}
      <div className="absolute inset-0 blueprint-grid opacity-40 pointer-events-none" />

      <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 py-20 items-center">
        <div className="lg:col-span-7 reveal">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-primary" />
            <span className="font-mono text-[11px] tracking-[0.18em] text-primary uppercase">
              India’s First · Est. 2024 · India + Singapore
            </span>
          </div>

          <h1 className="font-display font-bold text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[4.25rem] leading-[1.05] tracking-tight">
            India’s first semiconductor-focused{" "}
            <span className="text-primary">ESD & parts</span> company.
          </h1>

          <p className="mt-6 text-base md:text-lg text-foreground/75 max-w-2xl leading-relaxed">
            The first company in India dedicated exclusively to semiconductor equipment
            spare parts procurement, ESD product supply, and cleanroom solutions —
            now serving the Asia-Pacific region with hubs in India and Singapore.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="btn-cta inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-sm"
            >
              Request a Quote
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/catalog"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium border border-border hover:border-primary/60 hover:bg-primary/5 transition-all rounded-sm"
            >
              Browse Catalog
              <ArrowUpRight size={16} />
            </Link>
          </div>

          {/* Spec pills */}
          <div className="mt-10 flex flex-wrap gap-2.5">
            <span className="spec-pill">INDIA’S FIRST · SEMICON ESD & PARTS</span>
            <span className="spec-pill">107+ · ESD PRODUCT LINES</span>
            <span className="spec-pill">INDIA + SINGAPORE · DUAL HUB</span>
          </div>
        </div>

        {/* Right side: visual data card */}
        <div className="lg:col-span-5 reveal hidden lg:block">
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/5 blur-3xl pointer-events-none" />
            <div className="relative industrial-card p-6 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-5">
                <div className="text-overline text-muted-foreground">Live Inventory</div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  <span className="font-mono text-[10px] tracking-[0.15em] text-primary">ONLINE</span>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  { code: "AMAT 0010-21748", desc: "Match Network", status: "IN STOCK" },
                  { code: "AMAT 0010-00752", desc: "PCB Controller", status: "IN STOCK" },
                  { code: "AMAT 1080-01243", desc: "Servo Motor", status: "IN STOCK" },
                  { code: "0100-09042", desc: "OPTO Switch", status: "IN STOCK" },
                ].map((item) => (
                  <div key={item.code} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                    <div>
                      <div className="font-mono text-xs text-foreground">{item.code}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">{item.desc}</div>
                    </div>
                    <span className="font-mono text-[10px] tracking-[0.1em] text-primary">{item.status}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/services/spare-parts-supply"
                className="mt-5 flex items-center justify-between gap-2 px-3 py-2.5 border border-primary/30 text-primary text-xs font-mono tracking-[0.1em] hover:bg-primary/5 transition-all"
              >
                <span>VIEW FULL CATALOG</span>
                <Search size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-muted-foreground">
        <span className="font-mono text-[10px] tracking-[0.2em]">SCROLL</span>
        <ChevronDown size={14} className="animate-bounce" />
      </div>
    </section>
  );
}

/* ========== TRUST BAR ========== */
function TrustBar() {
  return (
    <section className="border-y border-border bg-card/30">
      <div className="container py-10 md:py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {TRUST_STATS.map((stat) => (
            <div key={stat.label} className="text-center md:text-left reveal">
              <div className="font-display font-bold text-3xl md:text-4xl text-primary">
                {stat.value}
              </div>
              <div className="mt-2 font-mono text-[11px] tracking-[0.15em] text-muted-foreground uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========== ABOUT ========== */
function About() {
  return (
    <section className="py-20 md:py-28">
      <div className="container grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <div className="lg:col-span-6 reveal">
          <div className="section-number mb-3">— 01 / ABOUT</div>
          <h2 className="accent-underline font-display font-bold text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight mb-6">
            India’s first. Now Asia-Pacific’s trusted partner.
          </h2>
          <p className="text-foreground/75 leading-relaxed mb-4">
            Inditech Semicon Support is India’s first company exclusively focused on
            semiconductor equipment spare parts procurement and ESD product supply.
            Today, with our Singapore regional hub, we serve the broader Asia-Pacific
            market as a trusted procurement and fulfillment partner for semiconductor,
            electronics, cleanroom, and industrial manufacturing companies.
          </p>
          <p className="text-foreground/75 leading-relaxed mb-8">
            Our dual-hub model combines India's deep supplier networks and technical
            expertise with Singapore's regional credibility and logistics advantage —
            delivering reliable sourcing, competitive pricing, and fast fulfillment
            across the region.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
          >
            Read our story
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="lg:col-span-6 reveal">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 border-l-2 border-t-2 border-primary/40" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-primary/40" />
            <img
              src={asset("images/its_abt_pic.jpg")}
              alt="Inditech Semicon Services facility"
              className="relative w-full h-auto object-cover aspect-[4/3]"
            />
            <div className="absolute -bottom-6 left-6 bg-card border border-border px-4 py-3 backdrop-blur">
              <div className="font-mono text-[10px] tracking-[0.15em] text-primary">DUAL HUB · EST. 2024</div>
              <div className="font-display font-bold text-lg leading-tight mt-1">India + Singapore</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ========== SERVICES ========== */
function Services() {
  return (
    <section className="py-20 md:py-28 relative">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <img src={asset(BLUEPRINT_PATTERN)} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="container relative">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="reveal">
            <div className="section-number mb-3">— 02 / SERVICES</div>
            <h2 className="accent-underline font-display font-bold text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight">
              A complete support stack<br />for modern fabs.
            </h2>
          </div>
          <p className="text-foreground/70 max-w-md leading-relaxed reveal">
            Six specialized service lines covering everything from urgent spare parts
            to scheduled cleanroom consumable deliveries — all under one roof.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service, i) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="industrial-card group flex flex-col reveal"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={asset(service.image)}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute top-3 left-3 font-mono text-[10px] tracking-[0.15em] text-primary bg-white/90 px-2 py-1 backdrop-blur-sm border border-primary/20">
                  0{i + 1}
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-display font-bold text-xl leading-tight mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed mb-5 flex-1">
                  {service.short}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {service.spec.slice(0, 2).map((s) => (
                      <span key={s.label} className="font-mono text-[9px] tracking-[0.1em] text-muted-foreground border border-border px-1.5 py-0.5">
                        {s.value}
                      </span>
                    ))}
                  </div>
                  <ArrowUpRight size={18} className="text-primary opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========== PROCESS ========== */
function Process() {
  return (
    <section className="py-20 md:py-28 border-t border-border bg-card/20">
      <div className="container">
        <div className="max-w-2xl mb-14 reveal">
          <div className="section-number mb-3">— 03 / PROCESS</div>
          <h2 className="accent-underline font-display font-bold text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight">
            From enquiry to validated uptime.
          </h2>
          <p className="mt-5 text-foreground/70 leading-relaxed">
            A four-step engagement designed for transparency, speed, and zero ambiguity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {PROCESS_STEPS.map((step, i) => (
            <div key={step.number} className="bg-background p-7 reveal" style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="flex items-baseline justify-between mb-4">
                <span className="font-display font-bold text-5xl text-primary/30">{step.number}</span>
                <span className="font-mono text-[10px] tracking-[0.15em] text-muted-foreground">STEP {i + 1}/4</span>
              </div>
              <h3 className="font-display font-bold text-xl mb-2">{step.title}</h3>
              <p className="text-sm text-foreground/70 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========== FEATURED PRODUCTS ========== */
function FeaturedProducts() {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="reveal">
            <div className="section-number mb-3">— 04 / CATALOG</div>
            <h2 className="accent-underline font-display font-bold text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight">
              Featured spare parts.
            </h2>
          </div>
          <Link href="/services/spare-parts-supply" className="reveal inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all">
            View full catalog <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {FEATURED_PRODUCTS.map((product, i) => (
            <div
              key={product.partNumber}
              className="industrial-card group cursor-pointer reveal"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="relative aspect-square overflow-hidden bg-card">
                <img
                  src={asset(product.image)}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 right-3 spec-pill text-[9px]">IN STOCK</div>
              </div>
              <div className="p-4">
                <div className="font-mono text-[10px] tracking-[0.15em] text-primary mb-1.5">
                  {product.partNumber}
                </div>
                <h3 className="font-medium text-sm leading-snug mb-2 group-hover:text-primary transition-colors">
                  {product.title}
                </h3>
                <div className="text-xs text-muted-foreground">{product.category}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========== WHY CHOOSE US ========== */
function WhyChooseUs() {
  const items = [
    {
      icon: Globe,
      title: "Dual-hub network",
      desc: "India + Singapore presence gives access to supplier networks across Asia with regional credibility.",
    },
    {
      icon: Boxes,
      title: "Complete solution",
      desc: "Single point of contact for spare parts, cleanroom consumables, ESD, packaging, and industrial supplies.",
    },
    {
      icon: Wrench,
      title: "Hard-to-find sourcing",
      desc: "Specialized capability to source difficult-to-find, obsolete, and long-lead-time components.",
    },
    {
      icon: Shield,
      title: "Standards-compliant",
      desc: "ANSI/ESD S20.20, ISO 14644, IPC-A-610, MIL-PRF-81705 — every product, every process.",
    },
    {
      icon: Search,
      title: "Full traceability",
      desc: "Documentation, test reports, and material certificates with every order.",
    },
    {
      icon: Building2,
      title: "Lean operations",
      desc: "Low-inventory procurement model minimizes capital risk while delivering competitive pricing.",
    },
  ];

  return (
    <section className="py-20 md:py-28 border-t border-border">
      <div className="container grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5 lg:sticky lg:top-28 reveal">
          <div className="section-number mb-3">— 05 / WHY US</div>
          <h2 className="accent-underline font-display font-bold text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight mb-6">
            The choice for Asia-Pacific's most demanding fabs.
          </h2>
          <p className="text-foreground/70 leading-relaxed">
            We bring unmatched expertise, a dual-hub network, and a deep understanding
            of the unique challenges faced by semiconductor and electronics manufacturers.
          </p>
          <Link
            href="/about"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
          >
            Why we exist <ArrowRight size={16} />
          </Link>
        </div>

        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {items.map((item, i) => (
            <div key={item.title} className="bg-background p-6 reveal" style={{ transitionDelay: `${i * 70}ms` }}>
              <item.icon className="text-primary mb-4" size={24} strokeWidth={1.5} />
              <h3 className="font-display font-bold text-base mb-2">{item.title}</h3>
              <p className="text-sm text-foreground/70 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========== BRAND COVERAGE ========== */
function BrandCoverage() {
  return (
    <section className="py-16 md:py-20 border-t border-border bg-card/20">
      <div className="container">
        <div className="text-center mb-10 reveal">
          <div className="section-number mb-3">— EQUIPMENT BRANDS WE SUPPORT —</div>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            We support spare parts and repair services for major semiconductor equipment OEMs.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5 reveal">
          {PARTNER_BRANDS.map((brand) => (
            <div
              key={brand}
              className="font-display font-semibold text-base md:text-lg text-foreground/60 hover:text-primary transition-colors"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========== FAQ ========== */
function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-20 md:py-28">
      <div className="container grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4 reveal">
          <div className="section-number mb-3">— 06 / FAQ</div>
          <h2 className="accent-underline font-display font-bold text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight mb-6">
            Frequently asked.
          </h2>
          <p className="text-foreground/70 leading-relaxed mb-6">
            Don't see your question? Our team is one message away.
          </p>
          <a
            href={SITE.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
          >
            Ask us on WhatsApp <ArrowRight size={16} />
          </a>
        </div>

        <div className="lg:col-span-8 reveal">
          <div className="border-t border-border">
            {FAQ.map((item, i) => {
              const isOpen = open === i;
              return (
                <div key={i} className="border-b border-border">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full text-left py-5 flex items-start justify-between gap-6 group"
                  >
                    <div className="flex items-start gap-4 flex-1">
                      <span className="font-mono text-xs text-primary mt-1 shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-display font-medium text-base md:text-lg leading-snug group-hover:text-primary transition-colors">
                        {item.q}
                      </span>
                    </div>
                    <ChevronDown
                      size={20}
                      className={`text-primary mt-1 shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-out ${
                      isOpen ? "max-h-96 pb-5" : "max-h-0"
                    }`}
                  >
                    <p className="text-sm text-foreground/70 leading-relaxed pl-9 pr-12">
                      {item.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ========== CTA BANNER ========== */
function CtaBanner() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-[oklch(0.20_0.04_250)] text-white">
      <div className="absolute inset-0">
        <img src={asset(CTA_IMAGE)} alt="" className="w-full h-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.20_0.04_250)] via-[oklch(0.20_0.04_250)]/85 to-[oklch(0.20_0.04_250)]/40" />
      </div>
      <div className="container relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 reveal">
          <div className="section-number mb-3">— READY WHEN YOU ARE</div>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight mb-5 text-white">
            Need a part. Need a fix. Need it now?
          </h2>
          <p className="text-white/80 max-w-xl leading-relaxed mb-8">
            Send us the part number, model, or service requirement. We'll respond
            within 24 hours with availability, lead time, and a transparent quote.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="btn-cta inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-sm"
            >
              Request a Quote <ArrowRight size={16} />
            </Link>
            <a
              href={SITE.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-medium border border-white/40 text-white hover:bg-white/10 transition-all rounded-sm"
            >
              WhatsApp Now <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
        <div className="lg:col-span-5 reveal">
          <div className="p-6 backdrop-blur-md bg-white/8 border border-white/15 rounded-sm">
            <div className="text-overline text-white/55 mb-4">Direct Contact</div>
            <div className="space-y-4">
              <div>
                <div className="font-mono text-[10px] tracking-[0.15em] text-[oklch(0.78_0.15_55)] mb-1">PHONE</div>
                <a href={`tel:${SITE.phoneRaw}`} className="font-display font-bold text-xl text-white hover:text-[oklch(0.78_0.15_55)] transition-colors">
                  {SITE.phone}
                </a>
              </div>
              <div className="border-t border-white/15 pt-4">
                <div className="font-mono text-[10px] tracking-[0.15em] text-[oklch(0.78_0.15_55)] mb-1">EMAIL</div>
                <a href={`mailto:${SITE.email}`} className="font-medium text-base text-white hover:text-[oklch(0.78_0.15_55)] transition-colors break-all">
                  {SITE.email}
                </a>
              </div>
              <div className="border-t border-white/15 pt-4">
                <div className="font-mono text-[10px] tracking-[0.15em] text-[oklch(0.78_0.15_55)] mb-1">LOCATIONS</div>
                <div className="text-sm">
                  <div>India: {SITE.address.line1}, {SITE.address.line2}</div>
                  <div className="mt-1">Singapore: Asia-Pacific Regional Hub</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
