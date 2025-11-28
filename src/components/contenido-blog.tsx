"use client";

import React from "react";
import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

export default function ThreeDCardDemo() {
  const cards = [
    {
      title: "Visores 3D para Química",
      desc: "RALQ permite visualizar moléculas e instrumentos en 3D con alta precisión.",
      img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2400&auto=format&fit=crop",
      slug: "visores-3d-quimica",
    },
    {
      title: "Realidad Aumentada",
      desc: "Proyecta modelos del laboratorio químico directamente en tu entorno real.",
      img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2400&auto=format&fit=crop",
      slug: "realidad-aumentada",
    },
    {
      title: "Compatible con Móviles",
      desc: "Escanea un QR y abre la experiencia AR sin instalar aplicaciones.",
      img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2400&auto=format&fit=crop",
      slug: "compatible-con-moviles",
    },
    {
      title: "Modelos Realistas",
      desc: "Las moléculas e instrumentos son creados y mejorados en Blender 4.0.",
      img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2400&auto=format&fit=crop",
      slug: "modelos-realistas",
    },
    {
      title: "Instrumentos de laboratorio",
      desc: "RALQ mejora la comprensión gracias a modelos 3D manipulables.",
      img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2400&auto=format&fit=crop",
      slug: "instrumentos-laboratorio",
    },
    {
      title: "Aprendizaje Interactivo",
      desc: "RALQ mejora la comprensión gracias a modelos 3D manipulables.",
      img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2400&auto=format&fit=crop",
      slug: "aprendizaje-interactivo",
    },
    {
      title: "Visor Propio",
      desc: "Estamos desarrollando un visor 3D propio para no depender de plataformas externas.",
      img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2400&auto=format&fit=crop",
      slug: "visor-propio",
    },
    {
      title: "Rendimiento Optimizado",
      desc: "RALQ se adapta a cualquier dispositivo sin perder calidad.",
      img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2400&auto=format&fit=crop",
      slug: "rendimiento-optimizado",
    },
  ];

  return (
    <section className="w-full py-22">
      {/* Header */}
      <div className="text-center mb-25 mt-10">
        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-3">
          Blog
        </h1>

        <p className="text-lg text-muted-foreground max-w-1xl mx-auto">
          Noticias, guías, mejoras, avances del proyecto RALQ y explicaciones
          sobre nuestras tecnologías 3D y de realidad aumentada.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-15 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20">
        {cards.map((card, i) => (
          <CardContainer key={i} className="w-full">
            <CardBody
              className="
                bg-background 
                border border-border 
                dark:border-white/20 
                rounded-2xl p-6 sm:p-8 lg:p-9 relative group/card 
                shadow-sm dark:shadow-none
                flex flex-col h-auto sm:h-[450px] lg:h-[498px]
              "
            >
              {/* Título */}
              <CardItem translateZ={50} className="text-2xl font-bold text-foreground">
                {card.title}
              </CardItem>

              {/* Descripción */}
              <CardItem
                as="p"
                translateZ={60}
                className="text-muted-foreground text-sm mt-1.5 flex-1"
              >
                {card.desc}
              </CardItem>

              {/* Imagen */}
              <CardItem translateZ={90} className="w-full mt-4 sm:mt-5 flex-shrink-0">
                <img
                  src={card.img}
                  alt="blog-image"
                  className="w-full h-48 sm:h-60 lg:h-65 object-cover rounded-xl group-hover/card:shadow-xl transition-shadow duration-300"
                />
              </CardItem>

              {/* BOTONES + TEXTO */}
              <div className="flex justify-between items-center mt-4 sm:mt-8">
                <CardItem translateZ={20} as="span" className="text-sm text-foreground opacity-70">
                  Leer más →
                </CardItem>

                <Link href={`/blog/${card.slug}`}>
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="
                      px-4 py-2 rounded-lg 
                      bg-foreground text-background 
                      dark:bg-white dark:text-black 
                      text-sm font-semibold cursor-pointer
                      transition-colors duration-200
                    "
                  >
                    Abrir
                  </CardItem>
                </Link>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </section>
  );
}
