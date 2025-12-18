"use client"

// Componente: CoverParticles
// - Renderiza un efecto visual de partículas interactivas usando tsparticles.
// - Las partículas se pueden empujar (click) o repeler (hover).
// - Este es un Client Component porque requiere interacción y animaciones en el cliente.
import { useEffect, useState } from "react";

import { loadSlim } from "@tsparticles/slim";
import Particles, { initParticlesEngine } from "@tsparticles/react";

export const CoverParticles = () => {
    // Estado para indicar si el motor de partículas ha sido inicializado
    const [init, setInit] = useState(false);

    // Inicializar el motor de tsparticles una sola vez
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            // Cargar la versión slim del motor de partículas
            await loadSlim(engine);
        }).then(() => {
            // Marcar como inicializado para renderizar el componente
            setInit(true);
        });
    }, []);

    return (
        // Renderizar solo cuando el motor esté inicializado
        init &&
        <div className="w-[0px]">
            <Particles
                id="tsparticles"
                options={{
                    // Limitar FPS para optimización de rendimiento
                    fpsLimit: 120,

                    // Configuración de interactividad con el usuario
                    interactivity: {
                        events: {
                            // Al hacer click: agregar nuevas partículas
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            // Al pasar el mouse: repeler las partículas
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                        },
                        modes: {
                            // Modo push: añade 4 nuevas partículas por click
                            push: {
                                quantity: 4,
                            },
                            // Modo repulse: repele partículas a 200px de distancia durante 0.4s
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                        },
                    },
                    // Configuración de las partículas individuales
                    particles: {
                        // Color de las partículas (blanco)
                        color: {
                            value: "#ffffff",
                        },
                        // Líneas conectando partículas cercanas
                        links: {
                            color: "#ffffff",
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        // Movimiento de las partículas
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 1,
                            straight: false,
                        },
                        // Cantidad y densidad de partículas
                        number: {
                            density: {
                                enable: true,
                            },
                            value: 80,
                        },
                        // Opacidad de las partículas
                        opacity: {
                            value: 0.5,
                        },
                        // Forma de las partículas (círculos)
                        shape: {
                            type: "circle",
                        },
                        // Tamaño variado entre 1 y 5 pixels
                        size: {
                            value: { min: 1, max: 5 },
                        },
                    },
                    // Detectar y adaptar a pantallas Retina
                    detectRetina: true,
                }}

            />
        </div>
    )
};