import { Zap, Sparkles } from "lucide-react";
import Branding from "@/assets/Branding.png";

export const HeroSlide = () => {
  return (
    <div 
      className="slide-container gradient-hero relative overflow-hidden py-[8rem] sm:py-0"
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/100 to-primary-dark"></div>
      {/* Logos */}
      <div className="absolute top-5 left-8 flex items-center justify-center">
        <img src={Branding} alt="Graphic Gire" className="object-contain" />
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center space-y-8 animate-fade-in">

          {/* Main Title */}
          <div className="space-y-4">

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight">
              Impresión + Diseño + Tecnología<br />
            </h1>
            
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md p-6 border border-white/20">
              <Zap className="h-12 w-12 text-secondary mx-auto mb-4" />
              <h3 className="text-white font-bold text-lg mb-2">Bot AI Automático</h3>
              <p className="text-white/80 text-sm">180,000 recibos procesados automáticamente</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md p-6 border border-white/20">
              <Sparkles className="h-12 w-12 text-secondary mx-auto mb-4" />
              <h3 className="text-white font-bold text-lg mb-2">Diseño Premium</h3>
              <p className="text-white/80 text-sm">Identidad visual corporativa completa</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md p-6 border border-white/20">
              <Zap className="h-12 w-12 text-secondary mx-auto mb-4" />
              <h3 className="text-white font-bold text-lg mb-2">Web Dinámica</h3>
              <p className="text-white/80 text-sm">Presencia digital profesional</p>
            </div>
          </div>

          {/* CTA */}
 
        </div>
      </div>
    </div>
  );
};
