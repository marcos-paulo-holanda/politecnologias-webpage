import { useTranslation } from "react-i18next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Building2, 
  ShoppingCart, 
  Heart, 
  GraduationCap, 
  Factory, 
  Truck,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  Users,
  Target,
  Zap
} from "lucide-react";

const Segments = () => {
  const { t } = useTranslation();

  const segments = [
    {
      icon: Building2,
      title: t("segments.corporate.title"),
      description: t("segments.corporate.description"),
      solutions: [
        t("segments.corporate.solutions.erp"),
        t("segments.corporate.solutions.crm"),
        t("segments.corporate.solutions.bi"),
        t("segments.corporate.solutions.automation")
      ],
      color: "blue"
    },
    {
      icon: ShoppingCart,
      title: t("segments.retail.title"),
      description: t("segments.retail.description"),
      solutions: [
        t("segments.retail.solutions.ecommerce"),
        t("segments.retail.solutions.inventory"),
        t("segments.retail.solutions.analytics"),
        t("segments.retail.solutions.loyalty")
      ],
      color: "green"
    },
    {
      icon: Heart,
      title: t("segments.healthcare.title"),
      description: t("segments.healthcare.description"),
      solutions: [
        t("segments.healthcare.solutions.emr"),
        t("segments.healthcare.solutions.telemedicine"),
        t("segments.healthcare.solutions.analytics"),
        t("segments.healthcare.solutions.compliance")
      ],
      color: "red"
    },
    {
      icon: GraduationCap,
      title: t("segments.education.title"),
      description: t("segments.education.description"),
      solutions: [
        t("segments.education.solutions.lms"),
        t("segments.education.solutions.analytics"),
        t("segments.education.solutions.virtual"),
        t("segments.education.solutions.management")
      ],
      color: "purple"
    },
    {
      icon: Factory,
      title: t("segments.manufacturing.title"),
      description: t("segments.manufacturing.description"),
      solutions: [
        t("segments.manufacturing.solutions.mes"),
        t("segments.manufacturing.solutions.iot"),
        t("segments.manufacturing.solutions.quality"),
        t("segments.manufacturing.solutions.maintenance")
      ],
      color: "orange"
    },
    {
      icon: Truck,
      title: t("segments.logistics.title"),
      description: t("segments.logistics.description"),
      solutions: [
        t("segments.logistics.solutions.tms"),
        t("segments.logistics.solutions.tracking"),
        t("segments.logistics.solutions.optimization"),
        t("segments.logistics.solutions.warehouse")
      ],
      color: "indigo"
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: t("segments.benefits.growth.title"),
      description: t("segments.benefits.growth.description")
    },
    {
      icon: Users,
      title: t("segments.benefits.experience.title"),
      description: t("segments.benefits.experience.description")
    },
    {
      icon: Target,
      title: t("segments.benefits.customization.title"),
      description: t("segments.benefits.customization.description")
    },
    {
      icon: Zap,
      title: t("segments.benefits.efficiency.title"),
      description: t("segments.benefits.efficiency.description")
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "text-blue-600 bg-blue-50",
      green: "text-green-600 bg-green-50",
      red: "text-red-600 bg-red-50",
      purple: "text-purple-600 bg-purple-50",
      orange: "text-orange-600 bg-orange-50",
      indigo: "text-indigo-600 bg-indigo-50"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {t("segments.hero.title")}
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              {t("segments.hero.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Segments Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t("segments.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("segments.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {segments.map((segment, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-lg ${getColorClasses(segment.color)}`}>
                      <segment.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl ml-3">{segment.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    {segment.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {segment.solutions.map((solution, solutionIndex) => (
                      <div key={solutionIndex} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{solution}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full" variant="outline" size="sm">
                    {t("segments.learnMore")}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t("segments.benefits.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("segments.benefits.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <benefit.icon className="h-12 w-12 mx-auto text-blue-600 mb-4" />
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t("segments.success.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("segments.success.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">{t("segments.success.case1.title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  {t("segments.success.case1.description")}
                </CardDescription>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">+40%</Badge>
                  <Badge variant="secondary">{t("segments.success.case1.result")}</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">{t("segments.success.case2.title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  {t("segments.success.case2.description")}
                </CardDescription>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">-60%</Badge>
                  <Badge variant="secondary">{t("segments.success.case2.result")}</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">{t("segments.success.case3.title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  {t("segments.success.case3.description")}
                </CardDescription>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">+25%</Badge>
                  <Badge variant="secondary">{t("segments.success.case3.result")}</Badge>
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
            {t("segments.cta.title")}
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            {t("segments.cta.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              {t("segments.cta.contact")}
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
              {t("segments.cta.consultation")}
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Segments;
