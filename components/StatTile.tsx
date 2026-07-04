import type { LucideIcon } from "lucide-react";

const badgeAccent: Record<string, string> = {
  green: "bg-accent-green/10 text-accent-green",
  blue: "bg-accent-blue/10 text-accent-blue",
  purple: "bg-accent-purple/10 text-accent-purple",
  cyan: "bg-accent-cyan/10 text-accent-cyan",
};

const hoverBorder: Record<string, string> = {
  green: "hover:border-accent-green/40",
  blue: "hover:border-accent-blue/40",
  purple: "hover:border-accent-purple/40",
  cyan: "hover:border-accent-cyan/40",
};

export default function StatTile({
  value,
  label,
  icon: Icon,
  accent,
}: {
  value: string;
  label: string;
  icon: LucideIcon;
  accent: "green" | "blue" | "purple" | "cyan";
}) {
  return (
    <div
      className={`rounded-2xl bg-surface border border-foreground/10 px-5 py-6 transition-all duration-200 hover:-translate-y-0.5 ${hoverBorder[accent]}`}
    >
      <div
        className={`mb-3 flex h-9 w-9 items-center justify-center rounded-full ${badgeAccent[accent]}`}
      >
        <Icon size={16} strokeWidth={2} />
      </div>
      <p className="text-3xl md:text-4xl font-semibold text-foreground-bright">
        {value}
      </p>
      <p className="mt-2 text-sm text-foreground/70 leading-snug">{label}</p>
    </div>
  );
}
