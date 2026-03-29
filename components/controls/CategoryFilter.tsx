"use client";

import { CATEGORIES, CATEGORY_LABELS, type Category } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface CategoryFilterProps {
  active: Category | null;
  onChange: (category: Category | null) => void;
}

export function CategoryFilter({ active, onChange }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onChange(null)}
        className={cn(
          "rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors cursor-pointer",
          active === null
            ? "bg-primary text-white"
            : "bg-border text-text-primary hover:bg-surface-hover"
        )}
      >
        Todos
      </button>
      {CATEGORIES.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(active === cat ? null : cat)}
          className={cn(
            "rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors cursor-pointer",
            active === cat
              ? "bg-primary text-white"
              : "bg-border text-text-primary hover:bg-surface-hover"
          )}
        >
          {CATEGORY_LABELS[cat]}
        </button>
      ))}
    </div>
  );
}
