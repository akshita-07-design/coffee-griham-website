import { Instagram, MapPin, Phone, Clock, Mail } from "lucide-react";
import { Logo } from "./Logo";
import { MAPS_URL, INSTAGRAM_URL } from "@/lib/assets";

export function Footer() {
  return (
    <footer className="relative border-t border-line bg-paper">
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-10">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="font-accent text-2xl italic leading-relaxed text-brown sm:text-3xl">
            "Great coffee is best enjoyed where you feel at home."
          </p>
          <div className="mx-auto mt-6 h-px w-16 bg-ember/50" />
        </div>

        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Logo />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-mute">
              A small neighbourhood café in Bhilai, serving handcrafted coffee,
              fresh sandwiches, and warmth in every cup — since day one.
            </p>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm text-brown transition-colors hover:text-ember"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line transition-colors group-hover:border-ember/50">
                <Instagram className="h-4 w-4" />
              </span>
              @coffeegriham
            </a>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-[10px] font-medium uppercase tracking-[0.25em] text-ember">
              Visit
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-ink/80">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-caramel" />
                <span>Ward no. 60, Vidya Vihar Colony,<br />Bhilai, Chhattisgarh</span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-caramel" />
                <a href="tel:+919999999999" className="hover:text-ember">Call the café</a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-caramel" />
                <a href="mailto:hello@coffeegriham.com" className="hover:text-ember">hello@coffeegriham.com</a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[10px] font-medium uppercase tracking-[0.25em] text-ember">
              Hours
            </h4>
            <ul className="mt-5 space-y-2 text-sm text-ink/80">
              <li className="flex items-start gap-2">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-caramel" />
                <div>
                  <div>Mon – Sun</div>
                  <div className="text-mute">7 AM – 10 PM</div>
                </div>
              </li>
              <li className="pt-1">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-ember/10 px-2.5 py-1 text-[11px] font-medium text-ember">
                  <span className="h-1.5 w-1.5 rounded-full bg-ember" />
                  Open now
                </span>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-[10px] font-medium uppercase tracking-[0.25em] text-ember">
              Explore
            </h4>
            <ul className="mt-5 space-y-2.5 text-sm">
              {[
                ["Our Story", "#story"],
                ["Menu", "#drinks"],
                ["Find Your Corner", "#corner"],
                ["Gallery", "#gallery"],
                ["Reviews", "#reviews"],
                ["Visit Us", MAPS_URL],
              ].map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="group inline-flex items-center gap-1.5 text-ink/75 transition-colors hover:text-ember"
                  >
                    <span className="h-px w-3 bg-line transition-all group-hover:w-5 group-hover:bg-ember" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-line pt-8 text-xs text-mute md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Coffee Griham · Brewed with care in Bhilai.</p>
          <p>Designed for coffee people, by coffee people.</p>
        </div>
      </div>
    </footer>
  );
}
