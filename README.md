# Desafio Docker: GoLang
---

Desafio "Nginx com Node" do modulo de Docker do curso Full Cycle.

**Descrição:**

Nesse desafio você colocará em prática o que aprendemos em relação a utilização do nginx como proxy reverso. A idéia principal é que quando um usuário acesse o nginx, o mesmo fará uma chamada em nossa aplicação node.js. Essa aplicação por sua vez adicionará um registro em nosso banco de dados mysql, cadastrando um nome na tabela people.

O retorno da aplicação node.js para o nginx deverá ser:

`<h1>Full Cycle Rocks!</h1>`

- Lista de nomes cadastrada no banco de dados.

**Como rodar:**

Apos clonar este repositório, entre no diretório raiz do projeto e rode:

`docker-compose up -d`

a seguir acesse `http://localhost:8080` para ver o resultado.