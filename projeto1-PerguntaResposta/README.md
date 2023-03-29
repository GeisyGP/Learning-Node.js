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