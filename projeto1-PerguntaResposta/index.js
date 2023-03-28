const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/:name/:lang", (req, res) => {
    let name = req.params.name;
    let lang = req.params.lang;
    let showMsg = false;

    let products = [
        { name: "Doritos", price: 3.55 },
        { name: "Coca-Cola", price: 7 },
        { name: "Leite", price: 1.99 }
    ];

    res.render("index", {
        name: name,
        lang: lang,
        subscribers: 8000,
        msg: showMsg,
        products: products
    });
});

app.listen(8080, () => {console.log("app rodando!")});