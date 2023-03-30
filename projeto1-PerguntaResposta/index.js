const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");

connection
    .authenticate()
    .then(() => {
        console.log("Conexão feita com o banco de dados")
    })
    .catch((msgErro) => {
        console.log(msgErro)
    });

app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/perguntar", (req, res) =>{
    res.render("perguntar");
});

app.post("/salvarpergunta", (req, res) =>{
    let titulo = req.body.titulo;
    let descricao = req.body.descricao;
    res.send("Formulario recebido: titulo: " + titulo + " " + " descricao: " + descricao); 
});

app.listen(8080, () => {console.log("app rodando!")});