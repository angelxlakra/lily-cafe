import { createServer } from "node:http";
import { createYoga } from "graphql-yoga";
import schema from "./graphql/schema.js";
import { PubSub } from "graphql-subscriptions";
import { PrismaClient } from "@prisma/client";

const pubsub = new PubSub();
const prisma = new PrismaClient();
// Create a Yoga instance with a GraphQL schema.
const yoga = createYoga({ schema, context: ({request, response})=> ({request, response, pubsub, prisma}) });

// Pass it into a server to hook into request handlers.
const server = createServer(yoga);

// Start the server and you're done!
server.listen(4000, () => {
  console.info("Server is running on http://localhost:4000/graphql");
});
