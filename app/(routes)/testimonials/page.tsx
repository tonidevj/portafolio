"use client"

// Página: Testimonials
// - Muestra los testimonios de clientes en un carrusel Swiper.
// - Usa `dataTestimonials` como fuente de datos y componentes decorativos
//   (`CircleImage`, `AvatarPortfolio`) para mejorar el layout.
// - `TransitionPage` aplica una cortina de transición al entrar.
import Image from 'next/image';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { dataTestimonials } from '@/data';
import CircleImage from '@/components/circle-image';
import AvatarPortfolio from '@/components/avatar-portfolio';
import TransitionPage from '@/components/transition-page';

const TestimonialsPage = () => {
    return (
        <>
            {/* Animación de transición al cargar la página */}
            <TransitionPage />

            {/* Contenedor principal centrado verticalmente */}
            <div className='flex flex-col justify-center h-lvh pt-24 md:pt-0'>
                {/* Elemento gráfico circular decorativo (posicionado en corner) */}
                <CircleImage />

                {/* Título principal con énfasis en la segunda línea */}
                <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-5">
                    Algunos comentarios
                    <span className="block font-bold text-secondary"> de nuestros clientes</span>
                </h1>

                {/* Carrusel centrado */}
                <div className="flex items-center justify-center">
                    <div>
                        {/*
                          Configuración de Swiper:
                          - breakpoints: responsive (1 slide en móvil)
                          - freeMode: permite desplazamiento libre
                          - pagination.clickable: puntos de paginación interactivos
                        */}
                        <Swiper
                            breakpoints={{
                                320: { slidesPerView: 1, spaceBetween: 15 },
                            }}
                            freeMode={true}
                            pagination={{ clickable: true }}
                            modules={[Pagination]}
                            className="h-[380px] md:h-[300px] w-[270px] md:w-[550px]"
                        >
                            {/* Mapear los testimonios y crear un slide por cliente */}
                            {dataTestimonials.map(({ id, name, description, imageUrl }) => (
                                <SwiperSlide key={id}>
                                    {/* Imagen circular del autor del testimonio */}
                                    <Image src={imageUrl} alt={name} width={100} height={100} className="mx-auto rounded-full" />

                                    {/* Nombre del cliente */}
                                    <h4 className='text-center'>{name}</h4>

                                    {/* Texto del testimonio */}
                                    <div className="mt-5 text-center">{description}</div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TestimonialsPage;