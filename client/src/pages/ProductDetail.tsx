/**
 * ProductDetail page — individual ESD/cleanroom product
 * Style: Precision Industrial — Light Edition (white bg + brand blue + orange CTA)
 * Shows a large product image, a full technical spec table, application tags,
 * compliance standards, and Quote-Cart / Request-Quote actions. Related products
 * from the same category are shown at the bottom.
 */
import { useEffect, useMemo } from "react";
import { Link, useParams, useLocation } from "wouter";
import {
  ArrowRight,
  ArrowLeft,
  Check,
  Plus,
  FileText,
  ShieldCheck,
  Clock,
  Tag,
  Layers,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { asset } from "@/lib/utils";
import { catalog, findProduct } from "@/lib/catalog-data";
import { SITE } from "@/lib/site-data";
import { useQuoteCart } from "@/contexts/QuoteCartContext";
import { toast } from "sonner";

export default function ProductDetail() {
  const params = useParams();
  const [, navigate] = useLocation();
  const id = params.id as string;
  const product = useMemo(() => findProduct(id), [id]);
  const cart = useQuoteCart();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [id]);

  if (!product) {
    return (
      <SiteLayout>
        <section className="pt-40 pb-32">
          <div className="container text-center">
            <div className="section-number mb-3">— 404 / PRODUCT NOT FOUND</div>
            <h1 className="font-display font-bold text-3xl md:text-4xl mb-4">
              That product isn't in our catalog.
            </h1>
            <p className="text-foreground/70 mb-8">
              It may have been renamed or removed — but we source to order, so we
              can still find it for you.
            </p>
            <Link
              href="/catalog"
              className="btn-cta inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-sm"
            >
              Back to Catalog <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </SiteLayout>
    );
  }

  const inCart = cart.has(product.id);
  const related = (catalog.find((c) => c.id === product.categoryId)?.products || [])
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  const specRows: { label: string; value: string; icon: typeof Tag }[] = [
    { label: "Category", value: product.category, icon: Layers },
    { label: "Specification", value: product.spec, icon: FileText },
    { label: "Applications", value: product.tags.join(", "), icon: Tag },
    { label: "Compliance", value: product.standards.join(" · "), icon: ShieldCheck },
    { label: "Lead Time", value: product.leadTime, icon: Clock },
    { label: "Sourcing", value: "Sourced to order from qualified suppliers", icon: Check },
    { label: "Coverage", value: "India & Asia-Pacific (Singapore hub planned)", icon: Check },
  ];

  return (
    <SiteLayout>
      {/* Breadcrumb */}
      <section className="pt-28 md:pt-32 pb-2">
        <div className="container">
          <nav className="flex items-center gap-2 font-mono text-[11px] tracking-[0.1em] text-muted-foreground flex-wrap">
            <Link href="/catalog" className="hover:text-primary transition-colors">
              CATALOG
            </Link>
            <span>/</span>
            <Link
              href={`/catalog?cat=${product.categoryId}`}
              className="hover:text-primary transition-colors"
            >
              {product.category.toUpperCase()}
            </Link>
            <span>/</span>
            <span className="text-foreground/70">{product.name.toUpperCase()}</span>
          </nav>
        </div>
      </section>

      {/* Main */}
      <section className="py-8 md:py-12">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-start">
            {/* Image */}
            <div className="relative">
              <div className="relative aspect-square bg-white border border-border rounded-sm overflow-hidden">
                <div className="absolute inset-0 blueprint-grid opacity-[0.15] pointer-events-none" />
                <img
                  src={asset(product.image)}
                  alt={product.name}
                  className="relative w-full h-full object-contain p-8"
                />
                <div className="absolute top-3 left-3 font-mono text-[9px] tracking-[0.14em] text-muted-foreground bg-background/80 px-2 py-1 backdrop-blur-sm">
                  {product.categoryId.toUpperCase()}
                </div>
              </div>
            </div>

            {/* Info */}
            <div>
              <div className="section-number mb-3">— {product.category.toUpperCase()}</div>
              <h1 className="font-display font-bold text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.08] tracking-tight">
                {product.name}
              </h1>
              <p className="mt-2 font-mono text-sm text-primary tracking-[0.04em]">
                {product.spec}
              </p>

              <p className="mt-5 text-foreground/75 leading-relaxed">
                {product.description}
              </p>

              {/* Tags */}
              <div className="mt-5 flex flex-wrap gap-2">
                {product.tags.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium bg-primary/8 text-primary border border-primary/20 rounded-sm"
                  >
                    <Tag size={11} /> {t}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="mt-7 flex flex-wrap gap-3">
                <button
                  onClick={() => {
                    cart.toggle({
                      id: product.id,
                      name: product.name,
                      image: product.image,
                      category: product.category,
                    });
                    toast.success(
                      inCart ? "Removed from quote list" : "Added to quote list",
                      { description: product.name },
                    );
                  }}
                  className={`inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-sm border transition-all duration-200 active:scale-[0.97] ${
                    inCart
                      ? "bg-primary/10 text-primary border-primary/40"
                      : "bg-primary text-primary-foreground border-primary hover:bg-primary/90"
                  }`}
                >
                  {inCart ? (
                    <>
                      <Check size={16} /> In Quote List
                    </>
                  ) : (
                    <>
                      <Plus size={16} /> Add to Quote List
                    </>
                  )}
                </button>
                <Link
                  href={`/contact?product=${encodeURIComponent(product.name)}`}
                  className="btn-cta inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-sm"
                >
                  Request Quote Now <ArrowRight size={16} />
                </Link>
                <a
                  href={SITE.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium border border-border text-foreground/80 hover:border-primary/40 hover:text-primary transition-all rounded-sm"
                >
                  WhatsApp
                </a>
              </div>

              {cart.count > 0 && (
                <Link
                  href="/quote"
                  className="mt-4 inline-flex items-center gap-1.5 font-mono text-xs tracking-[0.08em] text-primary hover:underline"
                >
                  VIEW QUOTE LIST ({cart.count}) <ArrowRight size={13} />
                </Link>
              )}

              {/* Spec table */}
              <div className="mt-8 border border-border rounded-sm overflow-hidden">
                <div className="bg-card px-4 py-2.5 border-b border-border">
                  <span className="font-mono text-[11px] tracking-[0.14em] text-muted-foreground">
                    TECHNICAL SPECIFICATION
                  </span>
                </div>
                <table className="w-full text-sm">
                  <tbody>
                    {specRows.map((row, i) => (
                      <tr
                        key={row.label}
                        className={i % 2 === 0 ? "bg-background" : "bg-card/40"}
                      >
                        <td className="align-top py-2.5 px-4 w-40 text-muted-foreground font-medium border-b border-border/60">
                          <span className="inline-flex items-center gap-1.5">
                            <row.icon size={13} className="text-primary/70" />
                            {row.label}
                          </span>
                        </td>
                        <td className="py-2.5 px-4 text-foreground/85 border-b border-border/60">
                          {row.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="mt-4 text-xs text-muted-foreground leading-relaxed">
                Specifications are indicative. Exact materials, dimensions, pack
                quantities and compliance certificates are confirmed at quotation.
              </p>
            </div>
          </div>

          {/* Related */}
          {related.length > 0 && (
            <div className="mt-16 md:mt-24 pt-12 border-t border-border">
              <div className="flex items-end justify-between mb-8">
                <div>
                  <div className="section-number mb-2">— RELATED</div>
                  <h2 className="font-display font-bold text-2xl md:text-3xl tracking-tight">
                    More in {product.category}
                  </h2>
                </div>
                <Link
                  href="/catalog"
                  className="hidden sm:inline-flex items-center gap-1.5 font-mono text-xs tracking-[0.08em] text-primary hover:underline"
                >
                  VIEW ALL <ArrowRight size={13} />
                </Link>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
                {related.map((p) => (
                  <Link
                    key={p.id}
                    href={`/catalog/${p.id}`}
                    className="group relative bg-card border border-border rounded-sm overflow-hidden flex flex-col transition-all duration-200 hover:border-primary/50 hover:shadow-[0_8px_30px_-12px_rgba(0,0,0,0.18)]"
                  >
                    <div className="relative aspect-square bg-white overflow-hidden">
                      <img
                        src={asset(p.image)}
                        alt={p.name}
                        loading="lazy"
                        className="w-full h-full object-contain p-4 transition-transform duration-300 group-hover:scale-[1.04]"
                      />
                    </div>
                    <div className="p-3.5">
                      <h3 className="font-display font-semibold text-sm leading-snug tracking-tight line-clamp-2">
                        {p.name}
                      </h3>
                      <p className="mt-1 font-mono text-[10px] tracking-[0.06em] text-muted-foreground line-clamp-1">
                        {p.spec}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Back */}
          <div className="mt-12">
            <button
              onClick={() => navigate("/catalog")}
              className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.1em] text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft size={14} /> BACK TO CATALOG
            </button>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
