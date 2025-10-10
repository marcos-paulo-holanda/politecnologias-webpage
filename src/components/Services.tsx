import { BarChart3, Code2, Brain, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: BarChart3,
    title: "Business Intelligence",
    description: "Painéis interativos e dashboards customizados que transformam seus dados em insights acionáveis para tomada de decisão estratégica.",
    gradient: "from-[hsl(170,45%,45%)] to-[hsl(170,45%,55%)]",
  },
  {
    icon: Code2,
    title: "Software Sob Medida",
    description: "Desenvolvimento de aplicações personalizadas e escaláveis que atendem exatamente às necessidades únicas do seu negócio.",
    gradient: "from-[hsl(200,60%,18%)] to-[hsl(200,60%,28%)]",
  },
  {
    icon: Brain,
    title: "Ciência de Dados",
    description: "Projetos de engenharia e análise de dados, machine learning e inteligência artificial para extrair valor máximo das suas informações.",
    gradient: "from-[hsl(170,50%,50%)] to-[hsl(170,50%,40%)]",
  },
  {
    icon: Zap,
    title: "Automação RPA",
    description: "Automação de processos robóticos para eliminar tarefas repetitivas, aumentar eficiência e reduzir erros operacionais.",
    gradient: "from-[hsl(170,45%,40%)] to-[hsl(200,60%,22%)]",
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Nossas Soluções
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Oferecemos um portfólio completo de serviços para digitalizar e otimizar seu negócio
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
