"use client"

// Componente: Header
// - Cabecera global que se muestra en el top de la página.
// - Contiene el logo/título de la empresa y enlaces a redes sociales.
// - Se anima desde abajo usando `MotionTransition`.
// - Este componente es persistente (ubicado en layout.tsx).
import { socialNetworks } from "@/data";
import Link from "next/link";
import { MotionTransition } from "./transition-component";

const Header = () => {
    return (
        <MotionTransition position="bottom" className="absolute z-40 inline-block w-full top-5 md:top-10">
            {/* Envolvimiento con animación desde abajo */}
            <header>
                {/* Contenedor flex que distribuye logo y redes sociales */}
                <div className="container justify-between max-w-6xl mx-auto md:flex">
                    {/* Logo/título que actúa como enlace a home */}
                    <Link href='/'>
                        <h1 className="my-3 text-4xl font-bold text-center md:text-left">
                        <span className="text-black">
                        IA  
                        </span>
                        Studio
                    </h1>
                    </Link>

                    {/* Sección de redes sociales (visible solo en pantallas medianas/anchas) */}
                    <div className="hidden md:flex items-center justify-center gap-7">
                        {/* Mapeo de las redes sociales desde data */}
                        {socialNetworks.map(({ logo, src, id }) => (
                            <Link
                                key={id}
                                href={src}
                                target="_blank"
                                className="transition-all duration-300 hover:text-secondary"
                            >
                                {logo}
                            </Link>
                        ))}
                    </div>
                </div>
            </header>
        </MotionTransition>
    );
}

export default Header;