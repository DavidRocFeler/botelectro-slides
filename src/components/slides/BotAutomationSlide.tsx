import { Bot, Zap, Clock, Shield, Activity, CheckCircle2, ArrowRight } from "lucide-react";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";

export const BotAutomationSlide = () => {
  const features = [
    {
      icon: Zap,
      title: "Activa Automáticamente tu VPN",
      description: "Ingresa Credenciales seguras e inicia automáticamente en tu computadora local",
    },
    {
      icon: Activity,
      title: "Conexión Directa Electro Puno",
      description: "Integración nativa con tu computadora local",
    },
    {
      icon: CheckCircle2,
      title: "Impresión por Lotes de 100 unidades",
      description: "Procesamiento automático de 180,000 facturas de luz",
    },
    {
      icon: Clock,
      title: "Dashboard en la nube",
      description: "Control total para activar/desactivar funcionamiento sin consumir recursos locales",
    },
    {
      icon: Shield,
      title: "Monitoreo Inteligente AI",
      description: "Reintentos automáticos y alertas en tiempo real",
    },
  ];

  return (
    <div className="slide-container bg-gradient-to-br from-background via-primary/5 to-secondary/5">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12 animate-fade-in">
          {/* Header */}
          <div className="text-center space-y-4">
            
            <h2 className="text-4xl md:text-6xl font-black text-foreground">
              Bot Automatico AI - <span className="text-primary">S/ 3,000</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Sistema inteligente que automatiza completamente el proceso de impresión de recibos
            </p>
          </div>

          {/* Features List */}
          <Card className="max-w-4xl mx-auto p-8 shadow-elegant border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
            <div className="space-y-6">
              <h3 className="text-2xl font-black text-foreground mb-6">Funcionalidades</h3>
              
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-background border border-border">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-foreground mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Flow Diagram */}
          <Card className="max-w-4xl mx-auto p-8 bg-muted/30 border-2 border-border">
            <h3 className="text-xl font-black text-foreground mb-6 text-center">Flujo del Bot</h3>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex-1 text-center p-4 bg-background border border-border">
                <Zap className="h-10 w-10 mx-auto mb-2 text-primary" />
                <p className="font-bold text-sm">VPN Automático</p>
              </div>
              <ArrowRight className="h-6 w-6 text-muted-foreground rotate-90 md:rotate-0" />
              <div className="flex-1 text-center p-4 bg-background border border-border">
                <Activity className="h-10 w-10 mx-auto mb-2 text-primary" />
                <p className="font-bold text-sm">Conecta Electro Puno</p>
              </div>
              <ArrowRight className="h-6 w-6 text-muted-foreground rotate-90 md:rotate-0" />
              <div className="flex-1 text-center p-4 bg-background border border-border">
                <CheckCircle2 className="h-10 w-10 mx-auto mb-2 text-primary" />
                <p className="font-bold text-sm">Imprime 180k Recibos</p>
              </div>
              <ArrowRight className="h-6 w-6 text-muted-foreground rotate-90 md:rotate-0" />
              <div className="flex-1 text-center p-4 bg-background border border-border">
                <Shield className="h-10 w-10 mx-auto mb-2 text-primary" />
                <p className="font-bold text-sm">Monitoreo 24/7</p>
              </div>
            </div>
          </Card>

          {/* Payment Terms */}
          <Card className="max-w-4xl mx-auto p-8 shadow-elegant border-2 border-secondary/20">
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-black text-foreground mb-4">Términos de Pago del Bot IA</h3>
                <p className="text-4xl font-black text-primary mb-2">S/ 3,000</p>
                <p className="text-muted-foreground">Pago en 2 partes</p>
              </div>
              
              <Separator />
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-primary/10 p-6 border-2 border-primary/20">
                  <Badge variant="default" className="mb-3">Primer Depósito</Badge>
                  <p className="text-3xl font-black text-primary mb-3">S/ 1,500</p>
                  <p className="text-sm text-muted-foreground">Al iniciar el proyecto</p>
                </div>
                
                <div className="bg-secondary/10 p-6 border-2 border-secondary/20">
                  <Badge variant="secondary" className="mb-3">Segundo Depósito</Badge>
                  <p className="text-3xl font-black text-secondary mb-3">S/ 1,500</p>
                  <p className="text-sm text-muted-foreground">Después de 30 días</p>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-background border border-border">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-foreground mb-1">Si el bot NO le gusta:</p>
                    <p className="text-sm text-muted-foreground">Devolución completa del dinero + Licencia cancelada + Bot desactivado</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 bg-primary/10 border-2 border-primary/30">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-foreground mb-1">Si el bot SÍ le gusta:</p>
                    <p className="text-sm text-muted-foreground">Cancela los otros S/ 1,500 y el <span className="font-bold text-primary">código fuente del bot es del cliente para siempre</span></p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Bottom CTA */}
          <div className="text-center bg-primary/10 p-8 border-2 border-primary/20">
            <p className="text-2xl font-bold text-primary mb-2">
              180,000 recibos procesados automáticamente cada mes
            </p>
            <p className="text-muted-foreground">
              Ahorra tiempo y recursos con tecnología maching learning
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
