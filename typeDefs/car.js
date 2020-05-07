const { gql } = require("apollo-server-express");

const typeDefs = gql`
  extend type Query {
    cars: [Car]
    car(id: Int!): Car
  }

  extend type Mutation {
    createCar(id: ID!, model: String!): Car!
    removeCar(id: Int!): Boolean
  }

  type Car {
    id: Int!
    model: String!
    make: String!
    owner: User!
  }
`;
module.exports = typeDefs;
