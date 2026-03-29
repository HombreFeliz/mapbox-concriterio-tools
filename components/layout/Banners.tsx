import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface BannerProps {
  text: string;
  cta: string;
  href: string;
}

function Banner({ text, cta, href }: BannerProps) {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 rounded-xl border border-border bg-surface p-6">
      <p className="text-sm text-text-primary">{text}</p>
      <Button asChild variant="default" size="sm" className="shrink-0">
        <a href={href} target="_blank" rel="noopener noreferrer">
          {cta}
          <ExternalLink className="h-3 w-3" />
        </a>
      </Button>
    </div>
  );
}

export function Banners() {
  return (
    <section className="mx-auto w-full max-w-5xl space-y-4 px-4 py-12">
      <Banner
        text="¿Necesitas ayuda integrando esto en tu proyecto?"
        cta="Reservar sesión (90€)"
        href="https://cal.com/polmarza/toma-de-contacto"
      />
      <Banner
        text="Cada semana, herramientas como esta en tu bandeja de entrada."
        cta="Suscribirse"
        href="https://concriterio.blog"
      />
      <Banner
        text="Esta demo está construida con Next.js + Mapbox GL JS. El código es público."
        cta="Ver repositorio"
        href="https://github.com/polmarza/mapbox-concriterio-tools"
      />
    </section>
  );
}
