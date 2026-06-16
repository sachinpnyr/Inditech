/**
 * Catalog page — ESD & cleanroom product catalog
 * Style: Precision Industrial — Light Edition (white bg + brand blue + orange CTA)
 * 22 categories / 156 products, segregated and grouped. Each product card links to a
 * detail page, shows a real product image, and can be added to the multi-select
 * Quote List. Search + sticky category chips. No prices — quote-driven B2B catalog.
 */
import { useMemo, useState } from "react";
import { Link } from "wouter";
import { Search, ArrowRight, X, Plus, Check, ShoppingCart } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { asset } from "@/lib/utils";
import {
  catalog,
  totalProducts,
  totalCategories,
  type CatalogProduct,
} from "@/lib/catalog-data";
import { SITE } from "@/lib/site-data";
import { useQuoteCart } from "@/contexts/QuoteCartContext";
import { toast } from "sonner";

export default function Catalog() {
  const [query, setQuery] = useState("");
  const [activeCat, setActiveCat] = useState<string>("all");
  const cart = useQuoteCart();

  const q = query.trim().toLowerCase();

  const filtered = useMemo(() => {
    return catalog
      .filter((c) => activeCat === "all" || c.id === activeCat)
      .map((c) => ({
        ...c,
        products: c.products.filter(
          (p) =>
            !q ||
            p.name.toLowerCase().includes(q) ||
            p.spec.toLowerCase().includes(q) ||
            c.name.toLowerCase().includes(q) ||
            p.tags.some((t) => t.toLowerCase().includes(q)),
        ),
      }))
      .filter((c) => c.products.length > 0);
  }, [q, activeCat]);

  const resultCount = filtered.reduce((n, c) => n + c.products.length, 0);

  const goToCategory = (id: string) => {
    setActiveCat("all");
    setQuery("");
    requestAnimationFrame(() => {
      const el = document.getElementById(`cat-${id}`);
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 150;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    });
  };

  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative pt-32 pb-12 md:pt-40 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-30 pointer-events-none" />
        <div className="container relative">
          <div className="section-number mb-4">— ESD & CLEANROOM CATALOG</div>
          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight max-w-4xl">
            Every ESD & cleanroom product your <span className="text-primary">fab needs.</span>
          </h1>
          <p className="mt-6 text-base md:text-lg text-foreground/75 max-w-2xl leading-relaxed">
            India's first semiconductor-focused ESD catalog — {totalProducts} product
            lines across {totalCategories} categories, from personnel grounding and
            packaging to wafer handling, cleanroom consumables and equipment spares.
            Quote-driven, sourced to order.
          </p>

          <div className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
            <Stat value={String(totalProducts)} label="PRODUCT LINES" />
            <Stat value={String(totalCategories)} label="CATEGORIES" />
            <Stat value="24H" label="QUOTE TURNAROUND" />
          </div>
        </div>
      </section>

      {/* Sticky control bar */}
      <div className="sticky top-16 md:top-20 z-40 bg-background/90 backdrop-blur-md border-y border-border">
        <div className="container py-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="relative flex-1 max-w-xl">
              <Search
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search — wrist strap, shielding bag, ionizer, wafer carrier…"
                className="w-full pl-9 pr-9 py-2.5 text-sm bg-card border border-border rounded-sm outline-none focus:border-primary/60 transition-colors"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  aria-label="Clear search"
                >
                  <X size={16} />
                </button>
              )}
            </div>
            {cart.count > 0 && (
              <Link
                href="/quote"
                className="shrink-0 inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold bg-primary text-primary-foreground rounded-sm hover:bg-primary/90 transition-all active:scale-[0.97]"
              >
                <ShoppingCart size={15} />
                <span className="hidden sm:inline">Quote List</span>
                <span className="inline-flex items-center justify-center min-w-5 h-5 px-1 text-[11px] font-bold bg-white/25 rounded-full">
                  {cart.count}
                </span>
              </Link>
            )}
          </div>

          <div className="flex gap-2 overflow-x-auto pb-1 -mb-1 scrollbar-thin">
            <button
              onClick={() => {
                setActiveCat("all");
                setQuery("");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className={`shrink-0 px-3.5 py-1.5 text-xs font-medium rounded-sm border transition-all ${
                activeCat === "all"
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border text-foreground/70 hover:border-primary/50 hover:text-foreground"
              }`}
            >
              All ({totalProducts})
            </button>
            {catalog.map((c) => (
              <button
                key={c.id}
                onClick={() =>
                  activeCat === "all" ? goToCategory(c.id) : setActiveCat(c.id)
                }
                className={`shrink-0 px-3.5 py-1.5 text-xs font-medium rounded-sm border transition-all whitespace-nowrap ${
                  activeCat === c.id
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border text-foreground/70 hover:border-primary/50 hover:text-foreground"
                }`}
              >
                {c.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {q && (
        <div className="container pt-6">
          <div className="font-mono text-xs tracking-[0.1em] text-muted-foreground">
            {resultCount} RESULT{resultCount === 1 ? "" : "S"} FOR “{query}”
          </div>
        </div>
      )}

      {/* Sections */}
      <section className="py-10 md:py-14">
        <div className="container">
          {filtered.length === 0 && (
            <div className="py-24 text-center">
              <div className="font-display font-bold text-2xl mb-3">No products found</div>
              <p className="text-foreground/60 mb-6">
                We source to order — if you don't see it, we can still get it.
              </p>
              <Link
                href="/contact"
                className="btn-cta inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-sm"
              >
                Ask us to source it <ArrowRight size={16} />
              </Link>
            </div>
          )}

          {filtered.map((cat, ci) => (
            <div
              key={cat.id}
              id={`cat-${cat.id}`}
              className={`scroll-mt-44 ${ci !== 0 ? "mt-16 md:mt-24 pt-12 md:pt-16 border-t border-border" : ""}`}
            >
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
                <div className="max-w-2xl">
                  <div className="section-number mb-2">
                    — {String(ci + 1).padStart(2, "0")} / {cat.name.toUpperCase()}
                  </div>
                  <h2 className="font-display font-bold text-2xl md:text-3xl leading-tight tracking-tight">
                    {cat.name}
                  </h2>
                  <p className="mt-2 text-sm text-foreground/70 leading-relaxed">
                    {cat.blurb}
                  </p>
                </div>
                <div className="font-mono text-xs tracking-[0.12em] text-muted-foreground shrink-0">
                  {cat.products.length} PRODUCT{cat.products.length === 1 ? "" : "S"}
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
                {cat.products.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 border-t border-border bg-card/30">
        <div className="container max-w-3xl mx-auto text-center reveal">
          <div className="section-number mb-3">— CAN'T FIND IT?</div>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight mb-5">
            We source to order.
          </h2>
          <p className="text-foreground/70 leading-relaxed mb-8">
            This catalog covers our core lines, but our supplier network reaches far
            wider. Send your part number, brand, or spec and we'll quote it within 24 hours.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
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
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-medium border border-primary/40 text-primary hover:bg-primary/5 transition-all rounded-sm"
            >
              WhatsApp Direct
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-display font-bold text-3xl text-primary">{value}</div>
      <div className="font-mono text-[10px] tracking-[0.18em] text-muted-foreground mt-1">
        {label}
      </div>
    </div>
  );
}

function ProductCard({ product }: { product: CatalogProduct }) {
  const cart = useQuoteCart();
  const inCart = cart.has(product.id);

  return (
    <div className="group relative bg-card border border-border rounded-sm overflow-hidden flex flex-col transition-all duration-200 hover:border-primary/50 hover:shadow-[0_8px_30px_-12px_rgba(0,0,0,0.18)]">
      <Link href={`/catalog/${product.id}`} className="relative aspect-square bg-white overflow-hidden block">
        <img
          src={asset(product.image)}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-contain p-4 transition-transform duration-300 group-hover:scale-[1.04]"
        />
        <div className="absolute top-2 left-2 font-mono text-[8px] tracking-[0.12em] text-muted-foreground bg-background/80 px-2 py-0.5 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
          {product.category.toUpperCase()}
        </div>
      </Link>

      <div className="flex flex-col flex-1 p-3.5">
        <Link
          href={`/catalog/${product.id}`}
          className="font-display font-semibold text-sm leading-snug tracking-tight line-clamp-2 hover:text-primary transition-colors"
        >
          {product.name}
        </Link>
        <p className="mt-1 font-mono text-[10px] tracking-[0.06em] text-muted-foreground line-clamp-1">
          {product.spec}
        </p>

        <div className="mt-3 flex items-center gap-2">
          <button
            onClick={() => {
              cart.toggle({
                id: product.id,
                name: product.name,
                image: product.image,
                category: product.category,
              });
              toast.success(inCart ? "Removed from quote list" : "Added to quote list", {
                description: product.name,
              });
            }}
            className={`flex-1 inline-flex items-center justify-center gap-1.5 text-xs font-semibold rounded-sm py-2 border transition-all duration-200 active:scale-[0.97] ${
              inCart
                ? "bg-primary/10 text-primary border-primary/40"
                : "text-primary border-primary/30 hover:bg-primary hover:text-primary-foreground"
            }`}
            aria-label={inCart ? "Remove from quote list" : "Add to quote list"}
          >
            {inCart ? (
              <>
                <Check size={12} /> Added
              </>
            ) : (
              <>
                <Plus size={12} /> Quote
              </>
            )}
          </button>
          <Link
            href={`/catalog/${product.id}`}
            className="inline-flex items-center justify-center w-9 h-9 rounded-sm border border-border text-foreground/60 hover:border-primary/40 hover:text-primary transition-all"
            aria-label="View details"
          >
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
