import { Bot, Zap, Clock, Shield, Activity, CheckCircle2, ArrowRight } from "lucide-react";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";

export const BotAutomationSlide = () => {
  const features = [
    {
      icon: Zap,
      title: "Activa Automáticamente tu VPN",
      description: "Ingresa credenciales seguras en la app y vincula el bot en tu computadora local",
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
    <div className="slide-container bg-gradient-to-br from-background via-primary/5 to-secondary/5 py-[5rem]">
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
                  <div key={index} className="flex flex-col sm:flex-row items-start gap-4 p-4 bg-background border border-border">
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
                <h3 className="text-2xl font-black text-foreground mb-4">Términos de Pago del Bot AI</h3>
                <p className="text-4xl font-black text-primary mb-2">S/ 3,000</p>
                <p className="text-muted-foreground">Pago en 2 partes</p>
              </div>
              
              <Separator />
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-primary/10 p-6 border-2 border-primary/20">
                  <Badge variant="default" className="mb-3">Primer Depósito</Badge>
                  <p className="text-3xl font-black text-primary mb-3">S/ 1,500</p>
                  <p className="text-sm text-muted-foreground">Al entregar el producto</p>
                </div>
                
                <div className="bg-secondary/10 p-6 border-2 border-secondary/20">
                  <Badge variant="secondary" className="mb-3">Segundo Depósito</Badge>
                  <p className="text-3xl font-black text-secondary mb-3">S/ 1,500</p>
                  <p className="text-sm text-muted-foreground">Después de 30 días</p>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row items-start gap-3 p-4 bg-background border border-border">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-foreground mb-1">Si el bot NO te gusta:</p>
                    <p className="text-sm text-muted-foreground">Devolución completa del dinero + Licencia cancelada + Bot desactivado</p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row items-start gap-3 p-4 bg-primary/10 border-2 border-primary/30">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-foreground mb-1">Si el bot SÍ te gusta:</p>
                    <p className="text-sm text-muted-foreground">Cancela los otros S/ 1,500 y el <span className="font-bold text-primary">código fuente del bot es del cliente para siempre</span></p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Cloud Hosting & AI Pricing */}
          <Card className="max-w-4xl mx-auto p-8 shadow-elegant border-2 border-primary/20">
            <div className="space-y-8">
              <div className="text-center">
                <h3 className="text-2xl font-black text-foreground mb-2">
                  Hosting en la Nube + IA Opcional
                </h3>
                <p className="text-muted-foreground">
                  Tu bot remoto siempre disponible 24/7 con monitoreo inteligente
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Plan Básico - Bot Automático */}
                <div className="bg-background border-2 border-primary/20 p-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <h4 className="text-lg font-black text-foreground">AWS Plan Básico</h4>
                  </div>
                  <p className="text-3xl font-black text-primary">$15 USD/mes</p>
                  <p className="text-sm text-muted-foreground">Solo Bot Automatizado</p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">2GB RAM - 1 vCPU</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Uptime 99.9% garantizado</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Monitoreo básico 24/7</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Alertas por desconexión</span>
                    </div>
                  </div>
                  
                  <Badge variant="default" className="w-full justify-center py-2">
                    Recomendado para automatización
                  </Badge>
                </div>

                {/* Plan con IA - Conversacional */}
                <div className="bg-primary/10 border-2 border-primary/30 p-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <h4 className="text-lg font-black text-foreground">AWS Plan optimizado</h4>
                  </div>
                  <p className="text-3xl font-black text-primary">$25 USD/mes</p>
                  <p className="text-sm text-muted-foreground">Bot + Asistente AI</p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">4GB RAM - 2 vCPU</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Mejor optimizacion de API AI comercial</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Chat inteligente sobre progreso</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Análisis predictivo y reportes</span>
                    </div>
                  </div>
                  
                  <Badge className="w-full justify-center py-2">
                    Máxima productividad
                  </Badge>
                </div>
              </div>

              {/* Notas importantes */}
              <div className="bg-muted/30 p-4 border border-border">
                <div className="space-y-3">
                  <div className="flex flex-col sm:flex-row items-start gap-3">
                    <Shield className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-foreground text-sm">Hosting en AWS garantizado</p>
                      <p className="text-xs text-muted-foreground">Infraestructura empresarial con 99.9% uptime</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row items-start gap-3">
                    <Zap className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-foreground text-sm">Recursos dedicados 24/7</p>
                      <p className="text-xs text-muted-foreground">RAM y CPU siempre disponibles para tu bot remoto</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row items-start gap-3">
                    <Activity className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-foreground text-sm">AI opcional - Sin compromiso</p>
                      <p className="text-xs text-muted-foreground">Puedes empezar con el plan básico y mejorar después</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Llamada a la acción */}
              <div className="text-center bg-primary/5 p-4 border border-primary/20">
                <p className="text-sm font-bold text-primary">
                  Un Bot local corriendo en tu computadora recibira instrucciones de tu Bot remoto
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Instalacion previa del bot local en tu computadora, administra todo desde tu bot remoto en electroplus.bot.app
                </p>
              </div>
            </div>
          </Card>

          {/* AI & Tokens Pricing */}
          <Card className="max-w-4xl mx-auto p-8 shadow-elegant border-2 border-primary/20">
            <div className="space-y-8">
              <div className="text-center">
                <h3 className="text-2xl font-black text-foreground mb-2">
                  Sistema de AI con Tokens Prepago
                </h3>
                <p className="text-muted-foreground">
                  Elige tu cerebro AI favorito y recarga tokens según tu uso
                </p>
              </div>

              {/* Explicación del Sistema */}
              <div className="bg-muted/30 p-6 border border-border space-y-4">
                <h4 className="text-lg font-black text-foreground text-center">¿Cómo Funciona?</h4>
                
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <div className="space-y-2">
                    <Bot className="h-8 w-8 mx-auto text-primary" />
                    <p className="font-bold text-sm">LLM = Cerebro AI</p>
                    <p className="text-xs text-muted-foreground">Elige GPT-4, Claude, Gemini, etc.</p>
                  </div>
                  
                  <div className="space-y-2">
                    <Activity className="h-8 w-8 mx-auto text-primary" />
                    <p className="font-bold text-sm">API-LLM = Nodo</p>
                    <p className="text-xs text-muted-foreground">Conexión a tu cerebro elegido</p>
                  </div>
                  
                  <div className="space-y-2">
                    <Zap className="h-8 w-8 mx-auto text-primary" />
                    <p className="font-bold text-sm">Tokens = Saldo</p>
                    <p className="text-xs text-muted-foreground">1 Token ≈ 1 Palabra procesada</p>
                  </div>
                </div>
              </div>

              {/* Planes de Tokens */}
              <div className="space-y-6">
                <h4 className="text-xl font-black text-foreground text-center">Paquetes de Tokens</h4>
                
                <div className="grid md:grid-cols-3 gap-4">
                  {/* Plan Starter */}
                  <div className="bg-background border-2 border-primary/20 p-6 space-y-4 text-center">
                    <Badge variant="default" className="w-full">Starter</Badge>
                    <p className="text-3xl font-black text-primary">$20 USD</p>
                    <p className="text-sm text-muted-foreground">1,000,000 Tokens</p>
                    
                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between">
                        <span>≈ Preguntas:</span>
                        <span className="font-bold">5,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span>≈ Reportes:</span>
                        <span className="font-bold">200</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Duración estimada:</span>
                        <span className="font-bold">1-2 meses</span>
                      </div>
                    </div>
                  </div>

                  {/* Plan Pro */}
                  <div className="bg-primary/10 border-2 border-primary/30 p-6 space-y-4 text-center">
                    <Badge variant="secondary" className="w-full">Pro</Badge>
                    <p className="text-3xl font-black text-primary">$50 USD</p>
                    <p className="text-sm text-muted-foreground">3,000,000 Tokens</p>
                    
                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between">
                        <span>≈ Preguntas:</span>
                        <span className="font-bold">15,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span>≈ Reportes:</span>
                        <span className="font-bold">600</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Duración estimada:</span>
                        <span className="font-bold">3-4 meses</span>
                      </div>
                    </div>
                  </div>

                  {/* Plan Enterprise */}
                  <div className="bg-background border-2 border-secondary/30 p-6 space-y-4 text-center">
                    <Badge variant="outline" className="w-full">Enterprise</Badge>
                    <p className="text-3xl font-black text-secondary">$100 USD</p>
                    <p className="text-sm text-muted-foreground">7,000,000 Tokens</p>
                    
                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between">
                        <span>≈ Preguntas:</span>
                        <span className="font-bold">35,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span>≈ Reportes:</span>
                        <span className="font-bold">1,400</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Duración estimada:</span>
                        <span className="font-bold">6+ meses</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* LLMs Disponibles */}
              <div className="bg-muted/30 p-6 border border-border">
                <h4 className="text-lg font-black text-foreground mb-4 text-center">Cerebros AI Disponibles</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div className="p-3 bg-background border border-border">
                    <p className="font-bold text-sm">GPT-4</p>
                    <p className="text-xs text-muted-foreground">OpenAI</p>
                  </div>
                  <div className="p-3 bg-background border border-border">
                    <p className="font-bold text-sm">Claude</p>
                    <p className="text-xs text-muted-foreground">Anthropic</p>
                  </div>
                  <div className="p-3 bg-background border border-border">
                    <p className="font-bold text-sm">Gemini</p>
                    <p className="text-xs text-muted-foreground">Google</p>
                  </div>
                  <div className="p-3 bg-background border border-border">
                    <p className="font-bold text-sm">Llama 3</p>
                    <p className="text-xs text-muted-foreground">Meta</p>
                  </div>
                </div>
              </div>

              {/* Proceso de Recarga */}
              <div className="space-y-4">
                <h4 className="text-lg font-black text-foreground text-center">¿Cómo Recargar Tokens?</h4>
                
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <div className="space-y-2 p-4 bg-background border border-border">
                    <div className="text-2xl">1</div>
                    <p className="font-bold text-sm">Monitorea tu Saldo</p>
                    <p className="text-xs text-muted-foreground">El dashboard te muestra tokens restantes</p>
                  </div>
                  
                  <div className="space-y-2 p-4 bg-background border border-border">
                    <div className="text-2xl">2</div>
                    <p className="font-bold text-sm">Contacta para Recargar</p>
                    <p className="text-xs text-muted-foreground">Gmail: davidnatanrocfeler@gmail.com</p>
                  </div>
                  
                  <div className="space-y-2 p-4 bg-background border border-border">
                    <div className="text-2xl">3</div>
                    <p className="font-bold text-sm">Depósito y Activación</p>
                    <p className="text-xs text-muted-foreground">Habilitacion de tokens en minutos</p>
                  </div>
                </div>
              </div>

              {/* Nota Final */}
              <div className="text-center bg-primary/5 p-4 border border-primary/20">
                <p className="text-sm font-bold text-primary">
                  La App viene PRE-CONFIGURADO para AI - Solo recarga tokens cuando necesites
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Puedes usar el bot sin AI ($0 costo extra) o activar IA cuando quieras
                </p>
              </div>
            </div>
          </Card>

          {/* Bottom CTA */}
          <div className="text-center bg-primary/10 p-8 border-2 border-primary/20">
            <p className="text-2xl font-bold text-primary mb-2">
              180,000 recibos procesados automáticamente cada mes
            </p>
            <p className="text-muted-foreground">
              Ahorra tiempo y recursos con tecnología Machine Learning
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
