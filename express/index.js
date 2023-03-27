const express = require("express"); //Importando
const app = express(); //Iniciando em app

app.get("/", function(req, res){
    res.send("<h1>Bem Vindo!</h1>");
});

app.get("/blog/:artigo?", function(req, res){
    let artigo = req.params.artigo; //parâmetro opcional

    if (artigo)
        res.send("<h2> Artigo: " + artigo + "</h2>");
    else
        res.send("Bem vindo ao meu blog!");
});

app.get("/canal/youtube", function(req, res){
    let canal = req.query["canal"];
    if (canal)
        res.send("Bem vindo ao canal " + canal + "!");
    else
        res.send("Bem vindo ao meu canal!");
});

app.get("/ola/:nome/:empresa", function(req, res){
    let nome = req.params.nome;
    let empresa = req.params.empresa;
    res.send("<h1>Oi " + nome + " da empresa " + empresa + " </h1>");
});


app.listen(4000, function(erro){
    if(erro)
        console.log("Ocorreu um erro!");
    else
        console.log("Servidor iniciado com sucesso!");
})