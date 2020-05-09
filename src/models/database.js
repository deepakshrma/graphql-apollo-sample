const Sequelize = require("sequelize");
const sequelize = new Sequelize("graphql", "root", "password", {
  dialect: "mysql",
  operatorsAlias: false,
  define: {
    timestamps: false,
  },
});

module.exports = { sequelize };
