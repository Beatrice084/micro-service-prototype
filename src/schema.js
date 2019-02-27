const { gql } = require('apollo-server');

const typeDefs = gql`

type Query {
  users(guid: ID): [User]!
  user(guid: ID): User
}

type Mutation {
  createUser(user: CreateUserInput!): User!
  deleteUser(guid: ID!): Boolean!
  updateUser(user: UpdateUserInput!): User!
}

type User {
  """User"""
  guid: ID!
  username: String!
}

input CreateUserInput {
  guid: Int!
  username: String!
}

input UpdateUserInput {
  guid: Int
  username: String
}

`

module.exports = typeDefs;