const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const appointmentService = require("./services/AppointmentService");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.set("view engine", "ejs");

mongoose.connect("mongodb://127.0.0.1:27017/agendamento", { useNewUrlParser: true, useUnifiedTopology: true, serverSelectionTimeoutMS: 5000 });

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/cadastro", (req, res) =>{
    res.render("create");
});

app.post("/create", async (req, res) => {
    let status = await appointmentService.Create(
        req.body.name,
        req.body.email,
        req.body.description,
        req.body.cpf,
        req.body.date,
        req.body.time
        )
    if(status)
        res.redirect("/");
    else    
        res.send("Ocorreu uma falha");
});

app.get("/getcalendar", async (req, res) => {
    let appointments = await appointmentService.GetAll(false);
    res.json(appointments);
});

app.get("/event/:id", async (req, res) => {
    let appointment = await appointmentService.GetById(req.params.id);
    res.render("event",{appo: appointment});
});


app.post("/finish", async (req, res) => {
    let id = req.body.id;
    let result = await appointmentService.Finished(id);
    res.redirect("/");
});

app.get("/list", async (req, res) => {
    let appos = await appointmentService.GetAll(true);
    res.render("list", {appos});
});


app.get("/searchresult", async (req, res) => {
    let appos = await appointmentService.Search(req.query.search);
    res.render("list", {appos});
});

let pollTime = 1000 * 60 * 5; //5 minutos

setInterval(async () => {
    await appointmentService.SendNotification();
},pollTime)

app.listen(8080, () => {});