import { Server, Globe, Zap, TrendingUp, Building2 } from "lucide-react";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { CheckCircle2 } from "lucide-react";

export const HostingSlide = () => {
  const plans = [
    {
      name: "Starter",
      price: "$0",
      visits: "15k visitas/mes",
      icon: Zap,
      features: ["Dominio gratuito", "SSL incluido", "Soporte básico"],
      badge: "Gratis",
      badgeVariant: "secondary" as const,
    },
    {
      name: "Growth",
      price: "$25",
      visits: "50k visitas/mes",
      icon: TrendingUp,
      features: [, "SSL Premium", "Soporte prioritario", "Analytics avanzado"],
      badge: "Popular",
      badgeVariant: "default" as const,
    },
    {
      name: "Pro",
      price: "$40",
      visits: "100k visitas/mes",
      icon: Server,
      features: ["Multi-dominio", "CDN Global", "Soporte 24/7", "Backup automático"],
      badge: "Profesional",
      badgeVariant: "default" as const,
    },
    {
      name: "Enterprise",
      price: "$200",
      visits: "100k+ visitas/mes",
      icon: Building2,
      features: ["Soluciones a medida", "Infraestructura dedicada", "SLA garantizado", "Equipo técnico dedicado"],
      badge: "Empresarial",
      badgeVariant: "default" as const,
    },
  ];

  return (
    <div className="slide-container bg-gradient-to-br from-background via-primary/5 to-secondary/5">
      <div className="container mx-auto max-w-7xl">
        <div className="space-y-12 animate-fade-in">
          {/* Header */}
          <div className="text-center space-y-4">
            
            <h2 className="text-4xl md:text-6xl font-black text-foreground">
              Planes de <span className="text-primary">Hosting Profesional</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Infraestructura confiable para su presencia digital
            </p>
          </div>

          {/* Domain Options */}
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-8">
            <Card className="p-6 text-center shadow-card border-2 border-primary/20">
              <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Dominio Personalizado</h3>
              <p className="text-3xl font-black text-primary mb-2">$15<span className="text-lg text-muted-foreground">/año</span></p>
              <p className="text-sm text-muted-foreground">tuempresa.com • tuempresa.pe</p>
            </Card>
            
            <Card className="p-6 text-center shadow-card border-2 border-secondary/20 bg-secondary/5">
              <Globe className="h-12 w-12 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Dominio Gratuito</h3>
              <p className="text-3xl font-black text-secondary mb-2">Gratis</p>
              <p className="text-sm text-muted-foreground">tuempresa.verce.app</p>
            </Card>
          </div>

          {/* Hosting Plans */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`p-6 shadow-card transition-smooth ${
                  plan.name === "Growth" ? "border-2 border-primary/40 shadow-elegant" : "border-border/50"
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <plan.icon className="h-10 w-10 text-primary" />
                    <Badge variant={plan.badgeVariant}>{plan.badge}</Badge>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-black text-foreground mb-2">{plan.name}</h3>
                    <p className="text-3xl font-black text-primary">
                      {plan.price}
                      <span className="text-sm text-muted-foreground font-normal">/mes</span>
                    </p>
                  </div>
                  
                  <p className="text-lg font-semibold text-foreground">{plan.visits}</p>
                  
                  <div className="space-y-2 pt-4 border-t border-border">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-muted-foreground">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Bottom Note */}
          <div className="max-w-4xl mx-auto text-center bg-muted/50 p-6">
            <p className="text-sm text-muted-foreground">
              Todos los planes incluyen: SSL gratuito, Copias de seguridad, Soporte tecnico, Analytics
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
