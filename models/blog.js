const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

//BLOG TABLE
class Blog extends Model { }

Blog.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // user_id: {
        //     references: {
        //         model: 'user',
        //         key: 'id'
        //     }
        // }
    },
    {
        sequelize,
        underscored: true,
        modelName: 'blog'
    }
);

module.exports = Blog;