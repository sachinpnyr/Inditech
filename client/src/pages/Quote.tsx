/**
 * Quote page — the multi-select "Quote List" / RFQ basket
 * Style: Precision Industrial — Light Edition (white bg + brand blue + orange CTA)
 * Buyers accumulate products from the catalog, adjust quantities, then submit a
 * single Request for Quote. No prices — this is a procurement request, not checkout.
 * The form is a front-end placeholder (no backend yet); it composes a WhatsApp /
 * mailto fallback so the request is never lost.
 */
import { useState } from "react";
import { Link } from "wouter";
import {
  ArrowRight,
  Trash2,
  Minus,
  Plus,
  FileText,
  ShoppingCart,
  Check,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { asset } from "@/lib/utils";
import { useQuoteCart } from "@/contexts/QuoteCartContext";
import { SITE } from "@/lib/site-data";
import { toast } from "sonner";

export default function Quote() {
  const cart = useQuoteCart();
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    country: "India",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const update = (k: keyof typeof form, v: string) =>
    setForm((f) => ({ ...f, [k]: v }));

  const buildSummary = () => {
    const lines = cart.items
      .map((i, n) => `${n + 1}. ${i.name} — Qty: ${i.qty} (${i.category})`)
      .join("\n");
    return (
      `RFQ from ${form.name || "—"} (${form.company || "—"}, ${form.country})\n` +
      `Email: ${form.email || "—"} | Phone: ${form.phone || "—"}\n\n` +
      `Requested items:\n${lines}\n\n` +
      `Notes: ${form.notes || "—"}`
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.items.length === 0) {
      toast.error("Your quote list is empty", {
        description: "Add products from the catalog first.",
      });
      return;
    }
    if (!form.name || !form.email) {
      toast.error("Please add your name and email so we can reply.");
      return;
    }
    setSubmitted(true);
    toast.success("Quote request prepared", {
      description: "Send it via WhatsApp or email using the buttons below.",
    });
  };

  const summary = buildSummary();
  const waPhone = (SITE.phone || "").replace(/[^\d]/g, "");
  const waUrl = `https://api.whatsapp.com/send/?phone=${waPhone}&text=${encodeURIComponent(summary)}&type=phone_number&app_absent=0`;
  const mailUrl = `mailto:${SITE.email}?subject=${encodeURIComponent(
    "Request for Quote — " + cart.items.length + " item(s)",
  )}&body=${encodeURIComponent(summary)}`;

  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative pt-32 pb-10 md:pt-40 md:pb-14 overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-30 pointer-events-none" />
        <div className="container relative">
          <div className="section-number mb-4">— QUOTE LIST</div>
          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight max-w-3xl">
            Your <span className="text-primary">request for quote.</span>
          </h1>
          <p className="mt-6 text-base md:text-lg text-foreground/75 max-w-2xl leading-relaxed">
            Review your selected products, set quantities, and send us a single
            consolidated RFQ. We respond within 24 hours with pricing, lead time and
            minimum order quantities.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="container">
          {cart.items.length === 0 ? (
            <EmptyState />
          ) : (
            <div className="grid lg:grid-cols-[1.5fr_1fr] gap-8 lg:gap-12 items-start">
              {/* Items */}
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="font-mono text-xs tracking-[0.12em] text-muted-foreground">
                    {cart.items.length} ITEM{cart.items.length === 1 ? "" : "S"}
                  </div>
                  <button
                    onClick={() => {
                      cart.clear();
                      toast("Quote list cleared");
                    }}
                    className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-destructive transition-colors"
                  >
                    <Trash2 size={13} /> Clear all
                  </button>
                </div>

                <div className="border border-border rounded-sm divide-y divide-border">
                  {cart.items.map((item) => (
                    <div key={item.id} className="flex gap-4 p-3.5 items-center">
                      <Link
                        href={`/catalog/${item.id}`}
                        className="shrink-0 w-16 h-16 bg-white border border-border rounded-sm overflow-hidden"
                      >
                        <img
                          src={asset(item.image)}
                          alt={item.name}
                          className="w-full h-full object-contain p-1.5"
                        />
                      </Link>
                      <div className="flex-1 min-w-0">
                        <Link
                          href={`/catalog/${item.id}`}
                          className="font-display font-semibold text-sm leading-snug tracking-tight hover:text-primary transition-colors line-clamp-2 block"
                        >
                          {item.name}
                        </Link>
                        <div className="mt-0.5 font-mono text-[10px] tracking-[0.06em] text-muted-foreground">
                          {item.category.toUpperCase()}
                        </div>
                      </div>
                      {/* Qty stepper */}
                      <div className="flex items-center border border-border rounded-sm">
                        <button
                          onClick={() => cart.setQty(item.id, item.qty - 1)}
                          className="p-2 hover:bg-muted transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={13} />
                        </button>
                        <input
                          value={item.qty}
                          onChange={(e) => {
                            const n = parseInt(e.target.value.replace(/\D/g, ""), 10);
                            cart.setQty(item.id, Number.isNaN(n) ? 1 : n);
                          }}
                          className="w-10 text-center text-sm bg-transparent outline-none"
                          inputMode="numeric"
                          aria-label="Quantity"
                        />
                        <button
                          onClick={() => cart.setQty(item.id, item.qty + 1)}
                          className="p-2 hover:bg-muted transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={13} />
                        </button>
                      </div>
                      <button
                        onClick={() => {
                          cart.remove(item.id);
                          toast("Removed", { description: item.name });
                        }}
                        className="p-2 text-muted-foreground hover:text-destructive transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                  ))}
                </div>

                <Link
                  href="/catalog"
                  className="mt-5 inline-flex items-center gap-1.5 font-mono text-xs tracking-[0.08em] text-primary hover:underline"
                >
                  + ADD MORE PRODUCTS
                </Link>
              </div>

              {/* RFQ form */}
              <div className="lg:sticky lg:top-28">
                <div className="border border-border rounded-sm bg-card/40 p-5 md:p-6">
                  <h2 className="font-display font-bold text-xl tracking-tight mb-1">
                    Submit your RFQ
                  </h2>
                  <p className="text-sm text-foreground/65 mb-5">
                    Tell us where to send the quotation.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-3">
                    <Field
                      label="Full name *"
                      value={form.name}
                      onChange={(v) => update("name", v)}
                      placeholder="Your name"
                    />
                    <Field
                      label="Company"
                      value={form.company}
                      onChange={(v) => update("company", v)}
                      placeholder="Company / fab name"
                    />
                    <Field
                      label="Email *"
                      type="email"
                      value={form.email}
                      onChange={(v) => update("email", v)}
                      placeholder="you@company.com"
                    />
                    <Field
                      label="Phone / WhatsApp"
                      value={form.phone}
                      onChange={(v) => update("phone", v)}
                      placeholder="+91 / +65 …"
                    />
                    <div>
                      <label className="block font-mono text-[11px] tracking-[0.1em] text-muted-foreground mb-1.5">
                        COUNTRY
                      </label>
                      <select
                        value={form.country}
                        onChange={(e) => update("country", e.target.value)}
                        className="w-full px-3 py-2.5 text-sm bg-background border border-border rounded-sm outline-none focus:border-primary/60 transition-colors"
                      >
                        {["India", "Singapore", "Malaysia", "Thailand", "Vietnam", "Other"].map(
                          (c) => (
                            <option key={c} value={c}>
                              {c}
                            </option>
                          ),
                        )}
                      </select>
                    </div>
                    <div>
                      <label className="block font-mono text-[11px] tracking-[0.1em] text-muted-foreground mb-1.5">
                        NOTES
                      </label>
                      <textarea
                        value={form.notes}
                        onChange={(e) => update("notes", e.target.value)}
                        rows={3}
                        placeholder="Delivery location, target date, specs…"
                        className="w-full px-3 py-2.5 text-sm bg-background border border-border rounded-sm outline-none focus:border-primary/60 transition-colors resize-none"
                      />
                    </div>

                    {!submitted ? (
                      <button
                        type="submit"
                        className="btn-cta w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-sm"
                      >
                        <FileText size={16} /> Prepare Request
                      </button>
                    ) : (
                      <div className="space-y-2.5 pt-1">
                        <div className="flex items-center gap-2 text-sm text-primary font-medium">
                          <Check size={16} /> Request ready — send it below
                        </div>
                        <a
                          href={waUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-cta w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-sm"
                        >
                          Send via WhatsApp <ArrowRight size={16} />
                        </a>
                        <a
                          href={mailUrl}
                          className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium border border-primary/40 text-primary hover:bg-primary/5 transition-all rounded-sm"
                        >
                          Send via Email
                        </a>
                      </div>
                    )}
                  </form>

                  <p className="mt-4 text-[11px] text-muted-foreground leading-relaxed">
                    Note: online submission is not yet wired to a backend — your RFQ is
                    sent through WhatsApp or your email client so nothing is lost.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </SiteLayout>
  );
}

function EmptyState() {
  return (
    <div className="py-20 text-center border border-dashed border-border rounded-sm">
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/8 text-primary mb-5">
        <ShoppingCart size={24} />
      </div>
      <h2 className="font-display font-bold text-2xl mb-2">Your quote list is empty</h2>
      <p className="text-foreground/60 mb-7 max-w-md mx-auto">
        Browse the catalog and add the ESD or cleanroom products you need. You can
        request a quote for all of them at once.
      </p>
      <Link
        href="/catalog"
        className="btn-cta inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-sm"
      >
        Browse Catalog <ArrowRight size={16} />
      </Link>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div>
      <label className="block font-mono text-[11px] tracking-[0.1em] text-muted-foreground mb-1.5">
        {label.toUpperCase()}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-3 py-2.5 text-sm bg-background border border-border rounded-sm outline-none focus:border-primary/60 transition-colors"
      />
    </div>
  );
}
