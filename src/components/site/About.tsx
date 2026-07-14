import { motion } from "framer-motion";
import { Section } from "./Section";
import { photos } from "@/lib/assets";

export function About() {
  return (
    <Section id="story" eyebrow="Our story" className="pb-16 sm:pb-24">
      <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-6"
        >
          <h2 className="text-balance font-display text-4xl leading-[1.05] text-ink sm:text-5xl md:text-[3.75rem]">
            Every neighbourhood deserves a place that feels like{" "}
            <em className="font-accent italic text-brown">home.</em>
          </h2>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-ink/75 sm:text-lg">
            Griham means <em>home</em>. And that's exactly what we set out to build in
            Vidya Vihar Colony — not another coffee chain, but a small room where the
            regulars get remembered, the espresso gets pulled the moment you order, and
            nobody's watching the clock.
          </p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-mute sm:text-lg">
            An hour between classes. A slow Sunday chapter. A long catch-up over cold
            coffee. Whatever brings you in, the table is yours for as long as you need it.
          </p>

          <div className="mt-12 grid grid-cols-3 gap-6 border-t border-line pt-10">
            <div>
              <div className="font-display text-3xl text-ember sm:text-4xl">4.6★</div>
              <div className="mt-2 text-[10px] uppercase tracking-[0.2em] text-mute">Google rating</div>
            </div>
            <div>
              <div className="font-display text-3xl text-ember sm:text-4xl">114+</div>
              <div className="mt-2 text-[10px] uppercase tracking-[0.2em] text-mute">Happy reviews</div>
            </div>
            <div>
              <div className="font-display text-3xl text-ember sm:text-4xl">₹1–200</div>
              <div className="mt-2 text-[10px] uppercase tracking-[0.2em] text-mute">Everyday pricing</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1 }}
          className="relative lg:col-span-6"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl soft-shadow">
            <img
              src={photos.interiorCounter}
              alt="Coffee Griham interior with warm lighting, wooden counter and menu board"
              className="h-full w-full object-cover transition-transform duration-[1200ms] hover:scale-105"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden aspect-square w-44 overflow-hidden rounded-2xl border-4 border-cream soft-shadow sm:block">
            <img
              src={photos.latteArt}
              alt="Latte art with tulip pattern and Coffee Griham logo coaster"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
