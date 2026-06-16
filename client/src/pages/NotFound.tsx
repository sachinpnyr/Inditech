import { Link } from "wouter";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";

export default function NotFound() {
  return (
    <SiteLayout>
      <section className="min-h-[80vh] flex items-center pt-20">
        <div className="container">
          <div className="max-w-2xl">
            <div className="font-mono text-sm tracking-[0.2em] text-primary mb-4">
              ERROR · 404
            </div>
            <h1 className="font-display font-bold text-5xl md:text-7xl leading-[1.05] tracking-tight mb-6">
              Page not <span className="text-primary">found.</span>
            </h1>
            <p className="text-foreground/75 leading-relaxed mb-8 max-w-lg">
              The page you're looking for doesn't exist or has been moved. If you were
              looking for a specific part number or service, our team can help directly.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/" className="btn-cta inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-sm">
                <ArrowLeft size={16} /> Back to Home
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium border border-primary/40 text-primary hover:bg-primary/5 transition-all rounded-sm">
                Contact Us <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
