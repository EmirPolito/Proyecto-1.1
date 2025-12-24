"use client";
import React, { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode;
  }[];
  contentClassName?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [activeCard, setActiveCard] = useState(0);
  const cardLength = content.length;

  // Scroll basado en el contenedor
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const index = Math.floor(latest * cardLength);
    if (index !== activeCard) {
      setActiveCard(Math.min(index, cardLength - 1));
    }
  });

// SOLO NEGRO Y AZUL OSCURO
const bgColors = [
  "#001A4D", // azul oscuro
  "#000000", // negro
  "#001A4D", // azul oscuro
  "#000000", // negro
  "#001A4D", // azul oscuro
];

// PANEL DERECHO (AZUL OSCURO)
const gradients = [
  "#001A4D",
  "#001A4D",
  "#001A4D",
  "#001A4D",
  "#001A4D",
];






  return (
    <motion.div
      ref={containerRef}
      animate={{ backgroundColor: bgColors[activeCard] }}
      transition={{ duration: 0.1, ease: "easeOut" }}
      className="relative flex justify-center gap-40 px-20 py-5 w-full min-h-screen"
    >
      {/* TEXTOS */}
      <div className="flex items-start px-10">
        <div className="max-w-3xl">
          {content.map((item, index) => {
            const isActive = index === activeCard;

            return (
              <div
                key={index}
                className="min-h-[100vh] flex flex-col justify-center"
              >
                <h2
                  className={cn(
                    "text-5xl font-bold transition-opacity duration-300",
                    isActive ? "text-white opacity-100" : "text-gray-400 opacity-40"
                  )}
                >
                  {item.title}
                </h2>

                <p
                  className={cn(
                    "mt-4 max-w-lg text-xl transition-opacity duration-300",
                    isActive ? "text-gray-100 opacity-100" : "text-gray-500 opacity-30"
                  )}
                >
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* PANEL DERECHO (SIN ZOOM, SIN PARPADEO, FADE-IN/FADE-OUT SUAVE) */}
      <motion.div
        key={activeCard}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 1,
          delay: 0.2,   // <--- aparece un poco después, ya no muy temprano
          ease: "easeOut",
        }}
        style={{ background: gradients[activeCard] }}
        className={cn(
          "sticky top-40 hidden h-[25rem] w-[45rem] overflow-hidden rounded-2xl lg:block shadow-2xl",
          contentClassName
        )}
      >
        {content[activeCard].content}
      </motion.div>
    </motion.div>
  );
};
