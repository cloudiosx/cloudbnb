"use strict";
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define(
    "Image",
    {
      homeId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      url: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {}
  );
  Image.associate = function (models) {
    Image.belongsTo(models.Home, { foreignKey: "homeId" });
  };
  return Image;
};
