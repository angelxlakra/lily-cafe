const typeDefs = `
type MenuItem {
  id: ID!
  name: String!
  type: String!
  description: String!
  basePrice: Float!
  veg: Boolean
  nonVeg: Boolean
  egg: Boolean
  stock: Int!
}

input MenuItemInput {
    
    name: String!
    type: String!
    description: String!
    basePrice: Float!
    veg: Boolean
    nonVeg: Boolean
    egg: Boolean
    stock: Int!
  }

type LoginReturn {
    message: String
    jwt: String!
}

type Query {
    allMenuItems: [MenuItem!]!
    login: LoginReturn!
}

type Mutation {
    addMenuItem(menuItem: MenuItemInput!): MenuItem!
}
`;

export default typeDefs;
