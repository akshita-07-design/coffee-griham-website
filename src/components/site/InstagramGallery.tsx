import { Instagram } from "lucide-react";
import { Section } from "./Section";
import { Button } from "./Button";
import { photos, INSTAGRAM_URL } from "@/lib/assets";

const grid = [
  photos.latteArt,
  photos.coldCoffeeDome,
  photos.twoLattesCups,
  photos.mangoDessert,
  photos.exteriorNight,
  photos.frappe,
  photos.icedLatte,
  photos.chocolateShake,
];

export function InstagramGallery() {
  return (
    <Section
      id="instagram"
      eyebrow="@coffeegriham"
      title="Follow the daily brew."
      description="New drinks, seasonal specials, and quiet corners of the café — all on our Instagram."
    >
      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4 lg:grid-cols-8">
        {grid.map((src, i) => (
          <a
            key={i}
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="group relative aspect-square overflow-hidden rounded-xl bg-cream soft-shadow"
          >
            <img
              src={src}
              alt="Coffee Griham on Instagram"
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-ink/60 opacity-0 transition-opacity group-hover:opacity-100">
              <Instagram className="h-6 w-6 text-white" />
            </div>
          </a>
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
          <Button size="lg">
            <Instagram className="h-4 w-4" /> Follow on Instagram
          </Button>
        </a>
      </div>
    </Section>
  );
}
