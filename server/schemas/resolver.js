const { User } = require('../models');

const resolvers = {
  Query: {
    // get all users
    users: async () => {
      return User.find()
    }

  }
}

module.exports = resolvers