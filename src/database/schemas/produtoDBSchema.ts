import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { categoria } from "./categoriaProdutoDBSchema";
import { cliente } from "./clienteDBSchema";

export const produto = sqliteTable("Produto", {
  id: integer("Id").primaryKey({ autoIncrement: true }),
  nome: text("Nome").notNull(),
  descricao: text("Descricao").notNull(),
  preco: integer("Preco").notNull(),
  estoque: integer("Estoque").notNull(),
  categoriaId: integer("CategoriaId")
    .references(() => categoria.id)
    .notNull(),
  clienteId: integer("ClienteId").references(() => cliente.id),
  dataCadastro: text("DataCadastro").notNull(),
});
