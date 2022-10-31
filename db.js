// Connect to databse //
const Sequelize = require('sequelize');
const db = new Sequelize('UMS','root','',{
    host: "localhost",
    dialect: "mysql"
});

module.exports = db;
