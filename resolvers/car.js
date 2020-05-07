const resolvers = {
  Query: {
    cars: (_, __, { models }) => models.Car.findAll(),
    car: (parent, { id }, { models }) => models.Car.findByPk(id),
  },
  Mutation: {
    createCar: (
      parent,
      { model, colour, make, ownedBy: userId },
      { models }
    ) => {
      return models.Car.create({ model, colour, make, userId });
    },
    removeCar: (parent, { id }, { models }) => {
      return models.Car.destroy({
        where: {
          id,
        },
      });
    },
  },
  Car: {
    owner: (parent, _, { models }) => models.User.findByPk(parent.userId),
  },
};
module.exports = resolvers;
