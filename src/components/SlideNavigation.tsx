import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

interface SlideNavigationProps {
  currentSlide: number;
  totalSlides: number;
  onNext: () => void;
  onPrev: () => void;
  onGoToSlide: (index: number) => void;
}

export const SlideNavigation = ({
  currentSlide,
  totalSlides,
  onNext,
  onPrev,
  onGoToSlide,
}: SlideNavigationProps) => {
  return (
    <>
      {/* Navigation Arrows */}
      <div className="fixed bottom-8 left-0 right-0 flex items-center justify-between px-8 z-50 pointer-events-none">
        <Button
          variant="outline"
          size="icon"
          onClick={onPrev}
          disabled={currentSlide === 0}
          className="pointer-events-auto bg-background/95 backdrop-blur-sm transition-smooth disabled:opacity-30 shadow-elegant"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={onNext}
          disabled={currentSlide === totalSlides - 1}
          className="pointer-events-auto bg-background/95 backdrop-blur-sm transition-smooth disabled:opacity-30 shadow-elegant"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>

      {/* Slide Indicators */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-50">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => onGoToSlide(index)}
            className={`h-2 transition-all duration-300 ${
              index === currentSlide
                ? "w-8 bg-primary"
                : "w-2 bg-muted-foreground/40"
            }`}
            aria-label={`Ir a slide ${index + 1}`}
          />
        ))}
      </div>
    </>
  );
};
