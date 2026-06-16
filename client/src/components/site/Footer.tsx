/**
 * Footer — Industrial dark footer
 * Style: Precision Industrial. Multi-column with technical accents.
 */
import { Link } from "wouter";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { SITE, SERVICES } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-[oklch(0.20_0.04_250)] text-white">
      {/* Faint blueprint grid overlay */}
      <div className="absolute inset-0 blueprint-grid opacity-30 pointer-events-none" />

      <div className="container relative py-16 md:py-20">
        {/* Top: brand + columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-5">
              <div className="flex items-center justify-center w-10 h-10 bg-primary/10 border border-primary/30 rounded-sm">
                <span className="font-display font-bold text-primary text-lg leading-none">IS</span>
              </div>
              <div>
                <div className="font-display font-bold text-base leading-tight tracking-tight text-white">INDITECH</div>
                <div className="font-mono text-[10px] tracking-[0.18em] text-white/55 leading-none">SEMICON SERVICES</div>
              </div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed max-w-sm">
              India’s first semiconductor-focused ESD product procurement and spare parts
              service company — now serving the Asia-Pacific region with hubs in India
              and Singapore.
            </p>
            <div className="mt-6 flex items-center gap-2">
              <a href={SITE.social.linkedin} aria-label="LinkedIn" className="w-9 h-9 flex items-center justify-center border border-white/20 text-white/70 hover:border-white hover:text-white transition-all">
                <Linkedin size={15} />
              </a>
              <a href={SITE.social.facebook} aria-label="Facebook" className="w-9 h-9 flex items-center justify-center border border-white/20 text-white/70 hover:border-white hover:text-white transition-all">
                <Facebook size={15} />
              </a>
              <a href={SITE.social.instagram} aria-label="Instagram" className="w-9 h-9 flex items-center justify-center border border-white/20 text-white/70 hover:border-white hover:text-white transition-all">
                <Instagram size={15} />
              </a>
              <a href={SITE.social.youtube} aria-label="YouTube" className="w-9 h-9 flex items-center justify-center border border-white/20 text-white/70 hover:border-white hover:text-white transition-all">
                <Youtube size={15} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="md:col-span-3">
            <div className="text-overline text-white/55 mb-4">Services</div>
            <ul className="space-y-2.5">
              {SERVICES.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <div className="text-overline text-white/55 mb-4">Company</div>
            <ul className="space-y-2.5">
              <li><Link href="/" className="text-sm text-white/70 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-sm text-white/70 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-sm text-white/70 hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/contact" className="text-sm text-white/70 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <div className="text-overline text-white/55 mb-4">Contact</div>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-white/70">
                <MapPin size={15} className="mt-0.5 text-[oklch(0.78_0.15_55)] shrink-0" />
                <span>
                  <strong className="text-white/90">India HQ:</strong><br />
                  {SITE.address.line1}, {SITE.address.line2}<br />
                  Pin: {SITE.address.pincode}
                </span>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/70">
                <MapPin size={15} className="mt-0.5 text-[oklch(0.78_0.15_55)] shrink-0" />
                <span>
                  <strong className="text-white/90">Singapore Hub:</strong><br />
                  Asia-Pacific Regional Operations
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone size={15} className="text-[oklch(0.78_0.15_55)] shrink-0" />
                <a href={`tel:${SITE.phoneRaw}`} className="text-white/80 hover:text-white transition-colors font-mono">
                  {SITE.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail size={15} className="text-[oklch(0.78_0.15_55)] shrink-0" />
                <a href={`mailto:${SITE.email}`} className="text-white/80 hover:text-white transition-colors break-all">
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-white/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="font-mono text-[11px] tracking-[0.1em] text-white/55">
            © {new Date().getFullYear()} INDITECH SEMICON SERVICES — ALL RIGHTS RESERVED
          </div>
          <div className="font-mono text-[11px] tracking-[0.1em] text-white/55">
            ENGINEERED FOR UPTIME · INDIA + SINGAPORE
          </div>
        </div>
      </div>
    </footer>
  );
}
