import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  className?: string;
  children?: ReactNode;
}

export function Section({ id, eyebrow, title, description, className, children }: Props) {
  return (
    <section id={id} className={cn("relative py-24 sm:py-32", className)}>
      <div className="mx-auto max-w-7xl px-6">
        {(eyebrow || title || description) && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-14 max-w-2xl"
          >
            {eyebrow && (
              <div className="mb-4 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.25em] text-ember">
                <span className="h-px w-6 bg-ember" /> {eyebrow}
              </div>
            )}
            {title && (
              <h2 className="text-balance font-display text-4xl leading-[1.05] text-ink sm:text-5xl md:text-6xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-5 text-base leading-relaxed text-mute sm:text-lg">
                {description}
              </p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
