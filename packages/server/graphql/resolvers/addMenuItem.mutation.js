import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const addMenuItem = async (parent, args) => {
  const newMenuItem = args.menuItem;
  prisma.menuItem
    .create({
      data: newMenuItem,
    })
    .then((response) => {
      console.log({ response });
      return response;
    });
};

export default addMenuItem;
