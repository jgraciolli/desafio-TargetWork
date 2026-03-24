import * as categoriaProdutoDBSchema from "./categoriaProdutoDBSchema";
import * as clienteDBSchema from "./clienteDBSchema";

export const schema = {
  ...clienteDBSchema,
  ...categoriaProdutoDBSchema,
};
