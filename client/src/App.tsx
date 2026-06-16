/**
 * Inditech Semicon Support — App.tsx
 * Style: Precision Industrial — Light Edition (white bg + brand blue + orange CTA)
 */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, Router as WouterRouter } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { QuoteCartProvider } from "./contexts/QuoteCartContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Catalog from "./pages/Catalog";
import ProductDetail from "./pages/ProductDetail";
import Quote from "./pages/Quote";
import Contact from "./pages/Contact";

// Base path for client-side routing. On GitHub Pages the app is served from
// a sub-path (e.g. "/Inditech"), so strip the trailing slash for wouter.
const ROUTER_BASE = (import.meta.env.BASE_URL || "/").replace(/\/$/, "");

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/services/:slug" component={ServiceDetail} />
      <Route path="/catalog" component={Catalog} />
      <Route path="/catalog/:id" component={ProductDetail} />
      <Route path="/quote" component={Quote} />
      <Route path="/contact" component={Contact} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <QuoteCartProvider>
          <TooltipProvider>
            <Toaster theme="light" richColors />
            <WouterRouter base={ROUTER_BASE}>
              <Router />
            </WouterRouter>
          </TooltipProvider>
        </QuoteCartProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
