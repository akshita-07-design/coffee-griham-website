import { motion } from "framer-motion";
import { Section } from "./Section";
import { photos } from "@/lib/assets";

const drinks = [
  { name: "Cappuccino", note: "Double shot, silky foam, dusted with cocoa", price: "₹120", image: photos.latteArt, tag: "Signature" },
  { name: "Latte", note: "Smooth, milky, our most-loved everyday cup", price: "₹130", image: photos.twoLattesCups },
  { name: "Mocha Latte", note: "Espresso, dark chocolate, steamed milk", price: "₹150" },
  { name: "Vietnamese Coffee", note: "Slow-dripped, sweetened with condensed milk", price: "₹160", image: photos.icedLatte, tag: "House favourite" },
  { name: "Beans Lush Cold Coffee", note: "Cold brew concentrate over ice, chocolate drizzle", price: "₹170", image: photos.coldCoffeeDome },
  { name: "Hazelnut Latte", note: "Warm hazelnut, espresso, steamed milk", price: "₹150" },
  { name: "Caramel Latte", note: "House caramel, espresso, velvet milk", price: "₹150" },
  { name: "Americano", note: "Two shots, hot water, quiet strength", price: "₹100" },
  { name: "Vanilla Latte", note: "Madagascar vanilla, espresso, steamed milk", price: "₹150" },
  { name: "Irish Latte", note: "Deep and warming, with a whisper of whisky notes", price: "₹160" },
  { name: "Espresso", note: "The one that started it all. Neat, honest, alive.", price: "₹80" },
  { name: "Frappe", note: "Blended, frothy, generously topped", price: "₹160", image: photos.frappe },
];

export function SignatureDrinks() {
  return (
    <Section
      id="drinks"
      eyebrow="Signature coffee"
      title="Brewed with intention."
      description="From a quiet espresso to our beans-lush cold coffee, every drink is made the moment you order it — no shortcuts, no queue-jumping."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {drinks.map((d, i) => (
          <motion.article
            key={d.name}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
            className="group relative flex flex-col overflow-hidden rounded-3xl border border-line bg-paper soft-shadow transition-all duration-500 hover:-translate-y-1 hover:border-ember/30 hover:lift-shadow"
          >
            {d.image ? (
              <div className="relative aspect-[5/4] overflow-hidden bg-cream">
                <img
                  src={d.image}
                  alt={d.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/25 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                {d.tag && (
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.15em] text-ember backdrop-blur">
                    {d.tag}
                  </span>
                )}
              </div>
            ) : (
              <div className="relative flex aspect-[5/4] items-center justify-center overflow-hidden bg-gradient-to-br from-brown/[0.06] via-caramel/[0.05] to-ember/[0.08]">
                <span className="font-accent text-8xl italic text-brown/20">{d.name[0]}</span>
              </div>
            )}
            <div className="flex items-start justify-between gap-4 p-6">
              <div className="min-w-0">
                <h3 className="font-display text-2xl text-ink">{d.name}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-mute">{d.note}</p>
              </div>
              <span className="shrink-0 rounded-full bg-cream px-3.5 py-1.5 text-sm font-medium text-brown">
                {d.price}
              </span>
            </div>
          </motion.article>
        ))}
      </div>
      <p className="mt-8 text-center text-xs uppercase tracking-[0.2em] text-mute">
        Prices are indicative · Full menu available in-store
      </p>
    </Section>
  );
}
