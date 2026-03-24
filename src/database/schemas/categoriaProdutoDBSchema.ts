import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const categoria = sqliteTable("CategoriaProduto", {
  id: integer("Id").primaryKey({ autoIncrement: true }),
  nome: text("Nome").notNull().unique(),
  descricao: text("Descricao").notNull().default(""),
});
