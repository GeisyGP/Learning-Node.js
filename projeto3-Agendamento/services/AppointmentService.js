let appointment = require("../models/Appointment");
let mongoose = require("mongoose");
let AppointmentFactory = require("../factories/AppointmentFactory");
let mailer = require("nodemailer");

const Appo = mongoose.model("Appointment", appointment);

class AppointmentService{
    async Create(name, email, description, cpf, date, time){
        let newAppo = new Appo({
            name, 
            email,
            description,
            cpf,
            date,
            time,
            finished: false,
            notified: false
        });
        try{
            await newAppo.save();
            return true;
        }
        catch(err){
            console.log(err);
            return false;
        }
    }
    async GetAll(showFinished){
        if(showFinished)
            return await Appo.find();
        else {  
            let appos = await Appo.find({"finished": false});
            let appointments = [];


            appos.forEach(appointment => {
                if(appointment.date != undefined)
                    appointments.push(AppointmentFactory.Build(appointment))
            });
            return appointments;
        }
    }
    async GetById(id){
        try{
            let event = await Appo.findOne({"_id": id});
            return event;
        }catch(err){
            console.log(err);
        }
    }
    async Finished(id){
        try{
            await Appo.findByIdAndUpdate(id, {finished: true});
            return true;
        }catch(err){
            console.log(err);
            return false;
        }
    }
    async Search(query){    
        try{
            let appos = await Appo.find().or([{email: query}, {cpf: query}]);
            return appos;
        }catch(err){
            console.log(err);
            return [];
        }
    }
    async SendNotification(){
        let appos = await this.GetAll(false);

        let trasporter = mailer.createTransport({
            host:"sandbox.smtp.mailtrap.io",
            port:25,
            auth: {
                user: "", //gerado pelo mailtrap
                pass: ""
            }
        });

        appos.forEach(async app => {
            let date = app.start.getTime();
            let hour = 1000 * 60 * 60;  //1 hora
            let gap = date - Date.now();

            if(gap <= hour){
                if(!app.notified){
                    await Appo.findByIdAndUpdate(app.id,{notified: true});

                    trasporter.sendMail({
                        from: "Geisy Poncio <geisy@email.com>",
                        to: app.email,
                        subject: "Sua consulta vai acontecer em breve!",
                        text: "Olá, estamos passando para lembrar que a sua consulta está agendada para daqui menos de 1 hora. Até logo!",
                    }).then(() => {
                    }).catch(err => {
                        console.log(err);
                    })
                }
            }
        });
    }
}

module.exports = new AppointmentService();