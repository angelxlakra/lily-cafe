export const menuItemTypeDef = `
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
    `;
