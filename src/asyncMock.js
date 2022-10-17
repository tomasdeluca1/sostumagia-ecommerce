const productos = [
  {
    id: "4",
    name: "Volver a tu magia",
    description:
      "Dirigido a docentes y madres que quieran volver a mirarse, y regalarse un espacio de conexión emocional.",
    price: "2.000 ARS",
    category: "3",
    type: "Grabado",
    img: "../img/tu-magia.webp",
    stock: 10,
  },
  {
    id: "5",
    name: "Crecimiento en el aula",
    description: `Exploraremos presencialmente cómo acompañar el desarrollo de una "mente de chicle" en nuestros alumnos.`,
    price: "5.500 ARS",
    category: "1",
    type: "Presencial",
    img: "../img/educacion.jpeg",
    stock: 25,
  },
  {
    id: "6",
    name: "Acuarela para jugar",
    description:
      "Disparadores para darle rienda suelta a tu creatividad, soltarte e invitarte a jugar. Y sí!!! Está dirigido a grandes!",
    price: "3.600 ARS",
    category: "1",
    type: "Presencial",
    img: "../img/acuarelas.jpeg",
    stock: 100,
  },
  {
    id: "1",
    name: "Creatividad e innovación",
    description:
      "Herramientas para poder salir de bloqueos y salir adelante con nuevas e ingeniosas ideas.",
    price: "5.500 ARS",
    category: "2",
    type: "Online",
    img: "../img/creatividadInnovacion.jpg",
    stock: 15,
  },
  {
    id: "2",
    name: "Educación emocional",
    description:
      "Herramientas para crear espacios de conexión emocional en el aula y en el consultorio.",
    price: "4.200 ARS",
    category: "2",
    type: "Online",
    img: "../img/educacionEmocional.jpg",
    stock: 25,
  },
  {
    id: "3",
    name: "Autoconocimiento",
    description:
      "Guía ayudarte a encontrar a tu yo interior, un curso para realizar con vos mismo.",
    price: "3.600 ARS",
    category: "3",
    type: "Grabado",
    img: "../img/autoconocimiento.jpg",
    stock: 100,
  },
];

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productos);
    }, 200);
  });
};

export const getProductById = (itemId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos.find((prod) => prod.id === itemId));
    }, 200);
  });
};

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos.filter((prod) => prod.category === categoryId));
    }, 200);
  });
};
