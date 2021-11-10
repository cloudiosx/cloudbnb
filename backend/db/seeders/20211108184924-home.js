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
            "https://res.cloudinary.com/dbtsjperv/image/upload/v1636415740/airbnb-homes-for-inspiration_kbfael.jpg",
          description: "Hi A",
          title: "Title A",
          name: "HOUSE A",
          address: "Address A",
          city: "City A",
          state: "State A",
          country: "Country A",
          price: "1000",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          imageUrl:
            "https://res.cloudinary.com/dbtsjperv/image/upload/v1636415741/9144ed81-427a-4c36-a3f0-878b55f5465f_ooufqj.webp",
          description: "Hi B",
          title: "Title B",
          name: "HOUSE B",
          address: "Address B",
          city: "City B",
          state: "State B",
          country: "Country B",
          price: "2000",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          imageUrl:
            "https://res.cloudinary.com/dbtsjperv/image/upload/v1636415741/maryland-airbnb-SOLOAIRBNBS0321_f4thbd.jpg",
          description: "Hi C",
          title: "Title C",
          name: "HOUSE C",
          address: "Address C",
          city: "City C",
          state: "State C",
          country: "Country C",
          price: "3000",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 4,
          imageUrl:
            "https://res.cloudinary.com/dbtsjperv/image/upload/v1636473673/Screen_Shot_2016-02-09_at_9.08.28_AM.0.0_m7gtd7.jpg",
          description: "Hi D",
          title: "Title D",
          name: "HOUSE D",
          address: "Address D",
          city: "City D",
          state: "State D",
          country: "Country D",
          price: "5000",
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
