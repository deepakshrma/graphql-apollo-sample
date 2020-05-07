const resolvers = {
  Query: {
    users: (_, __, { models: { users } }) => users,
    user: (parent, { id }, { models: { users } }) =>
      users.find((x) => x.id == id),
    me: (_, __, { models: { users } }) => users[0],
  },
  Mutation: {
    createUser: (_, { id, name }, { models: { users } }) => {
      const data = { id, name };
      users.push(data);
      return data;
    },
    removeUser: (_, { id }, { models: { users } }) => {
      const index = users.findIndex((user) => user.id === id);
      return index !== -1 ? !!users.splice(index, 1) : false;
    },
  },
  User: {
    car: (user, _, { models: { cars } }) =>
      user.cars.map((id) => cars.find((x) => x.id === id)),
  },
};
module.exports = resolvers;
