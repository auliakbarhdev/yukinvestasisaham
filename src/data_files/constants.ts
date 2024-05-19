import ogImageSrc from "@images/social.png";

export const SITE = {
  title: "YukInvestasiSaham",
  tagline: "Investasi yang Tepat, Masa Depan yang Cerah",
  description: "Kami adalah bagian dari Mirae Asset, sebuah perusahaan investasi global yang berkomitmen untuk membantu Anda mencapai tujuan keuangan Anda. Dengan pengalaman bertahun-tahun di industri ini, kami menawarkan solusi investasi yang inovatif dan disesuaikan dengan kebutuhan Anda.",
  description_short: "Kami hadir untuk membantu Anda dalam mengoptimalkan investasi saham Anda dengan panduan dan layanan terbaik dari Mirae Asset, salah satu perusahaan manajer investasi terkemuka di Indonesia.",
  url: "https://yukinvestasisaham.com",
  author: "Aulia Akbar Harahap",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "en-US",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "en_US",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: : Hardware Tools & Construction Services`,
  description: "Equip your projects with ScrewFast's top-quality hardware tools and expert construction services. Trusted by industry leaders, ScrewFast offers simplicity, affordability, and reliability. Experience the difference with user-centric design and cutting-edge tools. Start exploring now!",
  image: ogImageSrc,
};
