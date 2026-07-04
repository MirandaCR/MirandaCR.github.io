export default function SectionTag({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-blue mb-3">
      {children}
    </p>
  );
}
