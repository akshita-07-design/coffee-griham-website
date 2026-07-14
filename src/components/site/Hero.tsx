import { motion } from "framer-motion";
import { ArrowDown, Star, MapPin } from "lucide-react";
import { Button } from "./Button";
import { photos, MAPS_URL } from "@/lib/assets";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-28 pb-20 sm:pt-32"
    >
      <motion.img
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.4, ease: [0.16, 1, 0.3, 1] }}
        src="/images/image-14.png"
        alt="Coffee Griham storefront glowing at night with warm lantern lighting"
        className="absolute inset-0 -z-20 h-full w-full object-cover brightness-[0.9] contrast-[1.05] saturate-[1.1]"
    />

    <div
       aria-hidden
       className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,rgba(18,12,8,0.45),rgba(18,12,8,0.25)_45%,rgba(18,12,8,0.75))]"
    />

      <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.07] px-4 py-1.5 text-[11px] font-medium tracking-[0.2em] uppercase text-white/85 backdrop-blur-md"
        >
          <Star className="h-3 w-3 fill-ember text-ember" />
          4.6 · 114 Google reviews
          <span className="mx-1 h-1 w-1 rounded-full bg-white/40" />
          Bhilai
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 text-balance font-display text-[3rem] font-normal leading-[1] text-white sm:text-7xl md:text-[5.5rem] lg:text-[6.75rem]"
         >
          A peaceful corner <br className="hidden sm:block" />
          in the heart of <span className="italic text-ember">Bhilai.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55 }}
          className="mt-8 max-w-2xl font-accent text-xl leading-relaxed text-white/75 sm:text-2xl"
        >
          Whether you've got an hour after the gym, a break between classes, or
          just need a quiet place to slow down — Coffee Griham is built for
          those moments.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-3"
        >
          <a href="#drinks">
            <Button size="lg">Explore the menu</Button>
          </a>
          <a href={MAPS_URL} target="_blank" rel="noreferrer">
            <Button size="lg" variant="onDark">
              <MapPin className="h-4 w-4" /> Visit us
            </Button>
          </a>
        </motion.div>

        <motion.a
          href="#story"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-20 inline-flex flex-col items-center gap-3 text-[10px] uppercase tracking-[0.35em] text-white/50 transition-colors hover:text-white"
          aria-label="Scroll down"
        >
          Scroll to explore
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex h-8 w-[1px] justify-center bg-gradient-to-b from-white/40 to-transparent"
          >
            <ArrowDown className="mt-6 h-3 w-3" />
          </motion.span>
        </motion.a>
      </div>
    </section>
  );
}
