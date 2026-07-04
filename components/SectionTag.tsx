type IconComponent = React.ComponentType<{ size?: number; className?: string }>;

export default function SectionTag({
  icon: Icon,
  children,
}: {
  icon?: IconComponent;
  children: React.ReactNode;
}) {
  return (
    <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-accent-blue mb-3">
      {Icon && <Icon size={14} />}
      {children}
    </p>
  );
}
