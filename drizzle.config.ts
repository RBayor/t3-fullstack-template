import { type Config } from "drizzle-kit";

import { env } from "@/env.mjs";

export default {
  driver: "pg",
  schema: "./src/server/db/schema/*.ts",
  out: "./drizzle",
  dbCredentials: {
    connectionString: env.DATABASE_URL,
  },
  tablesFilter: ["your_prefix_*"], //TODO: Change this filter to match your table filter pattern
  verbose: true,
} satisfies Config;
