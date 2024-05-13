const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

//COMMENT TABLE
class Comment extends Model { }

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        content: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        // user_id: {
        //     references: {
        //         model: 'user',
        //         key: 'id'
        //     }
        // }, 
        // blog_id: {
        //     references: {
        //         model: 'blog',
        //         key: 'id'
        //     }
        // }
    },
    {
        sequelize,
        underscored: true,
        modelName: 'comment'
    }
);

module.exports = Comment;