# Sensedia Frontend Challenge

Este projeto é um desafio de codificação que visa construir uma aplicação de página única (SPA) simples usando React. A aplicação exibe uma lista de usuários buscados de uma API pública e oferece funcionalidades de busca, visualização em diferentes layouts e acessibilidade.

## Tecnologias Utilizadas

- **ReactJS**: Framework principal para a construção da interface.
- **React Router DOM**: Gerenciamento de rotas e navegação na aplicação.
- **TypeScript**: Linguagem utilizada para segurança de tipos e desenvolvimento robusto.
- **Styled Components**: Para a estilização dos componentes com CSS-in-JS.
- **React Aria Components**: Implementação de componentes acessíveis para garantir conformidade com padrões de acessibilidade.
- **RSBuild**: Ferramenta de construção e desenvolvimento do projeto.
- **Axios**: Biblioteca para realizar requisições HTTP, utilizada para buscar os dados dos usuários.
- **Testing Library**: Para testes de comportamento e interações de usuários.
- **Jest**: Framework de testes utilizado para testes unitários e cobertura de código.

## Versões
Certifique-se de ter as seguintes versões do Node.js e do Pnpm para evitar incompatibilidades:
- **Node.js**: 18.20.4
- **Pnpm**: 8.6.12

## Clonar o Projeto
Para clonar o projeto, execute o seguinte comando:
`git clone https://github.com/lucasabarros/sensedia-frontend-challenge.git`

## Instalar Dependências
Para instalar as dependências, execute o comando: `pnpm install`

## Executar

**Front (roda na porta 3000)**: 

Por padrão, a aplicação será executada na porta 3000. Acesse-a em http://localhost:3000. 

Para iniciar o servidor de desenvolvimento, execute o comando: `pnpm dev`.

## Testar

Os testes unitários estão localizados em **sensedia-frontend-challenge/tests/unit/** e os testes de comportamento estão localizados **sensedia-frontend-challenge/tests/behavior/**.

- Para executar todos os testes, execute o comando: `pnpm test`.
- Para executar testes unitários, execute o comando: `pnpm test:unit`.
- Para executar testes unitários, execute o comando: `pnpm test:unit`.
- Para executar testes de comportamento, execute o comando: `pnpm test:behavior`.
- Para verificar a cobertura de testes, execute o comando: `pnpm test:coverage`.

## Build
Para criar uma versão de produção da aplicação, execute: `pnpm build`.

A build gerada estará na pasta dist/.
