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

  type Order {
    id: ID!
    createdAt: String!
    items: [OrderItems!]!
    table: Int!
    orderNo: Int!
    confirmed: Boolean!
    served: Boolean!
    paid: Boolean!
    paymentForm: String
    phone: String!
  }

  input OrderInput {
    table: Int!
    phone: String!
    items: [OrderItemsInput!]!
  }

  type OrderItems {
    id: ID!
    quantity: Float!
    name: String
    additional: String
  }

  input OrderItemsInput {
    id: ID!
    quantity: Float!
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
    addOrder(order: OrderInput!): Order!
}
`;

export default typeDefs;
