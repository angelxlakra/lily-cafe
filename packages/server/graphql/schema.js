import { createSchema } from "graphql-yoga";
import typeDefs from "./typeDefs/index.js";
import resolvers from "./resolvers/index.js";

const schema = createSchema({
  typeDefs,
  resolvers,
});

export default schema;
