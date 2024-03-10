import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const allMenuItems = async () => {
  const menuItems = await prisma.menuItem.findMany();
  return menuItems;
};

export default allMenuItems;
