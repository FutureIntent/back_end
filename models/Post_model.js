const { Sequelize, DataTypes } = require('sequelize');
const db = require('./../database/sequelize_con.js');

const Post = db.define('Post', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    theme: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false
},
    text: {
        type: DataTypes.TEXT('medium'),
        allowNull: true,
        unique: false
    }
});

module.exports = Post;