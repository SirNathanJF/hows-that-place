const { AuthenticationError } = require("apollo-server-errors");
const { User} = require("../models/User");
const { Pin } = require("../models/Pin");
const { signToken } = require("../utils/auth");
const { Types } = require("mongoose");

  const resolvers = {
    Query: {
      users: async () => {
        return User.find({});
      },
      me: async (parent, args, context) => {
        if (context.user) {
          return await User.findOne({ _id: context.user._id });
        }
        throw new AuthenticationError("Not logged in");
      },
      pins: async (parent, { userId }) => {
        return await Pin.find({
          users: Types.ObjectId(userId),
        });
      },
      pin: async (parent, { pinId }) => {
        // Return everything in each array
        return await Pin.findOne({ _id: pinId }).populate(["users"]);
      },
    },
    Mutation: {
      login: async (parent, { email, password }) => {
        const user = await User.findOne({ email });
  
        if (!user) {
          throw new AuthenticationError("Invalid email or password");
        }
  
        const correctPw = await user.isCorrectPassword(password);
  
        if (!correctPw) {
          throw new AuthenticationError("Invalid email or password");
        }
  
        const token = signToken(user);
        return { token, user };
      },
      addUser: async (parent, { username, email, password }) => {
        const user = await User.create({ username, email, password });
        if (!user) {
          return res.status(400).json({ message: "Something is wrong!" });
        }
        const token = signToken(user);
        return { token, user };
      },
      createPin: async (
        parent,
        { username, title, desc, rating, long, lat },
        context
      ) => {
        const pin = await Pin.create({
          username,
          title,
          desc,
          rating,
          long,
          lat
        });
}}}

module.exports = resolvers;