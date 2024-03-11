const addMenuItem = async (parent, args, { prisma }) => {
  const newMenuItem = args.menuItem;
  const response = await prisma.menuItem.create({
    data: newMenuItem,
  });

  console.log({ response });
  return response;
};

export default addMenuItem;
