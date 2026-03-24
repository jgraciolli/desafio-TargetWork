import { drizzle } from "drizzle-orm/expo-sqlite";
import { useMigrations } from "drizzle-orm/expo-sqlite/migrator";
import * as SQLite from "expo-sqlite";
import migrations from "../../drizzle/migrations";
import { schema } from "./schemas";

export const DATABASE_NAME = "desafioTW.db";

export const expoDB = SQLite.openDatabaseSync(DATABASE_NAME, {
  enableChangeListener: true,
});
export const db = drizzle(expoDB, { schema });
export const useAppMigrations = () => useMigrations(db, migrations);
export const schemas = schema;
export type Transaction = Parameters<Parameters<typeof db.transaction>[0]>[0];

export const seedCategorias = async () => {
  await db
    .insert(schema.categoria)
    .values([
      {
        nome: "Informática",
        descricao: "Computadores, notebooks, periféricos e acessórios",
      },
      {
        nome: "Celulares e Tablets",
        descricao: "Smartphones, tablets e acessórios",
      },
      { nome: "Eletrodomésticos", descricao: "Aparelhos para uso doméstico" },
      { nome: "Móveis", descricao: "Móveis para casa e escritório" },
      {
        nome: "Casa e Decoração",
        descricao: "Itens decorativos e utilidades domésticas",
      },
      { nome: "Papelaria", descricao: "Materiais de escritório e escolares" },
      {
        nome: "Esportes e Lazer",
        descricao: "Equipamentos esportivos e itens de lazer",
      },
      { nome: "Brinquedos", descricao: "Brinquedos e jogos infantis" },
      { nome: "Games", descricao: "Jogos eletrônicos e consoles" },
      {
        nome: "Automotivo",
        descricao: "Peças, acessórios e produtos para veículos",
      },
      { nome: "Ferramentas", descricao: "Ferramentas manuais e elétricas" },
      { nome: "Construção", descricao: "Materiais de construção e reforma" },
      { nome: "Pet Shop", descricao: "Produtos para animais de estimação" },
      { nome: "Saúde", descricao: "Produtos de saúde e bem-estar" },
      { nome: "Farmácia", descricao: "Medicamentos e produtos farmacêuticos" },
      {
        nome: "Joias e Acessórios",
        descricao: "Bijuterias, relógios e acessórios pessoais",
      },
      { nome: "Calçados", descricao: "Sapatos, tênis e sandálias" },
      { nome: "Moda Íntima", descricao: "Roupas íntimas e de dormir" },
      { nome: "Bolsas e Mochilas", descricao: "Bolsas, mochilas e malas" },
      { nome: "Livros", descricao: "Livros físicos e materiais de leitura" },
      {
        nome: "Música e Instrumentos",
        descricao: "Instrumentos musicais e acessórios",
      },
      { nome: "Filmes e Séries", descricao: "DVDs, Blu-rays e mídias" },
      {
        nome: "Bebês",
        descricao: "Produtos para recém-nascidos e crianças pequenas",
      },
      { nome: "Limpeza", descricao: "Produtos de limpeza doméstica" },
      { nome: "Utilidades Domésticas", descricao: "Itens diversos para o lar" },
      { nome: "Iluminação", descricao: "Lâmpadas e luminárias" },
      {
        nome: "Segurança",
        descricao: "Câmeras, alarmes e sistemas de segurança",
      },
      { nome: "Jardinagem", descricao: "Ferramentas e itens para jardim" },
      {
        nome: "Indústria e Comércio",
        descricao: "Equipamentos industriais e comerciais",
      },
      {
        nome: "Produtos Digitais",
        descricao: "Softwares, licenças e conteúdos digitais",
      },
    ])
    .onConflictDoNothing();
};
