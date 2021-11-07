"use strict";
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define(
    "Review",
    {
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      homesId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      review: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {}
  );
  Review.associate = function (models) {
    Review.belongsTo(models.User, { foreignKey: "userId" });
    Review.belongsTo(models.Home, { foreignKey: "homeId" });
  };
  return Review;
};
