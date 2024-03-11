

const allMenuItems = async (parent, {}, {prisma}) => {
  const menuItems = await prisma.menuItem.findMany();
  return menuItems;
};

export default allMenuItems;
