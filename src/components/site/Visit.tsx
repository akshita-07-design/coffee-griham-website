import { MapPin, Clock, Phone, Instagram, Navigation } from "lucide-react";
import { Section } from "./Section";
import { Button } from "./Button";
import { MAPS_URL, INSTAGRAM_URL } from "@/lib/assets";

const hours = [
  ["Monday – Friday", "7:00 am – 10:00 pm"],
  ["Saturday", "7:00 am – 10:30 pm"],
  ["Sunday", "8:00 am – 10:00 pm"],
];

export function Visit() {
  return (
    <Section
      id="visit"
      eyebrow="Visit us"
      title="Come sit with us."
      description="We're tucked into Vidya Vihar Colony, Bhilai — right by Ward no. 60. Come in for a coffee, stay for the afternoon."
    >
      <div className="grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="rounded-3xl border border-line bg-paper p-8 soft-shadow">
            <div className="flex items-start gap-4">
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ember/10 text-ember">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-display text-lg text-ink">Address</h3>
                <p className="mt-1 text-sm leading-relaxed text-mute">
                  Ward no. 60, Vidya Vihar Colony,<br />
                  Bhilai, Chhattisgarh
                </p>
              </div>
            </div>

            <div className="mt-6 flex items-start gap-4">
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ember/10 text-ember">
                <Clock className="h-5 w-5" />
              </span>
              <div className="flex-1">
                <h3 className="font-display text-lg text-ink">Opening hours</h3>
                <dl className="mt-2 space-y-1.5 text-sm">
                  {hours.map(([day, time]) => (
                    <div key={day} className="flex justify-between gap-4">
                      <dt className="text-mute">{day}</dt>
                      <dd className="text-ink">{time}</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-green-50 px-2.5 py-1 text-xs font-medium text-[color:var(--brown)]" style={{ color: "#355E3B", background: "#EAF2EC" }}>
                  <span className="h-1.5 w-1.5 rounded-full" style={{ background: "#355E3B" }} />
                  Currently open
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href={MAPS_URL} target="_blank" rel="noreferrer">
                <Button size="md">
                  <Navigation className="h-4 w-4" /> Get directions
                </Button>
              </a>
              <a href="tel:+91">
                <Button size="md" variant="outline">
                  <Phone className="h-4 w-4" /> Call café
                </Button>
              </a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
                <Button size="md" variant="ghost">
                  <Instagram className="h-4 w-4" /> Instagram
                </Button>
              </a>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-line soft-shadow lg:aspect-auto lg:h-full">
            <iframe
              title="Coffee Griham location on Google Maps"
              src="https://www.google.com/maps?q=Coffee+Griham+Vidya+Vihar+Bhilai&output=embed"
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
