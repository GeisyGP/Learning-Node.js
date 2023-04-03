# Plataforma de Perguntas e Respostas

## Primeiros Passos

No projeto, inicialmente são utilizadas três tecnologias: node, sql e EJS (Embedded JavaScript templatin).

1. Iniciar o node: `npm init`
2. Instalar express: `npm install express --save`
3. Instalar EJS: `npm install ejs --save`
4. "Dizer" para o Express usar o EJS como view engine em index.js
5. Criar rota principal e inicializar aplicação/servidor em index.js
6. Inicializar aplicação `nodemon index.js`

Por padrão do Express, todos os arquivos html devem ser criados dentro de uma pasta chamada _views_.

Para a aplicação usar arquivos estáticos (CSS, JavaScript front end, arquivo de imagem, etc.) é necessário informar que serão usados, isso pode ser feito da seguinte forma: `app.use(express.static("public"));`. Em que _public_ é uma pasta padrão usada para salvar esses arquivos.

Para usar o Bootstrap é necessário importar ele no projeto, assim como outro arquivo: `<link rel="stylesheet" href="/css/bootstrap.min.css">`. E importar também o jquery e o popper.

## Desenvolvendo

Quando é declarado um _container_ (perguntar.ejs), ele centraliza o conteúdo no meio do navegador. Para criar um formulário podemos usar a classe **form-control**, que deixa com o estilo bootstrap. Um botão também pode ter design diferente usando a classe **btn** e:
- btn-sucess: botão verde
- btn-primary: botão azul
- btn-danger: botão vermelho
- btn-warning: botão amarelo

A classe **card** se divide em duas parte card-header e card-body. Ela serve para fazer o conteúdo ficar dentro de um "card". 

A classe **navbar** serve parar criar uma barra na página, podendo mudar a sua cor: navbar-light (deixa as letras brancas) e bg-primary (deixa o fundo azul). Ainda pode usar navbar-brand para alinhar a esquerda.

Em CSS, vh corresponde a altura da tela e significa uma porcentagem dela, como exemplo: 5vh = altura de 5%.

> Um  `href="/"` faz com que volte para a tela inicial, a tela "/".

Para fazer com que a navbar fique presente em todas as páginas existe um recurso do EJS, chamado partials. Esse recurso possibilita reutilizar partes de layout. Então foi separado em três arquivos: header, footer e navbar. Quando for utilizado em uma página é só adicionar como: `<%- include ("partials/header.ejs") %>`

## Salvar Dados

O método GET recebe os valores pela URL, já o método POST mantém escondido. Para receber valores do formulário utilizamos o método post.

Para traduzir os dados que são enviado no formulário em javascript existe o **body-parser**: `npm install body-parser --save`d

O MySQL Workbench é uma ferramenta que facilita o uso de mysql, sem precisar da linha de comando. Ele pode ser baixado em [dev.mysql.com](https://dev.mysql.com/downloads/workbench/)

O Sequelize possibilita manipular o banco de dados com códigos javascript. Para instalar: `npm install --save sequelize`. Além disso, é necessário instalar uma biblioteca extra: `npm install --save mysql2`

---
### Como conectar o Sequelize com o MySQL?

Criando uma nova pasta, para organizar todos os arquivos de banco de dados e em um arquivo criar uma conexão, como no arquivo `database.js`.
---

Para criar uma tabela no banco de dados usamos model. Por convenção arquivos de model iniciam com letra maiúscula, como `Pergunta.js`

> tipo STRING é pra textos curtos e tipe TEXT para textos longos

No MySQL Workbench, para apagar tabela: clicar com botão direito e "drop table". Se algo não estiver aparecendo "Refresh all".

Para salvar dados acrescentar no código `Pergunta.create()` que é equivalente a `'' INSERT INTO perguntas ...Pergunta` em SQL.

Para buscar dados da tabela `Pergunta.findAll()` que é equivalente a `SELECT * FROM pergunta` em SQL. 

Para ordenar dados de uma tabela, da mais recente pra mais antiga, pode ser usado o ID, que fica em ordem crescente. Para isso, usa-se um array `order: ["id", "DESC"]`, em que desc é para decrescente e asc para crescente.
---
Nessa aplicação criamos e lemos dados no banco de dados.