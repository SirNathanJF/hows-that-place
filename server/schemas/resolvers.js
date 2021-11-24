const { AuthenticationError } = require("apollo-server-errors");
const { User} = require("../models/User");
const { Pin } = require("../models/Pin");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find({});
    },
  }
}

module.exports = resolvers;