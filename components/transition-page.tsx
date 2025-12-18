"use client"

// Componente: TransitionPage
// - Renderiza una transición visual (cortina/overlay) al cambiar de página.
// - Usa `framer-motion` con `AnimatePresence` para manejar las animaciones de entrada/salida.
// - La cortina se desplaza de derecha a izquierda cuando entra la página.
import { transitionVariantsPage } from "@/utils/motion-transitions";
import { AnimatePresence, motion } from "framer-motion";

const TransitionPage = () => {
    return (
    <AnimatePresence mode="wait">
             {/* AnimatePresence permite controlar las animaciones al montar/desmontar componentes */}
       
            <div>
                {/* 
                    Cortina animada que se desliza de derecha a izquierda.
                    - `initial="initial"`: estado inicial (desde la derecha)
                    - `animate="animate"`: estado animado (hasta el lado izquierdo)
                    - `exit="exit"`: estado de salida (vuelve a la derecha)
                    - delay: espera antes de empezar la animación
                    - duration: tiempo total de la transición (0.6s)
                */}
                <motion.div
                    className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#2e2257]"
                    variants={transitionVariantsPage}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
                ></motion.div>
            </div>
        </AnimatePresence>
    );
}

export default TransitionPage;