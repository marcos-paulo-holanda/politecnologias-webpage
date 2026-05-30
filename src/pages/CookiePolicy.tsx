import { useTranslation } from "react-i18next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const CookiePolicy = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-gold to-brand-goldDark text-brand-ink py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {t("cookiePolicy.title")}
            </h1>
            <p className="text-sm md:text-base text-brand-ink/70">
              {t("cookiePolicy.lastUpdatedLabel")}: {t("cookiePolicy.lastUpdated")}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-3">
                {t("cookiePolicy.intro.title")}
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                {t("cookiePolicy.intro.text")}
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-3">
                {t("cookiePolicy.future.title")}
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                {t("cookiePolicy.future.text")}
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-3">
                {t("cookiePolicy.types.title")}
              </h2>
              <ul className="space-y-3 text-sm text-gray-600 leading-relaxed list-disc pl-6">
                <li>{t("cookiePolicy.types.essential")}</li>
                <li>{t("cookiePolicy.types.optional")}</li>
              </ul>
            </div>

            <div className="bg-brand-veil border-l-4 border-brand-gold rounded-r-lg p-6">
              <h2 className="text-base font-bold text-gray-900 mb-2">
                {t("cookiePolicy.transparency.title")}
              </h2>
              <p className="text-sm text-gray-700 italic leading-relaxed">
                "{t("cookiePolicy.transparency.text")}"
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CookiePolicy;
