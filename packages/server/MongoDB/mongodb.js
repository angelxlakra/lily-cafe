import { MongoClient } from "mongodb";

const uri = "mongodb://localhost:27017";
const dbName = "lily-cafe";
const client = MongoClient(uri);
const db = client.db(dbName);

export default db;
