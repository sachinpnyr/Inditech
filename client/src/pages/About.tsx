/**
 * About page — Inditech Semicon Support
 * Style: Precision Industrial — light theme
 * Updated for India + Singapore partnership / Asia-Pacific positioning
 */
import { Link } from "wouter";
import { ArrowRight, Target, Eye, Shield, Award, Users, Globe, MapPin, Building2, Plane } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { asset } from "@/lib/utils";
import { HERO_IMAGE, BLUEPRINT_PATTERN, SITE, TRUST_STATS, REGIONS, COMPETITIVE_ADVANTAGES } from "@/lib/site-data";

export default function About() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={asset(HERO_IMAGE)} alt="" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/85 to-background" />
        </div>
        <div className="absolute inset-0 blueprint-grid opacity-30 pointer-events-none" />
        <div className="container relative">
          <div className="section-number mb-4">— ABOUT US</div>
          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight max-w-4xl">
            India’s first semiconductor-focused <span className="text-primary">ESD & parts</span> company.
          </h1>
          <p className="mt-6 text-base md:text-lg text-foreground/75 max-w-2xl leading-relaxed">
            Inditech Semicon Support is India’s first company exclusively dedicated to
            semiconductor equipment spare parts procurement and ESD product supply —
            now serving the Asia-Pacific region with hubs in India and Singapore.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-28 border-t border-border">
        <div className="container grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-28 reveal">
            <div className="section-number mb-3">— 01 / OUR STORY</div>
            <h2 className="accent-underline font-display font-bold text-3xl md:text-4xl leading-tight tracking-tight">
              India’s first semiconductor ESD & parts company — now serving Asia-Pacific.
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-5 reveal">
            <p className="text-foreground/80 leading-relaxed text-lg">
              Asia's semiconductor ecosystem is growing at unprecedented speed. As fabs
              come online and equipment OEMs deepen their footprint across the region, one
              critical gap has become clear — the support infrastructure for spare parts,
              consumables, and procurement services.
            </p>
            <p className="text-foreground/75 leading-relaxed">
              Inditech Semicon Support was founded to close that gap. As India’s first
              company exclusively focused on semiconductor equipment spare parts procurement
              and ESD product supply, we have now expanded with a Singapore regional hub to
              serve the broader Asia-Pacific market — covering semiconductor, electronics,
              cleanroom, and industrial manufacturing companies.
            </p>
            <p className="text-foreground/75 leading-relaxed">
              Our India headquarters in Kollam, Kerala provides the technical backbone —
              supplier relationships, product sourcing, repair services, and vendor
              development. Our Singapore hub handles regional business development,
              customer acquisition, quotation management, and logistics coordination.
              Together, we deliver a complete procurement solution with the speed and
              credibility that modern fabs demand.
            </p>
          </div>
        </div>
      </section>

      {/* Regional Presence */}
      <section className="py-20 md:py-28 border-t border-border bg-card/20 relative">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <img src={asset(BLUEPRINT_PATTERN)} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container relative">
          <div className="max-w-2xl mb-14 reveal">
            <div className="section-number mb-3">— 02 / REGIONAL PRESENCE</div>
            <h2 className="accent-underline font-display font-bold text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight">
              Two hubs. One mission.
            </h2>
            <p className="mt-5 text-foreground/70 leading-relaxed">
              Our dual-hub structure combines India's deep supplier networks with Singapore's
              regional credibility and logistics advantage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {REGIONS.filter(r => r.status === "active").map((region) => (
              <div key={region.name} className="industrial-card p-7 reveal">
                <div className="flex items-center gap-3 mb-5">
                  {region.name === "India" ? (
                    <Building2 className="text-primary" size={24} strokeWidth={1.5} />
                  ) : (
                    <Plane className="text-primary" size={24} strokeWidth={1.5} />
                  )}
                  <div>
                    <div className="font-mono text-[10px] tracking-[0.18em] text-primary">
                      {region.name === "India" ? "HEADQUARTERS" : "REGIONAL HUB"}
                    </div>
                    <h3 className="font-display font-bold text-xl">{region.name}</h3>
                  </div>
                </div>
                <p className="text-sm text-foreground/70 mb-4 font-medium">{region.role}</p>
                <ul className="space-y-2">
                  {region.focus.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-foreground/75">
                      <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Expansion roadmap */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
            {REGIONS.filter(r => r.status !== "active").map((region) => (
              <div key={region.name} className="industrial-card p-6 opacity-75 reveal">
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="text-muted-foreground" size={18} strokeWidth={1.5} />
                  <div>
                    <div className="font-mono text-[10px] tracking-[0.18em] text-muted-foreground uppercase">
                      {region.status === "expanding" ? "PHASE 2 — EXPANDING" : "PHASE 3 — PLANNED"}
                    </div>
                    <h4 className="font-display font-semibold text-base">{region.name}</h4>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {region.focus.map((item) => (
                    <span key={item} className="font-mono text-[9px] tracking-[0.1em] text-muted-foreground border border-border px-2 py-0.5">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="py-20 md:py-28 border-t border-border">
        <div className="container">
          <div className="max-w-2xl mb-14 reveal">
            <div className="section-number mb-3">— 03 / OUR DNA</div>
            <h2 className="accent-underline font-display font-bold text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight">
              Mission, vision, values.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                icon: Target,
                tag: "MISSION",
                title: "Simplify procurement",
                desc: "Provide a single point of contact for semiconductor, cleanroom, ESD, and industrial procurement needs — delivering reliable sourcing, competitive pricing, and fast fulfillment across Asia-Pacific.",
              },
              {
                icon: Eye,
                tag: "VISION",
                title: "The trusted partner",
                desc: "To become a recognized Asia-Pacific procurement and supply-chain partner for semiconductor, electronics, cleanroom, and industrial manufacturing companies.",
              },
              {
                icon: Shield,
                tag: "VALUES",
                title: "Precision · Speed · Integrity",
                desc: "Engineering precision in every part. Operational speed in every quote. Honest integrity in every interaction. Standards compliance in every process.",
              },
            ].map((item) => (
              <div key={item.tag} className="industrial-card p-7 reveal">
                <item.icon className="text-primary mb-5" size={28} strokeWidth={1.5} />
                <div className="font-mono text-[10px] tracking-[0.18em] text-primary mb-2">
                  {item.tag}
                </div>
                <h3 className="font-display font-bold text-xl mb-3">{item.title}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 md:py-20 border-t border-border bg-card/20">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {TRUST_STATS.map((stat) => (
              <div key={stat.label} className="reveal">
                <div className="font-display font-bold text-4xl md:text-5xl text-primary">
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

      {/* Competitive Advantages */}
      <section className="py-20 md:py-28 border-t border-border">
        <div className="container">
          <div className="max-w-2xl mb-14 reveal">
            <div className="section-number mb-3">— 04 / COMPETITIVE ADVANTAGES</div>
            <h2 className="accent-underline font-display font-bold text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight">
              What sets us apart.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {COMPETITIVE_ADVANTAGES.map((item, i) => (
              <div key={item.title} className="bg-background p-7 reveal" style={{ transitionDelay: `${i * 50}ms` }}>
                <h3 className="font-display font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 border-t border-border bg-card/30">
        <div className="container text-center max-w-3xl mx-auto reveal">
          <div className="section-number mb-3">— READY TO ENGAGE</div>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight mb-5">
            Let's simplify your procurement.
          </h2>
          <p className="text-foreground/70 leading-relaxed mb-8">
            Whether you need urgent spare parts, cleanroom consumables, ESD products, or a
            long-term procurement partner — our India and Singapore teams are ready to engage.
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
