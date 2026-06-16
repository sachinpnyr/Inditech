/**
 * Header — Sticky industrial nav with cyan accents
 * Style: Precision Industrial. Logo left, nav center, CTA right.
 */
import { Link, useLocation } from "wouter";
import { useEffect, useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import { SITE } from "@/lib/site-data";
import { useQuoteCart } from "@/contexts/QuoteCartContext";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/catalog", label: "Catalog" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const cart = useQuoteCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex items-center justify-center w-9 h-9 bg-primary/10 border border-primary/30 rounded-sm">
            <span className="font-display font-bold text-primary text-lg leading-none">IS</span>
          </div>
          <div className="hidden sm:block">
            <div className="font-display font-bold text-base leading-tight tracking-tight">INDITECH</div>
            <div className="font-mono text-[10px] tracking-[0.18em] text-muted-foreground leading-none">SEMICON SERVICES</div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((item) => {
            const active =
              item.href === "/"
                ? location === "/"
                : location.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  active ? "text-primary" : "text-foreground/80 hover:text-foreground"
                }`}
              >
                {item.label}
                {active && (
                  <span className="absolute left-4 right-4 -bottom-px h-px bg-primary" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          {cart.count > 0 && (
            <Link
              href="/quote"
              className="relative inline-flex items-center justify-center w-9 h-9 rounded-sm border border-primary/30 text-primary hover:bg-primary/5 transition-all"
              aria-label={`Quote list, ${cart.count} items`}
            >
              <ShoppingCart size={17} />
              <span className="absolute -top-1.5 -right-1.5 inline-flex items-center justify-center min-w-4 h-4 px-1 text-[10px] font-bold bg-primary text-primary-foreground rounded-full">
                {cart.count}
              </span>
            </Link>
          )}
          <a
            href={SITE.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex font-mono text-[11px] tracking-[0.1em] text-primary px-3 py-1.5 border border-primary/30 hover:border-primary/60 hover:bg-primary/5 transition-all"
          >
            +91 8606200858
          </a>
          <Link
            href="/contact"
            className="hidden md:inline-flex btn-cta px-4 py-2 text-sm rounded-sm"
          >
            Request Quote
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-md">
          <nav className="container py-4 flex flex-col gap-1">
            {NAV.map((item) => {
              const active =
                item.href === "/"
                  ? location === "/"
                  : location.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-3 text-base font-medium border-l-2 transition-all ${
                    active
                      ? "text-primary border-primary bg-primary/5"
                      : "text-foreground/80 border-transparent hover:border-border hover:bg-muted/30"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="pt-3 mt-3 border-t border-border flex flex-col gap-2">
              {cart.count > 0 && (
                <Link
                  href="/quote"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold border border-primary/40 text-primary rounded-sm"
                >
                  <ShoppingCart size={15} /> Quote List ({cart.count})
                </Link>
              )}
              <a
                href={SITE.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-primary px-3 py-2 border border-primary/30 text-center"
              >
                WhatsApp: +91 8606200858
              </a>
              <Link href="/contact" className="btn-cta px-4 py-2 text-sm rounded-sm text-center">
                Request Quote
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
