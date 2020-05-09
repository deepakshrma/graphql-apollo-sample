const { DataTypes } = require("sequelize");

const car = (sequelize) => {
  const Car = sequelize.define("car", {
    make: {
      type: DataTypes.STRING,
    },
    model: {
      type: DataTypes.STRING,
    },
    colour: {
      type: DataTypes.STRING,
    },
  });
  Car.associate = (models) => {
    Car.belongsTo(models.User);
  };
  return Car;
};
module.exports = car;
