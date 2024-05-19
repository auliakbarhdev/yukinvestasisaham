// An array of links for navigation bar
const navBarLinks = [
  { name: "Home", url: "/" },
  { name: "About", url: "/about" },
  { name: "Open an Account", url: "/services" },
  { name: "Articles", url: "/blog" },
  { name: "Contact", url: "/contact" },
];
// An array of links for footer
const footerLinks = [
  {
    section: "",
    links: [],
  },
  {
    section: "Yuk Investasi Saham",
    links: [
      { name: "About", url: "#" },
      { name: "Open Account", url: "#" },
      { name: "Articles", url: "/blog" },
      { name: "Contact", url: "/contact" },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  facebook: "https://www.facebook.com/",
  x: "https://twitter.com/",
  telegram: "http://t.me/yukinvestasisahamid",
  instagram: "https://www.instagram.com/stockenthusias.id/",
  whatsapp: "https://wa.me/message/ZR63IOXREFFOD1"
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};
