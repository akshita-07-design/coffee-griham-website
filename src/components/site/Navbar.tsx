import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MapPin } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "./Button";
import { cn } from "@/lib/utils";

const links = [
  { href: "#story", label: "Story" },
  { href: "#love", label: "Why" },
  { href: "#drinks", label: "Drinks" },
  { href: "#bites", label: "Bites" },
  { href: "#work", label: "Work" },
  { href: "#visit", label: "Visit" },
];

const MAPS_URL = "https://maps.app.goo.gl/9rVi3FsNKK3QweZn7";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Over hero (dark image) when not scrolled → white text; after scroll → light glass card with ink text.
  const onDark = !scrolled;

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "py-2" : "py-4",
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          className={cn(
            "flex items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500 sm:px-6",
            scrolled
              ? "glass-light shadow-[0_10px_30px_-16px_rgba(44,44,44,0.25)]"
              : "bg-transparent",
          )}
        >
          <a href="#top" aria-label="Coffee Griham home">
            <Logo onDark={onDark} />
          </a>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={cn(
                  "group relative text-sm transition-colors",
                  onDark
                    ? "text-white/85 hover:text-white"
                    : "text-ink/70 hover:text-ink",
                )}
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-ember transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <a href={MAPS_URL} target="_blank" rel="noreferrer">
              <Button size="sm" variant="primary">
                <MapPin className="h-4 w-4" /> Directions
              </Button>
            </a>
          </div>

          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className={cn(
              "inline-flex h-10 w-10 items-center justify-center rounded-full md:hidden",
              onDark ? "text-white hover:bg-white/10" : "text-ink hover:bg-ink/5",
            )}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="glass-light mt-2 overflow-hidden rounded-2xl p-2 shadow-[0_20px_40px_-20px_rgba(44,44,44,0.25)] md:hidden"
            >
              <nav className="flex flex-col" aria-label="Mobile">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-4 py-3 text-sm text-ink/80 hover:bg-brown/5 hover:text-ink"
                  >
                    {l.label}
                  </a>
                ))}
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 inline-flex items-center justify-center gap-2 rounded-xl bg-ember px-4 py-3 text-sm font-medium text-white"
                >
                  <MapPin className="h-4 w-4" /> Get Directions
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
