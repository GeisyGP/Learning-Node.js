const Sequelize = require("sequelize");

const connection = new Sequelize("perguntaresposta", "root", "senha", {
     host: "localhost",
     dialect: "mysql"
});

module.exports = connection;