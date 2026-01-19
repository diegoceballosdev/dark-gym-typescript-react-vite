export type TemplateConfig = {
  brandName: string;
  city: string;
  address: string;
  phoneDisplay: string;
  whatsapp: string;
  email: string;

  mapEmbedUrl: string;

  social: {
    instagram: string;
    facebook: string;
    tiktok: string;
  };

  colors: {
    primary: string;
    accent: string;
  };

  images: {
    hero: boolean;
    services: boolean;
    about: boolean;
  };

  media: {
    heroBgUrl: string;
    serviceImages: [string, string, string];
    aboutImageUrl: string;
  };
};

export const TEMPLATE_CONFIG: TemplateConfig = {
  brandName: "DarkFit Gym",
  city: "Salta, Argentina",
  address: "Av. Ejemplo 123, Salta Capital",
  phoneDisplay: "+54 9 387 513-4270",
  whatsapp: "5493875134270",
  email: "contacto@tugimnasio.com",

  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1810.3164095051375!2d-65.3917258690218!3d-24.84222749848515!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x941bdd005cf809cd%3A0xb87a9b28839bb876!2sFourgym%20Salta!5e0!3m2!1ses-419!2sar!4v1768839705810!5m2!1ses-419!2sar",

  social: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
    tiktok: "https://tiktok.com/",
  },

  colors: {
    primary: "#8B5CF6",
    accent: "#22D3EE",
  },

  images: {
    hero: true,
    services: true,
    about: true,
  },

  media: {
    heroBgUrl:
      "/images/hero-gym.avif",
    serviceImages: [
      "/images/service-1.avif",
      "/images/service-2.avif",
      "/images/service-3.avif",
    ],
    aboutImageUrl:
      "/images/about.webp",
  },
};
