import { PrismaClient } from "@prisma/client";
import moment from "moment";
const prisma = new PrismaClient();

const addOrder = async (parent, args) => {
  const order = args.order;
  const items = await Promise.all(
    order.items.map(async (item) => {
      const menuItem = await prisma.menuItem.findUnique({
        where: { id: item.id },
      });

      const newItem = {
        id: menuItem.id,
        quantity: item.quantity,
        name: menuItem.name,
      };
      console.log({ newItem });
      return newItem;
    })
  );
  console.log({ items });
  const today = moment().utc().format("YYYY-MM-DD, h:mm:ss");
  console.log({
    gte: new Date(today),
    lt: new Date(moment(today).utc().add(1, "d").format("YYYY-MM-DD, h:mm:ss")),

  });
  const todayOrdersCount = await prisma.order.count({
    where: {
      createdAt: {
        gte: new Date(today),
        lt: new Date(moment(today).utc().add(1, "d").format("YYYY-MM-DD, h:mm:ss")),
      },
    },
  });
  const response = await prisma.order.create({
    data: {
      items,
      table: order.table,
      phone: order.phone,
      orderNo: todayOrdersCount + 1,
    },
  });
  return response;
};

export default addOrder;

// 11 march 1:49am > 11 march 12:00 am
// 11 march 1:49am < 12 march 12:00 am
