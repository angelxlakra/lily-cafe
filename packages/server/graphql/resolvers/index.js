import allMenuItems from "./allMenuItems.query.js";
import addMenuItem from "./addMenuItem.mutation.js";
import addOrder from "./addOrder.mutation.js";

const resolvers = {
  Query: {
    allMenuItems,
  },
  Mutation: {
    addMenuItem,
    addOrder,
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
