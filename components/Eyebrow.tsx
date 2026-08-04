export default function Eyebrow({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className="font-mono text-xs text-accent tracking-wide">
        {children}
      </span>
      <span className="h-px flex-1 max-w-16 bg-line" />
    </div>
  );
}
