# ECMAScript

A partir do ES6 foi implementado o "let". A diferença de let e var é o escopo. Funcionam: 
- let: global, local e de bloco.
- var: global e local.

Ou seja:
- Global: todos podem acessar
- Local: só a função pode acessar
- De bloco: só é acessada dentro do bloco (entre chaves "{}")

## Parâmetros Opcionais

Quando passo um parâmetro definindo uma variável (ex. `function func1(a, b=10){}`) a variável definida se torna opcional. Ou seja, se o usuário não informá-la, ela valerá o valor definido. O parâmetro opcional só pode ser o último. Ele pode ser usado como, por exemplo, true ou false.

## Operador Spread:

Em vez de fazer o código a seguir para usar um objeto em outro objeto:
```
let user = {
    nome,
    idade, 
    empresa: empresa.nome,
    cidade: empresa.cidade,
    site: empresa.site,
    email: empresa.email
}
```

Pode-se usar o operador spread para evitar tanto trabalho manual:
```
let user = {
    nome,
    idade,
    ...empresa
}
```
## Desestruturação

Para salvar dados de dentro de um objeto em variáveis: `let { nome } = user;`. Com isso pode usar a variável "nome". Também pode ter mais de uma: `let { nome,empresa } = user;`, ou seja, pode usar "nome" e também "empresa".

## Arrow Function

Antes do ES6 existiam duas formas de declarar uma função:
```
function mult(a, b){
    console.log(a * b);
}
```

Dentro de uma variável:
```
let mult = function(a, b){
    console.log(a * b);
}
``` 

Depois do ES6 temos as arrow function (função de seta):
```
(a, b, c) =>{
    console.log(a * b * c);
}
```
Elas só podem ser utilizadas em duas situações:
1. Quando trabalha com callbacks.
2. Quando quer salvar dentro de uma variável.

Quando são funções pequenas ainda pode ser feito tudo em uma só linha: `let mult 3 = a => console.log(a*2);`

Nelas, o retorno pode ser feito da forma convencional ou quando só tem uma linha, em que "return" não precisa aparecer. 

## Template Literals 

Uma forma mais limpa de concatenar frases:

```
let nome = "Fulano";
let sobre = "Professor";

let frase = `Olá meu nome é ${nome} e eu sou ${sobre}.`;
```

Assim, também reconhece a quebra de linhas.