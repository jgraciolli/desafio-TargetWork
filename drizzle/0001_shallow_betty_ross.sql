CREATE TABLE `CategoriaProduto` (
	`Id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`Nome` text NOT NULL,
	`Descricao` text DEFAULT '' NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `CategoriaProduto_Nome_unique` ON `CategoriaProduto` (`Nome`);--> statement-breakpoint
CREATE TABLE `Produto` (
	`Id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`Nome` text NOT NULL,
	`Descricao` text NOT NULL,
	`Preco` integer NOT NULL,
	`Estoque` integer NOT NULL,
	`CategoriaId` integer NOT NULL,
	`ClienteId` integer,
	`DataCadastro` text NOT NULL,
	FOREIGN KEY (`CategoriaId`) REFERENCES `CategoriaProduto`(`Id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`ClienteId`) REFERENCES `Cliente`(`Id`) ON UPDATE no action ON DELETE no action
);

INSERT OR IGNORE INTO `CategoriaProduto` (Nome, Descricao) VALUES
('Informática', 'Computadores, notebooks, periféricos e acessórios'),
('Celulares e Tablets', 'Smartphones, tablets e acessórios'),
('Eletrodomésticos', 'Aparelhos para uso doméstico'),
('Móveis', 'Móveis para casa e escritório'),
('Casa e Decoração', 'Itens decorativos e utilidades domésticas'),
('Papelaria', 'Materiais de escritório e escolares'),
('Esportes e Lazer', 'Equipamentos esportivos e itens de lazer'),
('Brinquedos', 'Brinquedos e jogos infantis'),
('Games', 'Jogos eletrônicos e consoles'),
('Automotivo', 'Peças, acessórios e produtos para veículos'),
('Ferramentas', 'Ferramentas manuais e elétricas'),
('Construção', 'Materiais de construção e reforma'),
('Pet Shop', 'Produtos para animais de estimação'),
('Saúde', 'Produtos de saúde e bem-estar'),
('Farmácia', 'Medicamentos e produtos farmacêuticos'),
('Joias e Acessórios', 'Bijuterias, relógios e acessórios pessoais'),
('Calçados', 'Sapatos, tênis e sandálias'),
('Moda Íntima', 'Roupas íntimas e de dormir'),
('Bolsas e Mochilas', 'Bolsas, mochilas e malas'),
('Livros', 'Livros físicos e materiais de leitura'),
('Música e Instrumentos', 'Instrumentos musicais e acessórios'),
('Filmes e Séries', 'DVDs, Blu-rays e mídias'),
('Bebês', 'Produtos para recém-nascidos e crianças pequenas'),
('Limpeza', 'Produtos de limpeza doméstica'),
('Utilidades Domésticas', 'Itens diversos para o lar'),
('Iluminação', 'Lâmpadas e luminárias'),
('Segurança', 'Câmeras, alarmes e sistemas de segurança'),
('Jardinagem', 'Ferramentas e itens para jardim'),
('Indústria e Comércio', 'Equipamentos industriais e comerciais'),
('Produtos Digitais', 'Softwares, licenças e conteúdos digitais');