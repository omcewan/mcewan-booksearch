// import the gql tagged template function
const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    saveBooks: [Book]
  }

  type Book {
    bookId: String
    authors: [String]
    descriptin: String
    title: String
    image: String
    link: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
  } 
  
  type Mutation {

  }
`;

module.exports = typeDefs;
