const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');
dotenv.config();

const sequelize = new Sequelize(process.env.database, process.env.user, process.env.password, {
    host: process.env.host,
    port: process.env.port,
    dialect: process.env.dialect
});

module.exports = sequelize;