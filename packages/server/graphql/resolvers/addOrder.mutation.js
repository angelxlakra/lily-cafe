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
  const today = moment().format("YYYY-MM-DD"); // time for today at 12:00 AM
  const utcOffset = moment().utcOffset();
  console.log({utcOffset});           // 330 minutes ~ +5:30 hours
  const utcToday = moment(today).add(-utcOffset, 'minutes') // subtract +5:30 hours to get UTC time of today
  console.log({
    // Yahaan pe format sirf time dekhne ke lie kiya hua hai 
    now: moment().add(-utcOffset, 'minutes').format("YYYY-MM-DD, LTS"),
    gte: utcToday.format("YYYY-MM-DD, LTS"),
    lt: moment(utcToday).add(1, "d").format("YYYY-MM-DD, LTS"),
  });
  const todayOrdersCount = await prisma.order.count({
    where: {
      createdAt: {
        // createdAt is in utc time so we converted both below times to utc
        gte: new Date(utcToday), // greater than equal to utc time of today
        lt: new Date(moment(utcToday).add(1, "d")), // less than utc time of next day
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

  // after creating order, we will decrease stock by quantity when order is confirmed

  return response;
};

export default addOrder;

// 11 march 1:49am > 11 march 12:00 am
// 11 march 1:49am < 12 march 12:00 am
