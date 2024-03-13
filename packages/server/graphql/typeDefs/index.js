import { loginTypeDef } from "./login.typeDef.js";
import { menuItemTypeDef } from "./menuItem.typeDef.js";
import { orderTypeDef } from "./order.typeDef.js";

const typeDefs = `

${menuItemTypeDef}
${orderTypeDef}
${loginTypeDef}


type Query {
    allMenuItems: [MenuItem!]!
}

type Mutation {
    addMenuItem(menuItem: MenuItemInput!): MenuItem!
    addOrder(order: OrderInput!): Order!
    sendOtp(phone: String!): OTPResponse!
    verifyOtp(phone: String!, otp: String!): OTPResponse!
}

type Subscription {
  newOrder: Order!
}

`;

export default typeDefs;
