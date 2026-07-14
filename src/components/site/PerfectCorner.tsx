import { motion } from "framer-motion";
import { Sun, BookOpen, Laptop, Heart, Coffee } from "lucide-react";
import { Section } from "./Section";
import { photos } from "@/lib/assets";

const corners = [
  {
    icon: Sun,
    title: "Morning Coffee",
    body: "Start slow. A quiet cappuccino, the newspaper, and the calmest part of your day.",
    image: photos.twoLattesCups,
    time: "7 – 11 AM",
  },
  {
    icon: BookOpen,
    title: "Study Session",
    body: "A calm room, gentle lighting, and coffee that lasts as long as your notes do.",
    image: photos.interiorCounter,
    time: "Anytime",
  },
  {
    icon: Laptop,
    title: "Remote Work",
    body: "Reliable Wi-Fi, plug points, and a table that's yours for the whole afternoon.",
    image: photos.americanoBamboo,
    time: "11 AM – 6 PM",
  },
  {
    icon: Heart,
    title: "Catch Up With Friends",
    body: "Two lattes, a sandwich, and the kind of conversation that runs into a second round.",
    image: photos.twoLattesOutdoor,
    time: "4 – 10 PM",
  },
  {
    icon: BookOpen,
    title: "Solo Reading",
    body: "A window seat, a warm mocha, and your book. That's the whole plan.",
    image: photos.icedLatte,
    time: "Any afternoon",
  },
  {
    icon: Coffee,
    title: "Post-Class Break",
    body: "An hour between lectures. Cold coffee, a brownie, and a moment to breathe.",
    image: photos.coldCoffeeDome,
    time: "12 – 5 PM",
  },
];

export function PerfectCorner() {
  return (
    <Section
      id="corner"
      eyebrow="Made for the in-between hours"
      title="Find your perfect corner."
      description="However you choose to spend an hour with us, there's a table and a cup that fits. Here are a few of our favourite ways in."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {corners.map(({ icon: Icon, title, body, image, time }, i) => (
          <motion.article
            key={title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
            className="group relative flex flex-col overflow-hidden rounded-3xl border border-line bg-paper soft-shadow transition-all duration-500 hover:-translate-y-1 hover:border-ember/30 hover:lift-shadow"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={image}
                alt={title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
              <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.15em] text-brown backdrop-blur">
                {time}
              </span>
              <div className="absolute inset-x-0 bottom-0 flex items-center gap-3 p-5">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white ring-1 ring-white/25 backdrop-blur">
                  <Icon className="h-4 w-4" strokeWidth={1.75} />
                </span>
                <h3 className="font-display text-2xl text-white">{title}</h3>
              </div>
            </div>
            <p className="flex-1 p-6 text-[15px] leading-relaxed text-mute">{body}</p>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
