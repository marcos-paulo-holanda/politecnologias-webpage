import { BarChart3, Code2, Brain, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: BarChart3,
      title: t('services.businessIntelligence.title'),
      description: t('services.businessIntelligence.description'),
      gradient: "from-[hsl(170,45%,45%)] to-[hsl(170,45%,55%)]",
    },
    {
      icon: Code2,
      title: t('services.customSoftware.title'),
      description: t('services.customSoftware.description'),
      gradient: "from-[hsl(200,60%,18%)] to-[hsl(200,60%,28%)]",
    },
    {
      icon: Brain,
      title: t('services.dataScience.title'),
      description: t('services.dataScience.description'),
      gradient: "from-[hsl(170,50%,50%)] to-[hsl(170,50%,40%)]",
    },
    {
      icon: Zap,
      title: t('services.rpaAutomation.title'),
      description: t('services.rpaAutomation.description'),
      gradient: "from-[hsl(170,45%,40%)] to-[hsl(200,60%,22%)]",
    },
  ];
  return (
    <section id="servicos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            {t('services.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in-up">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-glow transition-all duration-300 hover:-translate-y-2 border-border/50 bg-card/50 backdrop-blur"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
