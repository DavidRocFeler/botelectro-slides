import { Printer, Palette, Calendar, Gift } from "lucide-react";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";

export const PrintingServicesSlide = () => {
  return (
    <div className="slide-container bg-gradient-to-br from-background via-secondary/5 to-background py-[5rem]">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12 animate-fade-in">
          {/* Header */}
          <div className="text-center space-y-4">
            
            <h2 className="text-4xl md:text-6xl font-black text-foreground">
              Servicios de <span className="text-secondary">Impresión Premium</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Calidad profesional para sus recibos de luz con identidad peruana
            </p>
          </div>

          {/* Main Service Card */}
          <Card className="max-w-4xl mx-auto p-8 md:p-12 shadow-elegant border-2 border-secondary/20 bg-gradient-to-br from-secondary/5 to-transparent">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <Printer className="h-20 w-20 text-secondary" />
                <div>
                  <h3 className="text-3xl font-black text-foreground mb-3">
                    180,000 Hojas Premium
                  </h3>
                  <p className="text-lg text-muted-foreground">
                    Papel grueso especial para plantillas de recibos de luz
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row items-start gap-4 p-4 bg-background border border-border">
                  <Palette className="h-8 w-8 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Diseños Temáticos</h4>
                    <p className="text-sm text-muted-foreground">
                      Plantillas que cambian según festividades peruanas: Fiestas Patrias, Navidad, Año Nuevo, Carnavales
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row items-start gap-4 p-4 bg-background border border-border">
                  <Gift className="h-8 w-8 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Diseño Incluido</h4>
                    <p className="text-sm text-muted-foreground">
                      Diseño gratuito de todas las plantillas personalizadas para su empresa
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row items-start gap-4 p-4 bg-background border border-border">
                  <Calendar className="h-8 w-8 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Actualización Automática</h4>
                    <p className="text-sm text-muted-foreground">
                      Los diseños se actualizan según el calendario festivo peruano
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="p-6 text-center shadow-card">
              <div className="text-4xl font-black text-secondary mb-2">100%</div>
              <p className="text-muted-foreground">Calidad Premium</p>
            </Card>
            
            <Card className="p-6 text-center shadow-card">
              <div className="text-4xl font-black text-secondary mb-2">180K</div>
              <p className="text-muted-foreground">Hojas Mensuales</p>
            </Card>
            
            <Card className="p-6 text-center shadow-card">
              <div className="text-4xl font-black text-secondary mb-2">Gratis</div>
              <p className="text-muted-foreground">Diseño Incluido</p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
