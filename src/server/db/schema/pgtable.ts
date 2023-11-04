import { pgTableCreator } from "drizzle-orm/pg-core";

export const pgTable = pgTableCreator((name) => `your_prefix_${name}`); // TODO: change this prefix
