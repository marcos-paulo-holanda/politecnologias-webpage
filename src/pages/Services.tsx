import { useTranslation } from "react-i18next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  BarChart3, 
  Code, 
  Brain, 
  Bot, 
  CheckCircle, 
  ArrowRight,
  Database,
  Zap,
  Target,
  Users
} from "lucide-react";

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: BarChart3,
      title: t("services.businessIntelligence.title"),
      description: t("services.businessIntelligence.description"),
      features: [
        t("services.businessIntelligence.features.dashboards"),
        t("services.businessIntelligence.features.reports"),
        t("services.businessIntelligence.features.analytics"),
        t("services.businessIntelligence.features.kpi")
      ]
    },
    {
      icon: Code,
      title: t("services.customSoftware.title"),
      description: t("services.customSoftware.description"),
      features: [
        t("services.customSoftware.features.web"),
        t("services.customSoftware.features.mobile"),
        t("services.customSoftware.features.api"),
        t("services.customSoftware.features.integration")
      ]
    },
    {
      icon: Brain,
      title: t("services.dataScience.title"),
      description: t("services.dataScience.description"),
      features: [
        t("services.dataScience.features.ml"),
        t("services.dataScience.features.ai"),
        t("services.dataScience.features.prediction"),
        t("services.dataScience.features.optimization")
      ]
    },
    {
      icon: Bot,
      title: t("services.rpaAutomation.title"),
      description: t("services.rpaAutomation.description"),
      features: [
        t("services.rpaAutomation.features.automation"),
        t("services.rpaAutomation.features.workflow"),
        t("services.rpaAutomation.features.integration"),
        t("services.rpaAutomation.features.monitoring")
      ]
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: t("services.process.discovery.title"),
      description: t("services.process.discovery.description"),
      icon: Target
    },
    {
      step: "02", 
      title: t("services.process.planning.title"),
      description: t("services.process.planning.description"),
      icon: Database
    },
    {
      step: "03",
      title: t("services.process.development.title"),
      description: t("services.process.development.description"),
      icon: Code
    },
    {
      step: "04",
      title: t("services.process.deployment.title"),
      description: t("services.process.deployment.description"),
      icon: Zap
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {t("services.hero.title")}
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              {t("services.hero.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t("services.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("services.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <service.icon className="h-8 w-8 text-blue-600 mr-3" />
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                  </div>
                  <CardDescription className="text-lg">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="mt-6 w-full" variant="outline">
                    {t("services.learnMore")}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t("services.process.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("services.process.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto">
                    {step.step}
                  </div>
                  <step.icon className="h-8 w-8 text-blue-600 mx-auto mt-4" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t("services.technologies.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("services.technologies.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">{t("services.technologies.frontend.title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["React", "Vue.js", "Angular", "TypeScript", "Tailwind CSS"].map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">{t("services.technologies.backend.title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["Node.js", "Python", "Java", "C#", ".NET"].map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">{t("services.technologies.data.title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["Power BI", "Tableau", "Python", "R", "SQL Server"].map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t("services.cta.title")}
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            {t("services.cta.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              {t("services.cta.contact")}
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
              {t("services.cta.portfolio")}
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
