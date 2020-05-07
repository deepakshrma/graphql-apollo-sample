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
