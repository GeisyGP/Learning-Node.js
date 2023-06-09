# Learning-Node.js
Esse é um repositório com anotações e códigos de estudo do curso Formação Node.js.

## O que é Node.js?

O JavaScript foi criado inicialmente apenas para rodar em navegadores e todo navegador tem um interpretador (no caso do Chrome, o V8), que entende e executa o código JavaScript. O node.js é um interpretador JavaScript que roda fora dos navegadores.

Dentre as vantagens do Node, destacam-se ele ser leve, mais rápido, tem um dos maiores ecossistemas do mundo (muitas bibliotecas) e não ser difícil de trabalhar com ele.

## O que é HTTP?

HTTP é um protocolo de transferência de dados na web.

Quando uma pessoa acessa o Google e faz uma pesquisa, ela está usando HTTP para ter acesso ao servidor do Google.

### Na Prática

Para criar um servidor, é necessário importar o módulo "http", que é próprio do node e declarar: `http.createServer().listen(8181);`

Em que 8181 é a porta onde o servidor vai rodar. Exemplo:

```
let http = require("http");

http.createServer(function(requisicao, resposta){
    resposta.end("<h1>Bem vindo ao site</h1>");
}).listen(8181);

console.log("Hello World");
```

>"Ctrl" + "C" para parar o servidor.

## Express.js

Um framework é uma super biblioteca que auxilia a fazer determinada tarefa. **Express.js** é um exemplo, ele é o mais popular para criar aplicações com node.js. 

## Instalar e Configurar MySQL

MySQL é um sistema de gerenciamento de banco de dados. 

Para instalar, acessar [mysql.com](www.mysql.com), navegue até a página "Downloads", selecione a versão "Community". Depois selecione "MySQL Community Server" e selecione o seu sistema operacional. No caso de Windows, existe uma ferramenta "MySQL Installer for Windows" que facilita o processo de instalação, na página selecionar a opção com mais megas, pois a menor vai instalar online (caso a conexão caia, fica mal instalado).

Após a instalação, selecionar para baixar "Server only" e depois de terminar de instalar fazer as configurações.

Em "config type" selecione "Development Machine" e depois crie uma senha. Por fim aplique todas as configurações. 

Para acessar o mysql do terminal é necessário linkar ele: Disco local -> Arquivo de Programas -> MySQL -> MySQL Server -> bin. Quando chegar em bin, copiar o "link" para essa página. 

Depois ir até "Meu Computador" -> "Configurações avançadas do sistema" -> "Variáveis do ambiente" e registrar uma nova variável do tipo path. Clique para editar PATH e em "novo" para colar o link.

### Principais Comandos MySQL

Acessar no cmd: `mysql -h localhost -u root -p`

Exibe todos os bancos de dados: `SHOW DATABASES;`

Criar um novo banco de dados: `CREATE DATABASE <nome>;`

Acessar o banco de dados: `USE <nome>;`  

MySQL guarda dados em formato de tabela, em que cada coluna guarda dados diferentes. Para ver quantas tabelas existem no banco `SHOW TABLES;`

Para criar tabelas é recomendável usar um editor de código e depois colar no terminal. No arquivo _teste.sql_ tem exemplos, para criar tabelas e inserir dados.

Exibir tabela `DESCRIBE <nomeTabela>;`

## EJS (Embedded JavaScript templatin)

O EJS serve para renderizar o HTML da aplicação.

- Instalar EJS no projeto: `npm install ejs --save`

Para o EJS renderizar o html, utiliza-se o método "render", por exemplo, na rota principal declara-se `res.render("index");`.

O EJS possui uma tag para exibir variáveis: `<%= nome %>`. Ela pode ser misturada com tags de html. Quando é apenas uma expressão não precisa do igual: `<% if(msg){ %>` e `<% } %>`

Estruturas de repetição também são usadas no EJS, a principal é o forEach, que pode ser usado para fazer listagens.

## Bootstrap

O bootstrap é um framework que ajuda a criar projeto com javascript e css, permitindo sites responsivos e com diferentes designs. 

Para instalar, acessar [get.bootstrap.com/docs/5.3](https://getbootstrap.com/docs/5.3/getting-started/download/) e fazer o download da versão "Compiled CSS and JS". Nos projetos desenvolvidos foi usado a versão 4, que está disponível em [getbootstrap.com/docs/4.5](https://getbootstrap.com/docs/4.5/getting-started/download/).

Os arquivos foram extraídos direto para a pasta public do projeto1. 

## MongoDB

O Mongo é um banco de dados não relacional que pode armazenar grandes quantidades de dados não estruturados. O problema dele é a falta de disponibilidade, que requer maior hardware.

Ele pode ser intalado em [www.mongodb.com/try/download/community](https://www.mongodb.com/try/download/community). Depois de instalado, adicionar à vairiável do sistema "path" para poder ser acessado pelo cmd.   
  
### Principais comandos 

- Inicializar um model: `const Article = mongoose.model("Article", articleModel`     
- Criar dados: `const artigo = new Article({ /*...campos*/ });`
- Salvar dados:
```
  artigo.save().then(() => {
    console.log("Artigo salvo!");
  }).catch(err => {
    console.log(err);
  })*/
```
- Listar todos os dados:
```
Article.find({}).then(articles => {
    console.log(articles);
  }).catch(err => {
    console.log(err);
  })
```
  -   Se quiser apenas dados com um campo específico, informar entre as chaves, ex: `"author":"Maria"`
  -   Se quiser apenas o primeiro, substituir find por `findOne`;
- Deletar dados pelo Id:
```
Article.findByIdAndDelete("643d3c79bfc5f5b00ded4350").then(() => {
    console.log("Dado removido!");   
  }).catch(err => {
    console.log(err);
  })
``` 
- Atualizar dados pelo Id:
```
Article.findByIdAndUpdate("643d3f7aa366075aae0298f5",{ /*...campos*/ }).then(() => {
    console.log("Update!")
}).catch(err => {
    console.log(err);
})
```