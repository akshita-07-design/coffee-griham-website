import { motion } from "framer-motion";
import { Section } from "./Section";
import { photos } from "@/lib/assets";

const drinks = [
  {
    name: "Cappuccino",
    note: "Double shot, silky foam, dusted with cocoa",
    price: "₹120",
    image: photos.latteArt,
    tag: "Signature",
  },
  {
    name: "Latte",
    note: "Smooth, milky, our most-loved everyday cup",
    price: "₹130",
    image: photos.twoLattesCups,
  },
  {
    name: "Mocha Latte",
    note: "Espresso, dark chocolate, steamed milk",
    price: "₹150",
  },
  {
    name: "Vietnamese Coffee",
    note: "Slow-dripped, sweetened with condensed milk",
    price: "₹160",
    image: photos.icedLatte,
    tag: "House Favourite",
  },
  {
    name: "Beans Lush Cold Coffee",
    note: "Cold brew concentrate over ice with chocolate drizzle",
    price: "₹170",
    image: photos.coldCoffeeDome,
    tag: "Best Seller",
  },
  {
    name: "Hazelnut Latte",
    note: "Warm hazelnut, espresso, steamed milk",
    price: "₹150",
  },
  {
    name: "Caramel Latte",
    note: "House caramel, espresso, velvet milk",
    price: "₹150",
  },
  {
    name: "Americano",
    note: "Two shots, hot water, quiet strength",
    price: "₹100",
  },
  {
    name: "Vanilla Latte",
    note: "Madagascar vanilla, espresso, steamed milk",
    price: "₹150",
  },
  {
    name: "Irish Latte",
    note: "Deep and warming, with a whisper of whisky notes",
    price: "₹160",
  },
  {
    name: "Espresso",
    note: "The one that started it all. Neat, honest, alive.",
    price: "₹80",
  },
  {
    name: "Frappe",
    note: "Blended, frothy, generously topped",
    price: "₹160",
    image: photos.frappe,
  },
];

export function SignatureDrinks() {
  return (
    <Section
      id="drinks"
      eyebrow="Signature Coffee"
      title="Brewed with intention."
      description="From a quiet espresso to our Beans Lush Cold Coffee, every drink is handcrafted the moment you order it."
    >
      <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {drinks.map((drink, index) => (
          <motion.article
            key={drink.name}
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              margin: "-80px",
            }}
            transition={{
              duration: 0.7,
              delay: index * 0.06,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{
              y: -10,
            }}
            className="group overflow-hidden rounded-3xl border border-line bg-paper soft-shadow transition-all duration-500 hover:border-amber-300/40 hover:shadow-2xl"
          >
            {drink.image ? (
              <div className="relative aspect-[5/4] overflow-hidden bg-cream">
                <motion.img
                  src={drink.image}
                  alt={drink.name}
                  loading="lazy"
                  initial={{
                    scale: 1.18,
                  }}
                  whileInView={{
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 1.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{
                    scale: 1.12,
                    y: -6,
                  }}
                  className="h-full w-full object-cover"
                />

                <motion.div
                  initial={{
                    x: "-120%",
                  }}
                  whileHover={{
                    x: "120%",
                  }}
                  transition={{
                    duration: 0.9,
                  }}
                  className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {drink.tag && (
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-amber-700 backdrop-blur">
                    {drink.tag}
                  </span>
                )}
              </div>
            ) : (
              <div className="relative flex aspect-[5/4] items-center justify-center overflow-hidden bg-gradient-to-br from-brown/[0.06] via-caramel/[0.05] to-amber-200/20">
                <motion.span
                  whileHover={{
                    rotate: -8,
                    scale: 1.1,
                  }}
                  className="font-accent text-8xl italic text-brown/20"
                >
                  {drink.name[0]}
                </motion.span>
              </div>
            )}

            <div className="flex items-start justify-between gap-4 p-6">
              <div className="min-w-0">
                <h3 className="font-display text-2xl text-ink">
                  {drink.name}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-mute">
                  {drink.note}
                </p>
              </div>

              <span className="shrink-0 rounded-full bg-cream px-4 py-2 text-sm font-semibold text-brown">
                {drink.price}
              </span>
            </div>
                        <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.35 }}
              className="mx-6 mb-6 overflow-hidden rounded-2xl bg-gradient-to-r from-amber-50 via-white to-amber-50"
            >
              <motion.div
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  repeatDelay: 0.5,
                  ease: "linear",
                }}
                className="h-[2px] w-1/2 bg-gradient-to-r from-transparent via-amber-400 to-transparent"
              />
            </motion.div>
          </motion.article>
        ))}
      </div>

      <motion.p
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          delay: 0.2,
          duration: 0.7,
        }}
        className="mt-10 text-center text-xs uppercase tracking-[0.22em] text-mute"
      >
        Prices are indicative · Full menu available in-store
      </motion.p>
    </Section>
  );
}