const { sequelize } = require("./models/database");

const models = require("./models");

const createData = async () => {
  await models.User.create(
    {
      name: "Deepak",
      username: "deepak",
      password: "test1",
      cars: [{ make: "Porsche", model: "911", colour: "red" }],
    },
    { include: [models.Car] }
  );
  await models.User.create(
    {
      name: "Ram",
      username: "ram",
      password: "test2",
      cars: [
        { make: "Porsche", model: "911", colour: "red" },
        { make: "Nissan", model: "GT-R", colour: "green" },
      ],
    },
    { include: [models.Car] }
  );
};
// sequelize.transaction(function (t) {
//   var options = { raw: true, transaction: t };
//   return sequelize
//     .query("SET FOREIGN_KEY_CHECKS = 0", options)
//     .then(function () {
//       return sequelize.query("truncate table users", options);
//     })
//     .then(function () {
//       return sequelize.query("truncate table cars", options);
//     })
//     .then(function () {
//       return sequelize.query("SET FOREIGN_KEY_CHECKS = 1", options);
//     })
//     .then(async () => {
//       try {
//         await createData();
//         process.exit();
//       } catch (e) {
//         console.log(e);
//       }
//     });
// });
sequelize.sync({ force: true }).then(async () => {
  try {
    await createData();
    process.exit();
  } catch (e) {
    console.log(e);
  }
});
