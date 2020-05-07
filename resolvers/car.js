const resolvers = {
  Query: {
    cars: (_, __, { models: { cars } }) => cars,
    car: (parent, { id }, { models: { cars } }) => cars.find((x) => x.id == id),
  },
  Mutation: {
    createCar: (parent, { id, name }, { models: { cars } }) => {
      const data = { id, name };
      cars.push(data);
      return data;
    },
    removeCar: (parent, { id }, { models: { cars } }) => {
      const index = cars.findIndex((data) => data.id === id);
      return index !== -1 ? !!cars.splice(index, 1) : false;
    },
  },
  Car: {
    owner: (parent, _, { models: { users } }) =>
      users.find((x) => x.id === parent.ownedBy),
  },
};
module.exports = resolvers;
