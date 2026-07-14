import { motion } from "framer-motion";
import { Section } from "./Section";
import { photos } from "@/lib/assets";

export function About() {
  return (
    <Section id="story" eyebrow="Our story" className="pb-16 sm:pb-24">
      <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
        <motion.div
          initial={{
            opacity: 0,
            x: -60,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            margin: "-80px",
          }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
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

          <div className="mt-12 grid grid-cols-3 gap-5 border-t border-line pt-10">
            {[
              ["4.6★", "Google Rating"],
              ["114+", "Happy Reviews"],
              ["₹1–200", "Affordable"],
            ].map(([number, label], i) => (
              <motion.div
                key={label}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: i * 0.15,
                  duration: 0.7,
                }}
                whileHover={{
                  y: -6,
                  scale: 1.04,
                }}
                className="rounded-2xl border border-line bg-paper p-5 text-center shadow-sm transition-all"
              >
                <div className="font-display text-4xl text-amber-600">
                  {number}
                </div>

                <div className="mt-2 text-[10px] uppercase tracking-[0.18em] text-mute">
                  {label}
                </div>
              </motion.div>
           ))}
         </div>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            x: 60,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            margin: "-80px",
          }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative lg:col-span-6"
         />
          <motion.div
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.25, 0.45, 0.25],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-10 rounded-full bg-amber-200 blur-[90px]"
          />
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl soft-shadow">
            <motion.img
              src={photos.interiorCounter}
              alt="Coffee Griham interior with warm lighting, wooden counter and menu board"
              loading="lazy"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.06,
             }}
             className="h-full w-full object-cover"
            />
          </div>
          <motion.div
            animate={{
              y: [0, -8, 0],
              rotate: [0, 2, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{
              scale: 1.08,
              rotate: -2,
            }}
            className="absolute -bottom-6 -left-6 hidden aspect-square w-44 overflow-hidden rounded-2xl border-4 border-cream soft-shadow sm:block"
          >
            <img
              src={photos.latteArt}
              alt="Latte art with tulip pattern and Coffee Griham logo coaster"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            </motion.div>
          </div>
    </Section>
  );
}
