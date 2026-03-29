import { Map } from "lucide-react";

export function Header() {
  return (
    <header className="flex items-center gap-3 border-b border-border px-4 py-3 bg-surface">
      <Map className="h-5 w-5 text-primary" />
      <div className="flex items-baseline gap-2">
        <span className="font-display text-lg font-semibold text-text-primary">
          Mapbox GL JS
        </span>
        <span className="text-xs text-text-muted">·</span>
        <span className="text-sm text-text-muted">Con Criterio Tools</span>
      </div>
      <a
        href="https://github.com/polmarza/mapbox-concriterio-tools"
        target="_blank"
        rel="noopener noreferrer"
        className="ml-auto text-xs text-text-muted hover:text-text-primary transition-colors"
      >
        GitHub
      </a>
    </header>
  );
}
