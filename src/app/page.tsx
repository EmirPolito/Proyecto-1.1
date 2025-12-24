"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@clerk/nextjs";

import { HeroParallaxDemo } from "@/components/heroParallaxDemo";
import { StickyScrollRevealDemo } from "@/components/stickyScrollDemo";
import { WobbleCardDemo } from "@/components/wobbleCardDemo";
import { CardHoverEffectDemo } from "@/components/cardHoverEffectDemo";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { AnimatedPinDemo } from "@/components/animatedPinDemo";
import { FeaturesSectionDemo } from "@/components/featuresSectionDemo";
import Footer from "@/components/footer";
// import { WorldMapDemo } from "@/components/worldMapDemo";

function HomePage() {
  const { isSignedIn, isLoaded } = useAuth();
  const router = useRouter();

  // 🔐 Si está logueado → /menu
  useEffect(() => {
    if (isLoaded && isSignedIn) {
      router.replace("/menu");
    }
  }, [isLoaded, isSignedIn, router]);

  const testimonials = [
    {
      quote: "Excelente plataforma, aprendí muchísimo.",
      name: "Juan Pérez",
      title: "Estudiante de química",
    },
    {
      quote: "La RA está muy bien implementada.",
      name: "María Gómez",
      title: "Docente",
    },
    {
      quote: "Útil para estudiar desde casa.",
      name: "Carlos Ruiz",
      title: "Alumno de preparatoria",
    },
  ];

  // ⏳ Evita parpadeos mientras Clerk carga
  if (!isLoaded) return null;

  return (
    <div>
      <HeroParallaxDemo />
      {/* <StickyScrollRevealDemo /> */}
      {/* <WobbleCardDemo /> */}

      <AnimatedPinDemo />

      <div className="py-10">
        <InfiniteMovingCards
          items={testimonials}
          direction="left"
          speed="fast"
        />
      </div>

      {/* <CardHoverEffectDemo /> */}
      {/* <WorldMapDemo /> */}

      <FeaturesSectionDemo />
      <Footer />
    </div>
  );
}

export default HomePage;
