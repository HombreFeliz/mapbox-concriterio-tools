const stack = [
  {
    name: "Next.js 16",
    description: "App Router, API routes y dev server con Turbopack.",
  },
  {
    name: "Mapbox GL JS v3",
    description: "Mapas vectoriales con WebGL. Estilos dinámicos, geocoding y clusters.",
  },
  {
    name: "Tailwind CSS",
    description: "Utilidades CSS para un design system oscuro consistente.",
  },
  {
    name: "shadcn/ui",
    description: "Componentes accesibles (Select, Input, Button) sobre Radix UI.",
  },
  {
    name: "TypeScript",
    description: "Tipado estricto. Los tipos oficiales del SDK de Mapbox incluidos.",
  },
];

export function StackSection() {
  return (
    <section className="mx-auto w-full max-w-5xl px-4 py-12">
      <h2 className="font-display text-2xl font-semibold text-text-primary mb-6">
        Stack
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {stack.map((item) => (
          <div
            key={item.name}
            className="rounded-xl border border-border bg-surface p-5"
          >
            <h3 className="text-sm font-semibold text-text-primary mb-1">
              {item.name}
            </h3>
            <p className="text-xs text-text-muted leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
