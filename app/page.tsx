"use client"

// Página principal (client component)
// - Renderiza la sección hero con partículas y la introducción.
// - Usa componentes reutilizables ubicados en `components/`.
import { CoverParticles } from "@/components/cover-particles";
import Introduction from "@/components/introduction";
import TransitionPage from "@/components/transition-page";

export default function Home() {
  return (
    <main>
      {/* Componente de transición/animación al cargar la página */}
      <TransitionPage />

      {/* Contenedor principal de la landing: fondo y contenido flex */}
      <div className="flex min-h-[100vh] h-full bg-no-repeat bg-gradient-to-r from-blue-950 to-darkBg">
        {/* Efecto de partículas en el cover (canvas/SVG) */}
        <CoverParticles />

        {/* Sección de introducción: texto, etc. */}
        <Introduction />
      </div>
    </main>
  );
}
