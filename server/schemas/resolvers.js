const { User } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth.js');

const resolvers = {
  Query: {
    // get all users
    users: async () => {
      return User.find()
    }
  }, 

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args)
      const token = signToken(user)
      return {token, user}
    }
  }
}

module.exports = resolvers