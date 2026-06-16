/**
 * ServiceDetail page
 * Style: Precision Industrial — single service deep-dive
 */
import { Link, useParams, useLocation } from "wouter";
import { useEffect } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { asset } from "@/lib/utils";
import { SERVICES, BLUEPRINT_PATTERN, SITE, FEATURED_PRODUCTS } from "@/lib/site-data";

export default function ServiceDetail() {
  const params = useParams<{ slug: string }>();
  const [, navigate] = useLocation();
  const service = SERVICES.find((s) => s.slug === params.slug);

  useEffect(() => {
    if (!service) navigate("/404");
  }, [service, navigate]);

  if (!service) return null;

  const otherServices = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={asset(service.image)} alt="" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/90 to-background" />
        </div>
        <div className="absolute inset-0 blueprint-grid opacity-30 pointer-events-none" />

        <div className="container relative">
          <Link href="/services" className="inline-flex items-center gap-2 text-sm text-foreground/70 hover:text-primary mb-8 transition-colors">
            <ArrowLeft size={14} /> All Services
          </Link>

          <div className="section-number mb-4">— SERVICE</div>
          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight max-w-4xl mb-6">
            {service.title}
          </h1>
          <p className="text-base md:text-lg text-foreground/75 max-w-2xl leading-relaxed">
            {service.description}
          </p>

          {/* Spec strip */}
          <div className="mt-8 flex flex-wrap gap-3">
            {service.spec.map((s) => (
              <div key={s.label} className="border border-primary/30 px-4 py-2.5 bg-card/50 backdrop-blur-sm">
                <div className="font-mono text-[9px] tracking-[0.18em] text-muted-foreground">{s.label}</div>
                <div className="font-mono text-sm text-primary font-medium mt-0.5">{s.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Body content */}
      <section className="py-16 md:py-24 border-t border-border">
        <div className="container grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main */}
          <div className="lg:col-span-8 reveal">
            <div className="section-number mb-3">— OVERVIEW</div>
            <h2 className="accent-underline font-display font-bold text-2xl md:text-3xl tracking-tight mb-6">
              How we deliver this service.
            </h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-foreground/80 leading-relaxed text-base mb-5">
                {service.longDescription}
              </p>
            </div>

            {/* Highlights */}
            <div className="mt-10">
              <div className="section-number mb-3">— WHAT'S INCLUDED</div>
              <h3 className="font-display font-bold text-xl mb-5">Service highlights</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {service.highlights.map((h) => (
                  <div key={h} className="flex items-start gap-3 industrial-card p-4">
                    <CheckCircle2 size={18} className="text-primary mt-0.5 shrink-0" />
                    <span className="text-sm text-foreground/85">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Engagement steps */}
            <div className="mt-12">
              <div className="section-number mb-3">— ENGAGEMENT</div>
              <h3 className="font-display font-bold text-xl mb-5">How to engage</h3>
              <ol className="space-y-4">
                {[
                  "Send us your part number, equipment model, or service requirement via the contact form, email, or WhatsApp.",
                  "Our engineering team reviews your enquiry and responds with a detailed quote, lead time, and traceability documentation within 24 hours.",
                  "Upon confirmation, we mobilize — shipping parts from inventory or scheduling on-site service. Real-time updates throughout.",
                  "Installation, calibration, or validation support as needed. Test reports and warranty documentation delivered with every job.",
                ].map((step, i) => (
                  <li key={i} className="flex gap-5">
                    <div className="font-display font-bold text-2xl text-primary/40 leading-none shrink-0 w-10">
                      0{i + 1}
                    </div>
                    <p className="text-foreground/75 leading-relaxed pt-0.5">{step}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-28 space-y-5">
              <div className="industrial-card p-6 reveal">
                <div className="text-overline text-muted-foreground mb-3">Get a Quote</div>
                <h3 className="font-display font-bold text-xl mb-3">Talk to an engineer</h3>
                <p className="text-sm text-foreground/70 leading-relaxed mb-5">
                  We respond to enquiries within 24 hours with availability, pricing,
                  and lead time.
                </p>
                <Link href="/contact" className="btn-cta w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold rounded-sm">
                  Request a Quote <ArrowRight size={14} />
                </Link>
                <a href={SITE.whatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-3 w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium border border-primary/40 text-primary hover:bg-primary/5 transition-all rounded-sm">
                  WhatsApp Now <ArrowUpRight size={14} />
                </a>
              </div>

              {service.slug === "spare-parts-supply" && (
                <div className="industrial-card p-6 reveal">
                  <div className="text-overline text-muted-foreground mb-3">Featured Parts</div>
                  <div className="space-y-3">
                    {FEATURED_PRODUCTS.slice(0, 3).map((p) => (
                      <div key={p.partNumber} className="flex items-center gap-3 py-2 border-b border-border last:border-0">
                        <img src={asset(p.image)} alt={p.title} className="w-12 h-12 object-cover" />
                        <div className="flex-1 min-w-0">
                          <div className="font-mono text-[10px] tracking-[0.1em] text-primary">{p.partNumber}</div>
                          <div className="text-xs truncate">{p.title}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </aside>
        </div>
      </section>

      {/* Other services */}
      <section className="py-16 md:py-20 border-t border-border bg-card/20">
        <div className="container">
          <div className="flex items-end justify-between mb-10 reveal">
            <div>
              <div className="section-number mb-3">— EXPLORE MORE</div>
              <h2 className="font-display font-bold text-2xl md:text-3xl tracking-tight">
                Other services
              </h2>
            </div>
            <Link href="/services" className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all">
              All services <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {otherServices.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="industrial-card group reveal">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={asset(s.image)} alt={s.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <h3 className="font-display font-bold text-lg group-hover:text-primary transition-colors mb-2">
                    {s.title}
                  </h3>
                  <p className="text-sm text-foreground/70 leading-relaxed line-clamp-2">{s.short}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
