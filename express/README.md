## Iniciando com Express

Para verificar se o npm já está instalado na máquina: `npm -v`

Para iniciar um projeto node: `npm init`. Ao dar esse comando inicia um questionário.

Para instalar o express: `npm install express --save`

Quando iniciamos o servidor (`node index.js`), a página apresenta um erro: "Cannot GET /". Esse erro acontece porque não há nenhuma rota.

**Rotas**: o servidor aponta para diferentes páginas (home, videos, carrinho...), para ser direcionado para cada uma delas existe uma rota.

No código a última coisa deve ser o servidor. Antes disso, então podemos criar um rota, usando o método `get`. Os argumentos são para onde a rota aponta (nome) e o que ela faz (função). Na função, passamos dois parâmetros, request e response, que por padrão são abreviados para `req` e `res`. 
- req: dados enviados pelo usuário
- res: resposta que vai ser enviada ao usuário

Na função, precisamos enviar uma resposta, ficando assim:

```
app.get("/", function(req, res){
    res.send("Bem Vindo!");
});
```

> Só pode enviar uma resposta uma única vez, pois depois da resposta "fecha" a conexão e nada funciona.

---
### Como reiniciar automaticamente?

Para reiniciar o servidor sempre que ele detecta alguma modificação, istalar no terminal o nodemon:
`npm install nodemon -g`. O -g significa que está instalando globalmente no computador. Quando for iniciar o servidor: `nodemon index.js`

---
### Parâmetros

Nas rotas podem ser adicionados parâmetros, como "nome" na rota abaixo:
```
app.get("/ola/:nome", function(req, res){
    res.send("Oi " + req.params.nome);
});
```
Esse parâmetro é considerado obrigatório, pois sem ele da erro na exibição da página. Para criar um parâmetro não obrigatório (opcional) só precisa adicionar um "?": `/blog/:artigo?`

Além dessas formas, existem os **Query params**. Eles podem ser enviados pra qualquer rota, sem serem definidos no código: Adicionar "?canal=nome" ao fim da url. Apesar de serem totalmente opcionais, a forma de "pegar" o valor é parecida com outros parâmetros, a diferença é que query é um array, onde vai o nome do parâmetro `let canal = req.query["canal"];`

> Query params não são recomendados.