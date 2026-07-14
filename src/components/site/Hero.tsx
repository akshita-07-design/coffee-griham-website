import { motion } from "framer-motion";
import { ArrowDown, Star, MapPin } from "lucide-react";
import { Button } from "./Button";
import { MAPS_URL } from "@/lib/assets";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-28 pb-20 sm:pt-32"
    >
      {/* Hero Background Image */}
      <motion.img
        initial={{
          scale: 1.18,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        transition={{
          duration: 2.8,
          ease: [0.16, 1, 0.3, 1],
        }}
        whileHover={{
          scale: 1.03,
        }}
        src="/images/image-14.png"
        alt="Coffee Griham storefront glowing at night with warm lighting"
        className="absolute inset-0 -z-20 h-full w-full object-cover brightness-[0.9] contrast-[1.08] saturate-[1.15]"
      />

      {/* Cinematic Overlay */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,rgba(18,12,8,0.55),rgba(18,12,8,0.18)_38%,rgba(18,12,8,0.82))]"
      />

      {/* Ambient Glow */}
      <motion.div
        aria-hidden
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.45, 0.7, 0.45],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-40 left-1/2 -z-10 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-amber-300/20 blur-[170px]"
      />

      {/* Floating Steam */}
      <motion.div
        aria-hidden
        animate={{
          y: [0, -25, 0],
          opacity: [0.15, 0.35, 0.15],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-white/10 blur-[110px]"
      />

      <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-6 text-center">

        {/* Rating */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.07] px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-white/85 backdrop-blur-md"
        >
          <Star className="h-3 w-3 fill-amber-400 text-amber-400" />

          4.6 · 114 Google Reviews

          <span className="mx-1 h-1 w-1 rounded-full bg-white/40" />

          Bhilai
        </motion.div>


        {/* Heading */}
        <motion.h1
          initial={{
            opacity: 0,
            y: 70,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1.3,
            delay: 0.25,
            ease: [0.16,1,0.3,1],
          }}
          className="mt-10 text-balance font-display text-[3rem] leading-[1] text-white sm:text-7xl md:text-[5.5rem] lg:text-[6.75rem]"
        >
          A peaceful corner
          <br className="hidden sm:block" />

          in the heart of{" "}

          <span className="italic text-amber-300">
            Bhilai.
          </span>

        </motion.h1>


        {/* Description */}
        <motion.p
          initial={{
            opacity:0,
            y:40,
          }}
          animate={{
            opacity:1,
            y:0,
          }}
          transition={{
            duration:1,
            delay:0.6,
          }}
          className="mt-8 max-w-2xl font-accent text-xl leading-relaxed text-white/80 sm:text-2xl"
        >
          Whether you've got an hour after the gym, a break between classes, or
          just need a quiet place to slow down — Coffee Griham is built for
          those moments.
        </motion.p>


        {/* Buttons */}
        <motion.div
          initial={{
            opacity:0,
            scale:0.9,
            y:30,
          }}
          animate={{
            opacity:1,
            scale:1,
            y:0,
          }}
          transition={{
            duration:0.8,
            delay:0.9,
          }}
          className="mt-12 flex flex-wrap items-center justify-center gap-3"
        >

          <a href="#drinks">
            <Button size="lg">
              Explore Menu
            </Button>
          </a>


          <a
            href={MAPS_URL}
            target="_blank"
            rel="noreferrer"
          >
            <Button size="lg" variant="onDark">
              <MapPin className="h-4 w-4" />

              Visit Us

            </Button>
          </a>

        </motion.div>


        {/* Scroll */}
        <motion.a
          href="#story"
          initial={{
            opacity:0,
          }}
          animate={{
            opacity:1,
          }}
          transition={{
            delay:1.3,
          }}
          className="mt-20 inline-flex flex-col items-center gap-3 text-[10px] uppercase tracking-[0.35em] text-white/50 transition-colors hover:text-white"
        >

          Scroll to Explore


          <motion.span
            animate={{
              y:[0,8,0],
            }}
            transition={{
              duration:2,
              repeat:Infinity,
              ease:"easeInOut",
            }}
            className="inline-flex h-8 w-[1px] justify-center bg-gradient-to-b from-white/40 to-transparent"
          >
            <ArrowDown className="mt-6 h-3 w-3"/>
          </motion.span>

        </motion.a>

      </div>

    </section>
  );
}