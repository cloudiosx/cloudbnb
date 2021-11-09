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
      "Images",
      [
        {
          homeId: 1,
          url: "https://res.cloudinary.com/dbtsjperv/image/upload/v1636415740/airbnb-homes-for-inspiration_kbfael.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          homeId: 2,
          url: "https://res.cloudinary.com/dbtsjperv/image/upload/v1636415741/9144ed81-427a-4c36-a3f0-878b55f5465f_ooufqj.webp",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          homeId: 3,
          url: "https://res.cloudinary.com/dbtsjperv/image/upload/v1636415741/maryland-airbnb-SOLOAIRBNBS0321_f4thbd.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          homeId: 4,
          url: "https://res.cloudinary.com/dbtsjperv/image/upload/v1636473673/Screen_Shot_2016-02-09_at_9.08.28_AM.0.0_m7gtd7.jpg",
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
    return queryInterface.bulkDelete("Images", null, {});
  },
};
