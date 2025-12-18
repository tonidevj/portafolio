"use client"

// Componente: Navbar
// - Barra de navegación flotante ubicada en la parte inferior.
// - Muestra iconos de navegación que permiten ir a diferentes secciones.
// - Usa `usePathname` para resaltar el link activo.
// - Se anima desde la derecha al entrar.
import Link from "next/link";

import { itemsNavbar } from "@/data";

import { MotionTransition } from "./transition-component";
import { usePathname } from "next/navigation";

const Navbar = () => {
    // Obtener la ruta actual para marcar el link activo
    const router = usePathname()

    return (
     <MotionTransition position="right" className="fixed z-40 flex flex-col items-center justify-center w-full mt-auto h-max bottom-10">
              {/* Navegación envuelta en animación desde la derecha */}
      
            <nav>
                {/* Contenedor circular con botones de navegación */}
                <div className="flex items-center justify-center gap-2 px-4 py-1 rounded-full bg-white/15 background-blur-sm">
                    {/* Mapear items de navegación */}
                    {itemsNavbar.map((item) => (
                        <div
                            key={item.id}
                            className={`px-3 py-2 transition duration-150 rounded-full cursor-pointer hover:bg-secondary ${router === item.link && 'bg-secondary'}`}
                            data-tooltip-target="tooltip-default">
                            {/* Ícono y enlace a cada sección */}
                            <Link href={item.link}>{item.icon} </Link>
                        </div>
                    ))}
                </div>
            </nav>
        </MotionTransition>
    );
}

export default Navbar;