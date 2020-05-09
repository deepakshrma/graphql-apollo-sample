const { sequelize } = require("./database");

const UserModel = require("./user")(sequelize);
const CarModel = require("./car")(sequelize);
const models = {
  User: UserModel,
  Car: CarModel,
};
Object.keys(models).forEach((k) => {
  if ("associate" in models[k]) {
    models[k].associate(models);
  }
});
module.exports = models;
