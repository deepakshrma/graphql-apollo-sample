const { sequelize } = require("./database");

const UserModel = sequelize.import("./user");
const CarModel = sequelize.import("./car");
const models = {
  User: UserModel,
  Car: CarModel,
};
Object.keys(models).forEach((k) => {
  if ("associate" in models[k]) {
    console.log(k, models[k]);
    models[k].associate(models);
  }
});
module.exports = models;
