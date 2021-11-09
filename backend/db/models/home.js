"use strict";
module.exports = (sequelize, DataTypes) => {
  const Home = sequelize.define(
    "Home",
    {
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      address: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      city: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      state: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      country: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      price: {
        allowNull: false,
        type: DataTypes.DECIMAL,
      },
    },
    {}
  );
  Home.associate = function (models) {
    Home.belongsTo(models.User, { foreignKey: "userId" });
    Home.hasMany(models.Review, { foreignKey: "homeId" });
    Home.hasMany(models.Booking, { foreignKey: "homeId" });
    Home.hasMany(models.Image, { foreignKey: "homeId" });
  };
  return Home;
};
