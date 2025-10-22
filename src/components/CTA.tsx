import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const CTA = () => {
  const { t } = useLanguage();
  
  return (
    <section id="contato" className="py-24 bg-gradient-primary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/2 right-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            {t('cta.title')}
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            {t('cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 transition-all duration-300 text-lg px-8 shadow-glow"
              onClick={() => window.location.href = 'mailto:contato@politecnologias.com.br'}
            >
              <Mail className="mr-2 h-5 w-5" />
              {t('cta.emailButton')}
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white text-primary hover:bg-white/90 transition-all duration-300 text-lg px-8 shadow-glow"
              onClick={() => window.location.href = 'tel:+5511955565014'}
            >
              <Phone className="mr-2 h-5 w-5" />
              {t('cta.phoneButton')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
