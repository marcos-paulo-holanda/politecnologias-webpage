import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import heroBg from "@/assets/hero-bg.png";

const Hero = () => {
  const { t } = useLanguage();

  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="relative min-h-[90vh] flex items-center overflow-hidden bg-black"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Conteúdo alinhado à ESQUERDA, ocupando o espaço onde estava o
            texto original na imagem */}
        <div className="max-w-xl lg:max-w-2xl md:ml-[4%] lg:ml-[6%] text-left animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 text-white leading-tight">
            {t('hero.title')}
          </h1>
          <p className="text-lg md:text-xl text-white/85 mb-8 max-w-lg">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 text-lg px-8 font-semibold shadow-glow"
              onClick={scrollToPortfolio}
            >
              {t('hero.ctaPrimary')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/80 text-white bg-transparent hover:bg-white hover:text-black transition-all duration-300 text-lg px-8"
              onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t('hero.ctaSecondary')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
