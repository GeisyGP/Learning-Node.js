const express = require("express"); //Importando
const app = express(); //Iniciando em app

app.listen(4000, function(erro){
    if(erro)
        console.log("Ocorreu um erro!");
    else
        console.log("Servidor iniciado com sucesso!");
})