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