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
      return newItem;
    })
  );
  const today = moment().format("YYYY-MM-DD");
  const utcOffset = moment().utcOffset();
  console.log({utcOffset});
  const utcToday = moment(today).add(-utcOffset, 'minutes')
  console.log({
    now: moment().add(-utcOffset, 'minutes').format("YYYY-MM-DD, LTS"),
    gte: utcToday.format("YYYY-MM-DD, LTS"),
    lt: moment(utcToday).add(1, "d").format("YYYY-MM-DD, LTS"),
  });
  const todayOrdersCount = await prisma.order.count({
    where: {
      createdAt: {
        gte: new Date(utcToday),
        lt: new Date(moment(utcToday).add(1, "d")),
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
