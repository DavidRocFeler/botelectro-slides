import { Globe, Palette, Smartphone, Image } from "lucide-react";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";

export const WebServicesSlide = () => {
  return (
    <div className="slide-container bg-gradient-to-br from-background via-primary/5 to-background">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12 animate-fade-in">
          {/* Header */}
          <div className="text-center space-y-4">
            
            <h2 className="text-4xl md:text-6xl font-black text-foreground">
              Servicios <span className="text-primary">Web & Diseño</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Presencia digital moderna para impulsar su compañia
            </p>
          </div>

          {/* Main Web Service */}
          <Card className="max-w-4xl mx-auto p-8 shadow-elegant border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
            <div className="text-center space-y-4 mb-8">
              <Globe className="h-16 w-16 text-primary mx-auto" />
              <h3 className="text-3xl font-black text-foreground">Sitio Web Dinámico</h3>
              <p className="text-2xl font-bold text-primary">S/ 2,000</p>
              <p className="text-muted-foreground">Portal digital moderno para ofrecer servicios de tu compañía</p>
            </div>
            
            <Separator className="my-6" />
            
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-foreground">Entregables:</h4>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6 border-border/50">
                  <Palette className="h-10 w-10 text-primary mb-3" />
                  <div className="space-y-2">
                    <h5 className="font-bold text-lg">File 1: Brand Identity</h5>
                    <p className="text-2xl font-bold text-primary">S/ 500</p>
                    <p className="text-sm text-muted-foreground">
                      Logo, paleta de colores, tipografía, manual de marca
                    </p>
                  </div>
                </Card>
                
                <Card className="p-6 border-border/50">
                  <Smartphone className="h-10 w-10 text-primary mb-3" />
                  <div className="space-y-2">
                    <h5 className="font-bold text-lg">File 2: Prototipo UX/UI</h5>
                    <p className="text-2xl font-bold text-primary">S/ 1,000</p>
                    <p className="text-sm text-muted-foreground">
                      Diseño Mobile / Tablet / Desktop responsive
                    </p>
                  </div>
                </Card>
              </div>
              
              <Card className="p-6 border-2 border-secondary/30 bg-secondary/5">
                <div className="flex items-start gap-4">
                  <Image className="h-10 w-10 text-secondary flex-shrink-0" />
                  <div className="space-y-2 flex-1">
                    <h5 className="font-bold text-lg">File 3: 16 Flyers Corporativos</h5>
                    <div className="flex flex-wrap gap-4 items-center">
                      <Badge variant="secondary" className="text-base">
                        INCLUIDO si contrata File 1+2
                      </Badge>
                      <span className="text-sm text-muted-foreground">o</span>
                      <span className="text-lg font-bold text-foreground">S/ 450 por separado</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Diseños para redes sociales con identidad corporativa • S/ 30 por unidad
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </Card>

          {/* Requirement Notice */}
          <div className="max-w-4xl mx-auto bg-primary/10 p-6 border border-primary/20">
            <p className="text-center text-foreground font-semibold">
              <span className="text-primary">Requisito:</span> El Sitio Web requiere contratar File 2 = S/ 1,000 + S/ 2,000
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
