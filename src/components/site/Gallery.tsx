import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Section } from "./Section";
import { photos } from "@/lib/assets";
import { cn } from "@/lib/utils";

type Category = "All" | "Coffee" | "Food" | "Interior" | "Exterior";

const items: { src: string; alt: string; span?: string; cat: Exclude<Category, "All"> }[] = [
  { src: photos.exteriorNight, alt: "Coffee Griham storefront at night with warm signage", span: "row-span-2", cat: "Exterior" },
  { src: photos.latteArt, alt: "Latte art tulip pattern with Coffee Griham logo", cat: "Coffee" },
  { src: photos.twoLattesCups, alt: "Two lattes in Coffee Griham cups on a tray", cat: "Coffee" },
  { src: photos.interiorCounter, alt: "Coffee Griham interior counter and menu board", span: "col-span-2", cat: "Interior" },
  { src: photos.coldCoffeeDome, alt: "Cold coffee with chocolate drizzle under a dome lid", cat: "Coffee" },
  { src: photos.mangoDessert, alt: "Layered mango dessert with cream", cat: "Food" },
  { src: photos.icedLatte, alt: "Iced latte on the counter with warm interior behind", cat: "Coffee" },
  { src: photos.americanoBamboo, alt: "Iced Americano beside a bamboo plant and coffee grinder", cat: "Coffee" },
  { src: photos.exteriorCouple, alt: "Couple sitting outside Coffee Griham in the evening", span: "col-span-2", cat: "Exterior" },
  { src: photos.chocolateShake, alt: "Chocolate shake with whipped cream", cat: "Food" },
  { src: photos.frappe, alt: "Iced frappe held up in front of the menu board", cat: "Coffee" },
  { src: photos.twoLattesOutdoor, alt: "Two lattes on an outdoor table", cat: "Exterior" },
];

const categories: Category[] = ["All", "Coffee", "Food", "Interior", "Exterior"];

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);
  const [filter, setFilter] = useState<Category>("All");

  const shown = useMemo(
    () => (filter === "All" ? items : items.filter((i) => i.cat === filter)),
    [filter],
  );

  return (
    <Section
      id="gallery"
      eyebrow="Gallery"
      title="Real cups. Real corner."
      description="No stock photography, no filters. Just Coffee Griham as it actually looks on a regular Tuesday."
    >
      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setFilter(c)}
            className={cn(
              "rounded-full border px-4 py-1.5 text-xs font-medium uppercase tracking-[0.15em] transition-all duration-300",
              filter === c
                ? "border-ember bg-ember text-white shadow-[0_8px_20px_-10px_rgba(217,119,6,0.55)]"
                : "border-line bg-paper text-mute hover:border-ember/40 hover:text-brown",
            )}
          >
            {c}
          </button>
        ))}
      </div>

      <motion.div
        layout
        className="grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[220px] sm:grid-cols-3 lg:grid-cols-4"
      >
        <AnimatePresence mode="popLayout">
          {shown.map((item, i) => (
            <motion.button
              key={item.src}
              layout
              type="button"
              onClick={() => setActive(i)}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.45, delay: (i % 6) * 0.04 }}
              className={cn(
                "group relative overflow-hidden rounded-2xl bg-cream soft-shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                filter === "All" ? item.span : undefined,
              )}
              aria-label={`Open image: ${item.alt}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="absolute bottom-3 left-3 rounded-full bg-white/85 px-2.5 py-1 text-[9px] font-medium uppercase tracking-[0.15em] text-brown opacity-0 backdrop-blur transition-opacity duration-500 group-hover:opacity-100">
                {item.cat}
              </span>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {active !== null && shown[active] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/85 p-4 backdrop-blur-sm"
            onClick={() => setActive(null)}
            role="dialog"
            aria-modal="true"
          >
            <button
              className="absolute right-6 top-6 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
              onClick={() => setActive(null)}
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
            <motion.img
              key={shown[active].src}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              src={shown[active].src}
              alt={shown[active].alt}
              className="max-h-[85vh] max-w-[92vw] rounded-2xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
