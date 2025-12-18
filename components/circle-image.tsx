"use client"

// Componente: CircleImage
// - Renderiza una imagen circular decorativa (ej. elementos gráficos/ornamentales).
// - Esta imagen se muestra solo en pantallas medianas/anchas (clases Tailwind).
// - Usamos `next/image` para optimización y dimensionado responsivo.
import Image from 'next/image'

const CircleImage = () => {
    return (
        // Contenedor posicionado de forma absoluta en la esquina inferior derecha
        <div className="bottom-0 right-0 hidden md:inline-block md:absolute">
            {/* Imagen estática usada como elemento decorativo */}
            <Image src="/circles.png" width="300" height="300" className="w-full h-full" alt="Decorative circles" />
        </div>

    );
}

export default CircleImage;