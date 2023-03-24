## Primeiros Passos

Para executar o código, no terminal vá até a pasta que contém o script e digite como no exemplo: `node app.js`

Quando um código se torna grande demais, ele pode ser dividido em módulos. Os arquivos secundários exportam sua função/variável, como por exemplo: `module.exports = soma;`.

Já o arquivo principal recebe: `require("./calculadora");`. O que for importado tem que ser atribuído a uma variável. 

Caso seja mais de uma função, exportar fica da seguinte forma:

```
module.exports = {
    soma,
    sub,
    mult,
    div
};
```

E quando for ser usada no código principal usa-se: `calculadora.sub(1, 2);`