const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const app = express();
const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");
const models = require("./models");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    models,
  },
});

server.applyMiddleware({ app });

app.listen(3000, () => console.info("Apollo server is running on : 3000"));
