import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Section } from "./Section";

const reviews = [
  {
    name: "Aarav Sharma",
    initial: "A",
    color: "#EA4335",
    text: "Cozy little café with genuinely great coffee. The owner is friendly and the vibe is peaceful — perfect for reading or a long chat.",
    date: "2 weeks ago",
  },
  {
    name: "Ishita Patel",
    initial: "I",
    color: "#4285F4",
    text: "Affordable, comfortable and the sandwiches are so fresh. My go-to for a quiet couple of hours away from home.",
    date: "1 month ago",
  },
  {
    name: "Rohan Kapoor",
    initial: "R",
    color: "#FBBC04",
    text: "The Beans Lush cold coffee is unreal. Ambience is calm, not loud like the bigger cafés. Highly recommend.",
    date: "3 weeks ago",
  },
  {
    name: "Meera Deshmukh",
    initial: "M",
    color: "#34A853",
    text: "Feels like a neighbourhood spot in the best way. Warm lights, kind service, and a really good latte.",
    date: "2 months ago",
  },
  {
    name: "Karan Verma",
    initial: "K",
    color: "#9333EA",
    text: "Perfect study café. Peaceful, quality coffee, and prices that let you stay longer than one cup.",
    date: "1 week ago",
  },
  {
    name: "Sneha Agrawal",
    initial: "S",
    color: "#EA4335",
    text: "The paneer tandoori sandwich and a hot mocha — best evening plan in Vidya Vihar. So underrated.",
    date: "5 days ago",
  },
];

function GoogleG({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.99.66-2.25 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC04" d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.83z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.83C6.71 7.31 9.14 5.38 12 5.38z" />
    </svg>
  );
}

export function Testimonials() {
  const track = [...reviews, ...reviews];

  return (
    <Section
      id="reviews"
      eyebrow="Reviews"
      title="What our regulars say."
      description="Rated 4.6★ on Google across 114+ reviews — a few honest words from the people who make Coffee Griham feel like home."
    >
      <div className="group relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
        <motion.div
          className="flex gap-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 50,
            ease: "linear",
            repeat: Infinity,
          }}
          whileHover={{
            animationPlayState: "paused",
          }}
        >
          {track.map((r, i) => (
            <motion.article
              key={i}
              whileHover={{
                y: -10,
                rotate: -1,
                scale: 1.02,
              }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 18,
              }}
              className="group/card flex w-[340px] shrink-0 flex-col rounded-3xl border border-line bg-paper p-6 soft-shadow hover:border-amber-300/40 hover:shadow-2xl sm:w-[400px]"
            >
              <div className="flex items-center gap-3">
                <motion.div
                  whileHover={{
                    rotate: 360,
                    scale: 1.08,
                  }}
                  transition={{
                    duration: 0.6,
                  }}
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full font-display text-lg text-white shadow-md"
                  style={{
                    backgroundColor: r.color,
                  }}
                >
                  {r.initial}
                </motion.div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="truncate text-sm font-semibold text-ink">
                      {r.name}
                    </span>

                    <motion.div
                      whileHover={{
                        rotate: 360,
                      }}
                      transition={{
                        duration: 0.8,
                      }}
                    >
                      <GoogleG className="h-4 w-4" />
                    </motion.div>
                  </div>

                  <div className="mt-1 flex items-center gap-2">
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, k) => (
                        <motion.div
                          key={k}
                          animate={{
                            opacity: [0.8, 1, 0.8],
                          }}
                          transition={{
                            duration: 2,
                            delay: k * 0.15,
                            repeat: Infinity,
                          }}
                        >
                          <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
                        </motion.div>
                      ))}
                    </div>

                    <span className="text-[11px] text-mute">
                      • {r.date}
                    </span>
                  </div>
                </div>
              </div>

              <p className="mt-5 text-[15px] leading-relaxed text-ink/80">
                {r.text}
              </p>

              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="mt-6 overflow-hidden rounded-full bg-gradient-to-r from-amber-50 via-white to-amber-50"
              >
                <motion.div
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    repeatDelay: 0.4,
                    ease: "linear",
                  }}
                  className="h-[2px] w-1/2 bg-gradient-to-r from-transparent via-amber-400 to-transparent"
                />
              </motion.div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}