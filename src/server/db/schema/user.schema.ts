import { sql } from "drizzle-orm";
import { text, timestamp } from "drizzle-orm/pg-core";
import { pgTable } from "./pgtable";

export const users = pgTable("user", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  username: text("username"),
  email: text("email").notNull().unique(),
  emailVerified: timestamp("emailVerified"),

  image: text("image"),
  bio: text("bio"),
  phone: text("phone_number"),
  dateOfBirth: timestamp("date_of_birth"),

  createdAt: timestamp("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updated_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
});

// You can also add indexes on any new fields that you may need to query often
