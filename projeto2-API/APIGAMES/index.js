const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

let DB = { //banco de dados falso para praticar
    games:[
        { 
            id: 23, 
            title: "Call of duty MW", 
            year: 2019, 
            price: 60 
        },
        { 
            id: 65, 
            title: "Sea of Thieves", 
            year: 2018, 
            price: 40 
        },
        { 
            id: 2, 
            title: "Minecraft", 
            year: 2012, 
            price: 20 
        }
    ]
}

app.get("/games", (req, res) =>{  //endpoint
    res.statusCode = 200;
    res.json(DB.games);
});

app.get("/games/:id", (req, res) =>{
    if(isNaN(req.params.id)) 
        res.sendStatus(400);
    else {
        let id = parseInt(req.params.id); //converte pra int
        let game = DB.games.find(g => g.id == id);

        if(game != undefined){
            res.statusCode = 200;
            res.json(game);
        }
        else
            res.sendStatus(404);
    }
   
});

app.post("/game", (req, res) => {
    let {title, price, year} = req.body;
    //validar dados...

    DB.games.push({
        id: 2523,
        title,
        price,
        year
    });
    res.sendStatus(200);
});

app.delete("/game/:id", (req, res) => {
    if(isNaN(req.params.id)) 
        res.sendStatus(400);
    else {
        let id = parseInt(req.params.id);
        let index = DB.games.findIndex(g => g.id == id);
        
        if(index == -1)
            res.sendStatus(404);
        else{
            DB.games.splice(index, 1);
            res.sendStatus(200);
        }

    }
});

app.put("/game/:id", (req, res) => {
    if(isNaN(req.params.id)) 
        res.sendStatus(400);
    else {
        let id = parseInt(req.params.id); 
        let game = DB.games.find(g => g.id == id);
        
        if(game != undefined){
            let {title, price, year} = req.body;
            
            if(title != undefined)
                game.title = title;
            if(price != undefined)
                game.price = price;
            if(year != undefined)
                game.year = year;

            res.sendStatus(200);
        }
        else
            res.sendStatus(404);
    }
});

app.listen(1818, () => {
    console.log("API rodando");
});