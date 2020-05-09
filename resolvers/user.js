const jwt = require("jsonwebtoken");

const createToken = ({ id, username, name }, secret, expiresIn) => {
  return jwt.sign({ id, username, name }, secret, { expiresIn });
};

const resolvers = {
  Query: {
    users: (_, __, { models }) => models.User.findAll(),
    user: (parent, { id }, { models }) => models.User.findByPk(id),
  },
  Mutation: {
    createUser: (_, { name }, { models }) => models.User.create({ name }),
    removeUser: (_, { id }, { models }) =>
      models.User.destroy({
        where: {
          id,
        },
      }),
    register: async (_, { name, username, password }, { models }) => {
      const user = { name, username, password };
      const registeredUser = await models.User.create(user);
      return typeof registeredUser.id === "number";
    },
    login: async (_, { username, password }, { models, secret }) => {
      const user = await models.User.findOne({ where: { username } });
      if (!user) throw Error("User not found!");
      const validatePassword = await user.validatePassword(password);
      if (!validatePassword) throw Error("Invalid User!");
      return {
        token: createToken(user, secret, "10m"),
      };
    },
  },
  User: {
    car: (parent, _, { models }) =>
      models.Car.findAll({
        where: {
          userId: parent.id,
        },
      }),
  },
};
module.exports = resolvers;
