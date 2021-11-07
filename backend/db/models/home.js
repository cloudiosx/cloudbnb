"use strict";
module.exports = (sequelize, DataTypes) => {
  const Home = sequelize.define(
    "Home",
    {
      userId: DataTypes.INTEGER,
      name: DataTypes.STRING,
      address: DataTypes.STRING,
      city: DataTypes.STRING,
      state: DataTypes.STRING,
      country: DataTypes.STRING,
      price: DataTypes.DECIMAL,
    },
    {}
  );
  Home.associate = function (models) {
    Home.belongsTo(models.User, { foreignKey: "userId" });
    Home.hasMany(models.Review, { foreignKey: "homeId" });
    Home.hasMany(models.Booking, { foreignKey: "homeId" });
  };
  return Home;
};
