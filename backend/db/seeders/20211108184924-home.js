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
