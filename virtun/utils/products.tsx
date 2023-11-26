export const products = [
    {
      id: "64a654593e91b8e73a351e9b",
      name: "Bowl de Pollo y Aguacate",
      description: "Delicioso bowl de pollo y aguacate, con un toque de limón y cilantro fresco para darle un sabor único.",
      price: 13500,
      category: "Salado",
      inStock: true,
      image: "https://firebasestorage.googleapis.com/v0/b/ecommerce-shop-cc542.appspot.com/o/products%2F1688622161445-iphone14-white.png?alt=media&token=fe2065e5-fdfe-4a6f-baa6-380b5fad90b8",
      reviews: [],
    },
    {
      id: "64a4ebe300900d44bb50628a",
      name: "Tacos de Carne de Cerdo",
      description:
        "6 Deliciosos tacos de carne de cerdo, con pico de gallo, guacamole y queso cheddar.",
      price: 14000,
      category: "Salado",
      inStock: true,
      image:
      "https://firebasestorage.googleapis.com/v0/b/ecommerce-shop-cc542.appspot.com/o/products%2F1688529886610-black-logitech-keyboard.jpg?alt=media&token=353aa276-1316-4e50-bc26-8e3828fe6cdd",
      reviews: [
        {
          id: "64a65a6158b470c6e06959ee",
          userId: "6475af156bad4917456e6e1e",
          productId: "64a4ebe300900d44bb50628a",
          rating: 5,
          comment: "buen sabor, buena cantidad",
          createdDate: "2023-07-06T06:08:33.067Z",
          user: {
            id: "6475af156bad4917456e6e1e",
            name: "Dolly Montoya",
            email: "babydolly@unal.edu.co",
            emailVerified: null,
            image:
              "https://lh3.googleusercontent.com/a/AAcHTteOiCtILLBWiAoolIW9PJH-r5825pBDl824_8LD=s96-c",
            hashedPassword: null,
            createdAt: "2023-05-30T08:08:53.979Z",
            updatedAt: "2023-05-30T08:08:53.979Z",
            role: "ADMIN",
          },
        },
      ],
    },
    {
      id: "648437b38c44d52b9542e340",
      name: "Creppes de Nutella",
      description:
        'Deliciosos creppes de nutella, con fresas y banano. ¡El postre perfecto!',
      price: 12500,
      category: "Dulce",
      inStock: true,
      image:
      "https://firebasestorage.googleapis.com/v0/b/ecommerce-shop-cc542.appspot.com/o/products%2F1686386608652-iphone12-red.jpg?alt=media&token=603a9e86-5b8c-4f8d-b61c-c1c77e60e954",

      reviews: [
        {
          id: "6499b4887402b0efd394d8f3",
          userId: "6499b184b0e9a8c8709821d3",
          productId: "648437b38c44d52b9542e340",
          rating: 4,
          comment:
            "Deliciosos justo después de perder un parcial. Tengo que probarlos de nuevo",
          createdDate: "2023-06-26T15:53:44.483Z",
          user: {
            id: "6499b184b0e9a8c8709821d3",
            name: "Chaoo",
            email: "ricardio@unal.edu.co",
            emailVerified: null,
            image:
              "https://lh3.googleusercontent.com/a/AAcHTtcuRLwWi1vPKaQOcJlUurlhRAIIq2LgYccE8p32=s96-c",
            hashedPassword: null,
            createdAt: "2023-06-26T15:40:52.558Z",
            updatedAt: "2023-06-26T15:40:52.558Z",
            role: "USER",
          },
        },
        {
          id: "6499a110efe4e4de451c7edc",
          userId: "6475af156bad4917456e6e1e",
          productId: "648437b38c44d52b9542e340",
          rating: 5,
          comment: "Me gustaron mucho, volveré a pedirlos",
          createdDate: "2023-06-26T14:30:40.998Z",
          user: {
            id: "6475af156bad4917456e6e1e",
            name: "Carlos",
            email: "carlosvives@unal.edu.co",
            emailVerified: null,
            image:
              "https://lh3.googleusercontent.com/a/AAcHTteOiCtILLBWiAoolIW9PJH-r5825pBDl824_8LD=s96-c",
            hashedPassword: null,
            createdAt: "2023-05-30T08:08:53.979Z",
            updatedAt: "2023-05-30T08:08:53.979Z",
            role: "ADMIN",
          },
        },
      ],
    },
    {
      id: "64a4e9e77e7299078334019f",
      name: "Torta de Tiramisú",
      description:
        "Deliciosa torta de tiramasú, con un toque de café y chocolate.",
      price: 7500,
      category: "Dulce",
      inStock: true,
      image:
      "https://firebasestorage.googleapis.com/v0/b/ecommerce-shop-cc542.appspot.com/o/products%2F1688529379028-logitech-graphite-mouse.jpg?alt=media&token=f9dfba29-832f-4c58-88c6-a7a0ae6b22bf",
      reviews: [],
    },
    {
      id: "649d775128b6744f0f497040",
      name: 'Cold Brew',
      description:
        'El mejor café frío de la UN, con un toque de leche y caramelo.',
      price: 5000,
      category: "Bebidas",
      inStock: true,
      image:
      "https://firebasestorage.googleapis.com/v0/b/ecommerce-shop-cc542.appspot.com/o/products%2F1688041295389-watch-silver.jpg?alt=media&token=7341e7f0-5c29-4f91-a7e3-57e50faafb74",
      reviews: [],
    },
  ];