import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const portfolioItems = [
  {
    title: "Dashboard Financeiro Executivo",
    category: "Business Intelligence",
    description: "Painel interativo com KPIs em tempo real, análise de fluxo de caixa e previsões financeiras.",
    tags: ["Power BI", "SQL", "ETL"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
  },
  {
    title: "Sistema de Gestão Customizado",
    category: "Software Sob Medida",
    description: "Plataforma completa para gestão de operações com módulos integrados e interface intuitiva.",
    tags: ["React", "Node.js", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
  },
  {
    title: "Modelo Preditivo de Vendas",
    category: "Ciência de Dados",
    description: "Algoritmo de machine learning para previsão de demanda e otimização de estoque.",
    tags: ["Python", "ML", "Analytics"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
  },
  {
    title: "Automação de Processos Financeiros",
    category: "RPA",
    description: "Robô para automatização de conciliação bancária e emissão de relatórios gerenciais.",
    tags: ["UiPath", "Python", "API"],
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&auto=format&fit=crop",
  },
];

const Portfolio = () => {
  return (
    <section className="py-24 bg-gradient-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Portfólio de Projetos
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Conheça alguns dos projetos que desenvolvemos para nossos clientes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in-up">
          {portfolioItems.map((item, index) => (
            <Card 
              key={index}
              className="group overflow-hidden hover:shadow-glow transition-all duration-300 hover:-translate-y-2 border-border/50 bg-card/80 backdrop-blur"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />
              </div>
              <CardContent className="p-6">
                <Badge className="mb-3 bg-gradient-primary text-white border-0">
                  {item.category}
                </Badge>
                <h3 className="text-2xl font-semibold mb-3 text-foreground">
                  {item.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex} 
                      variant="outline"
                      className="border-primary/30 text-primary"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
