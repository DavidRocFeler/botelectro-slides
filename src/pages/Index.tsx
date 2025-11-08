import { useState, useEffect } from "react";
import { HeroSlide } from "@/components/slides/HeroSlide";
import { BotAutomationSlide } from "@/components/slides/BotAutomationSlide";
import { PrintingServicesSlide } from "@/components/slides/PrintingServicesSlide";
import { WebServicesSlide } from "@/components/slides/WebServicesSlide";
import { HostingSlide } from "@/components/slides/HostingSlide";
import { PaymentTermsSlide } from "@/components/slides/PaymentTermsSlide";
import { SlideNavigation } from "@/components/SlideNavigation";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const slides = [
  HeroSlide,
  BotAutomationSlide,
  PrintingServicesSlide,
  WebServicesSlide,
  HostingSlide,
  PaymentTermsSlide,
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSlide]);

  const CurrentSlideComponent = slides[currentSlide];

  return (
    <main className="relative overflow-hidden">
      <div className="transition-all duration-500 ease-in-out">
        <CurrentSlideComponent />
      </div>
      
      <SlideNavigation
        currentSlide={currentSlide}
        totalSlides={slides.length}
        onNext={nextSlide}
        onPrev={prevSlide}
        onGoToSlide={goToSlide}
      />
      
      <WhatsAppButton />
    </main>
  );
};

export default Index;
