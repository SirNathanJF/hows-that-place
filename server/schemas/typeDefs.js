const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String
    email: String
    password: String
  }
  type Pin {
    username: String,
    title: String,
    desc: String,
    rating: Int,
    long: Int,
    lat: Int,
  }
  type Auth {
    token: ID
    user: User
  }
  type Query {
    users: [User]
    pins(userId: ID!): [Pin]
    pin(pinId: ID!): Pin
    me: User
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    createPin(
      title: String
      desc: String
      rating: Int
      long: Int
      lat: Int
    ): Pin 
    }`;

module.exports = typeDefs;