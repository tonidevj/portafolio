
"use client"

// Componente: Avatar
// - Avatar principal decorativo usado en la landing.
// - Envoltorio `MotionTransition` para animación desde abajo (`bottom`).
// - Renderizado sólo en pantallas medianas/anchas por las clases Tailwind.
import Image from "next/image";

import { MotionTransition } from "./transition-component";

export function Avatar() {
    return (
        <MotionTransition position="bottom" className=" right-0 hidden md:inline-block md:absolute ">
            {/* Imagen del avatar que aporta componente visual a la cabecera */}
            <Image src="/avatar-1.png" width="300" height="300" className="w-full h-full " alt="Particles " />
        </MotionTransition>
    )
}
