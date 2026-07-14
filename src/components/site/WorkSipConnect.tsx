import {
  Wifi,
  Zap,
  Snowflake,
  GraduationCap,
  Briefcase,
  Coffee,
  CheckCircle2,
} from "lucide-react";
import { Section } from "./Section";
import { Card } from "./Card";

const items = [
  {
    icon: Wifi,
    title: "Free High-Speed Wi-Fi",
    note: "Reliable internet for studying, meetings and uninterrupted work.",
  },
  {
    icon: Zap,
    title: "Charging Points",
    note: "Convenient charging access to keep your devices powered.",
  },
  {
    icon: Snowflake,
    title: "Air-Conditioned Seating",
    note: "Comfortable indoor seating that lets you relax for hours.",
  },
  {
    icon: GraduationCap,
    title: "Student Friendly",
    note: "Affordable menu, peaceful ambience and a welcoming atmosphere for study sessions.",
  },
  {
    icon: Briefcase,
    title: "Laptop Friendly",
    note: "An ideal place for freelancers, remote work and creative projects.",
  },
  {
    icon: Coffee,
    title: "Relax & Unwind",
    note: "Whether you're meeting friends or enjoying some quiet time, Coffee Griham is the perfect place to slow down.",
  },
];

export function WorkSipConnect() {
  return (
    <Section
      id="work"
      eyebrow="Work • Relax • Connect"
      title="A place where great coffee meets quiet moments."
      description="Whether you're catching up with friends, finishing an assignment, working on your laptop or simply enjoying a slow evening, Coffee Griham offers a warm, welcoming space where you can stay comfortable and enjoy every cup."
    >
      <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-green-600/20 bg-green-600/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-green-700">
        <CheckCircle2 className="h-4 w-4" />
        Open Daily
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map(({ icon: Icon, title, note }) => (
          <Card key={title}>
            <div className="flex items-center justify-between">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-brown/10 text-brown">
                <Icon className="h-5 w-5" />
              </span>

              <span className="rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-green-700">
                Available
              </span>
            </div>

            <h3 className="mt-6 font-display text-xl text-ink">
              {title}
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-mute">
              {note}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
}