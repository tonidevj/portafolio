"use client"

// Componente: AvatarPortfolio
// - Muestra una imagen (avatar) decorativa usada en la página de portafolio.
// - Envuelto en `MotionTransition` para añadir una animación al entrar.
// - Se renderiza sólo en pantallas medianas/anchas gracias a las clases Tailwind.
import Image from 'next/image';

import { MotionTransition } from './transition-component';

const AvatarPortfolio = () => {
    return (
        <MotionTransition position='bottom' className="bottom-0 left-0 hidden md:inline-block md:absolute ">
            {/* Imagen estática situada como elemento decorativo del portfolio */}
            <Image src="/avatar-works.png" width="300" height="300" className="w-full h-full " alt="Particles " />
        </MotionTransition>

    );
}

export default AvatarPortfolio;