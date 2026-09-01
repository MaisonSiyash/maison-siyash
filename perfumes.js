const perfumes = [
  {
    id: 1,
    nombre: "Authentic Man",
    marca: "Abercrombie And",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Fresco",
    precio: 0,
    destacado: true,
    disponible: true,
    imagen: "AUTHENTIC-ABERCROMBI-AND-FITCH.png",
    descripcion:
      "Una fragancia fresca y amaderada, con una personalidad luminosa y versátil.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Fresco",
      "Amaderado",
      "Aromático"
    ]
  },

  {
    id: 2,
    nombre: "Animale Pour Homme",
    marca: "Animale",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Dulce",
    precio: 0,
    destacado: true,
    disponible: true,
    imagen: "ANIMALE_POUR_HOMME.jpg",
    descripcion:
      "Una composición dulce y amaderada que transmite una sensación seductora y envolvente.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Dulce",
      "Amaderado",
      "Avainillado"
    ]
  },

  {
    id: 3,
    nombre: "Blue Seduction",
    marca: "Antonio Banderas",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Fresco",
    precio: 0,
    destacado: true,
    disponible: true,
    imagen: "BLUE-SEDUCTION.png",
    descripcion:
      "Una fragancia de carácter fresca y acuática, ideal para quienes buscan una presencia luminosa y versátil.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Fresco",
      "Acuático",
      "Frutal"
    ]
  },

  {
    id: 4,
    nombre: "The Golden Secret",
    marca: "Antonio Banderas",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Especiado",
    precio: 0,
    destacado: true,
    disponible: true,
    imagen: "THE-GOLDEN-SECRET-ANTONIO-BANDERAS-1.png",
    descripcion:
      "Una esencia especiada y amaderada, con un estilo intensa y cautivadora que destaca con naturalidad.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Especiado",
      "Amaderado",
      "Cuero"
    ]
  },

  {
    id: 5,
    nombre: "Acqua di Gio Parfum",
    marca: "Armani",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Aromático",
    precio: 0,
    destacado: true,
    disponible: true,
    imagen: "ACQUA-DI-GIO-PARFUM.png",
    descripcion:
      "Una propuesta aromática y marina, perfecta para quienes disfrutan de una fragancia elegante y equilibrada.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Aromático",
      "Marino",
      "Amaderado"
    ]
  },

  {
    id: 6,
    nombre: "Acqua di Gio Profumo",
    marca: "Armani",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Aromático",
    precio: 0,
    destacado: true,
    disponible: true,
    imagen: "ACQUA_DI_GIO_PROFUMO.jpg",
    descripcion:
      "Una fragancia aromática y marina que combina estilo y personalidad en una expresión elegante y equilibrada.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Aromático",
      "Marino",
      "Ámbar"
    ]
  },

  {
    id: 7,
    nombre: "Acqua di Gio Profondo",
    marca: "Armani",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Marino",
    precio: 0,
    destacado: true,
    disponible: true,
    imagen: "ACQUA DI GIO PROFONDO.png",
    descripcion:
      "Una fragancia marina y aromática que transmite frescura, profundidad y elegancia.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Marino",
      "Aromático",
      "Amaderado"
    ]
  },

  {
    id: 8,
    nombre: "Stronger With You Oud",
    marca: "Armani",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Amaderado",
    precio: 0,
    destacado: true,
    disponible: true,
    imagen: "STRONGER-WITH-YOU-OUD.png",
    descripcion:
      "Una fragancia amaderada y especiada, con un carácter elegante y con carácter que aporta distinción.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Amaderado",
      "Especiado",
      "Ámbar"
    ]
  },

  {
    id: 9,
    nombre: "Stronger With You",
    marca: "Armani",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Dulce",
    precio: 0,
    destacado: true,
    disponible: true,
    imagen: "STRONGER-WITH-YOU.png",
    descripcion:
      "Una fragancia dulce y avainillada, con una personalidad seductora y envolvente.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Dulce",
      "Avainillado",
      "Amaderado"
    ]
  },

  {
    id: 10,
    nombre: "Stronger With You Tobacco",
    marca: "Armani",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Dulce",
    precio: 0,
    destacado: true,
    disponible: true,
    imagen: "STRONGERWITHYOUTOBBACO.jpg",
    descripcion:
      "Una composición dulce y de tabaco que transmite una sensación seductora y envolvente.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Dulce",
      "Tabaco",
      "Ámbar"
    ]
  },

  {
    id: 11,
    nombre: "Azzaro Pour Homme",
    marca: "Azzaro",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Aromático",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "AZZARO_HOMME.jpg",
    descripcion:
      "Una fragancia de carácter aromática y amaderada, ideal para quienes buscan una presencia elegante y equilibrada.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Aromático",
      "Amaderado",
      "Especiado"
    ]
  },

  {
    id: 12,
    nombre: "Burberry Hero Eau de Parfum",
    marca: "Burberry",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Aromático",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "HERO-EAU-DE-PARFUM.png",
    descripcion:
      "Una esencia aromática y amaderada, con un estilo elegante y equilibrada que destaca con naturalidad.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Aromático",
      "Amaderado",
      "Fresco"
    ]
  },

  {
    id: 13,
    nombre: "Bvlgari Aqva Pour Homme",
    marca: "Bvlgari",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Cítrico",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "AQVA_POUR_HOMME.jpg",
    descripcion:
      "Una propuesta cítrica y marina, perfecta para quienes disfrutan de una fragancia luminosa y energizante.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Cítrico",
      "Marino",
      "Aromático"
    ]
  },

  {
    id: 14,
    nombre: "Bvlgari Man",
    marca: "Bvlgari",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Amaderado",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "BVLGARI-MAN.png",
    descripcion:
      "Una fragancia amaderada y especiada que combina estilo y personalidad en una expresión elegante y con carácter.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Amaderado",
      "Especiado",
      "Ámbar"
    ]
  },

  {
    id: 15,
    nombre: "Bvlgari Pour Homme Soir",
    marca: "Bvlgari",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Verde",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "BVLGARI-POUR-HOMME-SOIR.png",
    descripcion:
      "Una composición verde y amaderada, pensada para una presencia natural y fresca y memorable.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Verde",
      "Amaderado",
      "Cítrico"
    ]
  },

  {
    id: 16,
    nombre: "Bvlgari Pour Homme",
    marca: "Bvlgari",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Amaderado",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "BVLGARI-POUR-HOMME.png",
    descripcion:
      "Una fragancia amaderada y aromática, con un carácter elegante y con carácter que aporta distinción.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Amaderado",
      "Aromático",
      "Almizclado"
    ]
  },

  {
    id: 17,
    nombre: "Bvlgari Man Rain Essence",
    marca: "Bvlgari",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Fresco",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "BVLGARY-MAN-RAIN-ESSENCE.png",
    descripcion:
      "Una fragancia fresca y acuática, con una personalidad luminosa y versátil.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Fresco",
      "Acuático",
      "Amaderado"
    ]
  },

  {
    id: 18,
    nombre: "Bvlgari Man Wood Essence",
    marca: "Bvlgari",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Amaderado",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "MAN_WOOD_ESSENCE.png",
    descripcion:
      "Una composición amaderada y aromática que transmite una sensación elegante y con carácter.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Amaderado",
      "Aromático",
      "Cítrico"
    ]
  },

  {
    id: 19,
    nombre: "212 VIP Black I Love New York",
    marca: "Calvin Klein",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Dulce",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "212-VIP-BLACK-I-LOVE-NY.png",
    descripcion:
      "Una fragancia de carácter dulce y amaderada, ideal para quienes buscan una presencia seductora y envolvente.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Dulce",
      "Amaderado",
      "Ámbar"
    ]
  },

  {
    id: 20,
    nombre: "CK One Shock",
    marca: "Calvin Klein",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Dulce",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "CK-ONE-SHOCK.png",
    descripcion:
      "Una esencia dulce y especiada, con un estilo seductora y envolvente que destaca con naturalidad.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Dulce",
      "Especiado",
      "Tabaco"
    ]
  },

  {
    id: 21,
    nombre: "Eternity",
    marca: "Calvin Klein",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Aromático",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "eternity.jpg",
    descripcion:
      "Una propuesta aromática y fresca, perfecta para quienes disfrutan de una fragancia elegante y equilibrada.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Aromático",
      "Fresco",
      "Floral"
    ]
  },

  {
    id: 22,
    nombre: "212 NYC Aqua",
    marca: "Carolina Herrera",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Acuático",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "212-NYC-AQUA.png",
    descripcion:
      "Una fragancia acuática y cítrica que combina estilo y personalidad en una expresión refrescante y envolvente.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Acuático",
      "Cítrico",
      "Fresco"
    ]
  },

  {
    id: 23,
    nombre: "212 VIP Black Extra",
    marca: "Carolina Herrera",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Dulce",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "212-vip-black-extra.png",
    descripcion:
      "Una composición dulce y amaderada, pensada para una presencia seductora y envolvente y memorable.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Dulce",
      "Amaderado",
      "Ámbar"
    ]
  },

  {
    id: 24,
    nombre: "212 VIP Men",
    marca: "Carolina Herrera",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Aromático",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "212-VIP-MEN.png",
    descripcion:
      "Una fragancia aromática y especiada, con un carácter elegante y equilibrada que aporta distinción.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Aromático",
      "Especiado",
      "Amaderado"
    ]
  },

  {
    id: 25,
    nombre: "212 VIP Party Fever Men",
    marca: "Carolina Herrera",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Aromático",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "212-VIP-PARTY-FEVER-MEN.png",
    descripcion:
      "Una fragancia aromática y cítrica, con una personalidad elegante y equilibrada.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Aromático",
      "Cítrico",
      "Amaderado"
    ]
  },

  {
    id: 26,
    nombre: "212 VIP Wild Party",
    marca: "Carolina Herrera",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Cítrico",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "212-VIP-WILD-PARTY.png",
    descripcion:
      "Una composición cítrica y aromática que transmite una sensación luminosa y energizante.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Cítrico",
      "Aromático",
      "Amaderado"
    ]
  },

  {
    id: 27,
    nombre: "212 VIP Wins Men",
    marca: "Carolina Herrera",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Fresco",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "212-VIP-WINS-MEN.png",
    descripcion:
      "Una fragancia de carácter fresca y aromática, ideal para quienes buscan una presencia luminosa y versátil.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Fresco",
      "Aromático",
      "Amaderado"
    ]
  },

  {
    id: 28,
    nombre: "212 VIP Black",
    marca: "Carolina Herrera",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Dulce",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "212_VIP_BLACK.jpg",
    descripcion:
      "Una esencia dulce y aromática, con un estilo seductora y envolvente que destaca con naturalidad.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Dulce",
      "Aromático",
      "Ámbar"
    ]
  },

  {
    id: 29,
    nombre: "Bad Boy",
    marca: "Carolina Herrera",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Dulce",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "BADBOY.png",
    descripcion:
      "Una propuesta dulce y amaderada, perfecta para quienes disfrutan de una fragancia seductora y envolvente.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Dulce",
      "Amaderado",
      "Ámbar"
    ]
  },

  {
    id: 30,
    nombre: "Bad Boy Elixir",
    marca: "Carolina Herrera",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Amaderado",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "CH-BAD-BOY-ELIXIR.png",
    descripcion:
      "Una fragancia amaderada y especiada que combina estilo y personalidad en una expresión elegante y con carácter.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Amaderado",
      "Especiado",
      "Ámbar"
    ]
  },

  {
    id: 31,
    nombre: "CH Beasts",
    marca: "Carolina Herrera",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Amaderado",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "CH-BEASTS.png",
    descripcion:
      "Una composición amaderada y especiada, pensada para una presencia elegante y con carácter y memorable.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Amaderado",
      "Especiado",
      "Cuero"
    ]
  },

  {
    id: 32,
    nombre: "CH Prive",
    marca: "Carolina Herrera",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Cítrico",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "CH-PRIV-MEN.png",
    descripcion:
      "Una fragancia cítrica y amaderada, con un carácter luminosa y energizante que aporta distinción.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Cítrico",
      "Amaderado",
      "Aromático"
    ]
  },

  {
    id: 33,
    nombre: "Chic for Men",
    marca: "Carolina Herrera",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Cítrico",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "CHIC-FOR-MEN-1.png",
    descripcion:
      "Una fragancia cítrica y aromática, con una personalidad luminosa y energizante.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Cítrico",
      "Aromático",
      "Amaderado"
    ]
  },

  {
    id: 34,
    nombre: "CH Men Africa",
    marca: "Carolina Herrera",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Amaderado",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "CH_AFRICA_MEN.jpg",
    descripcion:
      "Una composición amaderada y especiada que transmite una sensación elegante y con carácter.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Amaderado",
      "Especiado",
      "Aromático"
    ]
  },

  {
    id: 35,
    nombre: "CH Men Birds of Paradise",
    marca: "Carolina Herrera",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Frutal",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "BIRDS-OF-PARADISE.jpg",
    descripcion:
      "Una fragancia de carácter frutal y floral, ideal para quienes buscan una presencia alegre y vibrante.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Frutal",
      "Floral",
      "Dulce"
    ]
  },

  {
    id: 36,
    nombre: "Allure Homme Sport",
    marca: "Chanel",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Cítrico",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "ALLURE-HOMME-SPORT.png",
    descripcion:
      "Una esencia cítrica y fresca, con un estilo luminosa y energizante que destaca con naturalidad.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Cítrico",
      "Fresco",
      "Amaderado"
    ]
  },

  {
    id: 37,
    nombre: "Allure Homme",
    marca: "Chanel",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Cítrico",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "ALLURE-HOMME.png",
    descripcion:
      "Una propuesta cítrica y amaderada, perfecta para quienes disfrutan de una fragancia luminosa y energizante.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Cítrico",
      "Amaderado",
      "Aromático"
    ]
  },

  {
    id: 38,
    nombre: "Bleu de Chanel",
    marca: "Chanel",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Cítrico",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "BLEU_DE_CHANEL.jpg",
    descripcion:
      "Una fragancia cítrica y aromática que combina estilo y personalidad en una expresión luminosa y energizante.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Cítrico",
      "Aromático",
      "Amaderado"
    ]
  },

  {
    id: 39,
    nombre: "Clinique Happy for Men",
    marca: "Clínica",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Cítrico",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "CLINIQUE-HAPPY-HOMBRE.jpg",
    descripcion:
      "Una composición cítrica y fresca, pensada para una presencia luminosa y energizante y memorable.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Cítrico",
      "Fresco",
      "Aromático"
    ]
  },

  {
    id: 40,
    nombre: "Dior Homme Sport",
    marca: "Cristian Dior Dior",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Cítrico",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "DIOR_HOMME_SPORT.png",
    descripcion:
      "Una fragancia cítrica y amaderada, con un carácter luminosa y energizante que aporta distinción.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Cítrico",
      "Amaderado",
      "Fresco"
    ]
  },

  {
    id: 41,
    nombre: "Dior Sauvage",
    marca: "Cristian Dior Dior",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Aromático",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "SAUVAGE-DIOR.png",
    descripcion:
      "Una fragancia aromática y fresca, con una personalidad elegante y equilibrada.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Aromático",
      "Fresco",
      "Especiado"
    ]
  },

  {
    id: 42,
    nombre: "Bad Diesel",
    marca: "Diésel",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Dulce",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "DIESEL_BAD.jpg",
    descripcion:
      "Una composición dulce y amaderada que transmite una sensación seductora y envolvente.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Dulce",
      "Amaderado",
      "Especiado"
    ]
  },

  {
    id: 43,
    nombre: "Spirit of the Brave",
    marca: "Diésel",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Cítrico",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "DIESEL_SPIRIT_THE_BRAVE.jpg",
    descripcion:
      "Una fragancia de carácter cítrica y aromática, ideal para quienes buscan una presencia luminosa y energizante.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Cítrico",
      "Aromático",
      "Amaderado"
    ]
  },

  {
    id: 44,
    nombre: "Plus Diesel Blanca",
    marca: "Diésel",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Fresco",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "PLUS-BLANCA.png",
    descripcion:
      "Una esencia fresca y cítrica, con un estilo luminosa y versátil que destaca con naturalidad.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Fresco",
      "Cítrico",
      "Aromático"
    ]
  },

  {
    id: 45,
    nombre: "King",
    marca: "Dolce Gabbana",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Amaderado",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "KING.png",
    descripcion:
      "Una propuesta amaderada y especiada, perfecta para quienes disfrutan de una fragancia elegante y con carácter.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Amaderado",
      "Especiado",
      "Ámbar"
    ]
  },

  {
    id: 46,
    nombre: "Light Blue Pour Homme Summer Vibes",
    marca: "Dolce Gabbana",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Cítrico",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "LIGTH-BLUE-POUR-HOMME-SUMMER-VIBES.png",
    descripcion:
      "Una fragancia cítrica y fresca que combina estilo y personalidad en una expresión luminosa y energizante.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Cítrico",
      "Fresco",
      "Acuático"
    ]
  },

  {
    id: 47,
    nombre: "The One for Men",
    marca: "Dolce Gabbana",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Ámbar",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "THE-ONE-DG.jpg",
    descripcion:
      "Una composición ambarada y especiada, pensada para una presencia cálida y sofisticada y memorable.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Ámbar",
      "Especiado",
      "Tabaco"
    ]
  },

  {
    id: 48,
    nombre: "The One Luminous Night",
    marca: "Dolce Gabbana",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Ámbar",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "THE-ONE-LUMINOUS-NIGHT.jpg",
    descripcion:
      "Una fragancia ambarada y amaderada, con un carácter cálida y sofisticada que aporta distinción.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Ámbar",
      "Amaderado",
      "Especiado"
    ]
  },

  {
    id: 49,
    nombre: "The One Sport",
    marca: "Dolce Gabbana",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Fresco",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "THE-ONE-SPORT.jpg",
    descripcion:
      "Una fragancia fresca y cítrica, con una personalidad luminosa y versátil.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Fresco",
      "Cítrico",
      "Aromático"
    ]
  },

  {
    id: 50,
    nombre: "Winner Sport",
    marca: "Esika",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Fresco",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "WINNER-SPORT.png",
    descripcion:
      "Una composición fresca y cítrica que transmite una sensación luminosa y versátil.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Fresco",
      "Cítrico",
      "Aromático"
    ]
  },

  {
    id: 51,
    nombre: "Arsenal",
    marca: "Gilles Cantuel",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Aromático",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "ARSENAL.jpg",
    descripcion:
      "Una fragancia de carácter aromática y cítrica, ideal para quienes buscan una presencia elegante y equilibrada.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Aromático",
      "Cítrico",
      "Amaderado"
    ]
  },

  {
    id: 52,
    nombre: "Givenchy Play",
    marca: "Givenchy",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Cítrico",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "PLAY.png",
    descripcion:
      "Una esencia cítrica y amaderada, con un estilo luminosa y energizante que destaca con naturalidad.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Cítrico",
      "Amaderado",
      "Aromático"
    ]
  },

  {
    id: 53,
    nombre: "Gentleman Réserve Privée",
    marca: "Givenchy",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Amaderado",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "GENTLEMAN-RESERVE-PRIVE.png",
    descripcion:
      "Una propuesta amaderada y ambarada, perfecta para quienes disfrutan de una fragancia elegante y con carácter.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Amaderado",
      "Ámbar",
      "Aromático"
    ]
  },

  {
    id: 54,
    nombre: "Gucci by Gucci Pour Homme II",
    marca: "Gucci",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Amaderado",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "GUCCI-POUR-HOMME-II.jpg",
    descripcion:
      "Una fragancia amaderada y especiada que combina estilo y personalidad en una expresión elegante y con carácter.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Amaderado",
      "Especiado",
      "Cítrico"
    ]
  },

  {
    id: 55,
    nombre: "Drakkar Noir",
    marca: "Guy Laroche",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Aromático",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "DRAKKAR-NOIR-LOYRECHE.jpg",
    descripcion:
      "Una composición aromática y amaderada, pensada para una presencia elegante y equilibrada y memorable.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Aromático",
      "Amaderado",
      "Especiado"
    ]
  },

  {
    id: 56,
    nombre: "Bottled Tonic",
    marca: "Hugo Boss",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Cítrico",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "BOTTLED-TONIC.png",
    descripcion:
      "Una fragancia cítrica y fresca, ideal para una sensación limpia, dinámica y revitalizante.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Cítrico",
      "Fresco",
      "Aromático"
    ]
  },

  {
    id: 57,
    nombre: "Boss Bottled Elixir",
    marca: "Hugo Boss",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Amaderado",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "BOSS-BOTTLE-ELIXIR-HUGO-BOSS-MEN.png",
    descripcion:
      "Una fragancia amaderada y especiada, con una personalidad elegante y con carácter.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Amaderado",
      "Especiado",
      "Ámbar"
    ]
  },

  {
    id: 58,
    nombre: "Boss Bottled Night",
    marca: "Hugo Boss",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Amaderado",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "BOSS_BOTTLED_NIGTH.jpg",
    descripcion:
      "Una composición amaderada y aromática que transmite una sensación elegante y con carácter.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Amaderado",
      "Aromático",
      "Especiado"
    ]
  },

  {
    id: 59,
    nombre: "Boss Bottled Parfum",
    marca: "Hugo Boss",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Amaderado",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "BOSS_BOTTLED_PARFUM.jpg",
    descripcion:
      "Una esencia amaderada y aromática, con un estilo elegante y con carácter que destaca con naturalidad.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Amaderado",
      "Aromático",
      "Ámbar"
    ]
  },

  {
    id: 60,
    nombre: "Unlimited",
    marca: "Hugo Boss",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Cítrico",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "UNLIMITED.png",
    descripcion:
      "Una composición fresca y aromática que combina energía, limpieza y versatilidad.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Cítrico",
      "Aromático",
      "Amaderado"
    ]
  },

  {
    id: 61,
    nombre: "Hugo Iced",
    marca: "Hugo Boss",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Fresco",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "HB-ICED.png",
    descripcion:
      "Una fragancia fresca y cítrica que combina estilo y personalidad en una expresión luminosa y versátil.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Fresco",
      "Cítrico",
      "Aromático"
    ]
  },

  {
    id: 62,
    nombre: "Hugo Boss The Scent",
    marca: "Hugo Boss",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Amaderado",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "HBGRIS.png",
    descripcion:
      "Una composición amaderada y aromática, pensada para una presencia elegante y con carácter y memorable.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Amaderado",
      "Aromático",
      "Cítrico"
    ]
  },

  {
    id: 63,
    nombre: "Boss Element",
    marca: "Hugo Boss",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Verde",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "HUGO-BOSS-ELEMENT.png",
    descripcion:
      "Una fragancia verde y cítrica, con un carácter natural y fresca que aporta distinción.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Verde",
      "Cítrico",
      "Amaderado"
    ]
  },

  {
    id: 64,
    nombre: "Hugo",
    marca: "Hugo Boss",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Fresco",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "HUGO-HUGO-BOSS.jpg",
    descripcion:
      "Una fragancia fresca y aromática, con una personalidad luminosa y versátil.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Fresco",
      "Aromático",
      "Cítrico"
    ]
  },

  {
    id: 65,
    nombre: "Boss The Scent",
    marca: "Hugo Boss",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Especiado",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "THE_SCENT_BOSS.jpg",
    descripcion:
      "Una composición especiada y amaderada que transmite una sensación intensa y cautivadora.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Especiado",
      "Amaderado",
      "Frutal"
    ]
  },

  {
    id: 66,
    nombre: "Insurrection",
    marca: "Insurrección",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Dulce",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "INSURRECTION.jpg",
    descripcion:
      "Una fragancia de carácter dulce y amaderada, ideal para quienes buscan una presencia seductora y envolvente.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Dulce",
      "Amaderado",
      "Especiado"
    ]
  },

  {
    id: 67,
    nombre: "L Eau d Issey Pour Homme",
    marca: "Issey Miyake",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Cítrico",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "ISSEY-MIYAKE.jpg",
    descripcion:
      "Una esencia cítrica y acuática, con un estilo luminosa y energizante que destaca con naturalidad.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Cítrico",
      "Acuático",
      "Amaderado"
    ]
  },

  {
    id: 68,
    nombre: "Nuit d Issey",
    marca: "Issey Miyake",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Amaderado",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "ISSEY_MIYAKE_NUIT_DE_ISSEY.png",
    descripcion:
      "Una propuesta amaderada y especiada, perfecta para quienes disfrutan de una fragancia elegante y con carácter.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Amaderado",
      "Especiado",
      "Ámbar"
    ]
  },

  {
    id: 69,
    nombre: "L Eau d Issey Pour Homme Intense",
    marca: "Issey Miyake",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Acuático",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "LEAU_DE_ISSEY_INTENSE.png",
    descripcion:
      "Una fragancia acuática y amaderada que combina estilo y personalidad en una expresión refrescante y envolvente.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Acuático",
      "Amaderado",
      "Especiado"
    ]
  },

  {
    id: 70,
    nombre: "Le Beau",
    marca: "Jean Paul Gultier",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Acuático",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "LE-BEAU.png",
    descripcion:
      "Una fragancia fresca y acuática con un toque elegante, moderno y sensual.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Acuático",
      "Cítrico",
      "Amaderado"
    ]
  },

  {
    id: 71,
    nombre: "Ultra Male",
    marca: "Jean Paul Gultier",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Dulce",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "ULTRAMALE.png",
    descripcion:
      "Una fragancia dulce y frutal, con un carácter seductora y envolvente que aporta distinción.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Dulce",
      "Frutal",
      "Avainillado"
    ]
  },

  {
    id: 72,
    nombre: "Le Male Essence de Parfum",
    marca: "Jean Paul Gultier",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Avainillado",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "LA-MALE-ESSENCE-DE-PARFUM.png",
    descripcion:
      "Una fragancia avainillada y amaderada, con una personalidad cálida y reconfortante.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Avainillado",
      "Amaderado",
      "Aromático"
    ]
  },

  {
    id: 73,
    nombre: "Le Beau Le Parfum",
    marca: "Jean Paul Gultier",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Dulce",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "LE-BEAU-LE-PARFUM.png",
    descripcion:
      "Una composición dulce y avainillada que transmite una sensación seductora y envolvente.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Dulce",
      "Avainillado",
      "Amaderado"
    ]
  },

  {
    id: 74,
    nombre: "Le Beau Paradise Garden",
    marca: "Jean Paul Gultier",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Verde",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "le-beau-paradise-garden.png",
    descripcion:
      "Una fragancia de carácter verde y acuática, ideal para quienes buscan una presencia natural y fresca.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Verde",
      "Acuático",
      "Amaderado"
    ]
  },

  {
    id: 75,
    nombre: "Le Male Elixir Absolu",
    marca: "Jean Paul Gultier",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Dulce",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "LE-MALE-ELIXIR-ABSOLU.jpg",
    descripcion:
      "Una esencia dulce y avainillada, con un estilo seductora y envolvente que destaca con naturalidad.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Dulce",
      "Avainillado",
      "Ámbar"
    ]
  },

  {
    id: 76,
    nombre: "Le Male",
    marca: "Jean Paul Gultier",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Aromático",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "LE-MALE-JEAN-PAUL-GULTIER-Mesa-de-trabajo-1-copia.jpg",
    descripcion:
      "Una propuesta aromática y amaderada, perfecta para quienes disfrutan de una fragancia elegante y equilibrada.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Aromático",
      "Amaderado",
      "Avainillado"
    ]
  },

  {
    id: 77,
    nombre: "Le Male Le Parfum",
    marca: "Jean Paul Gultier",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Avainillado",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "LE-MALE-LE-PARFUM.png",
    descripcion:
      "Una fragancia avainillada y amaderada que combina estilo y personalidad en una expresión cálida y reconfortante.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Avainillado",
      "Amaderado",
      "Ámbar"
    ]
  },

  {
    id: 78,
    nombre: "Le Male Lover",
    marca: "Jean Paul Gultier",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Avainillado",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "le-Male-Lover.jpg",
    descripcion:
      "Una composición avainillada y amaderada, pensada para una presencia cálida y reconfortante y memorable.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Avainillado",
      "Amaderado",
      "Dulce"
    ]
  },

  {
    id: 79,
    nombre: "Scandal Pour Homme",
    marca: "Jean Paul Gultier",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Dulce",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "SCANDAL-JPG.png",
    descripcion:
      "Una fragancia dulce y amielada, con un carácter seductora y envolvente que aporta distinción.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Dulce",
      "Amielado",
      "Ámbar"
    ]
  },

  {
    id: 80,
    nombre: "Le Male Elilxir",
    marca: "Jean Paul Gultier",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Dulce",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "LE-MALE-ELILXIR.jpg",
    descripcion:
      "Una fragancia intensa y dulce, con un carácter cálido, seductor y envolvente.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Dulce",
      "Avainillado",
      "Ambarado"
    ]
  },

  {
    id: 81,
    nombre: "Kaiak Men",
    marca: "Kaiak",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Cítrico",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "KAIAK-MEN.png",
    descripcion:
      "Una composición cítrica y acuática que transmite una sensación luminosa y energizante.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Cítrico",
      "Acuático",
      "Fresco"
    ]
  },

  {
    id: 82,
    nombre: "Ikonik",
    marca: "Karl Lagerfeld",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Amaderado",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "KARL-LAGERFELD-IKONIK.png",
    descripcion:
      "Una fragancia de carácter amaderada y aromática, ideal para quienes buscan una presencia elegante y con carácter.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Amaderado",
      "Aromático",
      "Cítrico"
    ]
  },

  {
    id: 83,
    nombre: "L.12.12. Jaune",
    marca: "Lacoste",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Cítrico",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "L12_JAUNE.jpg",
    descripcion:
      "Una esencia cítrica y aromática, con un estilo luminosa y energizante que destaca con naturalidad.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Cítrico",
      "Aromático",
      "Amaderado"
    ]
  },

  {
    id: 84,
    nombre: "L.12.12. Blanc",
    marca: "Lacoste",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Fresco",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "LACOSTE-BLANCA.png",
    descripcion:
      "Una propuesta fresca y cítrica, perfecta para quienes disfrutan de una fragancia luminosa y versátil.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Fresco",
      "Cítrico",
      "Amaderado"
    ]
  },

  {
    id: 85,
    nombre: "Lacoste Essential",
    marca: "Lacoste",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Fresco",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "LACOSTE-ESSENTIAL.jpg",
    descripcion:
      "Una fragancia fresca y cítrica que combina estilo y personalidad en una expresión luminosa y versátil.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Fresco",
      "Cítrico",
      "Aromático"
    ]
  },

  {
    id: 86,
    nombre: "L.12.12. Blanc Eau Intense",
    marca: "Lacoste",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Fresco",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "LACOSTE-L12-BLANC-EAU-INTENSE.png",
    descripcion:
      "Una composición fresca y amaderada, pensada para una presencia luminosa y versátil y memorable.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Fresco",
      "Amaderado",
      "Cítrico"
    ]
  },

  {
    id: 87,
    nombre: "Lacoste L.12.12. Vert",
    marca: "Lacoste",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Fresco",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "LACOSTE-LAVERT.jpg",
    descripcion:
      "Una fragancia fresca y verde, con un carácter luminosa y versátil que aporta distinción.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Fresco",
      "Verde",
      "Aromático"
    ]
  },

  {
    id: 88,
    nombre: "L.12.12. Rouge",
    marca: "Lacoste",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Frutal",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "LACOSTE-RED.png",
    descripcion:
      "Una fragancia frutal y especiada, con una personalidad alegre y vibrante.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Frutal",
      "Especiado",
      "Amaderado"
    ]
  },

  {
    id: 89,
    nombre: "Solo Loewe",
    marca: "Loewe",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Cítrico",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "LOEWE.jpg",
    descripcion:
      "Una composición cítrica y aromática que transmite una sensación luminosa y energizante.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Cítrico",
      "Aromático",
      "Amaderado"
    ]
  },

  {
    id: 90,
    nombre: "Garnet Maluma",
    marca: "Maluma",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Amaderado",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "GARNET-MALUMA.png",
    descripcion:
      "Una fragancia de carácter amaderada y ambarada, ideal para quienes buscan una presencia elegante y con carácter.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Amaderado",
      "Ámbar",
      "Especiado"
    ]
  },

  {
    id: 91,
    nombre: "Onyx Maluma",
    marca: "Maluma",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Cítrico",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "ONIX-MALUMA.png",
    descripcion:
      "Una esencia cítrica y aromática, con un estilo luminosa y energizante que destaca con naturalidad.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Cítrico",
      "Aromático",
      "Amaderado"
    ]
  },

  {
    id: 92,
    nombre: "Explorer Platinum",
    marca: "Montblanc",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Aromático",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "EXPLORER-PLATINUM.png",
    descripcion:
      "Una propuesta aromática y amaderada, perfecta para quienes disfrutan de una fragancia elegante y equilibrada.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Aromático",
      "Amaderado",
      "Fresco"
    ]
  },

  {
    id: 93,
    nombre: "Explorer",
    marca: "Montblanc",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Amaderado",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "MONTBLANC-EXPLORER.png",
    descripcion:
      "Una fragancia amaderada y aromática que combina estilo y personalidad en una expresión elegante y con carácter.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Amaderado",
      "Aromático",
      "Cítrico"
    ]
  },

  {
    id: 94,
    nombre: "Starwalker",
    marca: "Montblanc",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Cítrico",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "STARWALKER.png",
    descripcion:
      "Una composición cítrica y aromática, pensada para una presencia luminosa y energizante y memorable.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Cítrico",
      "Aromático",
      "Amaderado"
    ]
  },

  {
    id: 95,
    nombre: "Toy Boy 2",
    marca: "Moschino",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Especiado",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "TOY-BOY-2.jpg",
    descripcion:
      "Una composición especiada y floral que transmite una sensación intensa y cautivadora.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Especiado",
      "Floral",
      "Amaderado"
    ]
  },

  {
    id: 96,
    nombre: "Toy Boy",
    marca: "Moschino",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Especiado",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "TOYBOY.png",
    descripcion:
      "Una fragancia de carácter especiada y floral, ideal para quienes buscan una presencia intensa y cautivadora.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Especiado",
      "Floral",
      "Amaderado"
    ]
  },

  {
    id: 97,
    nombre: "Invictus Onyx",
    marca: "Paco Rabane",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Amaderado",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "INVICTUS-ONYX.png",
    descripcion:
      "Una fragancia intensa y masculina que combina frescura acuática con profundidad ambarada.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Amaderado",
      "Ámbar",
      "Acuático"
    ]
  },

  {
    id: 98,
    nombre: "Invictus Legend",
    marca: "Paco Rabane",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Marino",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "INVICTUS-LEGEND.jpg",
    descripcion:
      "Una fragancia marina y especiada, con un carácter intenso, fresco y poderoso.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Marino",
      "Especiado",
      "Ambarado"
    ]
  },

  {
    id: 99,
    nombre: "Black XS L Aphrodisiaque",
    marca: "Paco Rabane",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Dulce",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "BLACK-XS-APHRODISIAQUE.png",
    descripcion:
      "Una fragancia dulce y amaderada que combina estilo y personalidad en una expresión seductora y envolvente.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Dulce",
      "Amaderado",
      "Especiado"
    ]
  },

  {
    id: 100,
    nombre: "Black XS Los Angeles Men",
    marca: "Paco Rabane",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Cítrico",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "BLACK-XS-LOS-ANGELES-MEN.png",
    descripcion:
      "Una composición cítrica y amaderada, pensada para una presencia luminosa y energizante y memorable.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Cítrico",
      "Amaderado",
      "Aromático"
    ]
  },

  {
    id: 101,
    nombre: "Invictus Intense",
    marca: "Paco Rabane",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Dulce",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "INVICTUS-INTENSE.png",
    descripcion:
      "Una fragancia dulce y ambarada, con un carácter seductora y envolvente que aporta distinción.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Dulce",
      "Ámbar",
      "Especiado"
    ]
  },

  {
    id: 102,
    nombre: "Invictus Parfum",
    marca: "Paco Rabane",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Dulce",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "INVICTUS-PARFUM.jpg",
    descripcion:
      "Una fragancia dulce y aromática, con una personalidad seductora y envolvente.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Dulce",
      "Aromático",
      "Ámbar"
    ]
  },

  {
    id: 103,
    nombre: "Invictus Platinum",
    marca: "Paco Rabane",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Aromático",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "INVICTUS-PLATINIUM-1.png",
    descripcion:
      "Una composición aromática y fresca que transmite una sensación elegante y equilibrada.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Aromático",
      "Fresco",
      "Amaderado"
    ]
  },

  {
    id: 104,
    nombre: "Invictus",
    marca: "Paco Rabane",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Acuático",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "INVICTUS.png",
    descripcion:
      "Una fragancia de carácter acuática y dulce, ideal para quienes buscan una presencia refrescante y envolvente.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Acuático",
      "Dulce",
      "Amaderado"
    ]
  },

  {
    id: 105,
    nombre: "Invictus Aqua",
    marca: "Paco Rabane",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Acuático",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "INVICTUS_AQUA.jpg",
    descripcion:
      "Una esencia acuática y cítrica, con un estilo refrescante y envolvente que destaca con naturalidad.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Acuático",
      "Cítrico",
      "Fresco"
    ]
  },

  {
    id: 106,
    nombre: "Invictus Victory",
    marca: "Paco Rabane",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Dulce",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "INVICTUS_VICTORY.jpg",
    descripcion:
      "Una propuesta dulce y ambarada, perfecta para quienes disfrutan de una fragancia seductora y envolvente.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Dulce",
      "Ámbar",
      "Avainillado"
    ]
  },

  {
    id: 107,
    nombre: "Invictus Victory Elixir",
    marca: "Paco Rabane",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Dulce",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "INVICTUS_VICTORY_ELIXIR.jpg",
    descripcion:
      "Una fragancia dulce y avainillada que combina estilo y personalidad en una expresión seductora y envolvente.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Dulce",
      "Avainillado",
      "Especiado"
    ]
  },

  {
    id: 108,
    nombre: "PACO",
    marca: "Paco Rabane",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Cítrico",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "PACO.png",
    descripcion:
      "Una fragancia fresca y masculina, con un carácter moderno, limpio y versátil.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Cítrico",
      "Aromático",
      "Amaderado"
    ]
  },

  {
    id: 109,
    nombre: "One Million Gold Elixir",
    marca: "Paco Rabane",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Dulce",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "MILLION-GOLD-ELIXIR.jpg",
    descripcion:
      "Una fragancia dulce y ambarada, con un carácter seductora y envolvente que aporta distinción.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Dulce",
      "Ámbar",
      "Avainillado"
    ]
  },

  {
    id: 110,
    nombre: "One Million Gold",
    marca: "Paco Rabane",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Dulce",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "MILLION-GOLD-RABANNE-MEN.png",
    descripcion:
      "Una fragancia dulce y amaderada, con una personalidad seductora y envolvente.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Dulce",
      "Amaderado",
      "Especiado"
    ]
  },

  {
    id: 111,
    nombre: "One Million Lucky",
    marca: "Paco Rabane",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Dulce",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "ONE-MILLION-LUCKY.png",
    descripcion:
      "Una composición dulce y frutal que transmite una sensación seductora y envolvente.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Dulce",
      "Frutal",
      "Amaderado"
    ]
  },

  {
    id: 112,
    nombre: "One Million",
    marca: "Paco Rabane",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Especiado",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "ONE-MILLION.png",
    descripcion:
      "Una fragancia de carácter especiada y dulce, ideal para quienes buscan una presencia intensa y cautivadora.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Especiado",
      "Dulce",
      "Amaderado"
    ]
  },

  {
    id: 113,
    nombre: "Pure XS",
    marca: "Paco Rabane",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Dulce",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "PURE-XS-RABANNE.png",
    descripcion:
      "Una esencia dulce y especiada, con un estilo seductora y envolvente que destaca con naturalidad.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Dulce",
      "Especiado",
      "Ámbar"
    ]
  },

  {
    id: 114,
    nombre: "The Tragedy of Lord George",
    marca: "Penhaligons",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Amielado",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "THE-TRAGEDY-OF-LORD-GORGE-PENHALIGONS.jpg",
    descripcion:
      "Una propuesta amielada y amaderada, perfecta para quienes disfrutan de una fragancia cálida y dulce.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Amielado",
      "Amaderado",
      "Aromático"
    ]
  },

  {
    id: 115,
    nombre: "Phantom Intense",
    marca: "Phantom",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Dulce",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "PHANTOM-INTENSE-1.png",
    descripcion:
      "Una fragancia dulce y aromática que combina estilo y personalidad en una expresión seductora y envolvente.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Dulce",
      "Aromático",
      "Avainillado"
    ]
  },

  {
    id: 116,
    nombre: "Phantom Parfum",
    marca: "Phantom",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Dulce",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "PHANTOM-PARFUM.jpg",
    descripcion:
      "Una composición dulce y amaderada, pensada para una presencia seductora y envolvente y memorable.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Dulce",
      "Amaderado",
      "Avainillado"
    ]
  },

  {
    id: 117,
    nombre: "No Limits",
    marca: "Philipp Plein",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Amaderado",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "NO-LIMITS-PHILIP-PLEIN.png",
    descripcion:
      "Una fragancia amaderada y especiada, con un carácter elegante y con carácter que aporta distinción.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Amaderado",
      "Especiado",
      "Ámbar"
    ]
  },

  {
    id: 118,
    nombre: "Luna Rossa Ocean",
    marca: "Prada",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Aromático",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "PRADA-LUNA-ROSSA-OCEAN.jpg",
    descripcion:
      "Una fragancia aromática y fresca, con una personalidad elegante y equilibrada.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Aromático",
      "Fresco",
      "Acuático"
    ]
  },

  {
    id: 119,
    nombre: "Tommy",
    marca: "Tommy",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Cítrico",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "TOMMY_MEN.png",
    descripcion:
      "Una composición cítrica y acuática que transmite una sensación luminosa y energizante.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Cítrico",
      "Acuático",
      "Fresco"
    ]
  },

  {
    id: 120,
    nombre: "Born in Roma Uomo Intense",
    marca: "Valentino",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Ámbar",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "UOMO BORN IN ROMA INTENSE.png",
    descripcion:
      "Una fragancia de carácter ambarada y avainillada, ideal para quienes buscan una presencia cálida y sofisticada.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Ámbar",
      "Avainillado",
      "Especiado"
    ]
  },

  {
    id: 121,
    nombre: "Born in Roma Uomo",
    marca: "Valentino",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Aromático",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "UOMO BORN IN ROMA.png",
    descripcion:
      "Una esencia aromática y amaderada, con un estilo elegante y equilibrada que destaca con naturalidad.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Aromático",
      "Amaderado",
      "Mineral"
    ]
  },

  {
    id: 122,
    nombre: "Uomo",
    marca: "Valentino",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Amaderado",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "UOMO.png",
    descripcion:
      "Una propuesta amaderada y especiada, perfecta para quienes disfrutan de una fragancia elegante y con carácter.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Amaderado",
      "Especiado",
      "Aromático"
    ]
  },

  {
    id: 123,
    nombre: "Blue Jeans",
    marca: "Versace",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Cítrico",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "BLUE-JEANS-VERSACE-HM.png",
    descripcion:
      "Una fragancia cítrica y aromática que combina estilo y personalidad en una expresión luminosa y energizante.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Cítrico",
      "Aromático",
      "Amaderado"
    ]
  },

  {
    id: 124,
    nombre: "Dylan Blue",
    marca: "Versace",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Aromático",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "DYLAN_BLUE.jpg",
    descripcion:
      "Una composición aromática y amaderada, pensada para una presencia elegante y equilibrada y memorable.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Aromático",
      "Amaderado",
      "Fresco"
    ]
  },

  {
    id: 125,
    nombre: "Eros Energy",
    marca: "Versace",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Cítrico",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "EROS-ENERGY-01.jpg",
    descripcion:
      "Una fragancia cítrica y aromática, con un carácter luminosa y energizante que aporta distinción.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Cítrico",
      "Aromático",
      "Amaderado"
    ]
  },

  {
    id: 126,
    nombre: "Eros",
    marca: "Versace",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Aromático",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "EROS.png",
    descripcion:
      "Una fragancia aromática y dulce, con una personalidad elegante y equilibrada.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Aromático",
      "Dulce",
      "Amaderado"
    ]
  },

  {
    id: 127,
    nombre: "Eau Fraiche",
    marca: "Versace",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Cítrico",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "VERSACE-EAU-FRAICHE.png",
    descripcion:
      "Una composición cítrica y acuática que transmite una sensación luminosa y energizante.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Cítrico",
      "Acuático",
      "Amaderado"
    ]
  },

  {
    id: 128,
    nombre: "Swiss Army",
    marca: "Victorinox",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Cítrico",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "Swiss-Army.png",
    descripcion:
      "Una fragancia de carácter cítrica y aromática, ideal para quienes buscan una presencia luminosa y energizante.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Cítrico",
      "Aromático",
      "Amaderado"
    ]
  },

  {
    id: 129,
    nombre: "43°N Paralelo",
    marca: "Yanbal",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Cítrico",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "43-N-PARALEL-YANBAL.png",
    descripcion:
      "Una esencia cítrica y amaderada, con un estilo luminosa y energizante que destaca con naturalidad.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Cítrico",
      "Amaderado",
      "Aromático"
    ]
  },

  {
    id: 130,
    nombre: "Adrenaline",
    marca: "Yanbal",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Cítrico",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "ADRENALINE-YANBAL-MEN.png",
    descripcion:
      "Una propuesta cítrica y aromática, perfecta para quienes disfrutan de una fragancia luminosa y energizante.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Cítrico",
      "Aromático",
      "Amaderado"
    ]
  },

  {
    id: 131,
    nombre: "Arom",
    marca: "Yanbal",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Aromático",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "AROM-YANBAL.png",
    descripcion:
      "Una fragancia aromática y cítrica que combina estilo y personalidad en una expresión elegante y equilibrada.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Aromático",
      "Cítrico",
      "Amaderado"
    ]
  },

  {
    id: 132,
    nombre: "OHM",
    marca: "Yanbal",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Herbal",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "OHM.png",
    descripcion:
      "Una fragancia herbal y cítrica con un fondo de cuero que aporta fuerza y sofisticación.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Herbal",
      "Cítrico",
      "Cuero"
    ]
  },

  {
    id: 133,
    nombre: "Ohm Soul",
    marca: "Yanbal",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Amaderado",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "OHM-SOUL.png",
    descripcion:
      "Una fragancia amaderada y ambarada, con un carácter elegante y con carácter que aporta distinción.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Amaderado",
      "Ámbar",
      "Especiado"
    ]
  },

  {
    id: 134,
    nombre: "Solo",
    marca: "Yanbal",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Cítrico",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "SOLO-YANBAL.jpg",
    descripcion:
      "Una fragancia cítrica y aromática, con una personalidad luminosa y energizante.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Cítrico",
      "Aromático",
      "Amaderado"
    ]
  },

  {
    id: 135,
    nombre: "M7",
    marca: "Yves Saint Lauren",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Amaderado",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "M7.png",
    descripcion:
      "Una composición amaderada y ambarada que transmite una sensación elegante y con carácter.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Amaderado",
      "Ámbar",
      "Aromático"
    ]
  },

  {
    id: 136,
    nombre: "MYSLF Le Parfum",
    marca: "Yves Saint Lauren",
    tipo: "Diseñador",
    genero: "Hombre",
    familia: "Amaderado",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "MYSLF-LEPARFUM.jpg",
    descripcion:
      "Una fragancia de carácter amaderada y floral, ideal para quienes buscan una presencia elegante y con carácter.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Amaderado",
      "Floral",
      "Aromático"
    ]
  },

  {
    id: 137,
    nombre: "Blue Seduction for Her",
    marca: "Antonio Banderas",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Fresco",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "BLUE-SEDUCTION-ANTONIO-BANDERAS-FEM.png",
    descripcion:
      "Una esencia fresca y acuática, con un estilo luminosa y versátil que destaca con naturalidad.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Fresco",
      "Acuático",
      "Floral"
    ]
  },

  {
    id: 138,
    nombre: "Ari",
    marca: "Ariadna Grande",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Frutal",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "ARI.png",
    descripcion:
      "Una propuesta frutal y floral, perfecta para quienes disfrutan de una fragancia alegre y vibrante.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Frutal",
      "Floral",
      "Dulce"
    ]
  },

  {
    id: 139,
    nombre: "Cloud Pink",
    marca: "Ariadna Grande",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Dulce",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "CLOUD PINK.png",
    descripcion:
      "Una fragancia dulce y frutal que combina estilo y personalidad en una expresión seductora y envolvente.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Dulce",
      "Frutal",
      "Avainillado"
    ]
  },

  {
    id: 140,
    nombre: "Cloud",
    marca: "Ariadna Grande",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Dulce",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "CLOUD.png",
    descripcion:
      "Una composición dulce y avainillada, pensada para una presencia seductora y envolvente y memorable.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Dulce",
      "Avainillado",
      "Aromático"
    ]
  },

  {
    id: 141,
    nombre: "MOD Vanilla",
    marca: "Ariadna Grande",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Avainillado",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "MOD VAINILLA.png",
    descripcion:
      "Una fragancia avainillada y dulce, con un carácter cálida y reconfortante que aporta distinción.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Avainillado",
      "Dulce",
      "Amaderado"
    ]
  },

  {
    id: 142,
    nombre: "R.E.M.",
    marca: "Ariadna Grande",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Dulce",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "R.E.M.png",
    descripcion:
      "Una fragancia dulce y aromática, con una personalidad seductora y envolvente.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Dulce",
      "Aromático",
      "Atalcado"
    ]
  },

  {
    id: 143,
    nombre: "Sweet Like Candy",
    marca: "Ariadna Grande",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Dulce",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "SWEET LIKE CANDY.png",
    descripcion:
      "Una composición dulce y frutal que transmite una sensación seductora y envolvente.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Dulce",
      "Frutal",
      "Gourmand"
    ]
  },

  {
    id: 144,
    nombre: "Thank U, Next",
    marca: "Ariadna Grande",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Frutal",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "THANK U NEXT.png",
    descripcion:
      "Una fragancia de carácter frutal y dulce, ideal para quienes buscan una presencia alegre y vibrante.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Frutal",
      "Dulce",
      "Cremoso"
    ]
  },

  {
    id: 145,
    nombre: "Thank U, Next 2.0",
    marca: "Ariadna Grande",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Frutal",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "THANKU NEXT 2.0.png",
    descripcion:
      "Una esencia frutal y dulce, con un estilo alegre y vibrante que destaca con naturalidad.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Frutal",
      "Dulce",
      "Gourmand"
    ]
  },

  {
    id: 146,
    nombre: "Vanilla Suede",
    marca: "Ariadna Grande",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Avainillado",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "VAINILLA SUEDE.png",
    descripcion:
      "Una propuesta avainillada y atalcada, perfecta para quienes disfrutan de una fragancia cálida y reconfortante.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Avainillado",
      "Atalcado",
      "Amaderado"
    ]
  },

  {
    id: 147,
    nombre: "273 Beverly Hills",
    marca: "Beverly Hills",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "BEVERLY-HILLS-273.jpg",
    descripcion:
      "Una fragancia floral y cítrica que combina estilo y personalidad en una expresión delicada y sofisticada.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Cítrico",
      "Amaderado"
    ]
  },

  {
    id: 148,
    nombre: "Burberry Her Eau de Toilette",
    marca: "Burberry",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Frutal",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "BURBERRY-HER-EDT.png",
    descripcion:
      "Una composición frutal y floral, pensada para una presencia alegre y vibrante y memorable.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Frutal",
      "Floral",
      "Amaderado"
    ]
  },

  {
    id: 149,
    nombre: "Burberry Her Elixir de Parfum",
    marca: "Burberry",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Frutal",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "BURBERRY-HER-ELIXIR.png",
    descripcion:
      "Una fragancia frutal y dulce, con un carácter alegre y vibrante que aporta distinción.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Frutal",
      "Dulce",
      "Avainillado"
    ]
  },

  {
    id: 150,
    nombre: "Burberry Her",
    marca: "Burberry",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Frutal",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "BURBERRY-HER.png",
    descripcion:
      "Una fragancia frutal y floral, con una personalidad alegre y vibrante.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Frutal",
      "Floral",
      "Dulce"
    ]
  },

  {
    id: 151,
    nombre: "GODDESS INTERSE",
    marca: "Burberry",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Avainillado",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "GODDESS-INTERSE.png",
    descripcion:
      "Una fragancia femenina y envolvente que combina vainilla, flores y elegancia.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Avainillado",
      "Floral",
      "Amaderado"
    ]
  },

  {
    id: 152,
    nombre: "Bvlgari Petits et Mamans",
    marca: "Bvlgari",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Cítrico",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "BABY-BVLGARI.png",
    descripcion:
      "Una fragancia de carácter cítrica y floral, ideal para quienes buscan una presencia luminosa y energizante.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Cítrico",
      "Floral",
      "Almizclado"
    ]
  },

  {
    id: 153,
    nombre: "Omnia Coral",
    marca: "Bvlgari",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Cítrico",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "BVLGARI-CORAL.jpg",
    descripcion:
      "Una esencia cítrica y floral, con un estilo luminosa y energizante que destaca con naturalidad.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Cítrico",
      "Floral",
      "Acuático"
    ]
  },

  {
    id: 154,
    nombre: "Omnia Amethyste",
    marca: "Bvlgari",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "OMNIA-AMETHYSTE.jpg",
    descripcion:
      "Una propuesta floral y atalcada, perfecta para quienes disfrutan de una fragancia delicada y sofisticada.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Atalcado",
      "Amaderado"
    ]
  },

  {
    id: 155,
    nombre: "Omnia Crystalline",
    marca: "Bvlgari",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "OMNIA-CRYSTALLINE.jpg",
    descripcion:
      "Una fragancia floral y acuática que combina estilo y personalidad en una expresión delicada y sofisticada.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Acuático",
      "Amaderado"
    ]
  },

  {
    id: 156,
    nombre: "Omnia Golden Citrine",
    marca: "Bvlgari",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Cítrico",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "OMNIA-GOLDEN-CITRINE.png",
    descripcion:
      "Una composición cítrica y floral, pensada para una presencia luminosa y energizante y memorable.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Cítrico",
      "Floral",
      "Amaderado"
    ]
  },

  {
    id: 157,
    nombre: "Omnia Paraiba",
    marca: "Bvlgari",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Frutal",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "OMNIA-PARAIBA.png",
    descripcion:
      "Una fragancia frutal y floral, con un carácter alegre y vibrante que aporta distinción.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Frutal",
      "Floral",
      "Acuático"
    ]
  },

  {
    id: 158,
    nombre: "Omnia Pink Sapphire",
    marca: "Bvlgari",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Cítrico",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "OMNIA-PINK-SAPHIRE.png",
    descripcion:
      "Una fragancia cítrica y floral, con una personalidad luminosa y energizante.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Cítrico",
      "Floral",
      "Fresco"
    ]
  },

  {
    id: 159,
    nombre: "Amor Amor",
    marca: "Cacharel",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Frutal",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "CACHAREL-AMOR-AMOR.jpg",
    descripcion:
      "Una composición frutal y floral que transmite una sensación alegre y vibrante.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Frutal",
      "Floral",
      "Dulce"
    ]
  },

  {
    id: 160,
    nombre: "212 VIP Club",
    marca: "Carolina Herrera",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Frutal",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "212-VIP-CLUB-CAROLINA-HERRERA.png",
    descripcion:
      "Una fragancia de carácter frutal y floral, ideal para quienes buscan una presencia alegre y vibrante.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Frutal",
      "Floral",
      "Dulce"
    ]
  },

  {
    id: 161,
    nombre: "212 VIP Party Fever",
    marca: "Carolina Herrera",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Frutal",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "212-VIP-PARTY-FEVER-WOMAN.png",
    descripcion:
      "Una esencia frutal y floral, con un estilo alegre y vibrante que destaca con naturalidad.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Frutal",
      "Floral",
      "Cítrico"
    ]
  },

  {
    id: 162,
    nombre: "212 VIP Rose Love NY",
    marca: "Carolina Herrera",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "212-VIP-ROSE-LOVE-NY.png",
    descripcion:
      "Una propuesta floral y frutal, perfecta para quienes disfrutan de una fragancia delicada y sofisticada.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Frutal",
      "Almizclado"
    ]
  },

  {
    id: 163,
    nombre: "212 VIP Rose Red",
    marca: "Carolina Herrera",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Frutal",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "212-VIP-ROSE-RED-CAROLINA-HERRERA.png",
    descripcion:
      "Una fragancia frutal y floral que combina estilo y personalidad en una expresión alegre y vibrante.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Frutal",
      "Floral",
      "Amaderado"
    ]
  },

  {
    id: 164,
    nombre: "212 VIP Rose",
    marca: "Carolina Herrera",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "212-VIP-ROSE.png",
    descripcion:
      "Una composición floral y frutal, pensada para una presencia delicada y sofisticada y memorable.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Frutal",
      "Amaderado"
    ]
  },

  {
    id: 165,
    nombre: "212 Heroes Forever Young",
    marca: "Carolina Herrera",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "212_HEROES_FOREVER_YOUNG.jpg",
    descripcion:
      "Una fragancia floral y frutal, con un carácter delicada y sofisticada que aporta distinción.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Frutal",
      "Fresco"
    ]
  },

  {
    id: 166,
    nombre: "212 NYC",
    marca: "Carolina Herrera",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "212_NYC_DAMA.jpg",
    descripcion:
      "Una fragancia floral y amaderada, con una personalidad delicada y sofisticada.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Amaderado",
      "Cítrico"
    ]
  },

  {
    id: 167,
    nombre: "212 Sexy",
    marca: "Carolina Herrera",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "212_SEXY_DAMA.jpg",
    descripcion:
      "Una composición floral y dulce que transmite una sensación delicada y sofisticada.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Dulce",
      "Amaderado"
    ]
  },

  {
    id: 168,
    nombre: "212 VIP",
    marca: "Carolina Herrera",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "212_VIP_DAMA.jpg",
    descripcion:
      "Una fragancia de carácter floral y frutal, ideal para quienes buscan una presencia delicada y sofisticada.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Frutal",
      "Almizclado"
    ]
  },

  {
    id: 169,
    nombre: "212 VIP Rose Extra",
    marca: "Carolina Herrera",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "212_VIP_ROSE_EXTRA.jpg",
    descripcion:
      "Una esencia floral y frutal, con un estilo delicada y sofisticada que destaca con naturalidad.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Frutal",
      "Almizclado"
    ]
  },

  {
    id: 170,
    nombre: "212 VIP Wild Party",
    marca: "Carolina Herrera",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Frutal",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "212_VIP_WILD_PARTY.png",
    descripcion:
      "Una propuesta frutal y floral, perfecta para quienes disfrutan de una fragancia alegre y vibrante.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Frutal",
      "Floral",
      "Fresco"
    ]
  },

  {
    id: 171,
    nombre: "Birds Of Paradise Dama",
    marca: "Carolina Herrera",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Frutal",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "birds-Of-Paradise-Dama.jpg",
    descripcion:
      "Una fragancia frutal y floral que combina estilo y personalidad en una expresión alegre y vibrante.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Frutal",
      "Floral",
      "Dulce"
    ]
  },

  {
    id: 172,
    nombre: "CH Beauties",
    marca: "Carolina Herrera",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "CH-BEAUTIES.png",
    descripcion:
      "Una composición floral y frutal, pensada para una presencia delicada y sofisticada y memorable.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Frutal",
      "Dulce"
    ]
  },

  {
    id: 173,
    nombre: "CH Central Park",
    marca: "Carolina Herrera",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "CH-CENTRAL-PARK.jpg",
    descripcion:
      "Una fragancia floral y verde, con un carácter delicada y sofisticada que aporta distinción.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Verde",
      "Cítrico"
    ]
  },

  {
    id: 174,
    nombre: "CH La Bomba",
    marca: "Carolina Herrera",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "CH-LA-BOMBA.jpg",
    descripcion:
      "Una fragancia floral y frutal, con una personalidad delicada y sofisticada.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Frutal",
      "Dulce"
    ]
  },

  {
    id: 175,
    nombre: "CH Privee",
    marca: "Carolina Herrera",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "CH-PRIVEE.png",
    descripcion:
      "Una composición floral y amaderada que transmite una sensación delicada y sofisticada.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Amaderado",
      "Ámbar"
    ]
  },

  {
    id: 176,
    nombre: "CH Sublime",
    marca: "Carolina Herrera",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "CH-SUBLIME.png",
    descripcion:
      "Una fragancia de carácter floral y dulce, ideal para quienes buscan una presencia delicada y sofisticada.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Dulce",
      "Ámbar"
    ]
  },

  {
    id: 177,
    nombre: "CH Woman",
    marca: "Carolina Herrera",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "CH_WOMAN.jpg",
    descripcion:
      "Una esencia floral y amaderada, con un estilo delicada y sofisticada que destaca con naturalidad.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Amaderado",
      "Cítrico"
    ]
  },

  {
    id: 178,
    nombre: "Good Girl Blush Elixir",
    marca: "Carolina Herrera",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "GOOD-GIRL-BLUSH-ELIXIR.png",
    descripcion:
      "Una propuesta floral y dulce, perfecta para quienes disfrutan de una fragancia delicada y sofisticada.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Dulce",
      "Avainillado"
    ]
  },

  {
    id: 179,
    nombre: "Good Girl Midnight",
    marca: "Carolina Herrera",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "GOOD-GIRL-MIDNIGHT.png",
    descripcion:
      "Una fragancia floral y dulce que combina estilo y personalidad en una expresión delicada y sofisticada.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Dulce",
      "Ámbar"
    ]
  },

  {
    id: 180,
    nombre: "Good Girl Supreme",
    marca: "Carolina Herrera",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "GOOD-GIRL-SUPREME.png",
    descripcion:
      "Una composición floral y dulce, pensada para una presencia delicada y sofisticada y memorable.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Dulce",
      "Gourmand"
    ]
  },

  {
    id: 181,
    nombre: "Good Girl",
    marca: "Carolina Herrera",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "GOOD-GIRL.png",
    descripcion:
      "Una fragancia floral y dulce, con un carácter delicada y sofisticada que aporta distinción.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Dulce",
      "Amaderado"
    ]
  },

  {
    id: 182,
    nombre: "Good Girl Blush",
    marca: "Carolina Herrera",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "GOOD_GIRL_BLUSH.jpg",
    descripcion:
      "Una fragancia floral y frutal, con una personalidad delicada y sofisticada.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Frutal",
      "Dulce"
    ]
  },

  {
    id: 183,
    nombre: "CH QUEENS",
    marca: "Carolina Herrera",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Avainillado",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "CH-QUEENS.png",
    descripcion:
      "Una fragancia femenina y luminosa, con un corazón floral y un fondo suave y cremoso.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Avainillado",
      "Floral",
      "Cremoso"
    ]
  },

  {
    id: 184,
    nombre: "Must de Cartier",
    marca: "Cartier",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "MUST-DE-CARTIER-DAMA.png",
    descripcion:
      "Una fragancia de carácter floral y cítrica, ideal para quienes buscan una presencia delicada y sofisticada.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Cítrico",
      "Amaderado"
    ]
  },

  {
    id: 185,
    nombre: "No. 5",
    marca: "Chanel",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "NO_5.jpg",
    descripcion:
      "Una fragancia icónica y sofisticada, con una personalidad floral, elegante y atemporal.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Aldehídico",
      "Amaderado"
    ]
  },

  {
    id: 186,
    nombre: "Chance",
    marca: "Chanel",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "CHANCE-CHANEL.png",
    descripcion:
      "Una propuesta floral y cítrica, perfecta para quienes disfrutan de una fragancia delicada y sofisticada.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Cítrico",
      "Amaderado"
    ]
  },

  {
    id: 187,
    nombre: "Chance Eau Fraiche",
    marca: "Chanel",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Cítrico",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "CHANCE-EAU-FREICH-CHANEL.png",
    descripcion:
      "Una fragancia cítrica y floral que combina estilo y personalidad en una expresión luminosa y energizante.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Cítrico",
      "Floral",
      "Fresco"
    ]
  },

  {
    id: 188,
    nombre: "Chance Eau Tendre",
    marca: "Chanel",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "CHANCHE-EAU-TENDRE-CHANEL-FEM-Mesa-de-trabajo-1-copia.jpg",
    descripcion:
      "Una composición floral y frutal, pensada para una presencia delicada y sofisticada y memorable.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Frutal",
      "Cítrico"
    ]
  },

  {
    id: 189,
    nombre: "Gabrielle",
    marca: "Chanel",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "GABRIELLE-CHANEL.png",
    descripcion:
      "Una fragancia floral y cítrica, con un carácter delicada y sofisticada que aporta distinción.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Cítrico",
      "Dulce"
    ]
  },

  {
    id: 190,
    nombre: "JOY",
    marca: "Crist Dior",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "JOY.png",
    descripcion:
      "Una composición floral y luminosa que transmite elegancia, frescura y feminidad.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Cítrico",
      "Amaderado"
    ]
  },

  {
    id: 191,
    nombre: "Miss Dior Blooming Bouquet",
    marca: "Crist Dior",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "MISS-DIOR-BLOOMING-BOUQUET.png",
    descripcion:
      "Una composición floral y cítrica que transmite una sensación delicada y sofisticada.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Cítrico",
      "Fresco"
    ]
  },

  {
    id: 192,
    nombre: "Miss Dior",
    marca: "Crist Dior",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "MISS-DIOR-DIOR-FEM.png",
    descripcion:
      "Una fragancia de carácter floral y frutal, ideal para quienes buscan una presencia delicada y sofisticada.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Frutal",
      "Amaderado"
    ]
  },

  {
    id: 193,
    nombre: "Animale for Women",
    marca: "Dalila",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "ANIMALE DM.png",
    descripcion:
      "Una esencia floral y frutal, con un estilo delicada y sofisticada que destaca con naturalidad.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Frutal",
      "Dulce"
    ]
  },

  {
    id: 194,
    nombre: "Zero Plus Feminine",
    marca: "Diesel",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "DIESEL-ZERO.png",
    descripcion:
      "Una propuesta floral y frutal, perfecta para quienes disfrutan de una fragancia delicada y sofisticada.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Frutal",
      "Dulce"
    ]
  },

  {
    id: 195,
    nombre: "Loverdose Tattoo",
    marca: "Diesel",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Dulce",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "LOVERDOSE-TATTOO2.png",
    descripcion:
      "Una fragancia dulce y floral que combina estilo y personalidad en una expresión seductora y envolvente.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Dulce",
      "Floral",
      "Atalcado"
    ]
  },

  {
    id: 196,
    nombre: "Pineapple",
    marca: "Dolce Gabbana",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Frutal",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "PINEAPPLE.png",
    descripcion:
      "Una fragancia tropical y divertida, con una combinación frutal dulce y alegre.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Frutal",
      "Tropical",
      "Dulce"
    ]
  },

  {
    id: 197,
    nombre: "Devotion",
    marca: "Dolce Gabbana",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Gourmand",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "DEVOTION.jpg",
    descripcion:
      "Una fragancia gourmand y dulce, con un carácter dulce y envolvente que aporta distinción.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Gourmand",
      "Dulce",
      "Cítrico"
    ]
  },

  {
    id: 198,
    nombre: "Light Blue Summer Vibes",
    marca: "Dolce Gabbana",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Cítrico",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "LIGTH-BLUE-SUMMER-VIBES.png",
    descripcion:
      "Una fragancia cítrica y fresca, con una personalidad luminosa y energizante.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Cítrico",
      "Fresco",
      "Frutal"
    ]
  },

  {
    id: 199,
    nombre: "L Imperatrice",
    marca: "Dolce Gabbana",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Frutal",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "L_IMPERATRICE.jpg",
    descripcion:
      "Una composición frutal y floral que transmite una sensación alegre y vibrante.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Frutal",
      "Floral",
      "Acuático"
    ]
  },

  {
    id: 200,
    nombre: "Q by D&G",
    marca: "Dolce Gabbana",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Cítrico",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "Q_BY_D_G.jpg",
    descripcion:
      "Una fragancia de carácter cítrica y floral, ideal para quienes buscan una presencia luminosa y energizante.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Cítrico",
      "Floral",
      "Aromático"
    ]
  },

  {
    id: 201,
    nombre: "White Diamonds",
    marca: "Elizabeth Taylor",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "WHITE_DIAMONDS.jpg",
    descripcion:
      "Una esencia floral y atalcada, con un estilo delicada y sofisticada que destaca con naturalidad.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Atalcado",
      "Amaderado"
    ]
  },

  {
    id: 202,
    nombre: "Candy Love",
    marca: "Escada",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Dulce",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "ESCADA-CANDY-LOVE.jpg",
    descripcion:
      "Una propuesta dulce y gourmand, perfecta para quienes disfrutan de una fragancia seductora y envolvente.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Dulce",
      "Gourmand",
      "Frutal"
    ]
  },

  {
    id: 203,
    nombre: "Magnetism",
    marca: "Escada",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Frutal",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "ESCADA-MAGNETISM.png",
    descripcion:
      "Una fragancia frutal y dulce que combina estilo y personalidad en una expresión alegre y vibrante.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Frutal",
      "Dulce",
      "Floral"
    ]
  },

  {
    id: 204,
    nombre: "Ocean Lounge",
    marca: "Escada",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Acuático",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "ESCADA-OCEAN-LOUNGE.jpg",
    descripcion:
      "Una composición acuática y frutal, pensada para una presencia refrescante y envolvente y memorable.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Acuático",
      "Frutal",
      "Floral"
    ]
  },

  {
    id: 205,
    nombre: "Rocking Rio",
    marca: "Escada",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Frutal",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "ROCKING_RIO.png",
    descripcion:
      "Una fragancia tropical y dulce que evoca energía, alegría y días soleados.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Frutal",
      "Tropical",
      "Coco"
    ]
  },

  {
    id: 206,
    nombre: "Fiesta Carioca",
    marca: "Escada",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Frutal",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "FIESTA-CARIOCA.png",
    descripcion:
      "Una fragancia frutal y floral, con una personalidad alegre y vibrante.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Frutal",
      "Floral",
      "Cítrico"
    ]
  },

  {
    id: 207,
    nombre: "Show Me Love",
    marca: "Escada",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "SHOW-ME-LOVE.png",
    descripcion:
      "Una composición floral y frutal que transmite una sensación delicada y sofisticada.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Frutal",
      "Dulce"
    ]
  },

  {
    id: 208,
    nombre: "Sorbetto Rosso",
    marca: "Escada",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Cítrico",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "SORBETTO-ROSSO.png",
    descripcion:
      "Una fragancia de carácter cítrica y frutal, ideal para quienes buscan una presencia luminosa y energizante.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Cítrico",
      "Frutal",
      "Acuático"
    ]
  },

  {
    id: 209,
    nombre: "Taj Sunset",
    marca: "Escada",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Frutal",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "TAJ_SUNSET.jpg",
    descripcion:
      "Una esencia frutal y floral, con un estilo alegre y vibrante que destaca con naturalidad.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Frutal",
      "Floral",
      "Dulce"
    ]
  },

  {
    id: 210,
    nombre: "Fantasy",
    marca: "Fantasía",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Dulce",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "FANTASY-BRITNEY-SPEARS.png",
    descripcion:
      "Una propuesta dulce y frutal, perfecta para quienes disfrutan de una fragancia seductora y envolvente.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Dulce",
      "Frutal",
      "Gourmand"
    ]
  },

  {
    id: 211,
    nombre: "Hidden Fantasy",
    marca: "Fantasía",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Frutal",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "HIDDEN-FANTASY-BRITNEY-SPEARS-1.png",
    descripcion:
      "Una fragancia frutal y dulce que combina estilo y personalidad en una expresión alegre y vibrante.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Frutal",
      "Dulce",
      "Floral"
    ]
  },

  {
    id: 212,
    nombre: "Irresistible",
    marca: "Givenchy",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "IRRESISTIBLE.png",
    descripcion:
      "Una composición floral y frutal, pensada para una presencia delicada y sofisticada y memorable.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Frutal",
      "Dulce"
    ]
  },

  {
    id: 213,
    nombre: "Organza",
    marca: "Givenchy",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "ORGANZA.jpg",
    descripcion:
      "Una fragancia floral y ambarada, con un carácter delicada y sofisticada que aporta distinción.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Ámbar",
      "Especiado"
    ]
  },

  {
    id: 214,
    nombre: "Very Irresistible",
    marca: "Givenchy",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "VERY-IRRESISTIBLE-GIVENCHY-1.png",
    descripcion:
      "Una fragancia floral y aromática, con una personalidad delicada y sofisticada.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Aromático",
      "Especiado"
    ]
  },

  {
    id: 215,
    nombre: "Acqua di Gioia",
    marca: "Gregorioa Armani",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Cítrico",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "ACQUA_DE_GIOGIA.png",
    descripcion:
      "Una composición cítrica y acuática que transmite una sensación luminosa y energizante.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Cítrico",
      "Acuático",
      "Floral"
    ]
  },

  {
    id: 216,
    nombre: "Because It’s You",
    marca: "Gregorioa Armani",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Frutal",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "ARMANI-BECAUSE-ITS-YOU.png",
    descripcion:
      "Una fragancia de carácter frutal y floral, ideal para quienes buscan una presencia alegre y vibrante.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Frutal",
      "Floral",
      "Dulce"
    ]
  },

  {
    id: 217,
    nombre: "Armani Si",
    marca: "Gregorioa Armani",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "ARMANI_SI.png",
    descripcion:
      "Una esencia floral y frutal, con un estilo delicada y sofisticada que destaca con naturalidad.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Frutal",
      "Amaderado"
    ]
  },

  {
    id: 218,
    nombre: "Sì Eau de Parfum Intense",
    marca: "Gregorioa Armani",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "SI-EAU-PARFUM-INTENSE.png",
    descripcion:
      "Una propuesta floral y ambarada, perfecta para quienes disfrutan de una fragancia delicada y sofisticada.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Ámbar",
      "Avainillado"
    ]
  },

  {
    id: 219,
    nombre: "Guilty",
    marca: "Gucci",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "GUILTY.png",
    descripcion:
      "Una fragancia elegante y femenina, con un carácter floral, moderno y sofisticado.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Amaderado",
      "Aromático"
    ]
  },

  {
    id: 220,
    nombre: "Guess for Women",
    marca: "Guess",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "GUESS-DAMA-01.png",
    descripcion:
      "Una composición floral y frutal, pensada para una presencia delicada y sofisticada y memorable.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Frutal",
      "Dulce"
    ]
  },

  {
    id: 221,
    nombre: "Deep Red",
    marca: "Hugo Boss",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "DEEP_RED.jpg",
    descripcion:
      "Una fragancia floral y frutal, con un carácter delicada y sofisticada que aporta distinción.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Frutal",
      "Amaderado"
    ]
  },

  {
    id: 222,
    nombre: "Boss Woman",
    marca: "Hugo Boss",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Frutal",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "HUGO-BOSS-WOMAN.png",
    descripcion:
      "Una fragancia frutal y floral, con una personalidad alegre y vibrante.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Frutal",
      "Floral",
      "Amaderado"
    ]
  },

  {
    id: 223,
    nombre: "L Eau d Issey Eau de Toilette",
    marca: "Issey Miyake",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "LEAU_DE_ISSEY_FOR_HER.png",
    descripcion:
      "Una composición floral y acuática que transmite una sensación delicada y sofisticada.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Acuático",
      "Cítrico"
    ]
  },

  {
    id: 224,
    nombre: "La Belle Le Fleur Terrible",
    marca: "Jean Paul Gualtier",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "LA-BELLE-LE-FLEUR-TERRIBLE-JEAN-PAUL-GAULTIER.png",
    descripcion:
      "Una fragancia de carácter floral y dulce, ideal para quienes buscan una presencia delicada y sofisticada.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Dulce",
      "Frutal"
    ]
  },

  {
    id: 225,
    nombre: "La Belle Le Parfum",
    marca: "Jean Paul Gualtier",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Dulce",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "LA-BELLE-LE-PARFUM-JEAN-PAUL-GAULTIER.png",
    descripcion:
      "Una esencia dulce y avainillada, con un estilo seductora y envolvente que destaca con naturalidad.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Dulce",
      "Avainillado",
      "Floral"
    ]
  },

  {
    id: 226,
    nombre: "Gaultier Divine Le Parfum",
    marca: "Jean Paul Gualtier",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Dulce",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "la-divine-le-parfum-jean-paul-gaultier.jpg",
    descripcion:
      "Una propuesta dulce y floral, perfecta para quienes disfrutan de una fragancia seductora y envolvente.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Dulce",
      "Floral",
      "Atalcado"
    ]
  },

  {
    id: 227,
    nombre: "Viva La Juicy",
    marca: "Juicy Couture",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Frutal",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "VIVA-LA-JUICY-JUICY-COUTURE-FEM.png",
    descripcion:
      "Una fragancia frutal y floral que combina estilo y personalidad en una expresión alegre y vibrante.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Frutal",
      "Floral",
      "Dulce"
    ]
  },

  {
    id: 228,
    nombre: "Ikonik Woman",
    marca: "Karl Lagerfeld",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "IKONIK-WOMAN.jpg",
    descripcion:
      "Una composición floral y frutal, pensada para una presencia delicada y sofisticada y memorable.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Frutal",
      "Amaderado"
    ]
  },

  {
    id: 229,
    nombre: "Meow",
    marca: "Kathy Perry",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "MEOW-KATY-PERRY.png",
    descripcion:
      "Una fragancia floral y frutal, con un carácter delicada y sofisticada que aporta distinción.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Frutal",
      "Dulce"
    ]
  },

  {
    id: 230,
    nombre: "Flower by Kenzo",
    marca: "Kenzo",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "FLOWER_BY_KENZO.jpg",
    descripcion:
      "Una fragancia floral y atalcada, con una personalidad delicada y sofisticada.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Atalcado",
      "Ámbar"
    ]
  },

  {
    id: 231,
    nombre: "World Fantasy",
    marca: "Kenzo",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "WORLD-FANTASY-KENZO.png",
    descripcion:
      "Una composición floral y frutal que transmite una sensación delicada y sofisticada.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Frutal",
      "Dulce"
    ]
  },

  {
    id: 232,
    nombre: "Kim Kardashian BFF",
    marca: "Kim Kardashan",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "BFF-KIM-KARDASHIAN.png",
    descripcion:
      "Una fragancia de carácter floral y frutal, ideal para quienes buscan una presencia delicada y sofisticada.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Frutal",
      "Dulce"
    ]
  },

  {
    id: 233,
    nombre: "L.12.12. Rose Eau Intense",
    marca: "Lacoste",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "LACOSTE-L12-ROSE-EAU-INTENSE.png",
    descripcion:
      "Una esencia floral y frutal, con un estilo delicada y sofisticada que destaca con naturalidad.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Frutal",
      "Amaderado"
    ]
  },

  {
    id: 234,
    nombre: "Lacoste Sensuelle",
    marca: "Lacoste",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "LACOSTE-SENSUELLE.png",
    descripcion:
      "Una propuesta floral y frutal, perfecta para quienes disfrutan de una fragancia delicada y sofisticada.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Frutal",
      "Amaderado"
    ]
  },

  {
    id: 235,
    nombre: "La Vida es Bella Elixir",
    marca: "Lancome",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Gourmand",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "LA-VIDA-ES-BELLA-ELIXIR.jpg",
    descripcion:
      "Una fragancia dulce y envolvente que transmite calidez, feminidad y sofisticación.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Gourmand",
      "Avainillado",
      "Dulce"
    ]
  },

  {
    id: 236,
    nombre: "La Vida es Bella",
    marca: "Lancome",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "LA-VIDA-ES-BELLA.png",
    descripcion:
      "Una composición floral y dulce, pensada para una presencia delicada y sofisticada y memorable.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Dulce",
      "Avainillado"
    ]
  },

  {
    id: 237,
    nombre: "Lolita Lempicka",
    marca: "Lolita",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Dulce",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "lolita-Lempicka.jpg",
    descripcion:
      "Una fragancia dulce y avainillada, con un carácter seductora y envolvente que aporta distinción.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Dulce",
      "Avainillado",
      "Atalcado"
    ]
  },

  {
    id: 238,
    nombre: "Jade Maluma",
    marca: "Maluma",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "JADE-MALUMA.png",
    descripcion:
      "Una fragancia floral y frutal, con una personalidad delicada y sofisticada.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Frutal",
      "Dulce"
    ]
  },

  {
    id: 239,
    nombre: "Lady Emblem",
    marca: "Mont Blanc",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "LADY-EMBLEM.png",
    descripcion:
      "Una composición floral y frutal que transmite una sensación delicada y sofisticada.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Frutal",
      "Amaderado"
    ]
  },

  {
    id: 240,
    nombre: "Signature Absolue",
    marca: "Mont Blanc",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "SIGNATURE-ABSOLUE.png",
    descripcion:
      "Una fragancia de carácter floral y amaderada, ideal para quienes buscan una presencia delicada y sofisticada.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Amaderado",
      "Ámbar"
    ]
  },

  {
    id: 241,
    nombre: "Funny!",
    marca: "Moschino",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "FUNNY_MOSCHINO.jpg",
    descripcion:
      "Una esencia floral y cítrica, con un estilo delicada y sofisticada que destaca con naturalidad.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Cítrico",
      "Fresco"
    ]
  },

  {
    id: 242,
    nombre: "Love Love",
    marca: "Moschino",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Frutal",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "LOVE-LOVE.png",
    descripcion:
      "Una propuesta frutal y floral, perfecta para quienes disfrutan de una fragancia alegre y vibrante.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Frutal",
      "Floral",
      "Dulce"
    ]
  },

  {
    id: 243,
    nombre: "Gold Fresh Couture",
    marca: "Moschino",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Cítrico",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "MOSCHINO-GOLD-FRESH.jpg",
    descripcion:
      "Una fragancia cítrica y floral que combina estilo y personalidad en una expresión luminosa y energizante.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Cítrico",
      "Floral",
      "Fresco"
    ]
  },

  {
    id: 244,
    nombre: "Toy 2 Bubble Gum",
    marca: "Moschino",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Dulce",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "TOY-2-BUBBLE-GUM-MOSHINO.png",
    descripcion:
      "Una composición dulce y frutal, pensada para una presencia seductora y envolvente y memorable.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Dulce",
      "Frutal",
      "Floral"
    ]
  },

  {
    id: 245,
    nombre: "Toy 2",
    marca: "Moschino",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "TOY-2-DAMA.png",
    descripcion:
      "Una fragancia floral y frutal, con un carácter delicada y sofisticada que aporta distinción.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Frutal",
      "Dulce"
    ]
  },

  {
    id: 246,
    nombre: "Toy 2 Pearl",
    marca: "Moschino",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "TOY2-PEARL.png",
    descripcion:
      "Una fragancia floral y frutal, con una personalidad delicada y sofisticada.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Frutal",
      "Fresco"
    ]
  },

  {
    id: 247,
    nombre: "Kaiak Woman",
    marca: "Natura",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Cítrico",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "KAIAK-WOMAN.jpg",
    descripcion:
      "Una composición cítrica y floral que transmite una sensación luminosa y energizante.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Cítrico",
      "Floral",
      "Acuático"
    ]
  },

  {
    id: 248,
    nombre: "Nina",
    marca: "Nina",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Frutal",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "NINA-RICCI.png",
    descripcion:
      "Una fragancia de carácter frutal y floral, ideal para quienes buscan una presencia alegre y vibrante.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Frutal",
      "Floral",
      "Cítrico"
    ]
  },

  {
    id: 249,
    nombre: "Black XS Los Angeles",
    marca: "Paco Rabanne",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "BLACK-XS-LOS-ANGELES-DAMA-RABBANE.jpg",
    descripcion:
      "Una esencia floral y frutal, con un estilo delicada y sofisticada que destaca con naturalidad.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Frutal",
      "Dulce"
    ]
  },

  {
    id: 250,
    nombre: "Black XS for",
    marca: "Paco Rabanne",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "BLACK_XS_FOR_HER.jpg",
    descripcion:
      "Una propuesta floral y dulce, perfecta para quienes disfrutan de una fragancia delicada y sofisticada.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Dulce",
      "Amaderado"
    ]
  },

  {
    id: 251,
    nombre: "Fame Blooming Pink",
    marca: "Paco Rabanne",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Frutal",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "FAME-BLOOMING-PINK.png",
    descripcion:
      "Una fragancia frutal y floral que combina estilo y personalidad en una expresión alegre y vibrante.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Frutal",
      "Floral",
      "Dulce"
    ]
  },

  {
    id: 252,
    nombre: "Fame Couture",
    marca: "Paco Rabanne",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "FAME-COUTURE.jpg",
    descripcion:
      "Una composición floral y dulce, pensada para una presencia delicada y sofisticada y memorable.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Dulce",
      "Amaderado"
    ]
  },

  {
    id: 253,
    nombre: "Fame in Love",
    marca: "Paco Rabanne",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "FAME-IN-LOVE.jpg",
    descripcion:
      "Una fragancia floral y frutal, con un carácter delicada y sofisticada que aporta distinción.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Frutal",
      "Dulce"
    ]
  },

  {
    id: 254,
    nombre: "Fame",
    marca: "Paco Rabanne",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "FAME-PACO-RABANNE.png",
    descripcion:
      "Una fragancia floral y frutal, con una personalidad delicada y sofisticada.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Frutal",
      "Dulce"
    ]
  },

  {
    id: 255,
    nombre: "Lady Million Privé",
    marca: "Paco Rabanne",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "LADY-MILLION-PRIV.png",
    descripcion:
      "Una composición floral y dulce que transmite una sensación delicada y sofisticada.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Dulce",
      "Amaderado"
    ]
  },

  {
    id: 256,
    nombre: "Lady Million",
    marca: "Paco Rabanne",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "LADY-MILLION-RABANNE.png",
    descripcion:
      "Una fragancia de carácter floral y frutal, ideal para quienes buscan una presencia delicada y sofisticada.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Frutal",
      "Dulce"
    ]
  },

  {
    id: 257,
    nombre: "Lady Million Royal",
    marca: "Paco Rabanne",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "LADY-MILLION-ROYAL.png",
    descripcion:
      "Una esencia floral y dulce, con un estilo delicada y sofisticada que destaca con naturalidad.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Dulce",
      "Frutal"
    ]
  },

  {
    id: 258,
    nombre: "One Million Gold for Her",
    marca: "Paco Rabanne",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "MILLION-GOLD-FOR-HER-RABANNE-FEM.png",
    descripcion:
      "Una propuesta floral y dulce, perfecta para quienes disfrutan de una fragancia delicada y sofisticada.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Dulce",
      "Frutal"
    ]
  },

  {
    id: 259,
    nombre: "Olympea Aqua",
    marca: "Paco Rabanne",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Acuático",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "OLYMPEA-AQUA.png",
    descripcion:
      "Una fragancia acuática y floral que combina estilo y personalidad en una expresión refrescante y envolvente.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Acuático",
      "Floral",
      "Avainillado"
    ]
  },

  {
    id: 260,
    nombre: "Olympea Flora",
    marca: "Paco Rabanne",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "OLYMPEA-FLORA.png",
    descripcion:
      "Una composición floral y frutal, pensada para una presencia delicada y sofisticada y memorable.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Frutal",
      "Dulce"
    ]
  },

  {
    id: 261,
    nombre: "Olympea",
    marca: "Paco Rabanne",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Salado",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "OLYMPEA-RABANNE.png",
    descripcion:
      "Una fragancia salina y avainillada, con un carácter fresca y original que aporta distinción.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Salado",
      "Avainillado",
      "Floral"
    ]
  },

  {
    id: 262,
    nombre: "Pure XS for Her",
    marca: "Paco Rabanne",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Dulce",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "PURE-XS-DAMA.png",
    descripcion:
      "Una fragancia dulce y floral, con una personalidad seductora y envolvente.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Dulce",
      "Floral",
      "Avainillado"
    ]
  },

  {
    id: 263,
    nombre: "Olympea Parfum",
    marca: "Paco Rabanne",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Ámbar",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "OLYMPEA_PARFUM.jpg",
    descripcion:
      "Una fragancia sensual y envolvente, con un carácter cálido, dulce y sofisticado.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Ámbar",
      "Salado",
      "Avainillado"
    ]
  },

  {
    id: 264,
    nombre: "Paloma Picasso",
    marca: "Paloma Picasso",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "PALOMA PICASSO.png",
    descripcion:
      "Una fragancia de carácter floral y amaderada, ideal para quienes buscan una presencia delicada y sofisticada.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Amaderado",
      "Cítrico"
    ]
  },

  {
    id: 265,
    nombre: "Heiress",
    marca: "Paris Hilton",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "HEIRESS-PARIS-HILTON.png",
    descripcion:
      "Una esencia floral y frutal, con un estilo delicada y sofisticada que destaca con naturalidad.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Frutal",
      "Dulce"
    ]
  },

  {
    id: 266,
    nombre: "Paris Hilton",
    marca: "Paris Hilton",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "PARIS_HILTON.png",
    descripcion:
      "Una propuesta floral y frutal, perfecta para quienes disfrutan de una fragancia delicada y sofisticada.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Frutal",
      "Dulce"
    ]
  },

  {
    id: 267,
    nombre: "With Love",
    marca: "Paris Hilton",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "WITH-LOVE.png",
    descripcion:
      "Una fragancia floral y frutal que combina estilo y personalidad en una expresión delicada y sofisticada.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Frutal",
      "Dulce"
    ]
  },

  {
    id: 268,
    nombre: "360 Coral",
    marca: "Perry Ellis",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "360_CORAL.jpg",
    descripcion:
      "Una composición floral y frutal, pensada para una presencia delicada y sofisticada y memorable.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Frutal",
      "Acuático"
    ]
  },

  {
    id: 269,
    nombre: "Polo 2",
    marca: "Polo",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "POLO-2.jpg",
    descripcion:
      "Una fragancia femenina y elegante, con un equilibrio entre frescura, flores y maderas.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Amaderado",
      "Cítrico"
    ]
  },

  {
    id: 270,
    nombre: "Candy Night",
    marca: "Prada",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Dulce",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "CANDY NIGHT.png",
    descripcion:
      "Una fragancia dulce y gourmand, con una personalidad seductora y envolvente.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Dulce",
      "Gourmand",
      "Amaderado"
    ]
  },

  {
    id: 271,
    nombre: "Paradoxe Intense",
    marca: "Prada",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "PARADOXE INTENSE.png",
    descripcion:
      "Una composición floral y ambarada que transmite una sensación delicada y sofisticada.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Ámbar",
      "Avainillado"
    ]
  },

  {
    id: 272,
    nombre: "Ralph Laurent",
    marca: "Ralph Lauren",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "RALPH-LAURENT.png",
    descripcion:
      "Una fragancia femenina y luminosa que combina notas frutales, flores y elegancia.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Frutal",
      "Amaderado"
    ]
  },

  {
    id: 273,
    nombre: "Deep Desire",
    marca: "Roberto Cavalli",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Dulce",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "DEEP_DESIRE.png",
    descripcion:
      "Una esencia dulce y floral, con un estilo seductora y envolvente que destaca con naturalidad.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Dulce",
      "Floral",
      "Ámbar"
    ]
  },

  {
    id: 274,
    nombre: "Sweet Tooth Cherry Baby",
    marca: "Sabrina Car",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Gourmand",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "SWEET TOOTH CHERRY BABY.png",
    descripcion:
      "Una propuesta gourmand y frutal, perfecta para quienes disfrutan de una fragancia dulce y envolvente.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Gourmand",
      "Frutal",
      "Dulce"
    ]
  },

  {
    id: 275,
    nombre: "Sweet Tooth",
    marca: "Sabrina Car",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Gourmand",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "SWEET TOOTH.png",
    descripcion:
      "Una fragancia gourmand y dulce que combina estilo y personalidad en una expresión dulce y envolvente.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Gourmand",
      "Dulce",
      "Avainillado"
    ]
  },

  {
    id: 276,
    nombre: "Dance",
    marca: "Shakira",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "DANCE-SHAKIRA-1.png",
    descripcion:
      "Una composición floral y frutal, pensada para una presencia delicada y sofisticada y memorable.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Frutal",
      "Dulce"
    ]
  },

  {
    id: 277,
    nombre: "S by Shakira",
    marca: "Shakira",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "S-SHAKIRA.png",
    descripcion:
      "Una fragancia floral y frutal, con un carácter delicada y sofisticada que aporta distinción.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Frutal",
      "Amaderado"
    ]
  },

  {
    id: 278,
    nombre: "Sofia",
    marca: "Sofia Por Sofia Vergara",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "SOFIA-BY-SOFIA-VERGARA.png",
    descripcion:
      "Una fragancia floral y frutal, con una personalidad delicada y sofisticada.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Frutal",
      "Amaderado"
    ]
  },

  {
    id: 279,
    nombre: "Cheirosa 59",
    marca: "Sol De Janeiro",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Gourmand",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "CHEIROSA-59.png",
    descripcion:
      "Una composición gourmand y floral que transmite una sensación dulce y envolvente.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Gourmand",
      "Floral",
      "Dulce"
    ]
  },

  {
    id: 280,
    nombre: "Cheirosa 68",
    marca: "Sol De Janeiro",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Frutal",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "CHEIROSA-68-SOL-DE-JANEIRO-1.png",
    descripcion:
      "Una fragancia de carácter frutal y floral, ideal para quienes buscan una presencia alegre y vibrante.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Frutal",
      "Floral",
      "Dulce"
    ]
  },

  {
    id: 281,
    nombre: "Rio Radiance",
    marca: "Sol De Janeiro",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "RIO-RADIANCE-SOL-DE-JANEIRO.png",
    descripcion:
      "Una esencia floral y acuática, con un estilo delicada y sofisticada que destaca con naturalidad.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Acuático",
      "Cítrico"
    ]
  },

  {
    id: 282,
    nombre: "Loquito por Ti",
    marca: "Splash",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Frutal",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "LOQUITO-POR-TI.png",
    descripcion:
      "Una propuesta frutal y floral, perfecta para quienes disfrutan de una fragancia alegre y vibrante.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Frutal",
      "Floral",
      "Dulce"
    ]
  },

  {
    id: 283,
    nombre: "Pink Chiffon",
    marca: "Splash",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "PINK-CHIFFON.png",
    descripcion:
      "Una fragancia floral y frutal que combina estilo y personalidad en una expresión delicada y sofisticada.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Frutal",
      "Dulce"
    ]
  },

  {
    id: 284,
    nombre: "Velvet Sugar",
    marca: "Splash",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Dulce",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "VELVET-SUGAR-1.png",
    descripcion:
      "Una composición dulce y gourmand, pensada para una presencia seductora y envolvente y memorable.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Dulce",
      "Gourmand",
      "Amaderado"
    ]
  },

  {
    id: 285,
    nombre: "Swiss Army for Her",
    marca: "Swiss Army",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "SWISS-ARMY-DAMA.jpg",
    descripcion:
      "Una fragancia floral y frutal, con un carácter delicada y sofisticada que aporta distinción.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Frutal",
      "Amaderado"
    ]
  },

  {
    id: 286,
    nombre: "More More Pink",
    marca: "Tous",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Frutal",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "MORE-MORE-PINK.png",
    descripcion:
      "Una fragancia frutal y floral, con una personalidad alegre y vibrante.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Frutal",
      "Floral",
      "Dulce"
    ]
  },

  {
    id: 287,
    nombre: "Donna Born in Roma Coral Fantasy",
    marca: "Valentino",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Frutal",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "DONNA-BORN-IN-ROMA-CORAL-FANTASY-1.png",
    descripcion:
      "Una composición frutal y floral que transmite una sensación alegre y vibrante.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Frutal",
      "Floral",
      "Dulce"
    ]
  },

  {
    id: 288,
    nombre: "Donna Born in Roma",
    marca: "Valentino",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "donna-born-in-roma.png",
    descripcion:
      "Una fragancia de carácter floral y frutal, ideal para quienes buscan una presencia delicada y sofisticada.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Frutal",
      "Avainillado"
    ]
  },

  {
    id: 289,
    nombre: "Donna Born in Roma Yellow Dream",
    marca: "Valentino",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "DONNA-BORN-IN-ROMA-YELLOW-DREAM.jpg",
    descripcion:
      "Una fragancia luminosa y femenina, con un toque floral, fresco y delicadamente dulce.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Cítrico",
      "Dulce"
    ]
  },

  {
    id: 290,
    nombre: "Valentino Donna",
    marca: "Valentino",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "VALENTINO_DONNA.jpg",
    descripcion:
      "Una propuesta floral y amaderada, perfecta para quienes disfrutan de una fragancia delicada y sofisticada.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Amaderado",
      "Avainillado"
    ]
  },

  {
    id: 291,
    nombre: "Born in Roma Green Stravanza",
    marca: "Valentino",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Frutal",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "BORN-IN-ROMA-GREEN-STRAVAGANZA.jpg",
    descripcion:
      "Una fragancia fresca y vibrante, con notas verdes y frutales de personalidad moderna.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Frutal",
      "Aromático",
      "Verde"
    ]
  },

  {
    id: 292,
    nombre: "Donna Noir Absolu",
    marca: "Valentino",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Amaderado",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "DONNA-NOIR-ABSOLU.jpg",
    descripcion:
      "Una fragancia cálida y sofisticada, con un carácter oscuro, dulce y envolvente.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Amaderado",
      "Avainillado",
      "Ámbar"
    ]
  },

  {
    id: 293,
    nombre: "Bright Crystal Parfum",
    marca: "Versace",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "Bright-Crystal-Parfum.jpg",
    descripcion:
      "Una fragancia floral y frutal, con un carácter delicada y sofisticada que aporta distinción.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Frutal",
      "Acuático"
    ]
  },

  {
    id: 294,
    nombre: "Crystal Noir Parfum",
    marca: "Versace",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Ámbar",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "CRYSTALNOIRPARFUM.jpg",
    descripcion:
      "Una fragancia ambarada y especiada, con una personalidad cálida y sofisticada.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Ámbar",
      "Especiado",
      "Amaderado"
    ]
  },

  {
    id: 295,
    nombre: "Eros Pour Femme",
    marca: "Versace",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Cítrico",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "EROS-POUR-FEMME.jpg",
    descripcion:
      "Una composición cítrica y floral que transmite una sensación luminosa y energizante.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Cítrico",
      "Floral",
      "Amaderado"
    ]
  },

  {
    id: 296,
    nombre: "Bombshell",
    marca: "Victoria Secret",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "BOMBSHELL_VICTORIA_SECRET.jpg",
    descripcion:
      "Una fragancia de carácter floral y frutal, ideal para quienes buscan una presencia delicada y sofisticada.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Frutal",
      "Acuático"
    ]
  },

  {
    id: 297,
    nombre: "Chocolate Victoria’s Secret",
    marca: "Victoria Secret",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Gourmand",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "CHOCOLATE-V-S.png",
    descripcion:
      "Una esencia gourmand y dulce, con un estilo dulce y envolvente que destaca con naturalidad.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Gourmand",
      "Dulce",
      "Chocolate"
    ]
  },

  {
    id: 298,
    nombre: "Coconut Passion",
    marca: "Victoria Secret",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Dulce",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "COCONUT_PASSION.png",
    descripcion:
      "Una propuesta dulce y cremosa, perfecta para quienes disfrutan de una fragancia seductora y envolvente.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Dulce",
      "Cremoso",
      "Floral"
    ]
  },

  {
    id: 299,
    nombre: "Dame Amor",
    marca: "Victoria Secret",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "DAME_AMOR.jpg",
    descripcion:
      "Una fragancia floral y frutal que combina estilo y personalidad en una expresión delicada y sofisticada.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Frutal",
      "Dulce"
    ]
  },

  {
    id: 300,
    nombre: "Eau So Sexy",
    marca: "Victoria Secret",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Frutal",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "EAU-SO-SEXY.png",
    descripcion:
      "Una composición frutal y floral, pensada para una presencia alegre y vibrante y memorable.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Frutal",
      "Floral",
      "Dulce"
    ]
  },

  {
    id: 301,
    nombre: "Enchanted Night",
    marca: "Victoria Secret",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Dulce",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "ENCHANCED-NIGHT-VICTORIA-SECRET-FEM.png",
    descripcion:
      "Una fragancia dulce y frutal, con un carácter seductora y envolvente que aporta distinción.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Dulce",
      "Frutal",
      "Floral"
    ]
  },

  {
    id: 302,
    nombre: "Juiced Berry",
    marca: "Victoria Secret",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Frutal",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "JUICED_BERRY_VICTORIA_SECRET.jpg",
    descripcion:
      "Una fragancia frutal y dulce, con una personalidad alegre y vibrante.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Frutal",
      "Dulce",
      "Floral"
    ]
  },

  {
    id: 303,
    nombre: "Mandarina",
    marca: "Victoria Secret",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Cítrico",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "MANDARINA.png",
    descripcion:
      "Una composición cítrica y frutal que transmite una sensación luminosa y energizante.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Cítrico",
      "Frutal",
      "Floral"
    ]
  },

  {
    id: 304,
    nombre: "Passion Fruit",
    marca: "Victoria Secret",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Frutal",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "PASSION_FRUIT.jpg",
    descripcion:
      "Una fragancia de carácter frutal y cítrica, ideal para quienes buscan una presencia alegre y vibrante.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Frutal",
      "Cítrico",
      "Dulce"
    ]
  },

  {
    id: 305,
    nombre: "Pineapple Cove with Neon Papaya",
    marca: "Victoria Secret",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Frutal",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "PINNEAPPLE-COVE-WITH-NEON-PAPAYA-29-ABRIL.png",
    descripcion:
      "Una esencia frutal y tropical, con un estilo alegre y vibrante que destaca con naturalidad.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Frutal",
      "Tropical",
      "Dulce"
    ]
  },

  {
    id: 306,
    nombre: "Plumdrop",
    marca: "Victoria Secret",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Frutal",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "PLUMDROP_Mesa_de_trabajo_1_copia_3.png",
    descripcion:
      "Una propuesta frutal y dulce, perfecta para quienes disfrutan de una fragancia alegre y vibrante.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Frutal",
      "Dulce",
      "Floral"
    ]
  },

  {
    id: 307,
    nombre: "Cool & Bright",
    marca: "Victoria Secret",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Cítrico",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "V-S-COOL-Y-BRIGHT.jpg",
    descripcion:
      "Una fragancia cítrica y frutal que combina estilo y personalidad en una expresión luminosa y energizante.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Cítrico",
      "Frutal",
      "Fresco"
    ]
  },

  {
    id: 308,
    nombre: "Fresh & Clean",
    marca: "Victoria Secret",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Fresco",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "V-S-FRESH-AND-CLEAN.jpg",
    descripcion:
      "Una composición fresca y cítrica, pensada para una presencia luminosa y versátil y memorable.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Fresco",
      "Cítrico",
      "Acuático"
    ]
  },

  {
    id: 309,
    nombre: "Velvet Petals",
    marca: "Victoria Secret",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "velvet-petals.png",
    descripcion:
      "Una fragancia floral y dulce, con un carácter delicada y sofisticada que aporta distinción.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Dulce",
      "Cremoso"
    ]
  },

  {
    id: 310,
    nombre: "Warm & Cozy",
    marca: "Victoria Secret",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Dulce",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "WARM-AND-COZY.png",
    descripcion:
      "Una fragancia dulce y cremosa, con una personalidad seductora y envolvente.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Dulce",
      "Cremoso",
      "Amaderado"
    ]
  },

  {
    id: 311,
    nombre: "Adrenaline",
    marca: "Yanbal",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Fresco",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "ADRENALINE-YANBAL.jpg",
    descripcion:
      "Una composición fresca y cítrica que transmite una sensación luminosa y versátil.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Fresco",
      "Cítrico",
      "Aromático"
    ]
  },

  {
    id: 312,
    nombre: "C Cori Rose",
    marca: "Yanbal",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "CCORI ROSE.png",
    descripcion:
      "Una fragancia de carácter floral y de rosa, ideal para quienes buscan una presencia delicada y sofisticada.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Rosa",
      "Frutal"
    ]
  },

  {
    id: 313,
    nombre: "C Cori",
    marca: "Yanbal",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "CCORI-PARFUM.png",
    descripcion:
      "Una esencia floral y ambarada, con un estilo delicada y sofisticada que destaca con naturalidad.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Ámbar",
      "Dulce"
    ]
  },

  {
    id: 314,
    nombre: "C Cori Passion",
    marca: "Yanbal",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "CCORI-PASSION.jpg",
    descripcion:
      "Una propuesta floral y frutal, perfecta para quienes disfrutan de una fragancia delicada y sofisticada.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Frutal",
      "Dulce"
    ]
  },

  {
    id: 315,
    nombre: "Celos",
    marca: "Yanbal",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "CELOS-YANBAL.png",
    descripcion:
      "Una fragancia floral y frutal que combina estilo y personalidad en una expresión delicada y sofisticada.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Frutal",
      "Dulce"
    ]
  },

  {
    id: 316,
    nombre: "Cielo",
    marca: "Yanbal",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "CIELO - YANBAL.png",
    descripcion:
      "Una composición floral y frutal, pensada para una presencia delicada y sofisticada y memorable.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Frutal",
      "Fresco"
    ]
  },

  {
    id: 317,
    nombre: "Gaia",
    marca: "Yanbal",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "GAIA - YANBAL.png",
    descripcion:
      "Una fragancia floral y ambarada, con un carácter delicada y sofisticada que aporta distinción.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Ámbar",
      "Amaderado"
    ]
  },

  {
    id: 318,
    nombre: "Black Opium",
    marca: "Yves Saint Lauren",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Dulce",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "BLACK-OPIUM.png",
    descripcion:
      "Una fragancia dulce y de café, con una personalidad seductora y envolvente.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Dulce",
      "Café",
      "Avainillado"
    ]
  },

  {
    id: 319,
    nombre: "Libre",
    marca: "Yves Saint Lauren",
    tipo: "Diseñador",
    genero: "Mujer",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "LIBRE.png",
    descripcion:
      "Una composición floral y cítrica que transmite una sensación delicada y sofisticada.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Cítrico",
      "Avainillado"
    ]
  },

  {
    id: 320,
    nombre: "CK Be",
    marca: "Calvin Klein",
    tipo: "Diseñador",
    genero: "Unisex",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "CK-BE3.png",
    descripcion:
      "Una fragancia de carácter floral y frutal, ideal para quienes buscan una presencia delicada y sofisticada.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Frutal",
      "Dulce"
    ]
  },

  {
    id: 321,
    nombre: "CK One Reflections",
    marca: "Calvin Klein",
    tipo: "Diseñador",
    genero: "Unisex",
    familia: "Cítrico",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "CK-ONE-REFLECTIONS.png",
    descripcion:
      "Una esencia cítrica y fresca, con un estilo luminosa y energizante que destaca con naturalidad.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Cítrico",
      "Fresco",
      "Amaderado"
    ]
  },

  {
    id: 322,
    nombre: "9AM Pour Femme",
    marca: "Afnan",
    tipo: "Nicho",
    genero: "Mujer",
    familia: "Frutal",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "9-AM-POUR-FEMME.jpg",
    descripcion:
      "Una propuesta frutal y floral, perfecta para quienes disfrutan de una fragancia alegre y vibrante.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Frutal",
      "Floral",
      "Dulce"
    ]
  },

  {
    id: 323,
    nombre: "9PM Pour Femme",
    marca: "Afnan",
    tipo: "Nicho",
    genero: "Mujer",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "9-pm-pour-femme.png",
    descripcion:
      "Una fragancia floral y frutal que combina estilo y personalidad en una expresión delicada y sofisticada.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Frutal",
      "Dulce"
    ]
  },

  {
    id: 324,
    nombre: "Crux",
    marca: "Ahli",
    tipo: "Nicho",
    genero: "Mujer",
    familia: "Ámbar",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "crux.png",
    descripcion:
      "Una composición ambarada y dulce, pensada para una presencia cálida y sofisticada y memorable.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Ámbar",
      "Dulce",
      "Amaderado"
    ]
  },

  {
    id: 325,
    nombre: "Rose Alba",
    marca: "Alexandre",
    tipo: "Nicho",
    genero: "Mujer",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "rose-alba.png",
    descripcion:
      "Una fragancia floral y de rosa, con un carácter delicada y sofisticada que aporta distinción.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Rosa",
      "Frutal"
    ]
  },

  {
    id: 326,
    nombre: "Sunshine Woman",
    marca: "Amouage",
    tipo: "Nicho",
    genero: "Mujer",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "SUNSHINE_WOMAN.png",
    descripcion:
      "Una fragancia floral y cítrica, con una personalidad delicada y sofisticada.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Cítrico",
      "Fresco"
    ]
  },

  {
    id: 327,
    nombre: "Yum Yum",
    marca: "Armaf",
    tipo: "Nicho",
    genero: "Mujer",
    familia: "Gourmand",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "YUM-YUM.jpg",
    descripcion:
      "Una fragancia divertida y golosa que combina dulzura, frutas y una personalidad alegre.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Gourmand",
      "Dulce",
      "Frutal"
    ]
  },

  {
    id: 328,
    nombre: "Island Bliss",
    marca: "Armaf",
    tipo: "Nicho",
    genero: "Mujer",
    familia: "Tropical",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "ISLAND-BLISS.jpg",
    descripcion:
      "Una fragancia tropical y refrescante que transmite alegría, libertad y energía.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Tropical",
      "Frutal",
      "Fresco"
    ]
  },

  {
    id: 329,
    nombre: "Lionheart Woman",
    marca: "Armaf",
    tipo: "Nicho",
    genero: "Mujer",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "LIONHEART-WOMAN.jpg",
    descripcion:
      "Una fragancia femenina y dulce, con una personalidad floral, alegre y encantadora.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Frutal",
      "Dulce"
    ]
  },

  {
    id: 330,
    nombre: "Odyssey Aoud",
    marca: "Armaf",
    tipo: "Nicho",
    genero: "Mujer",
    familia: "Oud",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "ODDYSEY-AOUD.png",
    descripcion:
      "Una propuesta de oud y amaderada, perfecta para quienes disfrutan de una fragancia intensa y distinguida.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Oud",
      "Amaderado",
      "Ámbar"
    ]
  },

  {
    id: 331,
    nombre: "Odyssey Candee",
    marca: "Armaf",
    tipo: "Nicho",
    genero: "Mujer",
    familia: "Gourmand",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "ODYSSEY-CANDEE.jpg",
    descripcion:
      "Una fragancia dulce y juguetona, con un carácter frutal, goloso y encantador.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Gourmand",
      "Dulce",
      "Frutal"
    ]
  },

  {
    id: 332,
    nombre: "Bharara Niche Femme",
    marca: "Bharara",
    tipo: "Nicho",
    genero: "Mujer",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "BHARARA-NICHE-FEMME.png",
    descripcion:
      "Una composición floral y frutal, pensada para una presencia delicada y sofisticada y memorable.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Frutal",
      "Dulce"
    ]
  },

  {
    id: 333,
    nombre: "Bharara Rose",
    marca: "Bharara",
    tipo: "Nicho",
    genero: "Mujer",
    familia: "Rosa",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "BHARARA-ROSE.png",
    descripcion:
      "Una fragancia de rosa y floral, con un carácter romántica y elegante que aporta distinción.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Rosa",
      "Floral",
      "Dulce"
    ]
  },

  {
    id: 334,
    nombre: "Rome Pour Femme",
    marca: "Bharara",
    tipo: "Nicho",
    genero: "Mujer",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "ROME-POUR-FEMME-MAST-PERFUME.png",
    descripcion:
      "Una fragancia floral y frutal, con una personalidad delicada y sofisticada.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Frutal",
      "Dulce"
    ]
  },

  {
    id: 335,
    nombre: "Velvet Rose",
    marca: "Bharara",
    tipo: "Nicho",
    genero: "Mujer",
    familia: "Rosa",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "velvet-rose.png",
    descripcion:
      "Una composición de rosa y floral que transmite una sensación romántica y elegante.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Rosa",
      "Floral",
      "Dulce"
    ]
  },

  {
    id: 336,
    nombre: "Bond No. 9 Signature",
    marca: "Bond N 9",
    tipo: "Nicho",
    genero: "Mujer",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "BOND-N9-SIGNATURE.jpg",
    descripcion:
      "Una fragancia de carácter floral y cítrica, ideal para quienes buscan una presencia delicada y sofisticada.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Cítrico",
      "Amaderado"
    ]
  },

  {
    id: 337,
    nombre: "Carmina",
    marca: "Creed",
    tipo: "Nicho",
    genero: "Mujer",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "CREED-CARMINA.png",
    descripcion:
      "Una esencia floral y frutal, con un estilo delicada y sofisticada que destaca con naturalidad.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Frutal",
      "Dulce"
    ]
  },

  {
    id: 338,
    nombre: "Spring Flower",
    marca: "Creed",
    tipo: "Nicho",
    genero: "Mujer",
    familia: "Frutal",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "CREED-SPRING-FLOWER.png",
    descripcion:
      "Una propuesta frutal y floral, perfecta para quienes disfrutan de una fragancia alegre y vibrante.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Frutal",
      "Floral",
      "Fresco"
    ]
  },

  {
    id: 339,
    nombre: "Love in White",
    marca: "Creed",
    tipo: "Nicho",
    genero: "Mujer",
    familia: "Cítrico",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "LOVE_IN_WHITE.png",
    descripcion:
      "Una fragancia cítrica y floral que combina estilo y personalidad en una expresión luminosa y energizante.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Cítrico",
      "Floral",
      "Almizclado"
    ]
  },

  {
    id: 340,
    nombre: "L Aventure Femme",
    marca: "Haramain",
    tipo: "Nicho",
    genero: "Mujer",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "LAVENTURE-FEMME.png",
    descripcion:
      "Una composición floral y frutal, pensada para una presencia delicada y sofisticada y memorable.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Frutal",
      "Amaderado"
    ]
  },

  {
    id: 341,
    nombre: "Narjis",
    marca: "Haramain",
    tipo: "Nicho",
    genero: "Mujer",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "NARJIS.jpg",
    descripcion:
      "Una fragancia elegante y profunda, con un equilibrio entre flores, maderas y calidez.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Amaderado",
      "Ámbar"
    ]
  },

  {
    id: 342,
    nombre: "Dahab",
    marca: "Kajal",
    tipo: "Nicho",
    genero: "Mujer",
    familia: "Ámbar",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "DAHAB_KAJAL.jpg",
    descripcion:
      "Una fragancia ambarada y floral, con una personalidad cálida y sofisticada.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Ámbar",
      "Floral",
      "Dulce"
    ]
  },

  {
    id: 343,
    nombre: "Lamar",
    marca: "Kajal",
    tipo: "Nicho",
    genero: "Mujer",
    familia: "Frutal",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "LAMAR-KAJAL.png",
    descripcion:
      "Una composición frutal y ambarada que transmite una sensación alegre y vibrante.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Frutal",
      "Ámbar",
      "Dulce"
    ]
  },

  {
    id: 344,
    nombre: "Eden Sparkling Lychee",
    marca: "Kayali",
    tipo: "Nicho",
    genero: "Mujer",
    familia: "Frutal",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "EDEN-SPARKLING-LYCHE.jpg",
    descripcion:
      "Una fragancia de carácter frutal y floral, ideal para quienes buscan una presencia alegre y vibrante.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Frutal",
      "Floral",
      "Dulce"
    ]
  },

  {
    id: 345,
    nombre: "Yum Boujee Marshmallow",
    marca: "Kayali",
    tipo: "Nicho",
    genero: "Mujer",
    familia: "Gourmand",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "YUM-BOUJEE-MARSMALLOW-KAYALI.jpg",
    descripcion:
      "Una esencia gourmand y dulce, con un estilo dulce y envolvente que destaca con naturalidad.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Gourmand",
      "Dulce",
      "Avainillado"
    ]
  },

  {
    id: 346,
    nombre: "Love Don Be Shy",
    marca: "Kilian",
    tipo: "Nicho",
    genero: "Mujer",
    familia: "Dulce",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "LOVE-DONT-BY-SHY.png",
    descripcion:
      "Una propuesta dulce y floral, perfecta para quienes disfrutan de una fragancia seductora y envolvente.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Dulce",
      "Floral",
      "Gourmand"
    ]
  },

  {
    id: 347,
    nombre: "Ameerat Al Arab",
    marca: "Lattafa",
    tipo: "Nicho",
    genero: "Mujer",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "AMEERAT-AL-ARAB.png",
    descripcion:
      "Una fragancia floral y amaderada que combina estilo y personalidad en una expresión delicada y sofisticada.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Amaderado",
      "Dulce"
    ]
  },

  {
    id: 348,
    nombre: "Berry on Top",
    marca: "Lattafa",
    tipo: "Nicho",
    genero: "Mujer",
    familia: "Frutal",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "BERRY_ON_TOP.jpg",
    descripcion:
      "Una composición frutal y dulce, pensada para una presencia alegre y vibrante y memorable.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Frutal",
      "Dulce",
      "Floral"
    ]
  },

  {
    id: 349,
    nombre: "Choco Overdose",
    marca: "Lattafa",
    tipo: "Nicho",
    genero: "Mujer",
    familia: "Gourmand",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "CHOCO_OVERDOSE.jpg",
    descripcion:
      "Una fragancia gourmand y de chocolate, con un carácter dulce y envolvente que aporta distinción.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Gourmand",
      "Chocolate",
      "Dulce"
    ]
  },

  {
    id: 350,
    nombre: "Cookie Crave",
    marca: "Lattafa",
    tipo: "Nicho",
    genero: "Mujer",
    familia: "Gourmand",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "cookie_crave.jpg",
    descripcion:
      "Una fragancia gourmand y dulce, con una personalidad dulce y envolvente.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Gourmand",
      "Dulce",
      "Avainillado"
    ]
  },

  {
    id: 351,
    nombre: "Her Confession",
    marca: "Lattafa",
    tipo: "Nicho",
    genero: "Mujer",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "HER-CONFESSION.jpg",
    descripcion:
      "Una fragancia femenina y sofisticada, con un carácter dulce, floral y envolvente.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Avainillado",
      "Ambarado"
    ]
  },

  {
    id: 352,
    nombre: "Fakhar Rose",
    marca: "Lattafa",
    tipo: "Nicho",
    genero: "Mujer",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "FAKHAR-ROSE.jpg",
    descripcion:
      "Una fragancia de carácter floral y de rosa, ideal para quienes buscan una presencia delicada y sofisticada.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Rosa",
      "Dulce"
    ]
  },

  {
    id: 353,
    nombre: "Haya",
    marca: "Lattafa",
    tipo: "Nicho",
    genero: "Mujer",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "HAYA-LATTAFA.png",
    descripcion:
      "Una esencia floral y dulce, con un estilo delicada y sofisticada que destaca con naturalidad.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Dulce",
      "Frutal"
    ]
  },

  {
    id: 354,
    nombre: "Mayar",
    marca: "Lattafa",
    tipo: "Nicho",
    genero: "Mujer",
    familia: "Frutal",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "LATTAFA-MAYAR-POST.png",
    descripcion:
      "Una propuesta frutal y floral, perfecta para quienes disfrutan de una fragancia alegre y vibrante.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Frutal",
      "Floral",
      "Dulce"
    ]
  },

  {
    id: 355,
    nombre: "Mallow Madness",
    marca: "Lattafa",
    tipo: "Nicho",
    genero: "Mujer",
    familia: "Gourmand",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "MALLOW_MADNESS.jpg",
    descripcion:
      "Una fragancia gourmand y dulce que combina estilo y personalidad en una expresión dulce y envolvente.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Gourmand",
      "Dulce",
      "Avainillado"
    ]
  },

  {
    id: 356,
    nombre: "Mayar Intense",
    marca: "Lattafa",
    tipo: "Nicho",
    genero: "Mujer",
    familia: "Frutal",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "MAYAR-INTENSE.png",
    descripcion:
      "Una composición frutal y floral, pensada para una presencia alegre y vibrante y memorable.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Frutal",
      "Floral",
      "Dulce"
    ]
  },

  {
    id: 357,
    nombre: "Noble Blush",
    marca: "Lattafa",
    tipo: "Nicho",
    genero: "Mujer",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "NOBLE-BLUSH-LATTAFA.png",
    descripcion:
      "Una fragancia floral y dulce, con un carácter delicada y sofisticada que aporta distinción.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Dulce",
      "Avainillado"
    ]
  },

  {
    id: 358,
    nombre: "Vanilla Freak",
    marca: "Lattafa",
    tipo: "Nicho",
    genero: "Mujer",
    familia: "Avainillado",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "VANILLA_FREAK.jpg",
    descripcion:
      "Una fragancia avainillada y dulce, con una personalidad cálida y reconfortante.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Avainillado",
      "Dulce",
      "Gourmand"
    ]
  },

  {
    id: 359,
    nombre: "Yara Candy",
    marca: "Lattafa",
    tipo: "Nicho",
    genero: "Mujer",
    familia: "Gourmand",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "YARA-CANDY.jpg",
    descripcion:
      "Una fragancia dulce y divertida que combina frutas golosas con una sensación alegre.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Gourmand",
      "Frutal",
      "Dulce"
    ]
  },

  {
    id: 360,
    nombre: "Yara Tous",
    marca: "Lattafa",
    tipo: "Nicho",
    genero: "Mujer",
    familia: "Tropical",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "YARA-TOUS.jpg",
    descripcion:
      "Una fragancia tropical y luminosa, con un carácter frutal, floral y refrescante.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Tropical",
      "Frutal",
      "Floral"
    ]
  },

  {
    id: 361,
    nombre: "Whipped Pleasure",
    marca: "Lattafa",
    tipo: "Nicho",
    genero: "Mujer",
    familia: "Gourmand",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "whipped_pleasure.jpg",
    descripcion:
      "Una esencia gourmand y dulce, con un estilo dulce y envolvente que destaca con naturalidad.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Gourmand",
      "Dulce",
      "Cremoso"
    ]
  },

  {
    id: 362,
    nombre: "Yara",
    marca: "Lattafa",
    tipo: "Nicho",
    genero: "Mujer",
    familia: "Dulce",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "YARA-LATTAFA.png",
    descripcion:
      "Una propuesta dulce y avainillada, perfecta para quienes disfrutan de una fragancia seductora y envolvente.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Dulce",
      "Avainillado",
      "Frutal"
    ]
  },

  {
    id: 363,
    nombre: "Yara Moi",
    marca: "Lattafa",
    tipo: "Nicho",
    genero: "Mujer",
    familia: "Frutal",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "YARA_MOI.png",
    descripcion:
      "Una fragancia frutal y floral que combina estilo y personalidad en una expresión alegre y vibrante.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Frutal",
      "Floral",
      "Dulce"
    ]
  },

  {
    id: 364,
    nombre: "Sense",
    marca: "Laverne",
    tipo: "Nicho",
    genero: "Mujer",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "sense-laverne.jpg",
    descripcion:
      "Una composición floral y frutal, pensada para una presencia delicada y sofisticada y memorable.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Frutal",
      "Dulce"
    ]
  },

  {
    id: 365,
    nombre: "Attrape-Rêves",
    marca: "Louis Vuitton",
    tipo: "Nicho",
    genero: "Mujer",
    familia: "Cítrico",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "atrapa-sue-os-louis-vuitton.jpg",
    descripcion:
      "Una fragancia cítrica y aromática, con un carácter luminosa y energizante que aporta distinción.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Cítrico",
      "Aromático",
      "Amaderado"
    ]
  },

  {
    id: 366,
    nombre: "Delilah",
    marca: "Maison Alhambra",
    tipo: "Nicho",
    genero: "Mujer",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "delilah.png",
    descripcion:
      "Una fragancia floral y frutal, con una personalidad delicada y sofisticada.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Frutal",
      "Almizclado"
    ]
  },

  {
    id: 367,
    nombre: "Amore Caffè",
    marca: "Mancera",
    tipo: "Nicho",
    genero: "Mujer",
    familia: "Gourmand",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "AMORE-CAFFE.png",
    descripcion:
      "Una composición gourmand y de café que transmite una sensación dulce y envolvente.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Gourmand",
      "Café",
      "Avainillado"
    ]
  },

  {
    id: 368,
    nombre: "Moncler Pour Femme",
    marca: "Moncler",
    tipo: "Nicho",
    genero: "Mujer",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "MONCLER-POUR-FEMME.png",
    descripcion:
      "Una fragancia de carácter floral y amaderada, ideal para quienes buscan una presencia delicada y sofisticada.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Amaderado",
      "Fresco"
    ]
  },

  {
    id: 369,
    nombre: "Crazy in Love",
    marca: "Montale",
    tipo: "Nicho",
    genero: "Mujer",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "CRAZY-IN-LOVE.png",
    descripcion:
      "Una esencia floral y frutal, con un estilo delicada y sofisticada que destaca con naturalidad.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Frutal",
      "Dulce"
    ]
  },

  {
    id: 370,
    nombre: "Vanilla Absolu",
    marca: "Montale",
    tipo: "Nicho",
    genero: "Mujer",
    familia: "Avainillado",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "VANILLA-ABSOLU.png",
    descripcion:
      "Una propuesta avainillada y dulce, perfecta para quienes disfrutan de una fragancia cálida y reconfortante.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Avainillado",
      "Dulce",
      "Ámbar"
    ]
  },

  {
    id: 371,
    nombre: "Ana Al Awwal Femme",
    marca: "Nusuk",
    tipo: "Nicho",
    genero: "Mujer",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "ANA-AL-AWAL-DAMA.png",
    descripcion:
      "Una fragancia floral y frutal que combina estilo y personalidad en una expresión delicada y sofisticada.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Frutal",
      "Dulce"
    ]
  },

  {
    id: 372,
    nombre: "Dania",
    marca: "Orientica",
    tipo: "Nicho",
    genero: "Mujer",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "DANIA-ORIENTICA.png",
    descripcion:
      "Una composición floral y dulce, pensada para una presencia delicada y sofisticada y memorable.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Dulce",
      "Amaderado"
    ]
  },

  {
    id: 373,
    nombre: "Delina Exlusiff",
    marca: "Parfums De Marl",
    tipo: "Nicho",
    genero: "Mujer",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "DELINA-EXLUSIFF.png",
    descripcion:
      "Una fragancia floral y sofisticada, con un toque frutal y un fondo cálido y envolvente.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Frutal",
      "Ámbar"
    ]
  },

  {
    id: 374,
    nombre: "Now",
    marca: "Rave",
    tipo: "Nicho",
    genero: "Mujer",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "NOW_RAVE.jpg",
    descripcion:
      "Una fragancia floral y frutal, con una personalidad delicada y sofisticada.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Frutal",
      "Dulce"
    ]
  },

  {
    id: 375,
    nombre: "Bouquet Ideale",
    marca: "Xerjoff",
    tipo: "Nicho",
    genero: "Mujer",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "BOUQUET-IDEAL.png",
    descripcion:
      "Una composición floral y frutal que transmite una sensación delicada y sofisticada.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Frutal",
      "Fresco"
    ]
  },

  {
    id: 376,
    nombre: "Royal Rubinia",
    marca: "Zakat",
    tipo: "Nicho",
    genero: "Mujer",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "ROYAL-RUBINIA.png",
    descripcion:
      "Una fragancia de carácter floral y dulce, ideal para quienes buscan una presencia delicada y sofisticada.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Dulce",
      "Frutal"
    ]
  },

  {
    id: 377,
    nombre: "9PM",
    marca: "Afnan",
    tipo: "Nicho",
    genero: "Hombre",
    familia: "Dulce",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "9-PM.png",
    descripcion:
      "Una esencia dulce y avainillada, con un estilo seductora y envolvente que destaca con naturalidad.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Dulce",
      "Avainillado",
      "Ámbar"
    ]
  },

  {
    id: 378,
    nombre: "Interlude Man",
    marca: "Amouage",
    tipo: "Nicho",
    genero: "Hombre",
    familia: "Ámbar",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "INTERLUDE-AMOUAGE.png",
    descripcion:
      "Una propuesta ambarada y ahumada, perfecta para quienes disfrutan de una fragancia cálida y sofisticada.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Ámbar",
      "Ahumado",
      "Especiado"
    ]
  },

  {
    id: 379,
    nombre: "Club de Nuit Iconic",
    marca: "Armaf",
    tipo: "Nicho",
    genero: "Hombre",
    familia: "Cítrico",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "CLUB-DE-NUIT-ICONIC.jpg",
    descripcion:
      "Una fragancia cítrica y aromática que combina estilo y personalidad en una expresión luminosa y energizante.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Cítrico",
      "Aromático",
      "Amaderado"
    ]
  },

  {
    id: 380,
    nombre: "Odyssey Aqua",
    marca: "Armaf",
    tipo: "Nicho",
    genero: "Hombre",
    familia: "Acuático",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "ODYSSEY-AQUA.png",
    descripcion:
      "Una fragancia fresca y acuática que combina energía, limpieza y un fondo elegante.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Acuático",
      "Cítrico",
      "Amaderado"
    ]
  },

  {
    id: 381,
    nombre: "The Lions Club Rugir",
    marca: "Armaf",
    tipo: "Nicho",
    genero: "Hombre",
    familia: "Amaderado",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "THE-LIONS-CLUB-RUGIR.jpg",
    descripcion:
      "Una fragancia intensa y sofisticada, con un carácter especiado, cálido y masculino.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Amaderado",
      "Especiado",
      "Ámbar"
    ]
  },

  {
    id: 382,
    nombre: "Lionheart Men",
    marca: "Armaf",
    tipo: "Nicho",
    genero: "Hombre",
    familia: "Aromático",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "LIONHEART-MEN.jpg",
    descripcion:
      "Una fragancia masculina y elegante, con un carácter aromático, amaderado y moderno.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Aromático",
      "Amaderado",
      "Especiado"
    ]
  },

  {
    id: 383,
    nombre: "Odyssey Mandarin Sky",
    marca: "Armaf",
    tipo: "Nicho",
    genero: "Hombre",
    familia: "Cítrico",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "ODISSEY-MANDARIN-SKY.png",
    descripcion:
      "Una composición cítrica y dulce que transmite una sensación luminosa y energizante.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Cítrico",
      "Dulce",
      "Frutal"
    ]
  },

  {
    id: 384,
    nombre: "Odyssey Homme White Edition",
    marca: "Armaf",
    tipo: "Nicho",
    genero: "Hombre",
    familia: "Cítrico",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "odyssey-homme-white-edit-01-02.jpg",
    descripcion:
      "Una fragancia de carácter cítrica y aromática, ideal para quienes buscan una presencia luminosa y energizante.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Cítrico",
      "Aromático",
      "Amaderado"
    ]
  },

  {
    id: 385,
    nombre: "The Lions Club de Monarque",
    marca: "Armaf",
    tipo: "Nicho",
    genero: "Hombre",
    familia: "Amaderado",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "THE-LIONS-CLUB-MONARQUE-ARMAF.png",
    descripcion:
      "Una esencia amaderada y aromática, con un estilo elegante y con carácter que destaca con naturalidad.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Amaderado",
      "Aromático",
      "Ámbar"
    ]
  },

  {
    id: 386,
    nombre: "Odyssey Tyrant",
    marca: "Armaf",
    tipo: "Nicho",
    genero: "Hombre",
    familia: "Cítrico",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "ODYSSEY-TYRANT.jpg",
    descripcion:
      "Una fragancia fresca y elegante, con una salida vibrante y un fondo amaderado.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Cítrico",
      "Aromático",
      "Amaderado"
    ]
  },

  {
    id: 387,
    nombre: "Odyssey Spectra",
    marca: "Armaf",
    tipo: "Nicho",
    genero: "Hombre",
    familia: "Frutal",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "ODYSSEY-SPECTRA.jpg",
    descripcion:
      "Una fragancia dulce y vibrante, con un carácter frutal, cálido y envolvente.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Frutal",
      "Dulce",
      "Ámbar"
    ]
  },

  {
    id: 388,
    nombre: "Club de Nuit Intense",
    marca: "Armaf",
    tipo: "Nicho",
    genero: "Hombre",
    familia: "Cítrico",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "CLUB-DE-NUIT-INTENSE-MAN.jpg",
    descripcion:
      "Una fragancia masculina y versátil, con un carácter fresco, amaderado y sofisticado.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Cítrico",
      "Amaderado",
      "Aromático"
    ]
  },

  {
    id: 389,
    nombre: "Onyx",
    marca: "Bharara",
    tipo: "Nicho",
    genero: "Hombre",
    familia: "Dulce",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "ONYX.jpg",
    descripcion:
      "Una fragancia intensa y elegante, con una personalidad dulce, cálida y envolvente.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Dulce",
      "Ámbar",
      "Amaderado"
    ]
  },

  {
    id: 390,
    nombre: "Bleu",
    marca: "Bharara",
    tipo: "Nicho",
    genero: "Hombre",
    familia: "Aromático",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "BLEU.png",
    descripcion:
      "Una fragancia fresca y moderna, con un carácter acuático, aromático y elegante.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Aromático",
      "Acuático",
      "Amaderado"
    ]
  },

  {
    id: 391,
    nombre: "Rome Pour Homme Mast Perfume",
    marca: "Bharara",
    tipo: "Nicho",
    genero: "Hombre",
    familia: "Aromático",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "ROME-POUR-HOMME-MAST-PERFUME.png",
    descripcion:
      "Una composición aromática y amaderada que transmite una sensación elegante y equilibrada.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Aromático",
      "Amaderado",
      "Cítrico"
    ]
  },

  {
    id: 392,
    nombre: "Hamptons",
    marca: "Bond N 9",
    tipo: "Nicho",
    genero: "Hombre",
    familia: "Cítrico",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "hamptons-bond9.jpg",
    descripcion:
      "Una fragancia de carácter cítrica y acuática, ideal para quienes buscan una presencia luminosa y energizante.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Cítrico",
      "Acuático",
      "Fresco"
    ]
  },

  {
    id: 393,
    nombre: "The Scent of Peace",
    marca: "Bond N 9",
    tipo: "Nicho",
    genero: "Hombre",
    familia: "Cítrico",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "THE-SCENT-OF-PEACE.jpg",
    descripcion:
      "Una fragancia fresca y sofisticada que combina cítricos, maderas y una sensación limpia.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Cítrico",
      "Amaderado",
      "Aromático"
    ]
  },

  {
    id: 394,
    nombre: "Green Irish Tweed",
    marca: "Creed",
    tipo: "Nicho",
    genero: "Hombre",
    familia: "Verde",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "GREEN-IRISH-TWEED.jpg",
    descripcion:
      "Una fragancia verde y elegante, con una personalidad fresca, natural y sofisticada.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Verde",
      "Amaderado",
      "Aromático"
    ]
  },

  {
    id: 395,
    nombre: "Aventus",
    marca: "Creed",
    tipo: "Nicho",
    genero: "Hombre",
    familia: "Frutal",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "creed-aventus.png",
    descripcion:
      "Una fragancia frutal y amaderada que combina estilo y personalidad en una expresión alegre y vibrante.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Frutal",
      "Amaderado",
      "Ahumado"
    ]
  },

  {
    id: 396,
    nombre: "Viking Cologne",
    marca: "Creed",
    tipo: "Nicho",
    genero: "Hombre",
    familia: "Cítrico",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "CREED-VIKING-COLOGNE.jpg",
    descripcion:
      "Una composición cítrica y aromática, pensada para una presencia luminosa y energizante y memorable.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Cítrico",
      "Aromático",
      "Fresco"
    ]
  },

  {
    id: 397,
    nombre: "Nitro Platinum",
    marca: "Dumont",
    tipo: "Nicho",
    genero: "Hombre",
    familia: "Aromático",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "NITRO  - PLATINUM.jpg",
    descripcion:
      "Una fragancia aromática y amaderada, con un carácter elegante y equilibrada que aporta distinción.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Aromático",
      "Amaderado",
      "Fresco"
    ]
  },

  {
    id: 398,
    nombre: "Nitro Blue",
    marca: "Dumont",
    tipo: "Nicho",
    genero: "Hombre",
    familia: "Acuático",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "NITRO - BLUE.jpg",
    descripcion:
      "Una fragancia acuática y fresca, con una personalidad refrescante y envolvente.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Acuático",
      "Fresco",
      "Cítrico"
    ]
  },

  {
    id: 399,
    nombre: "Nitro Green",
    marca: "Dumont",
    tipo: "Nicho",
    genero: "Hombre",
    familia: "Verde",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "NITRO - GREEN.jpg",
    descripcion:
      "Una composición verde y aromática que transmite una sensación natural y fresca.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Verde",
      "Aromático",
      "Fresco"
    ]
  },

  {
    id: 400,
    nombre: "Nitro Intense",
    marca: "Dumont",
    tipo: "Nicho",
    genero: "Hombre",
    familia: "Dulce",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "NITRO - INTENSE.jpg",
    descripcion:
      "Una fragancia de carácter dulce y ambarada, ideal para quienes buscan una presencia seductora y envolvente.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Dulce",
      "Ámbar",
      "Especiado"
    ]
  },

  {
    id: 401,
    nombre: "Nitro Red",
    marca: "Dumont",
    tipo: "Nicho",
    genero: "Hombre",
    familia: "Frutal",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "NITRO - RED.jpg",
    descripcion:
      "Una esencia frutal y dulce, con un estilo alegre y vibrante que destaca con naturalidad.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Frutal",
      "Dulce",
      "Amaderado"
    ]
  },

  {
    id: 402,
    nombre: "Nitro White",
    marca: "Dumont",
    tipo: "Nicho",
    genero: "Hombre",
    familia: "Cítrico",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "NITRO - WHITE.jpg",
    descripcion:
      "Una propuesta cítrica y aromática, perfecta para quienes disfrutan de una fragancia luminosa y energizante.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Cítrico",
      "Aromático",
      "Fresco"
    ]
  },

  {
    id: 403,
    nombre: "Nitro Black",
    marca: "Dumont",
    tipo: "Nicho",
    genero: "Hombre",
    familia: "Amaderado",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "NITRO-BLACK.png",
    descripcion:
      "Una fragancia amaderada y ambarada que combina estilo y personalidad en una expresión elegante y con carácter.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Amaderado",
      "Ámbar",
      "Especiado"
    ]
  },

  {
    id: 404,
    nombre: "Dubai Night",
    marca: "Haramain",
    tipo: "Nicho",
    genero: "Hombre",
    familia: "Ámbar",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "DUBAI - NIGHT.jpg",
    descripcion:
      "Una composición ambarada y amaderada, pensada para una presencia cálida y sofisticada y memorable.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Ámbar",
      "Amaderado",
      "Especiado"
    ]
  },

  {
    id: 405,
    nombre: "Asad Bourbon",
    marca: "Lattafa",
    tipo: "Nicho",
    genero: "Hombre",
    familia: "Dulce",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "ASAD BOURBON.jpg",
    descripcion:
      "Una fragancia dulce y ambarada, con un carácter seductora y envolvente que aporta distinción.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Dulce",
      "Ámbar",
      "Especiado"
    ]
  },

  {
    id: 406,
    nombre: "Asad Zanzibar",
    marca: "Lattafa",
    tipo: "Nicho",
    genero: "Hombre",
    familia: "Especiado",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "ASAD ZANZIBAR.png",
    descripcion:
      "Una fragancia especiada y acuática, con una personalidad intensa y cautivadora.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Especiado",
      "Acuático",
      "Dulce"
    ]
  },

  {
    id: 407,
    nombre: "Fakhar Black",
    marca: "Lattafa",
    tipo: "Nicho",
    genero: "Hombre",
    familia: "Aromático",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "FAKHAR-BLACK.jpg",
    descripcion:
      "Una composición aromática y amaderada que transmite una sensación elegante y equilibrada.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Aromático",
      "Amaderado",
      "Especiado"
    ]
  },

  {
    id: 408,
    nombre: "His Confession",
    marca: "Lattafa",
    tipo: "Nicho",
    genero: "Hombre",
    familia: "Dulce",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "HIS CONFESSION.jpg",
    descripcion:
      "Una fragancia de carácter dulce y ambarada, ideal para quienes buscan una presencia seductora y envolvente.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Dulce",
      "Ámbar",
      "Amaderado"
    ]
  },

  {
    id: 409,
    nombre: "Khamrah Dukhan",
    marca: "Lattafa",
    tipo: "Nicho",
    genero: "Hombre",
    familia: "Dulce",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "KHAMRAH DUKHAN.jpg",
    descripcion:
      "Una esencia dulce y ahumada, con un estilo seductora y envolvente que destaca con naturalidad.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Dulce",
      "Ahumado",
      "Especiado"
    ]
  },

  {
    id: 410,
    nombre: "Asad",
    marca: "Lattafa",
    tipo: "Nicho",
    genero: "Hombre",
    familia: "Especiado",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "LATTAFA-ASAD.png",
    descripcion:
      "Una propuesta especiada y ambarada, perfecta para quienes disfrutan de una fragancia intensa y cautivadora.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Especiado",
      "Ámbar",
      "Avainillado"
    ]
  },

  {
    id: 411,
    nombre: "Imagination",
    marca: "Louis Vuitton",
    tipo: "Nicho",
    genero: "Hombre",
    familia: "Cítrico",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "imagination-louis-vuitton.jpg",
    descripcion:
      "Una fragancia cítrica y aromática que combina estilo y personalidad en una expresión luminosa y energizante.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Cítrico",
      "Aromático",
      "Acuático"
    ]
  },

  {
    id: 412,
    nombre: "L Immensite",
    marca: "Louis Vuitton",
    tipo: "Nicho",
    genero: "Hombre",
    familia: "Cítrico",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "L-IMMENSITE.jpg",
    descripcion:
      "Una composición cítrica y aromática, pensada para una presencia luminosa y energizante y memorable.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Cítrico",
      "Aromático",
      "Amaderado"
    ]
  },

  {
    id: 413,
    nombre: "Jazz Club",
    marca: "Maison Magiela",
    tipo: "Nicho",
    genero: "Hombre",
    familia: "Ámbar",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "JAZZ-CLUB-REPLICA-MAISON-MARGIELA.jpg",
    descripcion:
      "Una fragancia ambarada y de tabaco, con un carácter cálida y sofisticada que aporta distinción.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Ámbar",
      "Tabaco",
      "Ahumado"
    ]
  },

  {
    id: 414,
    nombre: "Black Gold",
    marca: "Mancera",
    tipo: "Nicho",
    genero: "Hombre",
    familia: "Ámbar",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "BLACK_GOLD.png",
    descripcion:
      "Una fragancia ambarada y amaderada, con una personalidad cálida y sofisticada.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Ámbar",
      "Amaderado",
      "Especiado"
    ]
  },

  {
    id: 415,
    nombre: "Moncler Pour Homme",
    marca: "Moncler",
    tipo: "Nicho",
    genero: "Hombre",
    familia: "Amaderado",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "MONCLER-POUR-HOMME.jpg",
    descripcion:
      "Una composición amaderada y aromática que transmite una sensación elegante y con carácter.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Amaderado",
      "Aromático",
      "Fresco"
    ]
  },

  {
    id: 416,
    nombre: "Starry Nights",
    marca: "Montale",
    tipo: "Nicho",
    genero: "Hombre",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "STARRY-NIGHTS-MONTALE.png",
    descripcion:
      "Una fragancia de carácter floral y ambarada, ideal para quienes buscan una presencia delicada y sofisticada.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Ámbar",
      "Amaderado"
    ]
  },

  {
    id: 417,
    nombre: "Montana Homme",
    marca: "Montana",
    tipo: "Nicho",
    genero: "Hombre",
    familia: "Amaderado",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "MONTANA-HOMME.png",
    descripcion:
      "Una esencia amaderada y aromática, con un estilo elegante y con carácter que destaca con naturalidad.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Amaderado",
      "Aromático",
      "Especiado"
    ]
  },

  {
    id: 418,
    nombre: "Ana Al Awwal Men",
    marca: "Nusuk",
    tipo: "Nicho",
    genero: "Hombre",
    familia: "Ámbar",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "ANA-AL-AWAL-men.png",
    descripcion:
      "Una propuesta ambarada y amaderada, perfecta para quienes disfrutan de una fragancia cálida y sofisticada.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Ámbar",
      "Amaderado",
      "Especiado"
    ]
  },

  {
    id: 419,
    nombre: "One Million Golden Oud",
    marca: "Paco Rabanne",
    tipo: "Nicho",
    genero: "Hombre",
    familia: "Oud",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "ONE_MILLION_GOLDEN_OUD.jpg",
    descripcion:
      "Una fragancia de oud y ambarada que combina estilo y personalidad en una expresión intensa y distinguida.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Oud",
      "Ámbar",
      "Dulce"
    ]
  },

  {
    id: 420,
    nombre: "Phantom in Red",
    marca: "Paco Rabanne",
    tipo: "Nicho",
    genero: "Hombre",
    familia: "Dulce",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "PHANTOM-IN-RED.jpg",
    descripcion:
      "Una composición dulce y frutal, pensada para una presencia seductora y envolvente y memorable.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Dulce",
      "Frutal",
      "Ámbar"
    ]
  },

  {
    id: 421,
    nombre: "Althaïr",
    marca: "Parfums De Marl",
    tipo: "Nicho",
    genero: "Hombre",
    familia: "Cítrico",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "Altahir.jpg",
    descripcion:
      "Una fragancia cítrica y aromática, con un carácter luminosa y energizante que aporta distinción.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Cítrico",
      "Aromático",
      "Amaderado"
    ]
  },

  {
    id: 422,
    nombre: "Herod",
    marca: "Parfums De Marl",
    tipo: "Nicho",
    genero: "Hombre",
    familia: "Tabaco",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "PDM-HEROD.jpg",
    descripcion:
      "Una fragancia de tabaco y ambarada, con una personalidad cálida y con carácter.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Tabaco",
      "Ámbar",
      "Avainillado"
    ]
  },

  {
    id: 423,
    nombre: "Pegasus",
    marca: "Parfums De Marl",
    tipo: "Nicho",
    genero: "Hombre",
    familia: "Amaderado",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "PEGASUS_PDM.jpg",
    descripcion:
      "Una composición amaderada y almendrada que transmite una sensación elegante y con carácter.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Amaderado",
      "Almendrado",
      "Aromático"
    ]
  },

  {
    id: 424,
    nombre: "Hawas Fire",
    marca: "Rasasi Hawas",
    tipo: "Nicho",
    genero: "Hombre",
    familia: "Frutal",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "HAWAS-FIRE.jpg",
    descripcion:
      "Una fragancia de carácter frutal y dulce, ideal para quienes buscan una presencia alegre y vibrante.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Frutal",
      "Dulce",
      "Ámbar"
    ]
  },

  {
    id: 425,
    nombre: "Hawas Ice",
    marca: "Rasasi Hawas",
    tipo: "Nicho",
    genero: "Hombre",
    familia: "Cítrico",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "HAWAS-ICE.jpg",
    descripcion:
      "Una esencia cítrica y fresca, con un estilo luminosa y energizante que destaca con naturalidad.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Cítrico",
      "Fresco",
      "Acuático"
    ]
  },

  {
    id: 426,
    nombre: "Hawas Tropical",
    marca: "Rasasi Hawas",
    tipo: "Nicho",
    genero: "Hombre",
    familia: "Frutal",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "HAWAS-TROPICAL-RASASI.png",
    descripcion:
      "Una propuesta frutal y acuática, perfecta para quienes disfrutan de una fragancia alegre y vibrante.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Frutal",
      "Acuático",
      "Fresco"
    ]
  },

  {
    id: 427,
    nombre: "Fetish",
    marca: "Rojo",
    tipo: "Nicho",
    genero: "Hombre",
    familia: "Ámbar",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "FETISH.jpg",
    descripcion:
      "Una fragancia ambarada y amaderada que combina estilo y personalidad en una expresión cálida y sofisticada.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Ámbar",
      "Amaderado",
      "Especiado"
    ]
  },

  {
    id: 428,
    nombre: "9AM Dive",
    marca: "Afnan",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Acuático",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "9-AM-DIVE.png",
    descripcion:
      "Una composición acuática y cítrica, pensada para una presencia refrescante y envolvente y memorable.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Acuático",
      "Cítrico",
      "Fresco"
    ]
  },

  {
    id: 429,
    nombre: "9PM Night Out",
    marca: "Afnan",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Dulce",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "9PM-NIGHT-OUT.jpg",
    descripcion:
      "Una fragancia dulce y avainillada, con un carácter seductora y envolvente que aporta distinción.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Dulce",
      "Avainillado",
      "Ámbar"
    ]
  },

  {
    id: 430,
    nombre: "9PM Rebel",
    marca: "Afnan",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Frutal",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "9pm-rebel.png",
    descripcion:
      "Una fragancia frutal y dulce, con una personalidad alegre y vibrante.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Frutal",
      "Dulce",
      "Cítrico"
    ]
  },

  {
    id: 431,
    nombre: "9PM Elixir",
    marca: "Afnan",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Dulce",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "9PM_ELIXIR.jpg",
    descripcion:
      "Una composición dulce y avainillada que transmite una sensación seductora y envolvente.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Dulce",
      "Avainillado",
      "Especiado"
    ]
  },

  {
    id: 432,
    nombre: "Karpos",
    marca: "Ahli",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Frutal",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "AHLI-KARPOS.png",
    descripcion:
      "Una fragancia de carácter frutal y floral, ideal para quienes buscan una presencia alegre y vibrante.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Frutal",
      "Floral",
      "Dulce"
    ]
  },

  {
    id: 433,
    nombre: "Vega",
    marca: "Ahli",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "AHLI-VEGA.png",
    descripcion:
      "Una esencia floral y frutal, con un estilo delicada y sofisticada que destaca con naturalidad.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Frutal",
      "Ámbar"
    ]
  },

  {
    id: 434,
    nombre: "Auriga",
    marca: "Ahli",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "AURIGA-AHLI.png",
    descripcion:
      "Una propuesta floral y frutal, perfecta para quienes disfrutan de una fragancia delicada y sofisticada.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Frutal",
      "Amaderado"
    ]
  },

  {
    id: 435,
    nombre: "Octans",
    marca: "Ahli",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Ámbar",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "OCTANS-AHLI.png",
    descripcion:
      "Una fragancia ambarada y amaderada que combina estilo y personalidad en una expresión cálida y sofisticada.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Ámbar",
      "Amaderado",
      "Aromático"
    ]
  },

  {
    id: 436,
    nombre: "Overdose",
    marca: "Ahli",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Dulce",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "OVERDOSE-AHLI.png",
    descripcion:
      "Una composición dulce y ambarada, pensada para una presencia seductora y envolvente y memorable.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Dulce",
      "Ámbar",
      "Gourmand"
    ]
  },

  {
    id: 437,
    nombre: "Pegasus",
    marca: "Ahli",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Amaderado",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "PEGASUS.jpg",
    descripcion:
      "Una fragancia amaderada y almendrada, con un carácter elegante y con carácter que aporta distinción.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Amaderado",
      "Almendrado",
      "Aromático"
    ]
  },

  {
    id: 438,
    nombre: "Black Musk",
    marca: "Alexandre",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Almizclado",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "blackmusc.png",
    descripcion:
      "Una fragancia almizclada y ambarada, con una personalidad limpia y sofisticada.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Almizclado",
      "Ámbar",
      "Dulce"
    ]
  },

  {
    id: 439,
    nombre: "Odyssey Bonbon",
    marca: "Armaf",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Gourmand",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "ARMAF-BONBON.jpg",
    descripcion:
      "Una composición gourmand y dulce que transmite una sensación dulce y envolvente.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Gourmand",
      "Dulce",
      "Avainillado"
    ]
  },

  {
    id: 440,
    nombre: "Odyssey Artisto",
    marca: "Armaf",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Cítrico",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "ARMAF-ODYSSEY-ARTISTO.jpg",
    descripcion:
      "Una fragancia de carácter cítrica y aromática, ideal para quienes buscan una presencia luminosa y energizante.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Cítrico",
      "Aromático",
      "Amaderado"
    ]
  },

  {
    id: 441,
    nombre: "Desert Rose",
    marca: "Armaf",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Rosa",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "desert-rose-armaf.jpg",
    descripcion:
      "Una esencia de rosa y floral, con un estilo romántica y elegante que destaca con naturalidad.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Rosa",
      "Floral",
      "Ámbar"
    ]
  },

  {
    id: 442,
    nombre: "Hayaati",
    marca: "Armaf",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Frutal",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "hayaati-lataffa-post-07.jpg",
    descripcion:
      "Una propuesta frutal y fresca, perfecta para quienes disfrutan de una fragancia alegre y vibrante.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Frutal",
      "Fresco",
      "Amaderado"
    ]
  },

  {
    id: 443,
    nombre: "Odyssey Mandarin Sky Vintage",
    marca: "Armaf",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Cítrico",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "MADARIN-SKY-VINTAGE-ODYSSEY.jpg",
    descripcion:
      "Una fragancia cítrica y dulce que combina estilo y personalidad en una expresión luminosa y energizante.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Cítrico",
      "Dulce",
      "Frutal"
    ]
  },

  {
    id: 444,
    nombre: "Odyssey Bahamas",
    marca: "Armaf",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Acuático",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "ODYSSEY-BAHAMAS.jpg",
    descripcion:
      "Una composición acuática y cítrica, pensada para una presencia refrescante y envolvente y memorable.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Acuático",
      "Cítrico",
      "Fresco"
    ]
  },

  {
    id: 445,
    nombre: "Odyssey Black Forest",
    marca: "Armaf",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Amaderado",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "ODYSSEY-BLACK-FOREST.jpg",
    descripcion:
      "Una fragancia amaderada y aromática, con un carácter elegante y con carácter que aporta distinción.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Amaderado",
      "Aromático",
      "Especiado"
    ]
  },

  {
    id: 446,
    nombre: "Odyssey Chocolat",
    marca: "Armaf",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Gourmand",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "ODYSSEY-CHOCOLAT.jpg",
    descripcion:
      "Una fragancia gourmand y de chocolate, con una personalidad dulce y envolvente.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Gourmand",
      "Chocolate",
      "Dulce"
    ]
  },

  {
    id: 447,
    nombre: "Odyssey Go Mango",
    marca: "Armaf",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Frutal",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "ODYSSEY-GO-MANGO.jpg",
    descripcion:
      "Una composición frutal y tropical que transmite una sensación alegre y vibrante.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Frutal",
      "Tropical",
      "Dulce"
    ]
  },

  {
    id: 448,
    nombre: "Odyssey Limoni",
    marca: "Armaf",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Cítrico",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "ODYSSEY-LIMONI.jpg",
    descripcion:
      "Una fragancia de carácter cítrica y fresca, ideal para quienes buscan una presencia luminosa y energizante.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Cítrico",
      "Fresco",
      "Acuático"
    ]
  },

  {
    id: 449,
    nombre: "Odyssey Mandarin Sky Elixir",
    marca: "Armaf",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Cítrico",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "ODYSSEY-MANDARIN-SKY-ELIXIR.jpg",
    descripcion:
      "Una esencia cítrica y dulce, con un estilo luminosa y energizante que destaca con naturalidad.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Cítrico",
      "Dulce",
      "Ámbar"
    ]
  },

  {
    id: 450,
    nombre: "Odyssey Toffee Coffee",
    marca: "Armaf",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Gourmand",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "ODYSSEY-TOFFEE-COFFEE.jpg",
    descripcion:
      "Una propuesta gourmand y de café, perfecta para quienes disfrutan de una fragancia dulce y envolvente.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Gourmand",
      "Café",
      "Dulce"
    ]
  },

  {
    id: 451,
    nombre: "Odyssey Wild One",
    marca: "Armaf",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Amaderado",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "ODYSSEY-WILD-ONE-ARMAF.jpg",
    descripcion:
      "Una fragancia amaderada y especiada que combina estilo y personalidad en una expresión elegante y con carácter.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Amaderado",
      "Especiado",
      "Aromático"
    ]
  },

  {
    id: 452,
    nombre: "Odyssey Marshmallow",
    marca: "Armaf",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Gourmand",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "OSYSSEY-MAISMALLOW.jpg",
    descripcion:
      "Una composición gourmand y dulce, pensada para una presencia dulce y envolvente y memorable.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Gourmand",
      "Dulce",
      "Avainillado"
    ]
  },

  {
    id: 453,
    nombre: "Santal Boise",
    marca: "Atelier Versace",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Amaderado",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "santal-boise.png",
    descripcion:
      "Una fragancia amaderada y ahumada, con un carácter elegante y con carácter que aporta distinción.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Amaderado",
      "Ahumado",
      "Terroso"
    ]
  },

  {
    id: 454,
    nombre: "Vanille Rouge",
    marca: "Atelier Versace",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Avainillado",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "VANILLE-ROUGE--ATELIER-VERSACE.png",
    descripcion:
      "Una fragancia avainillada y dulce, con una personalidad cálida y reconfortante.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Avainillado",
      "Dulce",
      "Ámbar"
    ]
  },

  {
    id: 455,
    nombre: "Bharara King",
    marca: "Bharara",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Dulce",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "bharara-king.png",
    descripcion:
      "Una composición dulce y ambarada que transmite una sensación seductora y envolvente.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Dulce",
      "Ámbar",
      "Amaderado"
    ]
  },

  {
    id: 456,
    nombre: "Bharara Niche",
    marca: "Bharara",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Amaderado",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "BHARARA-NICHE.png",
    descripcion:
      "Una fragancia de carácter amaderada y aromática, ideal para quienes buscan una presencia elegante y con carácter.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Amaderado",
      "Aromático",
      "Especiado"
    ]
  },

  {
    id: 457,
    nombre: "Pharaoh Ramses",
    marca: "Bharara",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Ámbar",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "PHARAOH-RAMESSES.jpg",
    descripcion:
      "Una esencia ambarada y amaderada, con un estilo cálida y sofisticada que destaca con naturalidad.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Ámbar",
      "Amaderado",
      "Especiado"
    ]
  },

  {
    id: 458,
    nombre: "Viking Kashmir",
    marca: "Bharara",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Ámbar",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "viking-kashmir.png",
    descripcion:
      "Una propuesta ambarada y amaderada, perfecta para quienes disfrutan de una fragancia cálida y sofisticada.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Ámbar",
      "Amaderado",
      "Especiado"
    ]
  },

  {
    id: 459,
    nombre: "Bleecker Street",
    marca: "Bond N 9",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Frutal",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "BLEECKER-BOND-9.png",
    descripcion:
      "Una fragancia frutal y amaderada que combina estilo y personalidad en una expresión alegre y vibrante.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Frutal",
      "Amaderado",
      "Aromático"
    ]
  },

  {
    id: 460,
    nombre: "Dubai Ruby",
    marca: "Bond N 9",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Frutal",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "BOND-9-DUBAI-RUBY.png",
    descripcion:
      "Una composición frutal y floral, pensada para una presencia alegre y vibrante y memorable.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Frutal",
      "Floral",
      "Dulce"
    ]
  },

  {
    id: 461,
    nombre: "Bond No. 9",
    marca: "Bond N 9",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Cítrico",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "BOND-9.png",
    descripcion:
      "Una fragancia cítrica y floral, con un carácter luminosa y energizante que aporta distinción.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Cítrico",
      "Floral",
      "Aromático"
    ]
  },

  {
    id: 462,
    nombre: "Tribeca",
    marca: "Bond N 9",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Gourmand",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "TRIBECA-BOND-9ok.png",
    descripcion:
      "Una fragancia gourmand y ambarada, con una personalidad dulce y envolvente.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Gourmand",
      "Ámbar",
      "Dulce"
    ]
  },

  {
    id: 463,
    nombre: "Centaurus",
    marca: "Creed",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Ámbar",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "Centaurus.jpg",
    descripcion:
      "Una composición ambarada y amaderada que transmite una sensación cálida y sofisticada.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Ámbar",
      "Amaderado",
      "Especiado"
    ]
  },

  {
    id: 464,
    nombre: "Santal",
    marca: "Creed",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Amaderado",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "CREED-SANTAL.jpg",
    descripcion:
      "Una fragancia de carácter amaderada y cremosa, ideal para quienes buscan una presencia elegante y con carácter.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Amaderado",
      "Cremoso",
      "Especiado"
    ]
  },

  {
    id: 465,
    nombre: "Millesime Imperial",
    marca: "Creed",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Cítrico",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "CREED_MILLESIME_IMPERIAL.jpg",
    descripcion:
      "Una esencia cítrica y marina, con un estilo luminosa y energizante que destaca con naturalidad.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Cítrico",
      "Marino",
      "Fresco"
    ]
  },

  {
    id: 466,
    nombre: "Silver Mountain Water",
    marca: "Creed",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Cítrico",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "SILVER-MOUNTAIN-WATER.jpg",
    descripcion:
      "Una propuesta cítrica y metálico, perfecta para quienes disfrutan de una fragancia luminosa y energizante.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Cítrico",
      "Metálico",
      "Almizclado"
    ]
  },

  {
    id: 467,
    nombre: "Bravo Monsieur",
    marca: "El Ganso",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Cítrico",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "BRAVO-MONSIER-EL-GANSO.png",
    descripcion:
      "Una fragancia cítrica y aromática que combina estilo y personalidad en una expresión luminosa y energizante.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Cítrico",
      "Aromático",
      "Amaderado"
    ]
  },

  {
    id: 468,
    nombre: "1 Abu Dabi Emiratos Arabes",
    marca: "Emirato",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Ámbar",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "1-ABU-DABI-emiratos-arabes.png",
    descripcion:
      "Una composición ambarada y amaderada, pensada para una presencia cálida y sofisticada y memorable.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Ámbar",
      "Amaderado",
      "Especiado"
    ]
  },

  {
    id: 469,
    nombre: "2 Dubai Emiratos Arabes",
    marca: "Emirato",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Ámbar",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "2-DUBAI-emiratos-arabes.png",
    descripcion:
      "Una fragancia ambarada y dulce, con un carácter cálida y sofisticada que aporta distinción.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Ámbar",
      "Dulce",
      "Amaderado"
    ]
  },

  {
    id: 470,
    nombre: "3 Sarja Emiratos Arabes",
    marca: "Emirato",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Ámbar",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "3-SARJA-emiratos-arabes.png",
    descripcion:
      "Una fragancia ambarada y amaderada, con una personalidad cálida y sofisticada.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Ámbar",
      "Amaderado",
      "Especiado"
    ]
  },

  {
    id: 471,
    nombre: "4 Ajman Emiratos Arabes",
    marca: "Emirato",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Ámbar",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "4-AJMAN-emiratos-arabes.png",
    descripcion:
      "Una composición ambarada y amaderada que transmite una sensación cálida y sofisticada.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Ámbar",
      "Amaderado",
      "Aromático"
    ]
  },

  {
    id: 472,
    nombre: "5 Qaywayn Emiratos Arabes",
    marca: "Emirato",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Ámbar",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "5-QAYWAYN-emiratos-arabes.png",
    descripcion:
      "Una fragancia de carácter ambarada y dulce, ideal para quienes buscan una presencia cálida y sofisticada.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Ámbar",
      "Dulce",
      "Especiado"
    ]
  },

  {
    id: 473,
    nombre: "6 Jaima Emiratos Arabes",
    marca: "Emirato",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Ámbar",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "6-JAIMA-emiratos-arabes.png",
    descripcion:
      "Una esencia ambarada y amaderada, con un estilo cálida y sofisticada que destaca con naturalidad.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Ámbar",
      "Amaderado",
      "Especiado"
    ]
  },

  {
    id: 474,
    nombre: "7 Fuyaira Emiratos Arabes",
    marca: "Emirato",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Ámbar",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "7-FUYAIRA-emiratos-arabes.png",
    descripcion:
      "Una propuesta ambarada y amaderada, perfecta para quienes disfrutan de una fragancia cálida y sofisticada.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Ámbar",
      "Amaderado",
      "Aromático"
    ]
  },

  {
    id: 475,
    nombre: "Verona XII",
    marca: "Emmir",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Cítrico",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "VERONA-XII-EMMIR-MILANO.png",
    descripcion:
      "Una fragancia cítrica y floral que combina estilo y personalidad en una expresión luminosa y energizante.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Cítrico",
      "Floral",
      "Amaderado"
    ]
  },

  {
    id: 476,
    nombre: "Stallion 53",
    marca: "Emper",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Amaderado",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "STALLION53-2.png",
    descripcion:
      "Una composición amaderada y especiada, pensada para una presencia elegante y con carácter y memorable.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Amaderado",
      "Especiado",
      "Ámbar"
    ]
  },

  {
    id: 477,
    nombre: "Outcast Blue",
    marca: "Ex Nihilo",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Cítrico",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "UOTCAST BLUE.jpg",
    descripcion:
      "Una fragancia cítrica y acuática, con un carácter luminosa y energizante que aporta distinción.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Cítrico",
      "Acuático",
      "Fresco"
    ]
  },

  {
    id: 478,
    nombre: "Sun Java Rose Oud",
    marca: "Frank Olivier",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Rosa",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "SUN-JAVA-ROSE-OUD.png",
    descripcion:
      "Una fragancia de rosa y de oud, con una personalidad romántica y elegante.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Rosa",
      "Oud",
      "Ámbar"
    ]
  },

  {
    id: 479,
    nombre: "Vulcan Baie",
    marca: "French Avenue",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Frutal",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "VULCAN-BAIE-FRENCH-AVENUE.jpg",
    descripcion:
      "Una composición frutal y acuática que transmite una sensación alegre y vibrante.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Frutal",
      "Acuático",
      "Dulce"
    ]
  },

  {
    id: 480,
    nombre: "Vulcan Feu",
    marca: "French Avenue",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Frutal",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "VULCAN-FEU.jpg",
    descripcion:
      "Una fragancia tropical y vibrante que combina frutas exóticas con un toque dulce y envolvente.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Frutal",
      "Tropical",
      "Dulce"
    ]
  },

  {
    id: 481,
    nombre: "Sugar Daddy",
    marca: "Fugazzy",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Dulce",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "Sugar-Daddy.jpg",
    descripcion:
      "Una esencia dulce y gourmand, con un estilo seductora y envolvente que destaca con naturalidad.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Dulce",
      "Gourmand",
      "Ámbar"
    ]
  },

  {
    id: 482,
    nombre: "Bianco Latte",
    marca: "Giardini Di Toscan",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Gourmand",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "BIANCO_LATTE.jpg",
    descripcion:
      "Una propuesta gourmand y dulce, perfecta para quienes disfrutan de una fragancia dulce y envolvente.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Gourmand",
      "Dulce",
      "Avainillado"
    ]
  },

  {
    id: 483,
    nombre: "Santal Pao Rosa",
    marca: "Guerlain",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Amaderado",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "SANTAL_PAO_ROSA.jpg",
    descripcion:
      "Una fragancia amaderada y cremosa que combina estilo y personalidad en una expresión elegante y con carácter.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Amaderado",
      "Cremoso",
      "Rosa"
    ]
  },

  {
    id: 484,
    nombre: "Amber Oud Blue Edition",
    marca: "Haramain",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Ámbar",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "AMBER-OUD-BLUE-EDITION.png",
    descripcion:
      "Una composición ambarada y acuática, pensada para una presencia cálida y sofisticada y memorable.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Ámbar",
      "Acuático",
      "Amaderado"
    ]
  },

  {
    id: 485,
    nombre: "Amber Oud Gold Edition",
    marca: "Haramain",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Ámbar",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "AMBER-OUD-GOLD-EDIT.png",
    descripcion:
      "Una fragancia ambarada y dulce, con un carácter cálida y sofisticada que aporta distinción.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Ámbar",
      "Dulce",
      "Amaderado"
    ]
  },

  {
    id: 486,
    nombre: "Amber Oud Aqua Dubai",
    marca: "Haramain",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Acuático",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "AMBER_OUD_AQUA_DUBAI.jpg",
    descripcion:
      "Una fragancia acuática y ambarada, con una personalidad refrescante y envolvente.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Acuático",
      "Ámbar",
      "Amaderado"
    ]
  },

  {
    id: 487,
    nombre: "Atomic Rose",
    marca: "Haramain",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Rosa",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "ATOMIC-ROSE.png",
    descripcion:
      "Una composición de rosa y floral que transmite una sensación romántica y elegante.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Rosa",
      "Floral",
      "Ámbar"
    ]
  },

  {
    id: 488,
    nombre: "Oud for Greatness",
    marca: "Haramain",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Oud",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "INITIO-OUD-FOR-GREATNESS.png",
    descripcion:
      "Una fragancia de carácter de oud y ambarada, ideal para quienes buscan una presencia intensa y distinguida.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Oud",
      "Ámbar",
      "Especiado"
    ]
  },

  {
    id: 489,
    nombre: "Rehab",
    marca: "Haramain",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Amaderado",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "REHAB.png",
    descripcion:
      "Una fragancia cálida y envolvente, con un carácter especiado, amaderado y sofisticado.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Amaderado",
      "Especiado",
      "Almizclado"
    ]
  },

  {
    id: 490,
    nombre: "Narcotic Delight",
    marca: "Haramain",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Frutal",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "NARCOTIC-DELIGHT.jpg",
    descripcion:
      "Una propuesta frutal y gourmand, perfecta para quienes disfrutan de una fragancia alegre y vibrante.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Frutal",
      "Gourmand",
      "Dulce"
    ]
  },

  {
    id: 491,
    nombre: "Oud for Greatness Neo",
    marca: "Haramain",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Oud",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "Oud-For-Greatnes-Neo.jpg",
    descripcion:
      "Una fragancia de oud y ambarada que combina estilo y personalidad en una expresión intensa y distinguida.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Oud",
      "Ámbar",
      "Especiado"
    ]
  },

  {
    id: 492,
    nombre: "Side Effect",
    marca: "Haramain",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Ámbar",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "SIDE_EFFECT.jpg",
    descripcion:
      "Una composición ambarada y de tabaco, pensada para una presencia cálida y sofisticada y memorable.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Ámbar",
      "Tabaco",
      "Dulce"
    ]
  },

  {
    id: 493,
    nombre: "Tanasuk",
    marca: "Haramain",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "TANASUK.jpg",
    descripcion:
      "Una fragancia elegante y envolvente, con un equilibrio entre flores, ámbar y maderas.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Ámbar",
      "Amaderado"
    ]
  },

  {
    id: 494,
    nombre: "Il Sexuel",
    marca: "Ilmin",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Amaderado",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "IL-PEACE-ILMIN-UNISEX-Mesa-de-trabajo-1-copia-10.jpg",
    descripcion:
      "Una fragancia profunda y magnética, con especias, maderas y un fondo de oud.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Amaderado",
      "Especiado",
      "Oud"
    ]
  },

  {
    id: 495,
    nombre: "Il Kakuno",
    marca: "Ilmin",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Amaderado",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "IL-PEACE-ILMIN-UNISEX-Mesa-de-trabajo-1-copia-2.jpg",
    descripcion:
      "Una fragancia sofisticada y distintiva, con un equilibrio entre maderas, aromas y flores.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Amaderado",
      "Aromático",
      "Floral"
    ]
  },

  {
    id: 496,
    nombre: "Il Ego",
    marca: "Ilmin",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "IL-PEACE-ILMIN-UNISEX-Mesa-de-trabajo-1-copia-3.jpg",
    descripcion:
      "Una fragancia elegante y sensual, con un carácter floral, cálido y sofisticado.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Ambarado",
      "Especiado"
    ]
  },

  {
    id: 497,
    nombre: "Il Femme",
    marca: "Ilmin",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "IL-PEACE-ILMIN-UNISEX-Mesa-de-trabajo-1-copia-4.jpg",
    descripcion:
      "Una fragancia femenina y delicada, con un carácter floral, luminoso y envolvente.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Fresco",
      "Ambarado"
    ]
  },

  {
    id: 498,
    nombre: "Il Dolce",
    marca: "Ilmin",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Frutal",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "IL-PEACE-ILMIN-UNISEX-Mesa-de-trabajo-1-copia-5.jpg",
    descripcion:
      "Una fragancia dulce y luminosa que combina cítricos, frutas y un fondo ambarado.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Frutal",
      "Cítrico",
      "Ámbar"
    ]
  },

  {
    id: 499,
    nombre: "Il Erotique",
    marca: "Ilmin",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Cítrico",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "IL-PEACE-ILMIN-UNISEX-Mesa-de-trabajo-1-copia-6.jpg",
    descripcion:
      "Una fragancia magnética que combina cítricos, flores y un fondo cálido y envolvente.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Cítrico",
      "Floral",
      "Gourmand"
    ]
  },

  {
    id: 500,
    nombre: "Il Roso",
    marca: "Ilmin",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "IL-PEACE-ILMIN-UNISEX-Mesa-de-trabajo-1-copia-7.jpg",
    descripcion:
      "Una fragancia de rosa elegante y opulenta, con un fondo cálido de vainilla y ámbar.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Cítrico",
      "Ámbar"
    ]
  },

  {
    id: 501,
    nombre: "Il Orgasme",
    marca: "Ilmin",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "IL-PEACE-ILMIN-UNISEX-Mesa-de-trabajo-1-copia-8.jpg",
    descripcion:
      "Una fragancia intensa y magnética que combina cítricos, flores, café y tabaco.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Cítrico",
      "Tabaco"
    ]
  },

  {
    id: 502,
    nombre: "Il Vita",
    marca: "Ilmin",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Cítrico",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "IL-PEACE-ILMIN-UNISEX-Mesa-de-trabajo-1-copia-9.jpg",
    descripcion:
      "Una fragancia elegante y serena, con cítricos, especias, maderas y un fondo ambarado.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Cítrico",
      "Amaderado",
      "Ámbar"
    ]
  },

  {
    id: 503,
    nombre: "Il Peace",
    marca: "Ilmin",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Cítrico",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "IL-PEACE-ILMIN-UNISEX.png",
    descripcion:
      "Una composición cítrica y aromática que transmite una sensación luminosa y energizante.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Cítrico",
      "Aromático",
      "Amaderado"
    ]
  },

  {
    id: 504,
    nombre: "Il Arte",
    marca: "Ilmin",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "ILMIN-IL-ARTE.png",
    descripcion:
      "Una fragancia de carácter floral y amaderada, ideal para quienes buscan una presencia delicada y sofisticada.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Amaderado",
      "Dulce"
    ]
  },

  {
    id: 505,
    nombre: "Il Goutte",
    marca: "Ilmin",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Cítrico",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "ILMIN-IL-GOUTTE.png",
    descripcion:
      "Una esencia cítrica y acuática, con un estilo luminosa y energizante que destaca con naturalidad.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Cítrico",
      "Acuático",
      "Fresco"
    ]
  },

  {
    id: 506,
    nombre: "Il Mexico",
    marca: "Ilmin",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Frutal",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "ILMIN-IL-MEXICO.png",
    descripcion:
      "Una propuesta frutal y ambarada, perfecta para quienes disfrutan de una fragancia alegre y vibrante.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Frutal",
      "Ámbar",
      "Especiado"
    ]
  },

  {
    id: 507,
    nombre: "Il Voss",
    marca: "Ilmin",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Acuático",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "ILMIN-IL-VOSS.png",
    descripcion:
      "Una fragancia acuática y fresca que combina estilo y personalidad en una expresión refrescante y envolvente.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Acuático",
      "Fresco",
      "Cítrico"
    ]
  },

  {
    id: 508,
    nombre: "Game of Spades Bid",
    marca: "Jomilano",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Dulce",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "GAME-OF-SPADES-BID.png",
    descripcion:
      "Una composición dulce y frutal, pensada para una presencia seductora y envolvente y memorable.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Dulce",
      "Frutal",
      "Ámbar"
    ]
  },

  {
    id: 509,
    nombre: "Game of Spades Royale",
    marca: "Jomilano",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Frutal",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "GAME-OF-SPADES-ROYALE.png",
    descripcion:
      "Una fragancia frutal y dulce, con un carácter alegre y vibrante que aporta distinción.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Frutal",
      "Dulce",
      "Amaderado"
    ]
  },

  {
    id: 510,
    nombre: "Almaz",
    marca: "Kajal",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "ALMAZ-KAJAL.jpg",
    descripcion:
      "Una fragancia floral y ambarada, con una personalidad delicada y sofisticada.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Ámbar",
      "Dulce"
    ]
  },

  {
    id: 511,
    nombre: "Eden Juicy Apple",
    marca: "Kayali",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Frutal",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "KAYALI-EDEN-JUICE-APPLE.png",
    descripcion:
      "Una composición frutal y floral que transmite una sensación alegre y vibrante.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Frutal",
      "Floral",
      "Dulce"
    ]
  },

  {
    id: 512,
    nombre: "Lovefest Burning Cherry",
    marca: "Kayali",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Frutal",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "LOVEFEST-BURNING-CHERRY-KAYALI.jpg",
    descripcion:
      "Una fragancia de carácter frutal y dulce, ideal para quienes buscan una presencia alegre y vibrante.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Frutal",
      "Dulce",
      "Ámbar"
    ]
  },

  {
    id: 513,
    nombre: "Oudgasm Tobacco",
    marca: "Kayali",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Tabaco",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "OUDGASM_TOBACCO.jpg",
    descripcion:
      "Una esencia de tabaco y de oud, con un estilo cálida y con carácter que destaca con naturalidad.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Tabaco",
      "Oud",
      "Ámbar"
    ]
  },

  {
    id: 514,
    nombre: "Black Phantom",
    marca: "Kilian",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Gourmand",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "BLACK-PHANTOM-by-killian.png",
    descripcion:
      "Una propuesta gourmand y de café, perfecta para quienes disfrutan de una fragancia dulce y envolvente.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Gourmand",
      "Café",
      "Chocolate"
    ]
  },

  {
    id: 515,
    nombre: "Smoking Hot",
    marca: "Kilian",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Tabaco",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "SMOKING-HOT-KILLIAN.png",
    descripcion:
      "Una fragancia de tabaco y ahumada que combina estilo y personalidad en una expresión cálida y con carácter.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Tabaco",
      "Ahumado",
      "Dulce"
    ]
  },

  {
    id: 516,
    nombre: "Straight to Heaven",
    marca: "Kilian",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Amaderado",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "STRAIGHT-TO-HEAVEN.png",
    descripcion:
      "Una composición amaderada y ambarada, pensada para una presencia elegante y con carácter y memorable.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Amaderado",
      "Ámbar",
      "Licoroso"
    ]
  },

  {
    id: 517,
    nombre: "Angels Share",
    marca: "Kilian",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Gourmand",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "ANGELS-SHARE.jpg",
    descripcion:
      "Una fragancia cálida y envolvente, inspirada en la dulzura especiada y aterciopelada.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Gourmand",
      "Especiado",
      "Avainillado"
    ]
  },

  {
    id: 518,
    nombre: "Emir",
    marca: "Korbaj",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Ámbar",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "EMIR-KORBAJ.jpg",
    descripcion:
      "Una fragancia ambarada y amaderada, con una personalidad cálida y sofisticada.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Ámbar",
      "Amaderado",
      "Especiado"
    ]
  },

  {
    id: 519,
    nombre: "Afeef",
    marca: "Lattafa",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "AFEEF-LATTAFA.png",
    descripcion:
      "Una composición floral y dulce que transmite una sensación delicada y sofisticada.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Dulce",
      "Frutal"
    ]
  },

  {
    id: 520,
    nombre: "Affection",
    marca: "Lattafa",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Dulce",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "AFFECTION.jpg",
    descripcion:
      "Una fragancia de carácter dulce y floral, ideal para quienes buscan una presencia seductora y envolvente.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Dulce",
      "Floral",
      "Ámbar"
    ]
  },

  {
    id: 521,
    nombre: "Ameer Al Oudh Intense Oud",
    marca: "Lattafa",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Oud",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "Amer-Al-Oud-Intese-Oud.jpg",
    descripcion:
      "Una esencia de oud y ambarada, con un estilo intensa y distinguida que destaca con naturalidad.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Oud",
      "Ámbar",
      "Dulce"
    ]
  },

  {
    id: 522,
    nombre: "Art of Universe",
    marca: "Lattafa",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Cítrico",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "art-of-universe.jpg",
    descripcion:
      "Una propuesta cítrica y aromática, perfecta para quienes disfrutan de una fragancia luminosa y energizante.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Cítrico",
      "Aromático",
      "Amaderado"
    ]
  },

  {
    id: 523,
    nombre: "Atlas",
    marca: "Lattafa",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Ámbar",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "ATLAS-LATTAFA.jpg",
    descripcion:
      "Una fragancia ambarada y amaderada que combina estilo y personalidad en una expresión cálida y sofisticada.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Ámbar",
      "Amaderado",
      "Especiado"
    ]
  },

  {
    id: 524,
    nombre: "Eclaire Banoffi",
    marca: "Lattafa",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Gourmand",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "ECLAIRE_BANOFFI_LATTAFA.jpg",
    descripcion:
      "Una composición gourmand y dulce, pensada para una presencia dulce y envolvente y memorable.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Gourmand",
      "Dulce",
      "Frutal"
    ]
  },

  {
    id: 525,
    nombre: "Eclaire",
    marca: "Lattafa",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Gourmand",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "ECLAIRE_LATTAFA.jpg",
    descripcion:
      "Una fragancia gourmand y dulce, con un carácter dulce y envolvente que aporta distinción.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Gourmand",
      "Dulce",
      "Avainillado"
    ]
  },

  {
    id: 526,
    nombre: "Eclaire Pistache",
    marca: "Lattafa",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Gourmand",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "ECLAIRE_PISTACHE_LATTAFA.jpg",
    descripcion:
      "Una fragancia gourmand y dulce, con una personalidad dulce y envolvente.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Gourmand",
      "Dulce",
      "Floral"
    ]
  },

  {
    id: 527,
    nombre: "Jasoor",
    marca: "Lattafa",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Frutal",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "JASOOR-LATTAFA.png",
    descripcion:
      "Una composición frutal y floral que transmite una sensación alegre y vibrante.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Frutal",
      "Floral",
      "Ámbar"
    ]
  },

  {
    id: 528,
    nombre: "Khamrah",
    marca: "Lattafa",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Gourmand",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "KAMRAH-LATTAFA.png",
    descripcion:
      "Una fragancia de carácter gourmand y dulce, ideal para quienes buscan una presencia dulce y envolvente.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Gourmand",
      "Dulce",
      "Especiado"
    ]
  },

  {
    id: 529,
    nombre: "Bade e Al Oud Sublime",
    marca: "Lattafa",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Frutal",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "lataffa-SUBLIME-POST.png",
    descripcion:
      "Una esencia frutal y dulce, con un estilo alegre y vibrante que destaca con naturalidad.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Frutal",
      "Dulce",
      "Ámbar"
    ]
  },

  {
    id: 530,
    nombre: "Emeer",
    marca: "Lattafa",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Amaderado",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "LATTAFA-EMEER.jpg",
    descripcion:
      "Una propuesta amaderada y aromática, perfecta para quienes disfrutan de una fragancia elegante y con carácter.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Amaderado",
      "Aromático",
      "Especiado"
    ]
  },

  {
    id: 531,
    nombre: "Bade’e Al Oud Honor & Glory",
    marca: "Lattafa",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Gourmand",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "LATTAFA-HONOR-Y-GLORY.png",
    descripcion:
      "Una fragancia gourmand y dulce que combina estilo y personalidad en una expresión dulce y envolvente.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Gourmand",
      "Dulce",
      "Especiado"
    ]
  },

  {
    id: 532,
    nombre: "Mayar Cherry Intense",
    marca: "Lattafa",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Frutal",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "LATTAFA-MAYAR-CHERRY.png",
    descripcion:
      "Una composición frutal y floral, pensada para una presencia alegre y vibrante y memorable.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Frutal",
      "Floral",
      "Dulce"
    ]
  },

  {
    id: 533,
    nombre: "Musamam White Intense",
    marca: "Lattafa",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Dulce",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "LATTAFA-MUSSAMAN-WHITE-INTENSE.png",
    descripcion:
      "Una fragancia dulce y cremosa, con un carácter seductora y envolvente que aporta distinción.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Dulce",
      "Cremoso",
      "Ámbar"
    ]
  },

  {
    id: 534,
    nombre: "Ajwad Pink to Pink",
    marca: "Lattafa",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Frutal",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "LATTAFA-PINK-TO-PINK3.png",
    descripcion:
      "Una fragancia frutal y floral, con una personalidad alegre y vibrante.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Frutal",
      "Floral",
      "Dulce"
    ]
  },

  {
    id: 535,
    nombre: "Nebras",
    marca: "Lattafa",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Gourmand",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "NEBRAS-LATTAFA-PRIDE.png",
    descripcion:
      "Una composición gourmand y dulce que transmite una sensación dulce y envolvente.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Gourmand",
      "Dulce",
      "Avainillado"
    ]
  },

  {
    id: 536,
    nombre: "Teriaq",
    marca: "Lattafa",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Gourmand",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "TERIAQ-LATTAFA.png",
    descripcion:
      "Una fragancia de carácter gourmand y dulce, ideal para quienes buscan una presencia dulce y envolvente.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Gourmand",
      "Dulce",
      "Ámbar"
    ]
  },

  {
    id: 537,
    nombre: "Victoria",
    marca: "Lattafa",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Gourmand",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "VICTORIA-LATTAFA.jpg",
    descripcion:
      "Una esencia gourmand y dulce, con un estilo dulce y envolvente que destaca con naturalidad.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Gourmand",
      "Dulce",
      "Avainillado"
    ]
  },

  {
    id: 538,
    nombre: "Sehr",
    marca: "Lattafa",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Avainillado",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "SEHR.jpg",
    descripcion:
      "Una fragancia cálida y dulce, con un carácter especiado, cremoso y envolvente.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Avainillado",
      "Almendrado",
      "Especiado"
    ]
  },

  {
    id: 539,
    nombre: "Khamrah Qahwa",
    marca: "Lattafa",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Gourmand",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "KHAMRAH-QAHWA.jpg",
    descripcion:
      "Una fragancia cálida y gourmand que combina café, especias y una dulzura envolvente.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Gourmand",
      "Café",
      "Especiado"
    ]
  },

  {
    id: 540,
    nombre: "Al Noble Ammer",
    marca: "Lattafa",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Amaderado",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "AL-NOBLE-AMMER.jpg",
    descripcion:
      "Una fragancia elegante y masculina, con un carácter aromático, amaderado y especiado.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Amaderado",
      "Aromático",
      "Especiado"
    ]
  },

  {
    id: 541,
    nombre: "Teriaq Intense",
    marca: "Lattafa",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Gourmand",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "TERIAQ-INTENSE.jpg",
    descripcion:
      "Una fragancia intensa y envolvente, con un carácter dulce, cálido y especiado.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Gourmand",
      "Ámbar",
      "Especiado"
    ]
  },

  {
    id: 542,
    nombre: "Bergamote 22",
    marca: "Le Labo",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Cítrico",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "BERGAMOTA22-LE-LABO.png",
    descripcion:
      "Una fragancia cítrica y aromática, con una personalidad luminosa y energizante.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Cítrico",
      "Aromático",
      "Amaderado"
    ]
  },

  {
    id: 543,
    nombre: "Santal 33",
    marca: "Le Labo",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Amaderado",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "SANTAL-33.png",
    descripcion:
      "Una composición amaderada y especiada que transmite una sensación elegante y con carácter.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Amaderado",
      "Especiado",
      "Cremoso"
    ]
  },

  {
    id: 544,
    nombre: "Pax",
    marca: "Lorenzo Pazzagli",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Ámbar",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "PAX---LORENZO-PAZZAGLIA-UNISEX.png",
    descripcion:
      "Una fragancia de carácter ambarada y dulce, ideal para quienes buscan una presencia cálida y sofisticada.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Ámbar",
      "Dulce",
      "Ahumado"
    ]
  },

  {
    id: 545,
    nombre: "Summer Hammer",
    marca: "Lorenzo Pazzagli",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Cítrico",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "SUMMER-HAMMER.jpg",
    descripcion:
      "Una fragancia vibrante y fresca que combina frutas, cítricos y un fondo amaderado.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Cítrico",
      "Frutal",
      "Amaderado"
    ]
  },

  {
    id: 546,
    nombre: "Sun-Gria",
    marca: "Lorenzo Pazzaglia",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Frutal",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "LORENZO-PAZZAGLIA-SUNGRIA.jpg",
    descripcion:
      "Una propuesta frutal y cítrica, perfecta para quienes disfrutan de una fragancia alegre y vibrante.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Frutal",
      "Cítrico",
      "Dulce"
    ]
  },

  {
    id: 547,
    nombre: "Qué Chimba",
    marca: "Lorenzo Pazzaglia",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Frutal",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "QUE-CHIMBA.jpg",
    descripcion:
      "Una fragancia frutal y floral que combina estilo y personalidad en una expresión alegre y vibrante.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Frutal",
      "Floral",
      "Dulce"
    ]
  },

  {
    id: 548,
    nombre: "Ombre Nomade",
    marca: "Louis Vuitton",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Oud",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "OMBRE-NOMADE.png",
    descripcion:
      "Una composición de oud y ambarada, pensada para una presencia intensa y distinguida y memorable.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Oud",
      "Ámbar",
      "Amaderado"
    ]
  },

  {
    id: 549,
    nombre: "Pacific Chill",
    marca: "Louis Vuitton",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Cítrico",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "PACIFIC_CHILL.jpg",
    descripcion:
      "Una fragancia cítrica y fresca, con un carácter luminosa y energizante que aporta distinción.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Cítrico",
      "Fresco",
      "Aromático"
    ]
  },

  {
    id: 550,
    nombre: "Symphony",
    marca: "Louis Vuitton",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Cítrico",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "SYMPHONI---LOUIS-VUITTON.png",
    descripcion:
      "Una fragancia cítrica y frutal, con una personalidad luminosa y energizante.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Cítrico",
      "Frutal",
      "Aromático"
    ]
  },

  {
    id: 551,
    nombre: "Jean Lowe Ombre",
    marca: "Maison Alhambra",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Oud",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "JEAN-LOWE-OMBRE.png",
    descripcion:
      "Una composición de oud y ambarada que transmite una sensación intensa y distinguida.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Oud",
      "Ámbar",
      "Ahumado"
    ]
  },

  {
    id: 552,
    nombre: "Sceptre Malachite",
    marca: "Maison Alhambra",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "SCEPTRE-MALACHITE.jpg",
    descripcion:
      "Una fragancia de carácter floral y ambarada, ideal para quienes buscan una presencia delicada y sofisticada.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Ámbar",
      "Verde"
    ]
  },

  {
    id: 553,
    nombre: "Oud Cadenza",
    marca: "Maison Crivelli",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Oud",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "OUD-CADENZA.jpg",
    descripcion:
      "Una esencia de oud y ambarada, con un estilo intensa y distinguida que destaca con naturalidad.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Oud",
      "Ámbar",
      "Especiado"
    ]
  },

  {
    id: 554,
    nombre: "Oud Maracuja",
    marca: "Maison Crivelli",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Frutal",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "OUD_MARACUJA_MAISON_CRIVELLI.jpg",
    descripcion:
      "Una propuesta frutal y de oud, perfecta para quienes disfrutan de una fragancia alegre y vibrante.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Frutal",
      "Oud",
      "Ámbar"
    ]
  },

  {
    id: 555,
    nombre: "Baccarat Rouge 540",
    marca: "Maison Frances",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Ámbar",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "BACCARAT-ROUGE.png",
    descripcion:
      "Una fragancia ambarada y dulce que combina estilo y personalidad en una expresión cálida y sofisticada.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Ámbar",
      "Dulce",
      "Aéreo"
    ]
  },

  {
    id: 556,
    nombre: "Oud Silk Mood",
    marca: "Maison Frances",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "OUD-SILK-MOOD.png",
    descripcion:
      "Una composición floral y de oud, pensada para una presencia delicada y sofisticada y memorable.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Oud",
      "Ámbar"
    ]
  },

  {
    id: 557,
    nombre: "By the Fireplace",
    marca: "Maison Margiela",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Ahumado",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "BY_THE_FIREPLACE.jpg",
    descripcion:
      "Una fragancia ahumada y amaderada, con un carácter misteriosa y profunda que aporta distinción.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Ahumado",
      "Amaderado",
      "Dulce"
    ]
  },

  {
    id: 558,
    nombre: "Cedrat Boise",
    marca: "Mancera",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Cítrico",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "CEDRAT-BOISE.png",
    descripcion:
      "Una fragancia cítrica y amaderada, con una personalidad luminosa y energizante.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Cítrico",
      "Amaderado",
      "Aromático"
    ]
  },

  {
    id: 559,
    nombre: "Instant Crush",
    marca: "Mancera",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Cítrico",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "INSTAN_CRUSH.jpg",
    descripcion:
      "Una composición cítrica y amaderada que transmite una sensación luminosa y energizante.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Cítrico",
      "Amaderado",
      "Almizclado"
    ]
  },

  {
    id: 560,
    nombre: "Red Tobacco",
    marca: "Mancera",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Tabaco",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "MANCERA-RED-TOBACCO.png",
    descripcion:
      "Una fragancia de carácter de tabaco y especiada, ideal para quienes buscan una presencia cálida y con carácter.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Tabaco",
      "Especiado",
      "Ámbar"
    ]
  },

  {
    id: 561,
    nombre: "Falcon Leather",
    marca: "Matiere Premiere",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Cuero",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "FALCON-LEATHER.jpg",
    descripcion:
      "Una esencia de cuero y amaderada, con un estilo intensa y sofisticada que destaca con naturalidad.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Cuero",
      "Amaderado",
      "Ámbar"
    ]
  },

  {
    id: 562,
    nombre: "Parisian Musc",
    marca: "Matiere Premiere",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Almizclado",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "PARISIAN_MUSC.jpg",
    descripcion:
      "Una propuesta almizclada y floral, perfecta para quienes disfrutan de una fragancia limpia y sofisticada.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Almizclado",
      "Floral",
      "Ámbar"
    ]
  },

  {
    id: 563,
    nombre: "Vanilla Powder",
    marca: "Matiere Premiere",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Avainillado",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "VANILLA_POWDER_MATIERE_PREMIERE.jpg",
    descripcion:
      "Una fragancia avainillada y dulce que combina estilo y personalidad en una expresión cálida y reconfortante.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Avainillado",
      "Dulce",
      "Amaderado"
    ]
  },

  {
    id: 564,
    nombre: "Arabians Tonka",
    marca: "Montale",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Dulce",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "ARABIANS-TONKA2.png",
    descripcion:
      "Una composición dulce y ambarada, pensada para una presencia seductora y envolvente y memorable.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Dulce",
      "Ámbar",
      "Avainillado"
    ]
  },

  {
    id: 565,
    nombre: "Chocolate Greedy",
    marca: "Montale",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Gourmand",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "chocolate-greedy-01.png",
    descripcion:
      "Una fragancia gourmand y de chocolate, con un carácter dulce y envolvente que aporta distinción.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Gourmand",
      "Chocolate",
      "Dulce"
    ]
  },

  {
    id: 566,
    nombre: "Arabians",
    marca: "Montale",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Aromático",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "ARABIANS.png",
    descripcion:
      "Una fragancia intensa y sofisticada, con un carácter amaderado, especiado y elegante.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Aromático",
      "Amaderado",
      "Especiado"
    ]
  },

  {
    id: 567,
    nombre: "Rendez-Vous à Milan",
    marca: "Montale",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "MONTALE-REDES-VOUS-A-MILAN.png",
    descripcion:
      "Una composición floral y frutal que transmite una sensación delicada y sofisticada.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Frutal",
      "Dulce"
    ]
  },

  {
    id: 568,
    nombre: "Sensual Instinct",
    marca: "Montale",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Gourmand",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "SENSUAL_INSTINCT.png",
    descripcion:
      "Una fragancia de carácter gourmand y dulce, ideal para quienes buscan una presencia dulce y envolvente.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Gourmand",
      "Dulce",
      "Ámbar"
    ]
  },

  {
    id: 569,
    nombre: "Cocktail Maracuja",
    marca: "New Notes",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Frutal",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "COCKTAIL-MARACUJA.png",
    descripcion:
      "Una esencia frutal y cítrica, con un estilo alegre y vibrante que destaca con naturalidad.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Frutal",
      "Cítrico",
      "Dulce"
    ]
  },

  {
    id: 570,
    nombre: "Tero",
    marca: "Nishane",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Ámbar",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "TERO-NISAHNE-POST2.png",
    descripcion:
      "Una propuesta ambarada y amaderada, perfecta para quienes disfrutan de una fragancia cálida y sofisticada.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Ámbar",
      "Amaderado",
      "Especiado"
    ]
  },

  {
    id: 571,
    nombre: "Amber Rouge",
    marca: "Orientica",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Ámbar",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "AMBER-ROUGE.png",
    descripcion:
      "Una fragancia ambarada y dulce que combina estilo y personalidad en una expresión cálida y sofisticada.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Ámbar",
      "Dulce",
      "Almizclado"
    ]
  },

  {
    id: 572,
    nombre: "Azzure Fantasía",
    marca: "Orientica",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Oriental",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "AZZURE-FANTASU-ORIENTICA.png",
    descripcion:
      "Una composición oriental y dulce, pensada para una presencia moderna y sofisticada y memorable.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Oriental",
      "Dulce",
      "Amaderado"
    ]
  },

  {
    id: 573,
    nombre: "Oud Saffron",
    marca: "Orientica",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Oud",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "OUD-SAFFRON.png",
    descripcion:
      "Una fragancia de oud y especiada, con un carácter intensa y distinguida que aporta distinción.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Oud",
      "Especiado",
      "Ámbar"
    ]
  },

  {
    id: 574,
    nombre: "Megamare",
    marca: "Orto Parisi",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Marino",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "MEGAMARE.jpg",
    descripcion:
      "Una fragancia marina e intensa que evoca la fuerza del océano y una sensación profunda.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Marino",
      "Salado",
      "Aromático"
    ]
  },

  {
    id: 575,
    nombre: "Terroni",
    marca: "Orto Parisi",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Terroso",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "TERRONI-ORTOPARISI.png",
    descripcion:
      "Una composición terrosa y ambarada que transmite una sensación profunda y natural.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Terroso",
      "Ámbar",
      "Ahumado"
    ]
  },

  {
    id: 576,
    nombre: "Layton",
    marca: "Parfums De Marl",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "LAYTON.png",
    descripcion:
      "Una fragancia de carácter floral y frutal, ideal para quienes buscan una presencia delicada y sofisticada.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Frutal",
      "Ámbar"
    ]
  },

  {
    id: 577,
    nombre: "Kalan",
    marca: "Parfums De Marl",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Ámbar",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "KALAN.png",
    descripcion:
      "Una fragancia intensa y sofisticada, con un carácter ambarado, floral y amaderado.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Ámbar",
      "Floral",
      "Amaderado"
    ]
  },

  {
    id: 578,
    nombre: "Flamenco",
    marca: "Ramon Monegal",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Frutal",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "FLAMENCO.jpg",
    descripcion:
      "Una propuesta frutal y floral, perfecta para quienes disfrutan de una fragancia alegre y vibrante.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Frutal",
      "Floral",
      "Dulce"
    ]
  },

  {
    id: 579,
    nombre: "Hawas Black",
    marca: "Rasasi Hawas",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Aromático",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "HAWAS-BLACK.jpg",
    descripcion:
      "Una fragancia aromática y ambarada que combina estilo y personalidad en una expresión elegante y equilibrada.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Aromático",
      "Ámbar",
      "Amaderado"
    ]
  },

  {
    id: 580,
    nombre: "Hadar",
    marca: "Spirit Of Kings",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Ámbar",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "HADAR-spiritsofkings.png",
    descripcion:
      "Una composición ambarada y frutal, pensada para una presencia cálida y sofisticada y memorable.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Ámbar",
      "Frutal",
      "Amaderado"
    ]
  },

  {
    id: 581,
    nombre: "Al Contrario",
    marca: "Stephane Humber",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Ámbar",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "AL-CONTRARIO-TIZIANA-TERENZI.png",
    descripcion:
      "Una fragancia ambarada y amaderada, con un carácter cálida y sofisticada que aporta distinción.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Ámbar",
      "Amaderado",
      "Especiado"
    ]
  },

  {
    id: 582,
    nombre: "Andromeda",
    marca: "Stephane Humber",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "ANDROMEDA.png",
    descripcion:
      "Una fragancia floral y frutal, con una personalidad delicada y sofisticada.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Frutal",
      "Dulce"
    ]
  },

  {
    id: 583,
    nombre: "Cassiopea",
    marca: "Stephane Humber",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Frutal",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "CASSIOPEA.jpg",
    descripcion:
      "Una composición frutal y floral que transmite una sensación alegre y vibrante.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Frutal",
      "Floral",
      "Fresco"
    ]
  },

  {
    id: 584,
    nombre: "God of Fire",
    marca: "Stephane Humber",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Frutal",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "GOD-OF-FIRE.jpg",
    descripcion:
      "Una fragancia de carácter frutal y ambarada, ideal para quienes buscan una presencia alegre y vibrante.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Frutal",
      "Ámbar",
      "Dulce"
    ]
  },

  {
    id: 585,
    nombre: "Hayaati",
    marca: "Stephane Humber",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Frutal",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "hayaati-lataffa-post-Mesa-de-trabajo-1-copia-4.jpg",
    descripcion:
      "Una fragancia fresca y versátil, con una personalidad frutal, aromática y elegante.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Frutal",
      "Aromático",
      "Amaderado"
    ]
  },

  {
    id: 586,
    nombre: "Kirkè",
    marca: "Stephane Humber",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Cítrico",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "KIRK.png",
    descripcion:
      "Una propuesta cítrica y acuática, perfecta para quienes disfrutan de una fragancia luminosa y energizante.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Cítrico",
      "Acuático",
      "Fresco"
    ]
  },

  {
    id: 587,
    nombre: "Orza",
    marca: "Stephane Humber",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "ORZA.png",
    descripcion:
      "Una fragancia floral y frutal que combina estilo y personalidad en una expresión delicada y sofisticada.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Frutal",
      "Dulce"
    ]
  },

  {
    id: 588,
    nombre: "Telea",
    marca: "Stephane Humber",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Floral",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "TELEA_TIZIANA_TERENZI.jpg",
    descripcion:
      "Una composición floral y frutal, pensada para una presencia delicada y sofisticada y memorable.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Floral",
      "Frutal",
      "Ámbar"
    ]
  },

  {
    id: 589,
    nombre: "Tenerife",
    marca: "Superz Budapest",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Frutal",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "TENERIFE.jpg",
    descripcion:
      "Una fragancia alegre y luminosa, con una combinación frutal, cítrica y ligeramente dulce.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Frutal",
      "Cítrico",
      "Dulce"
    ]
  },

  {
    id: 590,
    nombre: "Ombré Leather",
    marca: "Tom Ford",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Cuero",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "OPMBRE_LEATHER_TOM_FORD.jpg",
    descripcion:
      "Una fragancia de cuero y amaderada, con una personalidad intensa y sofisticada.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Cuero",
      "Amaderado",
      "Ámbar"
    ]
  },

  {
    id: 591,
    nombre: "Tobacco Vanille",
    marca: "Tom Ford",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Tabaco",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "TOBACCO-VANILLE.png",
    descripcion:
      "Una composición de tabaco y avainillada que transmite una sensación cálida y con carácter.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Tabaco",
      "Avainillado",
      "Dulce"
    ]
  },

  {
    id: 592,
    nombre: "Costa Azzurra",
    marca: "Tom Ford",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Acuático",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "TOM-FORD-COSTA-AZZURA.jpg",
    descripcion:
      "Una fragancia de carácter acuática y cítrica, ideal para quienes buscan una presencia refrescante y envolvente.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Acuático",
      "Cítrico",
      "Amaderado"
    ]
  },

  {
    id: 593,
    nombre: "Soleil de Feu",
    marca: "Tom Ford",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Ámbar",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "TOM-FORD-SOLEIL-DE-FEU.png",
    descripcion:
      "Una esencia ambarada y especiada, con un estilo cálida y sofisticada que destaca con naturalidad.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Ámbar",
      "Especiado",
      "Floral"
    ]
  },

  {
    id: 594,
    nombre: "Alexandria II",
    marca: "Xerjoff",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Cítrico",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "ALEXANDRIA-II.jpg",
    descripcion:
      "Una propuesta cítrica y aromática, perfecta para quienes disfrutan de una fragancia luminosa y energizante.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Cítrico",
      "Aromático",
      "Amaderado"
    ]
  },

  {
    id: 595,
    nombre: "Levar de Sole",
    marca: "Xerjoff",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Cítrico",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "LEVAR-DE-SOLE.jpg",
    descripcion:
      "Una fragancia luminosa y sofisticada, con cítricos, maderas y un fondo cálido.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Cítrico",
      "Amaderado",
      "Ámbar"
    ]
  },

  {
    id: 596,
    nombre: "Naxos",
    marca: "Xerjoff",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Cítrico",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "XJ-NAXXOS-XERJOFF.png",
    descripcion:
      "Una composición cítrica y de tabaco, pensada para una presencia luminosa y energizante y memorable.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Cítrico",
      "Tabaco",
      "Avainillado"
    ]
  },

  {
    id: 597,
    nombre: "Z-25",
    marca: "Zakat",
    tipo: "Nicho",
    genero: "Unisex",
    familia: "Ámbar",
    precio: 0,
    destacado: false,
    disponible: true,
    imagen: "Z-25-ZAKAT.png",
    descripcion:
      "Una fragancia ambarada y amaderada, con un carácter cálida y sofisticada que aporta distinción.",
    presentaciones: [
      "30 ML",
      "60 ML",
      "100 ML"
    ],
    notas: [
      "Ámbar",
      "Amaderado",
      "Especiado"
    ]
  }
];