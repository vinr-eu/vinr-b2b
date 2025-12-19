import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { client, database } from "@/lib/mongodb";
import { admin } from "better-auth/plugins";
import { organization } from "better-auth/plugins";
import { twoFactor } from "better-auth/plugins";

export const auth = betterAuth({
  database: mongodbAdapter(database, {
    client,
  }),
  emailAndPassword: {
    enabled: true,
  },
  plugins: [admin(), organization(), twoFactor()],
});
