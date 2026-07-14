import { motion } from "framer-motion";
import { Section } from "./Section";
import { photos } from "@/lib/assets";

const bites = [
  { name: "Cheese Corn Sandwich", price: "₹65", note: "Grilled, gooey, crowd favourite" },
  { name: "Peri Peri Cheese Corn", price: "₹70", note: "Cheesy corn with a peri-peri kick" },
  { name: "Chocolate Sandwich", price: "₹75", note: "Warm bread, molten chocolate" },
  { name: "Paneer Tandoori Sandwich", price: "₹85", note: "Smoky tandoori paneer, crisp bread" },
  { name: "Choco Nutella Sandwich", price: "₹95", note: "For the sweet-tooth Sunday" },
  { name: "Cheesy Sandwich", price: "₹95", note: "Layers of melt, buttery grill" },
  { name: "Panini", price: "₹99", note: "Pressed, toasted, satisfying" },
  { name: "Mango Dessert", price: "Seasonal", note: "Layered mango, cream and joy", image: photos.mangoDessert },
  { name: "Brownie", price: "₹90", note: "Dense, fudgy, warm on request" },
];

export function FreshBites() {
  return (
    <Section
      id="bites"
      eyebrow="Fresh bites"
      title="Grilled, gooey, made-to-order."
      description="Small kitchen, honest food. Every sandwich hits the press only after you order — that's why the cheese is still stretchy when it reaches you."
    >
      <div className="grid gap-6 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="relative overflow-hidden rounded-3xl soft-shadow">
            <img
              src={photos.ledgerCoffee}
              alt="Chalkboard menu behind the Coffee Griham counter"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="lg:col-span-7">
          <ul className="divide-y divide-line rounded-2xl border border-line bg-paper soft-shadow">
            {bites.map((b, i) => (
              <motion.li
                key={b.name}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.03 }}
                className="flex items-baseline justify-between gap-6 px-6 py-5"
              >
                <div>
                  <div className="font-display text-lg text-ink">{b.name}</div>
                  <div className="mt-0.5 text-sm text-mute">{b.note}</div>
                </div>
                <div className="shrink-0 font-accent text-lg text-brown">{b.price}</div>
              </motion.li>
            ))}
          </ul>
          <p className="mt-4 text-xs uppercase tracking-[0.2em] text-mute">
            100% Vegetarian · Extra cheese ₹20 · Extra sauce ₹10
          </p>
        </div>
      </div>
    </Section>
  );
}
