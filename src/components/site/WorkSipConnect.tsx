import { Wifi, Zap, Snowflake, GraduationCap, Briefcase, Home } from "lucide-react";
import { Section } from "./Section";
import { Card } from "./Card";

const items = [
  { icon: Wifi, title: "Free High-Speed Wi-Fi", note: "Zoom calls, big uploads, no buffering." },
  { icon: Zap, title: "Charging Points", note: "Every table, every laptop, always powered." },
  { icon: Snowflake, title: "AC Work Corner", note: "A cool quiet nook, built for long sessions." },
  { icon: GraduationCap, title: "Perfect for Students", note: "Affordable menu, calm room, no rush." },
  { icon: Briefcase, title: "Perfect for Freelancers", note: "Your unofficial office, minus the office." },
  { icon: Home, title: "Perfect for Remote Work", note: "A third place between home and the world." },
];

export function WorkSipConnect() {
  return (
    <Section
      id="work"
      eyebrow="Work · Sip · Connect"
      title="Your new favourite work spot."
      description="We're quietly upgrading Coffee Griham into the neighbourhood's calmest place to plug in. A few things are on the way — pull up a chair and see."
    >
      <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-ember/20 bg-ember/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-ember">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ember opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-ember" />
        </span>
        Coming soon
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map(({ icon: Icon, title, note }) => (
          <Card key={title}>
            <div className="flex items-center justify-between">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-brown/10 text-brown">
                <Icon className="h-5 w-5" />
              </span>
              <span className="rounded-full bg-cream px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-brown">
                Upcoming
              </span>
            </div>
            <h3 className="mt-6 font-display text-xl text-ink">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-mute">{note}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
