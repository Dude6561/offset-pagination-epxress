import * as p from "drizzle-orm/pg-core";

export const useTable = p.pgTable("users", {
  id: p.integer().primaryKey().generatedAlwaysAsIdentity(),
  name: p.varchar({ length: 35 }).notNull(),
  createdTime: p
    .timestamp("created_at ", { withTimezone: true })
    .defaultNow()
    .notNull(),
});
