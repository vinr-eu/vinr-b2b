import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { client, database } from "@/lib/mongodb";

export const auth = betterAuth({
  database: mongodbAdapter(database, {
    client,
  }),
  emailAndPassword: {
    enabled: true,
  },
});
