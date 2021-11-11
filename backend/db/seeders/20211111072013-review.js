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
      "Reviews",
      [
        {
          userId: 1,
          homeId: 1,
          review: "Fantastic A",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          homeId: 2,
          review: "Fantastic B",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          homeId: 3,
          review: "Fantastic C",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 4,
          homeId: 4,
          review: "Fantastic D",
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
    return queryInterface.bulkDelete("Reviews", null, {});
  },
};
