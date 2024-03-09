import { PrismaClient } from "@prisma/client";
import allMenuItems from "./allMenuItems.js";
import addMenuItem from "./addMenuItem.mutation.js";

const prisma = new PrismaClient();

const resolvers = {
  Query: {
    allMenuItems,
    login: () => {
      return { message: "happy happy happy", jwt: "this is your jwt" };
    },
  },
  Mutation: {
    addMenuItem,
  }
};

export default resolvers;
