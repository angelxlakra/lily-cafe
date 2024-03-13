import allMenuItems from "./allMenuItems.query.js";
import addMenuItem from "./addMenuItem.mutation.js";
import addOrder from "./addOrder.mutation.js";
import sendOtp from "./sendOtp.mutation.js";
import verifyOtp from "./verifyOtp.mutation.js";

const resolvers = {
  Query: {
    allMenuItems,
  },
  Mutation: {
    addMenuItem,
    addOrder,
    sendOtp,
    verifyOtp
  },
  Subscription: {
    newOrder: {
      subscribe: (parent, {}, {pubsub}) => {
        return pubsub.asyncIterator("newOrder");
      },
      resolve: (payload) => {
        return payload.createdOrder;
      }
    }
  }
};

export default resolvers;
