## O que é programação síncrona?

É seguir a ordem do código, executa na ordem em que as funções são chamadas. _Maneira clássica de programar._

O problema da programação síncrona é que ela é "bloqueante". Enquanto uma tarefa não é finalizada, a próxima não acontece. 

## Programação Assíncrona

Já na programação assíncrona as funções são executadas ao mesmo tempo, sendo assim, qualquer uma pode terminar antes da outra. Ou seja, ela não é bloquante.

No JavaScript existem três formas de trabalhar com programação assíncrona: callbacks, promises e async/away.

Apesar de estarmos usando funções assíncronas, podemos querer esperar um tempo para exibir algo para o usuário. Para isso podemos usar a função setTimeout, que vai ser executada após o tempo definido em milissegundos (2000 milissegundos = 2 segundos):
```
function enviarEmail(corpo, para){
    setTimeout(() => {
        console.log(`
        Para: ${para}
        -------------------------
        ${corpo}
        -------------------------
        De: Ciclano
        `)
    }, 2000);
}
```

## Callbacks

Caso queira enviar a mensagem de concluído apenas quando a tarefa realmente terminar de ser executada, existem os callbacks. 
```
function enviarEmail(corpo, para, callback){
    setTimeout(() => {
        console.log(`
        Para: ${para}
        -------------------------
        ${corpo}
        -------------------------
        De: Ciclano
        `)
        callback();
    }, 2000);
}
```

Tudo o que for colocado dentro da função será chamado quando a tarefa terminar de ser executada:
```
enviarEmail("Oi, seja bem vindo!", "fulano@gmail.com", () => {
    console.log("Callback executado")
});
```

Callbacks também podem receber parâmetros que podem ser usados da mesma forma que usamos em outras funções.

## Promises 

Promises são uma evolução dos callbacks, são promessas em linguagem de programação. Elas podem ser cumpridas ou criar uma falha. As promises precisam de dois parâmetros, um para avisar quando ela funcionar e outro para quando não:

```
function func1(a, b){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let deuErro = false;
            if(!deuErro)
                resolve();
            else
                reject();
        }, 4000);
    });
}
```

Sempre que uma promise for rejeitada, é necessário tratá-la. Se usar o `.then` para o caso dela funcionar, pode ser usado o `.catch` logo após, para o caso de falhar.

Em promises só é possível passar um parâmetro, se for necessário mais de um pode ser um objeto. 
```
    let deuErro = false;
    if(!deuErro)
        resolve({ time: 4, to: "fulano@gmail.com" });
    else
        reject("Fila cheia");
```

> Para pegar os dados de uma promise é preciso usar o "then". 

Uma promise pode ser chamada dentro de outra, promises aninhadas. Isso acaba deixando o código bagunçado, é algo a ser evitado (promise hell). Outra forma de fazer isso, eliminando o problema é o async/await.

## Async/Await

Await é o mesmo que dizer para o código esperar a promise ser concluída para retornar o resultado. 
```
async function principal(){
    let usuarios = await pegarUsuario();
}
```
Esse código acima corresponde a:
```
pegarUsuario().then(usuario =>{

});
```  

É uma forma de escrever código assíncrono com estilo síncrono, mas ele também bloqueia. 

Com async/await não se tem o catch para tratar erros, mas podemos usar o try catch:
```
try{
    //tenta fazer algo
    //se der certo faz isso
} catch (erro){
    //se der erro isso
}
```

Dessa forma, catch se liga direto ao reject da promise.