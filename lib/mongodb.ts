import { MongoClient } from "mongodb";

export const client = new MongoClient(process.env.MONGODB_URL as string);
export const database = client.db("b2b");
