// Configuración de Tailwind CSS
// Define los estilos personalizados, temas y plugins utilizados en la aplicación.
import type { Config } from "tailwindcss";

const config: Config = {
  // Rutas donde Tailwind busca archivos para analizar y generar clases CSS
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",      // Páginas (si existen)
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // Componentes
    "./app/**/*.{js,ts,jsx,tsx,mdx}",        // Archivos de la carpeta app/
  ],
  
  theme: {
    extend: {
      // Colores personalizados agregados al tema por defecto
      colors: {
        secondary: "#000000",  // Color secundario utilizado en botones y acentos
        darkBg: "#131424",     // Color de fondo oscuro
      },
      
      // Imágenes de fondo personalizadas (gradientes, patrones, etc.)
      backgroundImage: {
        "gradient-cover":
          "linear-gradient(90.21deg, rgba(170, 54, 124, 0.5) -5.91%, rgba(74, 47, 189, 0.5) 111.58%)",
          // Gradiente diagonal utilizado como fondo en la sección hero/cover
      },
    },
  },
  
  // Plugins de Tailwind (extensiones funcionales)
  // Actualmente vacío, pero se pueden agregar plugins aquí si es necesario
  plugins: [],
};
export default config;
