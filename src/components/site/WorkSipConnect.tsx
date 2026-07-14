import { Wifi, Zap, Snowflake, GraduationCap, Briefcase, Home, CheckCircle2 } from "lucide-react";
import { Section } from "./Section";
import { Card } from "./Card";

const items = [
  { icon: Wifi, title: "Free High-Speed Wi-Fi", note: "Reliable internet for studying, meetings and uninterrupted work." },
  { icon: Zap, title: "Charging Points", note: "Convenient charging access so your devices stay powered." },
  { icon: Snowflake, title: "Comfortable AC Seating", note: "Cool, peaceful interiors designed for long, comfortable sessions." },
  { icon: GraduationCap, title: "Perfect for Students", note: "Affordable menu, quiet atmosphere and plenty of time to focus." },
  { icon: Briefcase, title: "Perfect for Freelancers", note: "A productive space for client calls, creative work and planning." },
  { icon: Home, title: "Perfect for Remote Work", note: "Your ideal third place between home and the office." },
];

export function WorkSipConnect() {
  return (
    <Section
      id="work"
      eyebrow="Work • Sip • Connect"
      title="Designed for work, study & great coffee."
      description="Whether you're attending online classes, working remotely, meeting clients or simply looking for a peaceful place to relax, Coffee Griham offers everything you need to stay comfortable and productive."
    >
      <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-green-600/20 bg-green-600/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-green-700">
        <CheckCircle2 className="h-4 w-4" />
        Available Every Day
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