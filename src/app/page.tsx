import { AnimatedHeader } from "@/components/animated-header";
import { HeroParallaxDemo } from "@/components/heroParallaxDemo";
import { StickyScrollRevealDemo } from "@/components/stickyScrollDemo";
import { CardHoverEffectDemo } from "@/components/cardHoverEffectDemo";
import Footer from "@/components/footer";



function HomePage() {
  return (
    <div>
      
      <div className="min-h-screen">
        <AnimatedHeader />
      </div>

      <HeroParallaxDemo />
      <StickyScrollRevealDemo />
      <CardHoverEffectDemo />
      <Footer />
    </div>
  );
}



export default HomePage;
