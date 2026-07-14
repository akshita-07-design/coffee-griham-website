import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { Section } from "./Section";
import { cn } from "@/lib/utils";

const faqs = [
  { q: "Do you offer laptop-friendly seating?", a: "Yes — most tables comfortably fit a laptop and a cup, and free Wi-Fi plus a dedicated AC work corner are launching soon." },
  { q: "Is Coffee Griham fully vegetarian?", a: "Yes, our entire menu is 100% vegetarian." },
  { q: "Do you have outdoor seating?", a: "We do — a small collection of bistro tables on the pavement, best enjoyed in the evening." },
  { q: "How's the parking?", a: "Free street parking right outside, plus a free lot within a short walk." },
  { q: "What's your price range?", a: "Everyday-affordable. Most drinks sit between ₹80 and ₹170, and sandwiches from ₹65." },
  { q: "Do you take card and UPI payments?", a: "Yes — UPI, debit/credit cards and NFC mobile payments all work." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section
      id="faq"
      eyebrow="FAQ"
      title="Good to know."
      description="A few quick answers before you visit."
    >
      <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-line bg-paper soft-shadow">
        {faqs.map((item, i) => {
          const isOpen = open === i;
          return (
            <div key={item.q} className={cn(i > 0 && "border-t border-line")}>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left transition-colors hover:bg-cream/60"
                aria-expanded={isOpen}
              >
                <span className="font-display text-lg text-ink">{item.q}</span>
                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ember/10 text-ember"
                >
                  <Plus className="h-4 w-4" />
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 text-sm leading-relaxed text-mute sm:text-base">
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
