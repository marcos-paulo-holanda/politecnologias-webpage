import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";

const portfolioImages = [
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&auto=format&fit=crop",
];

const portfolioTags = [
  ["Power BI", "Python", "SQL", "ETL"],
  ["UiPath", "Python", "API"],
  ["Python", "Node.js", "React", "SQL"],
  ["Python", "ML", "Analytics"],
];

const Portfolio = () => {
  const { t } = useLanguage();

  const portfolioItems = portfolioImages.map((image, index) => ({
    title: t(`portfolio.items.item${index + 1}.title`),
    category: t(`portfolio.items.item${index + 1}.category`),
    description: t(`portfolio.items.item${index + 1}.description`),
    tags: portfolioTags[index],
    image,
  }));

  return (
    <section id="portfolio" className="py-24 bg-gradient-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            {t('portfolio.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('portfolio.subtitle')}
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
