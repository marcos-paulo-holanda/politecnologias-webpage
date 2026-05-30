import { useTranslation } from "react-i18next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const SitePolicy = () => {
  const { t } = useTranslation();

  const sections = ["intro", "leads", "usage", "sharing"] as const;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-[#FFD51C] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {t("sitePolicy.title")}
            </h1>
            <p className="text-sm md:text-base text-brand-ink/70">
              {t("sitePolicy.lastUpdatedLabel")}: {t("sitePolicy.lastUpdated")}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {sections.map((key) => (
              <div key={key}>
                <h2 className="text-lg font-bold text-gray-900 mb-3">
                  {t(`sitePolicy.${key}.title`)}
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {t(`sitePolicy.${key}.text`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SitePolicy;
