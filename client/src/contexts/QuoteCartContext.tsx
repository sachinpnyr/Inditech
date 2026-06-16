/**
 * QuoteCart — a lightweight multi-select "request a quote for these items" cart.
 * Design philosophy: Precision Industrial. The cart is a procurement tool, not a
 * checkout — there are no prices, only quantities and a single RFQ submission.
 * Persisted to localStorage so a buyer can browse, accumulate items, then submit.
 */
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { ReactNode } from "react";

export interface QuoteCartItem {
  id: string;
  name: string;
  image: string;
  category: string;
  qty: number;
}

interface QuoteCartContextValue {
  items: QuoteCartItem[];
  count: number;
  has: (id: string) => boolean;
  add: (item: Omit<QuoteCartItem, "qty">, qty?: number) => void;
  remove: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  toggle: (item: Omit<QuoteCartItem, "qty">) => void;
  clear: () => void;
}

const QuoteCartContext = createContext<QuoteCartContextValue | null>(null);
const STORAGE_KEY = "inditech-quote-cart";

export function QuoteCartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<QuoteCartItem[]>(() => {
    if (typeof window === "undefined") return [];
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      return raw ? (JSON.parse(raw) as QuoteCartItem[]) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      /* ignore quota errors */
    }
  }, [items]);

  const has = useCallback((id: string) => items.some((i) => i.id === id), [items]);

  const add = useCallback(
    (item: Omit<QuoteCartItem, "qty">, qty = 1) => {
      setItems((prev) => {
        const existing = prev.find((i) => i.id === item.id);
        if (existing) {
          return prev.map((i) =>
            i.id === item.id ? { ...i, qty: i.qty + qty } : i,
          );
        }
        return [...prev, { ...item, qty }];
      });
    },
    [],
  );

  const remove = useCallback((id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }, []);

  const setQty = useCallback((id: string, qty: number) => {
    setItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, qty: Math.max(1, qty) } : i)),
    );
  }, []);

  const toggle = useCallback((item: Omit<QuoteCartItem, "qty">) => {
    setItems((prev) => {
      if (prev.some((i) => i.id === item.id)) {
        return prev.filter((i) => i.id !== item.id);
      }
      return [...prev, { ...item, qty: 1 }];
    });
  }, []);

  const clear = useCallback(() => setItems([]), []);

  const value = useMemo<QuoteCartContextValue>(
    () => ({
      items,
      count: items.length,
      has,
      add,
      remove,
      setQty,
      toggle,
      clear,
    }),
    [items, has, add, remove, setQty, toggle, clear],
  );

  return (
    <QuoteCartContext.Provider value={value}>
      {children}
    </QuoteCartContext.Provider>
  );
}

export function useQuoteCart() {
  const ctx = useContext(QuoteCartContext);
  if (!ctx) {
    throw new Error("useQuoteCart must be used within a QuoteCartProvider");
  }
  return ctx;
}
