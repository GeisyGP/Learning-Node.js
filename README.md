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

## Framework

Um framework é uma super biblioteca que auxilia a fazer determinada tarefa. **Express.js** é um exemplo, ele é o mais popular para criar aplicações com node.js. 