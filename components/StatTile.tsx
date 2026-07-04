export default function StatTile({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-2xl bg-surface border border-foreground/10 px-5 py-6 transition-all duration-200 hover:border-accent-purple/40 hover:-translate-y-0.5">
      <p className="text-3xl md:text-4xl font-semibold text-foreground-bright">
        {value}
      </p>
      <p className="mt-2 text-sm text-foreground/70 leading-snug">{label}</p>
    </div>
  );
}
