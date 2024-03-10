import { PrismaClient } from "@prisma/client";
import allMenuItems from "./allMenuItems.query.js";
import addMenuItem from "./addMenuItem.mutation.js";
import addOrder from "./addOrder.mutation.js";

const prisma = new PrismaClient();

const resolvers = {
  Query: {
    allMenuItems,
  },
  Mutation: {
    addMenuItem,
    addOrder,
  },
};

export default resolvers;
