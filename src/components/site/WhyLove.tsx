import { motion } from "framer-motion";
import { Coffee, Laptop, TreePine, BookOpen, Heart, Smile } from "lucide-react";
import { Section } from "./Section";

const reasons = [
  {
    icon: Coffee,
    title: "Handcrafted coffee",
    body: "Espresso pulled to order, milk steamed to velvet. Every cup begins the moment you order it.",
  },
  {
    icon: Laptop,
    title: "Work friendly",
    body: "Reliable Wi-Fi, plug points at most tables, and a corner that lets you stay without watching the clock.",
  },
  {
    icon: TreePine,
    title: "Outdoor seating",
    body: "Bistro chairs on the pavement — the best seat in the house once the evening light kicks in.",
  },
  {
    icon: BookOpen,
    title: "Read & relax",
    body: "Soft lamps, a slow soundtrack, and the kind of quiet that invites another chapter.",
  },
  {
    icon: Heart,
    title: "Feels like home",
    body: "Not a chain, not a lounge. Just a warm, honest room that's genuinely glad you walked in.",
  },
  {
    icon: Smile,
    title: "Friendly service",
    body: "The kind of place where the barista remembers your usual by the third visit — sometimes sooner.",
  },
];

export function WhyLove() {
  return (
    <Section
      id="love"
      eyebrow="Why people love it"
      title="Small things, done with care."
      description="Ask a regular why they keep coming back and you'll rarely hear one big reason — it's a handful of honest, everyday ones."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {reasons.map(({ icon: Icon, title, body }, i) => (
          <motion.article
            key={title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
            className="group relative overflow-hidden rounded-2xl border border-line bg-paper p-8 soft-shadow transition-all duration-500 hover:-translate-y-1 hover:border-ember/30 hover:lift-shadow"
          >
            <div
              aria-hidden
              className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-ember/[0.06] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
            />
            <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-ember/10 text-ember ring-1 ring-ember/15 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[-4deg]">
              <Icon className="h-5 w-5" strokeWidth={1.75} />
            </span>
            <h3 className="relative mt-7 font-display text-2xl text-ink">{title}</h3>
            <p className="relative mt-3 text-[15px] leading-relaxed text-mute">{body}</p>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
