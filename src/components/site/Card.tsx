import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = HTMLMotionProps<"div"> & { hover?: boolean };

export function Card({ className, hover = true, children, ...rest }: Props) {
  return (
    <motion.div
      whileHover={hover ? { y: -4 } : undefined}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-line bg-paper p-6 soft-shadow",
        "transition-all hover:border-caramel/40 hover:lift-shadow",
        className,
      )}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
