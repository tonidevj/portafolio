// Archivo: layout.tsx
// Layout principal de la aplicación Next.js.
// Contiene la estructura HTML global, fuentes y componentes persistentes.
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";

// Importación de estilos globales y estilos de Swiper (carrusel)
import "./globals.css";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Componentes que se renderizan en todas las páginas
import Navbar from "@/components/navbar";
import Header from "@/components/header";

// Cargar la fuente 'Urbanist' desde Google Fonts (optimizada por Next)
const urbanist = Urbanist({ subsets: ["latin"] });

// Metadatos globales de la app (title, description)
export const metadata: Metadata = {
  title: "ToniDev Landing Page",
  description: "Landing page",
};

// RootLayout: envoltorio principal que Next usa para todas las rutas
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Asignamos la clase de la fuente para que toda la app use Urbanist */}
      <body className={urbanist.className}>
        {/* Navegación persistente (logo, enlaces, menú) */}
        <Navbar />

        {/* Cabecera principal de la landing (hero, partículas, etc.) */}
        <Header />
        {children}
      </body>
    </html>
  );
}

