import { menuItemTypeDef } from "./menuItem.typeDef.js";
import { orderTypeDef } from "./order.typeDef.js";

const typeDefs = `

${menuItemTypeDef}
${orderTypeDef}


type Query {
    allMenuItems: [MenuItem!]!
}

type Mutation {
    addMenuItem(menuItem: MenuItemInput!): MenuItem!
    addOrder(order: OrderInput!): Order!
}

type Subscription {
  newOrder: Order!
}
`;

export default typeDefs;
