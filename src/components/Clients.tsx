import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import cliente1 from "@/assets/clients/cliente-1.png";
import cliente2 from "@/assets/clients/cliente-2.png";
import cliente3 from "@/assets/clients/cliente-3.png";
import cliente4 from "@/assets/clients/cliente-4.png";
import cliente5 from "@/assets/clients/cliente-5.png";
import cliente6 from "@/assets/clients/cliente-6.png";

const Clients = () => {
  const { t } = useLanguage();
  
  // Array de clientes - você pode adicionar mais conforme necessário
  const clients = [
    {
      id: 1,
      name: "Grupo Roncador",
      logo: cliente1, // Substitua pelo caminho real da imagem
      website: "https://www.gruporoncador.com.br/"
    },
    {
      id: 2,
      name: "Ferroport", 
      logo: cliente2,
      website: "https://ferroport.com.br/"
    },
    {
      id: 3,
      name: "Poli-USP",
      logo: cliente3, 
      website: "https://www.poli.usp.br/"
    },
    {
      id: 4,
      name: "LabRisco",
      logo: cliente4,
      website: "https://www.labrisco.usp.br/"
    },
    {
      id: 5,
      name: "TUV Brasil",
      logo: cliente5,
      website: "https://www.tuv.com/brasil/br/"
    },
    {
      id: 6,
      name: "ProjeL Engenharia",
      logo: cliente6,
      website: "https://projelengenharia.com.br/"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            {t('clients.title')}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('clients.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {clients.map((client) => (
            <Card 
              key={client.id}
              className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 bg-white border-2 hover:border-primary/20"
            >
              <a 
                href={client.website}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-20 flex items-center justify-center"
              >
                <img
                  src={client.logo}
                  alt={`Logo ${client.name}`}
                  className="max-h-16 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  onError={(e) => {
                    // Fallback para quando a imagem não carregar
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement!.innerHTML = `
                      <div class="w-full h-16 bg-muted rounded flex items-center justify-center text-muted-foreground text-sm">
                        ${client.name}
                      </div>
                    `;
                  }}
                />
              </a>
            </Card>
          ))}
        </div>

        {/* Seção adicional para mostrar mais clientes se necessário */}
        <div className="text-center mt-8">
          <p className="text-muted-foreground">
            {t('clients.moreClients')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Clients;
