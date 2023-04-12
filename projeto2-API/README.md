# Introdução a API REST
Será desenvolvido um projeto de API de games.

## Definições:

### REST HTTP Verbs

|Verb|Objective|Usage|Multiple requests|Cache/Bookmark|
|--|--|--|--|--|
|GET|Retornar dados de um servidor|links|sim|sim|
|POST|Criar novas coisas|forms|não|não|
|PUT|Atualizar completamente dados|forms|sim|não|
|PATCH|Atualizar parcialmente|forms|sim|não|
|DELETE|Apagar dados|forms/link|sim|não|
(Formação Node.js - Udemy)

**API** é uma interface de comunicação entre duas ou mais coisas. Exemplo: se comunicar com a API do YouTube para buscar videos. 

**REST** é um padrão de webservice. Ele tem 5 regras:
1. Arquitetura cliente servidor
2. Stateless (não salva dados do cliente)
3. Cacheável
4. Saber trabalhar com camadas
5. Interface uniforme e direta

**RESTful** é quando um API REST é implementada seguindo todas as especificações/regras. Existem alguns níveis para chegar a RESTful:
- Nível 0: Foco em um só endpoint, uma única rota.
- Nível 1: Divide as coisas em recursos (ex: cliente e produto).
- Nível 2: Verbos HTTP.
- Nível 3: Hateoas (retorna junto uma tabela de links de ações que podem ser realizadas).

## Primeiros passos:

1. "npm init";
2. "npm install express --save";
3. "npm install body-parser --save";
4. Criar arquivo principal: "index.js".

> Usar statusCode em todas as respostas para o usuário.

Para cadastrar dados usa-se o método post. No postman, usando o post, temos que ir até o campo "Body" e selecionar "raw" e JSON. Depois declarar as informações: 
```
{
    "title": "CS GO",
    "price": 60,
    "year": 2012
}
```

> Se der erro ao usar nodemon index.js, acrescentar "npx" no inicio.


## Consumo de API 

**Cors** é um mecanismo de segurança em http que bloqueia requisições externas. Para resolver isso, instalar na API: `npm install cors --save`.

No arquivo _index.html_, em consumoAPI, criamos o frontend (criar, deletar e editar) usando a API de games. Para isso, usamos o axios.