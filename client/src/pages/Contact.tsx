/**
 * Contact page — Inditech Semicon Support
 * Style: Precision Industrial — RFQ form + direct contact methods
 */
import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, MessageCircle } from "lucide-react";
import { toast } from "sonner";
import { SiteLayout } from "@/components/site/SiteLayout";
import { asset } from "@/lib/utils";
import { SITE, SERVICES, BLUEPRINT_PATTERN } from "@/lib/site-data";

export default function Contact() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-30 pointer-events-none" />
        <div className="container relative">
          <div className="section-number mb-4">— GET IN TOUCH</div>
          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight max-w-4xl">
            Talk to an engineer. <span className="text-primary">Not a chatbot.</span>
          </h1>
          <p className="mt-6 text-base md:text-lg text-foreground/75 max-w-2xl leading-relaxed">
            Send us your part number, equipment model, or service requirement. Our
            engineering team responds within 24 hours with a transparent quote.
          </p>
        </div>
      </section>

      {/* Contact methods strip */}
      <section className="border-t border-border">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
            <a href={`tel:${SITE.phoneRaw}`} className="bg-background p-7 flex items-start gap-4 hover:bg-card/40 transition-colors group">
              <div className="w-11 h-11 flex items-center justify-center bg-primary/10 border border-primary/30 shrink-0">
                <Phone size={18} className="text-primary" />
              </div>
              <div>
                <div className="text-overline text-muted-foreground mb-1">Phone</div>
                <div className="font-display font-bold text-lg group-hover:text-primary transition-colors">{SITE.phone}</div>
                <div className="text-xs text-muted-foreground mt-1 font-mono tracking-[0.1em]">MON–SAT · 9AM–7PM IST</div>
              </div>
            </a>
            <a href={`mailto:${SITE.email}`} className="bg-background p-7 flex items-start gap-4 hover:bg-card/40 transition-colors group">
              <div className="w-11 h-11 flex items-center justify-center bg-primary/10 border border-primary/30 shrink-0">
                <Mail size={18} className="text-primary" />
              </div>
              <div>
                <div className="text-overline text-muted-foreground mb-1">Email</div>
                <div className="font-display font-bold text-base group-hover:text-primary transition-colors break-all">{SITE.email}</div>
                <div className="text-xs text-muted-foreground mt-1 font-mono tracking-[0.1em]">24H QUOTE TURNAROUND</div>
              </div>
            </a>
            <a href={SITE.whatsappUrl} target="_blank" rel="noopener noreferrer" className="bg-background p-7 flex items-start gap-4 hover:bg-card/40 transition-colors group">
              <div className="w-11 h-11 flex items-center justify-center bg-primary/10 border border-primary/30 shrink-0">
                <MessageCircle size={18} className="text-primary" />
              </div>
              <div>
                <div className="text-overline text-muted-foreground mb-1">WhatsApp</div>
                <div className="font-display font-bold text-lg group-hover:text-primary transition-colors">Chat Direct</div>
                <div className="text-xs text-muted-foreground mt-1 font-mono tracking-[0.1em]">FASTEST RESPONSE</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-16 md:py-24 relative">
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <img src={asset(BLUEPRINT_PATTERN)} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container relative grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Form */}
          <div className="lg:col-span-8 reveal">
            <div className="industrial-card p-6 md:p-10">
              <div className="section-number mb-3">— REQUEST FOR QUOTE</div>
              <h2 className="font-display font-bold text-2xl md:text-3xl tracking-tight mb-2">
                Submit your enquiry
              </h2>
              <p className="text-sm text-foreground/70 mb-8">
                Required fields marked with <span className="text-primary">*</span>
              </p>
              <RFQForm />
            </div>
          </div>

          {/* Address */}
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-28 space-y-5">
              <div className="industrial-card p-6 reveal">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 flex items-center justify-center bg-primary/10 border border-primary/30 shrink-0">
                    <MapPin size={18} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-overline text-muted-foreground mb-2">India — Headquarters</div>
                    <div className="font-display font-bold text-base mb-1">Inditech Semicon Services</div>
                    <p className="text-sm text-foreground/75 leading-relaxed">
                      {SITE.address.line1},<br />
                      {SITE.address.line2}<br />
                      Pin: {SITE.address.pincode}<br />
                      {SITE.address.country}
                    </p>
                  </div>
                </div>
              </div>

              <div className="industrial-card p-6 reveal">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 flex items-center justify-center bg-primary/10 border border-primary/30 shrink-0">
                    <MapPin size={18} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-overline text-muted-foreground mb-2">Singapore — Regional Hub</div>
                    <div className="font-display font-bold text-base mb-1">Asia-Pacific Operations</div>
                    <p className="text-sm text-foreground/75 leading-relaxed">
                      Business development, quotation<br />
                      management & regional logistics
                    </p>
                  </div>
                </div>
              </div>

              <div className="industrial-card p-6 reveal">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 flex items-center justify-center bg-primary/10 border border-primary/30 shrink-0">
                    <Clock size={18} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="text-overline text-muted-foreground mb-2">Office Hours</div>
                    <div className="space-y-1.5 text-sm">
                      <div className="flex justify-between">
                        <span className="text-foreground/75">Mon – Fri</span>
                        <span className="font-mono text-foreground">09:00 – 19:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-foreground/75">Saturday</span>
                        <span className="font-mono text-foreground">09:00 – 14:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-foreground/75">Sunday</span>
                        <span className="font-mono text-muted-foreground">Closed</span>
                      </div>
                      <div className="border-t border-border pt-2 mt-2">
                        <div className="font-mono text-[10px] tracking-[0.15em] text-primary">EMERGENCY · 24/7 ON CALL</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </SiteLayout>
  );
}

