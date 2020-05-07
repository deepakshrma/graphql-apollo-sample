const { gql } = require("apollo-server-express");

const typeDefs = gql`
  extend type Query {
    users: [User]
    user(id: Int!): User
  }

  extend type Mutation {
    createUser(name: String!): User!
    removeUser(id: Int!): Boolean
  }

  type User {
    id: Int!
    name: String!
    car: [Car]
  }
`;
module.exports = typeDefs;
