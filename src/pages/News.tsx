import { useTranslation } from "react-i18next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import visitaMicrosoftImg from "@/assets/news/visita_microsoft.jpeg";
import atleticaImg from "@/assets/news/atletica.jpeg";

const News = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900">
              {t("news.carouselTitle")}
            </h2>
          </div>

          <div className="relative">
            <Carousel opts={{ align: "start", skipSnaps: false, containScroll: "trimSnaps" }}>
              <CarouselContent className="flex">
                <CarouselItem>
                  <article className="overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-slate-200">
                    <img
                      src={visitaMicrosoftImg}
                      alt={t("news.story1Title")}
                      className="h-80 w-full object-cover"
                    />
                    <div className="p-8">
                      <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
                        {t("news.story1Date")}
                      </p>
                      <h3 className="mt-4 text-2xl font-semibold text-slate-900">
                        {t("news.story1Title")}
                      </h3>
                      <p className="mt-4 text-gray-600 leading-relaxed">
                        {t("news.story1Description")}
                      </p>
                    </div>
                  </article>
                </CarouselItem>

                <CarouselItem>
                  <article className="overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-slate-200">
                    <img
                      src={atleticaImg}
                      alt={t("news.story2Title")}
                      className="h-80 w-full object-cover"
                    />
                    <div className="p-8">
                      <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
                        {t("news.story2Date")}
                      </p>
                      <h3 className="mt-4 text-2xl font-semibold text-slate-900">
                        {t("news.story2Title")}
                      </h3>
                      <p className="mt-4 text-gray-600 leading-relaxed">
                        {t("news.story2Description")}
                      </p>
                    </div>
                  </article>
                </CarouselItem>
              </CarouselContent>

              <CarouselPrevious className="hidden md:inline-flex" aria-label="Previous news" />
              <CarouselNext className="hidden md:inline-flex" aria-label="Next news" />
            </Carousel>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default News;
