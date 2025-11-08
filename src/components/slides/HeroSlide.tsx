import { Zap, Sparkles } from "lucide-react";
import { Button } from "../ui/button";
import logoGraphicGire from "@/assets/logo-graphic-gire.png";
import logoGrodevAI from "@/assets/logo-grodevai.png";
import heroBackground from "@/assets/hero-background.jpg";

export const HeroSlide = () => {
  return (
    <div 
      className="slide-container gradient-hero relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(30, 64, 175, 0.95) 0%, rgba(59, 130, 246, 0.9) 50%, rgba(249, 115, 22, 0.85) 100%), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/50 to-transparent"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center space-y-8 animate-fade-in">
          {/* Logos */}
          <div className="flex items-center justify-center gap-8 mb-8">
            <img src={logoGraphicGire} alt="Graphic Gire" className="h-24 md:h-32 object-contain" />
            <div className="h-20 w-px bg-white/30"></div>
            <img src={logoGrodevAI} alt="GrodevAI" className="h-24 md:h-32 object-contain" />
          </div>

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
              <h3 className="text-white font-bold text-lg mb-2">Bot IA Automático</h3>
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
