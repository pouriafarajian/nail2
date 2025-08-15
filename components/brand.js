// components/brand.js
export const BRAND = {
  name: "SaharNail",
  phone: "+31 6 12 34 56 78",
  instagram: "https://instagram.com/nailbysahar",
  address: "Almere, Netherlands",
  bookingUrl: "https://saharnail.simplybook.it/v2/",
  logo: "/images/logo.png",
};

export const T = {
  en: {
    switch:"NL",
    heroTitle:"Professional Manicure & Pedicure",
    heroSubtitle:"Minimal, elegant & long-lasting results.",
    cta:"Book Online",
    addressLine:(addr,phone)=>`${addr} • Phone: ${phone}`,
    gallery:"Gallery",
    about:"About",
    aboutText:"I’m Sahar — a nail artist focused on clean, minimal and elegant looks using high‑quality materials and strict hygiene.",
    contact:"Contact",
    address:"Address",
    phone:"Phone",
    insta:"Instagram",
    footerPrivacy:"Privacy",
    footerTerms:"Terms"
  },
  nl: {
    switch:"EN",
    heroTitle:"Professionele Manicure & Pedicure",
    heroSubtitle:"Minimalistisch, elegant en duurzaam resultaat.",
    cta:"Online Boeken",
    addressLine:(addr,phone)=>`${addr} • Telefoon: ${phone}`,
    gallery:"Galerij",
    about:"Over",
    aboutText:"Ik ben Sahar — nagelstyliste met focus op strakke, minimalistische en elegante looks met hoogwaardige materialen en hygiëne.",
    contact:"Contact",
    address:"Adres",
    phone:"Telefoon",
    insta:"Instagram",
    footerPrivacy:"Privacy",
    footerTerms:"Voorwaarden"
  }
};
