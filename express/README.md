## Iniciando com Express

Para verificar se o npm já está instalado na máquina: `npm -v`

Para iniciar um projeto node: `npm init`. Ao dar esse comando inicia um questionário.

Para instalar o express: `npm install express --save`

Quando iniciamos o servidor (node index.js), a página apresenta um erro: "Cannot GET /". Esse erro acontece porque não há nenhuma rota.

Rotas: o servidor aponta para diferentes páginas (home, videos, carrinho...), para ser direcionado para cada uma delas existe uma rota.