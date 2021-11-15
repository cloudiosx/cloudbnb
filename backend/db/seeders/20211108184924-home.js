"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert(
      "Homes",
      [
        {
          userId: 1,
          imageUrl:
            "https://res.cloudinary.com/dbtsjperv/image/upload/v1636987850/9d928940-f0d1-4504-99d3-b69a5f737012_jmr6vd.webp",
          description:
            "At the beginning, the Lagöm is a swedish way of life: how to live well with less! With its large windows, the Lagöm offers you a totale immersion on the nature with a breathtaking view on the mountains and the Saint Laurent river. ",
          title: "Le Lagöm MIRADORS",
          name: "Tiny house hosted by Laury Jane",
          address: "1453 Bay Street",
          city: "Lac-Beauport",
          state: "Québec",
          country: "Canada",
          price: "289",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          imageUrl:
            "https://res.cloudinary.com/dbtsjperv/image/upload/v1636988091/fb27c6b9-0f8d-4f46-b319-e5e680d85112_hhvybj.webp",
          description:
            "Hip solar home ONE HOUR AND 20 MINUTES SOUTH OF MARFA. Just 20 minutes from Chinati Hot Springs. Fully furnished. True artists retreat with world class views. 2 bedrooms 3 baths. Cooks kitchen. Need only bring groceries. ",
          title: "Modern Solar Home",
          name: "Entire residential home hosted by Michael",
          address: "2568 St. John Street",
          city: "Marfa",
          state: "Texas",
          country: "United States",
          price: "550",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          imageUrl:
            "https://res.cloudinary.com/dbtsjperv/image/upload/v1636988203/976946b8-c3cc-49c1-8905-cf146dd26402_yduyuq.webp",
          description:
            "Looking for a true Colorado mountain experience? You've found it! The Living House is a serene, earth-friendly, self-sustaining solar home on 40 acres, tucked into a hillside high above Durango yet only minutes from town. ",
          title: "Incredible Views for Miles",
          name: "Entire residential home hosted by Durango Colorado",
          address: "1548 Harvest Moon Dr",
          city: "Durango",
          state: "Colorado",
          country: "United States",
          price: "357",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 4,
          imageUrl:
            "https://res.cloudinary.com/dbtsjperv/image/upload/v1636988422/7e1b66b8-47f8-41a6-bcb5-084b81b27674_yme9d3.webp",
          description:
            "Unique experience ! Clean/Sanitize and secluded. Enjoy a weekend or a few days eco-friendly retreat in an architectural, geometric masterpiece on 30 preserved acres just minutes from all that Rhinebeck and the Hudson Valley have to offer. ",
          title: "Architectural wonder",
          name: "Entire residential home hosted by Sarah",
          address: "1669 Blanshard",
          city: "Rhinebeck",
          state: "New York",
          country: "United States",
          price: "450",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          imageUrl:
            "https://res.cloudinary.com/dbtsjperv/image/upload/v1636988593/277aed14-970b-4f1f-98b5-7cf41906d053_qsadnd.webp",
          description:
            "Eaton House Studio delivers fully bespoke work and leisure experiences in extraordinary surroundings. Our home is THE pink house with flamingos and unicorns. The perfect place for celebrating a special occasion with family and friends.",
          title: "Desert Bubble Stargazing",
          name: "Dome house hosted by Karen",
          address: "4650 St Jean Baptiste St",
          city: "Joshua Tree",
          state: "California",
          country: "United States",
          price: "895",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          imageUrl:
            "https://res.cloudinary.com/dbtsjperv/image/upload/v1636988684/d15bb6c1-3870-4f47-b5f6-d7f4e321eea8_bxrvxn.webp",
          description:
            "Unique experience ! Clean/Sanitize and secluded. Enjoy a weekend or a few days eco-friendly retreat in an architectural, geometric masterpiece on 30 preserved acres just minutes from all that Rhinebeck and the Hudson Valley have to offer.",
          title: "The Pink House",
          name: "Entire residential home hosted by Eaton House Studio",
          address: "2695 Nelson Street",
          city: "Tiptree",
          state: "Essex",
          country: "United Kingdom",
          price: "3219",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          imageUrl:
            "https://res.cloudinary.com/dbtsjperv/image/upload/v1636988778/147f068f-b2d2-4d27-92f0-b93c7c772463_qpjis2.webp",
          description:
            "Découvrez l'univers magique de la cabane Drommen, unique en France. Avec 4 niveaux : le salon, puis le toilette, puis la chambre. Enfin, vous pourrez diner sur la terrasse perché.",
          title: "Cabane Drommen",
          name: "Treehouse hosted by Jean-Marie",
          address: "326 rue Saint-Édouard",
          city: "Guyonvelle",
          state: "Grand Est",
          country: "France",
          price: "91",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 4,
          imageUrl:
            "https://res.cloudinary.com/dbtsjperv/image/upload/v1636988873/e5e479c0_original_pb3end.webp",
          description:
            "Beautiful 4 bedroom architecturally designed villa, with infinity pool and floor to ceiling views in almost every room of the sea and Cap de Creus national park, in beautiful working fishing village in Northern Spain.",
          title: "Sunflower House",
          name: "Entire residential home hosted by Geoff",
          address: "2384 Priddis Greens Drive",
          city: "El Port de la Selva",
          state: "Catalonia",
          country: "Spain",
          price: "343",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          imageUrl:
            "https://res.cloudinary.com/dbtsjperv/image/upload/v1636988948/6b51c331_original_kglblf.webp",
          description:
            "Continually awarded the best sunset in the world, Oia in Santorini draws travelers from all over the world just to see this magnificent sight. A luxurious retreat carved out of a white washed windmill that Santorini is famous for. ",
          title: "Green Windmill",
          name: "Windmill hosted by Nikos",
          address: "1606 Brew Creek Rd",
          city: "Imerovigli",
          state: "Santorini",
          country: "Greece",
          price: "286",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          imageUrl:
            "https://res.cloudinary.com/dbtsjperv/image/upload/v1636989026/a5b6a9c3-f080-49d7-a94c-b1e10fb8b989_wpwluy.webp",
          description:
            "Quite unlike any room you have ever stayed in before, our 35m2 bio-architecture bamboo dome has a powerful healing effect on all who stay there. The Dome accommodates 2 guests with the option to add another person at additional charge.",
          title: "Villa Akasha",
          name: "Private room in dome house hosted by NewEarth Haven",
          address: "2976 Sherbrooke Ouest",
          city: "Ubud",
          state: "Bali",
          country: "Indonesia",
          price: "50",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          imageUrl:
            "https://res.cloudinary.com/dbtsjperv/image/upload/v1636989185/caf13aea-27ca-4134-a45d-c83e89894b04_kxpcg2.webp",
          description:
            "Kilcolgan Castle offers guests privacy and advice on touring the area if wanted. Close to the Burren, Connemara, Aran Islands and Cliffs of Moher for day trips. Short drive to Galway City.",
          title: "Private Castle",
          name: "Castle hosted by David",
          address: "537 Mt Edward Rd",
          city: "Kilcolgan",
          state: "Galway",
          country: "Ireland",
          price: "474",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 4,
          imageUrl:
            "https://res.cloudinary.com/dbtsjperv/image/upload/v1636989267/c6e0f7b4-401d-4195-9337-09a0578809e3_h3xa0e.webp",
          description:
            "A 19-century Italianate Victorian-architectural masterpiece restored by renown architect Maya Lin. Each bedroom is designed with a theme. Glass-in dining porch, billiard & ping pong table, karaoke, BBQ grill, tennis court.",
          title: "Mount Crescent House",
          name: "Entire residential home hosted by Huey Min",
          address: "4888 Victoria Park Ave",
          city: "Norwich",
          state: "Connecticut",
          country: "United States",
          price: "836",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete("Homes", null, {});
  },
};