function RFQForm() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Prefill the message if arriving from a catalog "Request Quote" link (?product=)
  const prefillMessage = (() => {
    if (typeof window === "undefined") return "";
    const product = new URLSearchParams(window.location.search).get("product");
    return product
      ? `I'd like a quote for: ${product}\n\nQuantity: \nRequired by: \nDelivery location: `
      : "";
  })();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    // Client-side validation
    const required = ["name", "email", "company", "service", "message"];
    for (const field of required) {
      if (!formData.get(field)) {
        toast.error(`Please fill in your ${field}.`);
        return;
      }
    }

    setSubmitting(true);

    // Simulate submission (placeholder — backend can be wired up later)
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      form.reset();
      toast.success("Quote request received. We'll respond within 24 hours.");
      setTimeout(() => setSubmitted(false), 6000);
    }, 1200);
  };

  if (submitted) {
    return (
      <div className="py-12 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border border-primary/30 mb-5">
          <CheckCircle2 size={32} className="text-primary" />
        </div>
        <h3 className="font-display font-bold text-2xl mb-2">Enquiry received</h3>
        <p className="text-foreground/70 max-w-md mx-auto">
          Thank you. Our engineering team will respond to your request within 24 hours
          with detailed availability, pricing, and lead time.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Field label="Full Name" name="name" required placeholder="e.g. Priya Sharma" />
        <Field label="Company" name="company" required placeholder="e.g. ABC Semiconductors" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Field label="Work Email" name="email" type="email" required placeholder="priya@company.com" />
        <Field label="Phone" name="phone" type="tel" placeholder="+91 ..." />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <SelectField label="Service Required" name="service" required>
          <option value="">Select a service…</option>
          {SERVICES.map((s) => (
            <option key={s.slug} value={s.title}>{s.title}</option>
          ))}
          <option value="other">Other / General Enquiry</option>
        </SelectField>
        <Field label="Equipment Model / Part No." name="part" placeholder="e.g. AMAT 0010-21748" />
      </div>
      <div>
        <label className="block text-overline text-muted-foreground mb-2">
          Message <span className="text-primary">*</span>
        </label>
        <textarea
          name="message"
          required
          rows={5}
          defaultValue={prefillMessage}
          placeholder="Describe your requirement — equipment model, part numbers, quantity, urgency, or service scope."
          className="w-full bg-background border border-border focus:border-primary/60 focus:ring-2 focus:ring-primary/20 outline-none px-4 py-3 text-sm font-sans transition-colors resize-y"
        />
      </div>

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-3 border-t border-border">
        <p className="text-xs text-muted-foreground font-mono tracking-[0.1em]">
          24H QUOTE TURNAROUND · ENGINEERING-REVIEWED
        </p>
        <button
          type="submit"
          disabled={submitting}
          className="btn-cta inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-sm disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {submitting ? "Sending…" : (
            <>
              Send Enquiry <Send size={14} />
            </>
          )}
        </button>
      </div>
    </form>
  );
}

function Field({
  label, name, type = "text", required, placeholder,
}: {
  label: string; name: string; type?: string; required?: boolean; placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-overline text-muted-foreground mb-2">
        {label}{required && <span className="text-primary"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full bg-background border border-border focus:border-primary/60 focus:ring-2 focus:ring-primary/20 outline-none px-4 py-3 text-sm transition-colors"
      />
    </div>
  );
}

function SelectField({
  label, name, required, children,
}: {
  label: string; name: string; required?: boolean; children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-overline text-muted-foreground mb-2">
        {label}{required && <span className="text-primary"> *</span>}
      </label>
      <select
        id={name}
        name={name}
        required={required}
        className="w-full bg-background border border-border focus:border-primary/60 focus:ring-2 focus:ring-primary/20 outline-none px-4 py-3 text-sm transition-colors"
      >
        {children}
      </select>
    </div>
  );
}
