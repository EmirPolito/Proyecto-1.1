"use client";
import React from "react";
import { PinContainer } from "@/components/ui/3d-pin";

export function AnimatedPinDemo() {
  return (
    <div className="w-full flex items-center justify-center py-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

        {/* TARJETA 1 */}
{/* TARJETA 1 — Visores 3D */}
<PinContainer title="/visores-3d" href="/visores-3d">
  <div className="flex basis-full flex-col p-4 tracking-tight text-foreground/60 w-[20rem] h-[20rem]">
    <h3 className="max-w-xs pb-2 m-0 font-bold text-base text-foreground">
       3D RALQ
    </h3>
    <p className="text-base m-0 p-0 font-normal text-muted-foreground">
      Explora moléculas e instrumentos con visualización 3D interactiva
    </p>
    <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500" />
  </div>
</PinContainer>

{/* TARJETA 2 — Realidad Aumentada */}
<PinContainer title="/realidad-aumentada" href="/realidad-aumentada">
  <div className="flex basis-full flex-col p-4 tracking-tight text-foreground/60 w-[20rem] h-[20rem]">
    <h3 className="max-w-xs pb-2 m-0 font-bold text-base text-foreground">
      Realidad Aumentada
    </h3>
    <p className="text-base m-0 p-0 font-normal text-muted-foreground">
      Lleva moléculas e instrumentos al mundo real usando tu cámara.
    </p>
    <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-cyan-500 via-sky-500 to-blue-600" />
  </div>
</PinContainer>

{/* TARJETA 3 — Laboratorios Virtuales */}
<PinContainer title="/laboratorios" href="/laboratorios">
  <div className="flex basis-full flex-col p-4 tracking-tight text-foreground/60 w-[20rem] h-[20rem]">
    <h3 className="max-w-xs pb-2 m-0 font-bold text-base text-foreground">
      Laboratorios Virtuales
    </h3>
    <p className="text-base m-0 p-0 font-normal text-muted-foreground">
      Simulaciones interactivas para practicar técnicas de laboratorio sin riesgo.
    </p>
    <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-rose-500 via-pink-500 to-fuchsia-600" />
  </div>
</PinContainer>


      </div>
    </div>
  );
}
