const { Sequelize, DataTypes } = require('sequelize');
const db = require('./../database/sequelize_con.js');

const User = db.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull:false
    },
    avatar: {
        type: DataTypes.STRING,
        defaultValue: 'https://c4.wallpaperflare.com/wallpaper/556/240/994/anime-berserk-guts-wallpaper-preview.jpg'
    },
    info: {
        type: DataTypes.STRING,
        allowNull: true
    },
    blackListed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    isAdmin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    active: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    }
})

module.exports = User;