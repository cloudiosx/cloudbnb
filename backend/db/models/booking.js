"use strict";
module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define(
    "Booking",
    {
      userId: DataTypes.INTEGER,
      homeId: DataTypes.INTEGER,
      startDate: DataTypes.DATE,
      endDate: DataTypes.DATE,
    },
    {}
  );
  Booking.associate = function (models) {
    Booking.belongsTo(models.User, { foreignKey: "userId" });
    Booking.belongsTo(models.Home, { foreignKey: "homeId" });
  };
  return Booking;
};
