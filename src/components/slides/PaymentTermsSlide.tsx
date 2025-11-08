import { DollarSign, AlertTriangle, CheckCircle2, XCircle, FileCode } from "lucide-react";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";

export const PaymentTermsSlide = () => {
  return (
    <div className="slide-container bg-gradient-to-br from-background via-secondary/5 to-background">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12 animate-fade-in">
          {/* Header */}
          <div className="text-center space-y-4">
            <Badge variant="secondary" className="text-lg px-6 py-2 mb-4">
              <DollarSign className="h-5 w-5 mr-2 inline" />
              Condiciones Comerciales
            </Badge>
            
            <h2 className="text-4xl md:text-6xl font-black text-foreground">
              Términos de <span className="text-primary">Pago y Entrega</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Proceso claro y transparente para su tranquilidad
            </p>
          </div>

          {/* Requirements */}
          <Card className="max-w-4xl mx-auto p-8 shadow-elegant border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <CheckCircle2 className="h-16 w-16 text-primary mx-auto" />
                <h3 className="text-2xl font-black text-foreground">Requisito para Sitio Web</h3>
              </div>
              
              <div className="bg-background rounded-lg p-6 border border-border">
                <p className="text-center text-lg mb-4">
                  <span className="font-bold text-foreground">Sitio Web requiere:</span> Framer 1 + Framer 2
                </p>
                <div className="flex items-center justify-center gap-4 text-2xl font-bold">
                  <span className="text-primary">S/ 1,500</span>
                  <span className="text-muted-foreground">+</span>
                  <span className="text-primary">S/ 2,000</span>
                  <span className="text-muted-foreground">=</span>
                  <span className="text-secondary text-3xl">S/ 3,500</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Payment Plan */}
          <Card className="max-w-4xl mx-auto p-8 shadow-elegant border-2 border-secondary/20">
            <div className="space-y-6">
              <div className="text-center">
                <DollarSign className="h-16 w-16 text-secondary mx-auto mb-4" />
                <h3 className="text-2xl font-black text-foreground mb-2">Plan de Pago en 2 Partes</h3>
                <p className="text-lg text-primary font-bold">S/ 2,000 / 2 = S/ 1,000 por pago</p>
              </div>
              
              <Separator />
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-primary/10 rounded-lg p-6 border border-primary/20">
                    <Badge variant="default" className="mb-3">Primer Pago</Badge>
                    <p className="text-3xl font-black text-primary mb-2">S/ 1,500</p>
                    <p className="text-sm text-muted-foreground">Para entregables de Framer 1 y 2</p>
                  </div>
                  
                  <div className="bg-secondary/10 rounded-lg p-6 border border-secondary/20">
                    <Badge variant="secondary" className="mb-3">Segundo Pago</Badge>
                    <p className="text-3xl font-black text-secondary mb-2">S/ 1,000</p>
                    <p className="text-sm text-muted-foreground">Cuando se entrega el sitio web</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-accent/10 to-transparent rounded-lg p-6 border border-accent/20 flex items-center">
                  <div className="space-y-3">
                    <FileCode className="h-12 w-12 text-accent" />
                    <div>
                      <Badge variant="outline" className="mb-2">Pago Final</Badge>
                      <p className="text-3xl font-black text-accent mb-2">S/ 1,000</p>
                      <p className="text-sm text-muted-foreground">Luego de 30 días</p>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                      <p className="text-foreground font-semibold">Se entrega código fuente</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Cancellation Policy */}
          <Card className="max-w-4xl mx-auto p-8 bg-destructive/5 border-2 border-destructive/20">
            <div className="flex items-start gap-6">
              <AlertTriangle className="h-16 w-16 text-destructive flex-shrink-0" />
              <div className="space-y-4 flex-1">
                <h3 className="text-2xl font-black text-foreground">Política de Cancelación</h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 bg-background rounded-lg p-4 border border-border">
                    <XCircle className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-foreground mb-1">Si no se paga:</p>
                      <p className="text-sm text-muted-foreground">El sitio web se desactiva automáticamente</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 bg-background rounded-lg p-4 border border-border">
                    <XCircle className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-foreground mb-1">Sin pago completo:</p>
                      <p className="text-sm text-muted-foreground">No hay entrega de código fuente</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
