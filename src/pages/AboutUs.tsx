import { useTranslation } from "react-i18next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Award, Lightbulb } from "lucide-react";

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {t("about.hero.title")}
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              {t("about.hero.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Target className="h-12 w-12 mx-auto text-blue-600 mb-4" />
                <CardTitle className="text-2xl">{t("about.mission.title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg">
                  {t("about.mission.description")}
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Lightbulb className="h-12 w-12 mx-auto text-blue-600 mb-4" />
                <CardTitle className="text-2xl">{t("about.vision.title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg">
                  {t("about.vision.description")}
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Award className="h-12 w-12 mx-auto text-blue-600 mb-4" />
                <CardTitle className="text-2xl">{t("about.values.title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg">
                  {t("about.values.description")}
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t("about.story.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("about.story.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {t("about.story.heading")}
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                {t("about.story.description1")}
              </p>
              <p className="text-lg text-gray-600 mb-6">
                {t("about.story.description2")}
              </p>
              <p className="text-lg text-gray-600">
                {t("about.story.description3")}
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                  <div className="text-gray-600">{t("about.stats.projects")}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">30+</div>
                  <div className="text-gray-600">{t("about.stats.clients")}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
                  <div className="text-gray-600">{t("about.stats.years")}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                  <div className="text-gray-600">{t("about.stats.satisfaction")}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t("about.team.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("about.team.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 mx-auto text-blue-600 mb-4" />
                <CardTitle className="text-xl">{t("about.team.experts.title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  {t("about.team.experts.description")}
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Award className="h-12 w-12 mx-auto text-blue-600 mb-4" />
                <CardTitle className="text-xl">{t("about.team.certified.title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  {t("about.team.certified.description")}
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Lightbulb className="h-12 w-12 mx-auto text-blue-600 mb-4" />
                <CardTitle className="text-xl">{t("about.team.innovative.title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  {t("about.team.innovative.description")}
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
