const { Sequelize, DataTypes } = require('sequelize');
const db = require('./../database/sequelize_con.js');

const PostImage = db.define('PostImage', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    post_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: false
    }
});

module.exports = PostImage;