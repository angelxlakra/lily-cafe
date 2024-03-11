export const orderTypeDef = `
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
  `;
