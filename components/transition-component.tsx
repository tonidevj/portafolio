"use client"

// Componente MotionTransition
// - Envoltorio que aplica animaciones con `framer-motion` a su contenido hijo.
// - Usa la función `fadeIn` definida en `utils/motion-transitions` para obtener
//   variantes según la `position` ('right' o 'bottom').
// - Este archivo está marcado como client component por `"use client"`.
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion-transitions";

// Props:
// - `children`: contenido a animar
// - `className`: clases CSS opcionales a aplicar al contenedor
// - `position`: dirección de la animación (despliegue desde la derecha o desde abajo)
export type MotionTransitionProps = {
    children: React.ReactNode;
    className?: string;
    position: 'right' | 'bottom'
};

export function MotionTransition(props: MotionTransitionProps) {
    const { children, className, position } = props

    return (
        // `motion.div` aplica las variantes de animación y controla
        // los estados `initial`, `animate` y `exit` para transiciones.
        <motion.div
            variants={fadeIn(position)}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className={className}
        >
            {children}
        </motion.div>
    )
}