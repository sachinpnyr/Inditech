/**
 * WhatsAppFab — Floating WhatsApp chat button
 */
import { SITE } from "@/lib/site-data";

export function WhatsAppFab() {
  return (
    <a
      href={SITE.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-40 group"
    >
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping" />
        <div className="relative w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1DA851] flex items-center justify-center shadow-lg transition-all duration-200 group-hover:scale-105 group-active:scale-95">
          <svg viewBox="0 0 32 32" className="w-7 h-7 fill-white">
            <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977.945 2.78 1.135 1.94 2.59 3.51 4.52 4.66.486.287 2.39 1.187 2.92 1.187.5 0 .987-.146 1.46-.36.5-.215.86-.79.86-1.32 0-.114-.014-.229-.043-.343-.085-.371-.875-.6-1.146-.715zm-3.024 6.59h-.014a9.78 9.78 0 0 1-4.973-1.36l-.357-.214-3.703.97.99-3.617-.232-.374a9.834 9.834 0 0 1-1.504-5.21c0-5.43 4.426-9.854 9.868-9.854 2.64 0 5.117 1.03 6.978 2.892a9.78 9.78 0 0 1 2.892 6.978c-.001 5.43-4.428 9.854-9.95 9.854zm8.34-18.234c-2.226-2.227-5.193-3.45-8.353-3.45a11.788 11.788 0 0 0-10.225 17.683l-1.18 4.323 4.42-1.16a11.808 11.808 0 0 0 5.642 1.434h.005c6.503 0 11.795-5.292 11.795-11.795 0-3.146-1.232-6.114-3.45-8.34z"/>
          </svg>
        </div>
      </div>
      <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-card border border-border px-3 py-1.5 text-xs font-mono whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        Chat on WhatsApp
      </span>
    </a>
  );
}
