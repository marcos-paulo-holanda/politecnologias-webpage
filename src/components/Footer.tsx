import { Linkedin, Instagram, Mail, Phone } from "lucide-react";
import politecLogo from "@/assets/politec-logo.png";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={politecLogo} alt="Politec Desenvolvimentos" className="h-12 w-auto" />
            </div>
            <p className="text-muted-foreground">
              Várias tecnologias para seu negócio
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Serviços</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="hover:text-primary transition-colors cursor-pointer">Business Intelligence</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Software Customizado</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Ciência de Dados</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Automação RPA</li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Endereço</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="hover:text-primary transition-colors cursor-pointer">Avenida Paulista, 1106 - Bela Vista</li>
              <li className="hover:text-primary transition-colors cursor-pointer">São Paulo, SP</li>
              <li className="hover:text-primary transition-colors cursor-pointer">01310-914</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Contato</h3>
            <div className="space-y-3">
              <p className="text-muted-foreground flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 flex-shrink-0" />
                contato@politecnologias.com.br
              </p>
              <p className="text-muted-foreground flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 flex-shrink-0" />
                +55 11 95556-5014
              </p>
              <div className="flex gap-4 mt-4">
                <a 
                  href="https://www.linkedin.com/company/politec-desenvolvimentos/?viewAsMember=true" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-muted hover:bg-gradient-primary hover:text-white flex items-center justify-center transition-all duration-300"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="https://instagram.com/politecdev" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-muted hover:bg-gradient-primary hover:text-white flex items-center justify-center transition-all duration-300"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Politec Desenvolvimentos. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
