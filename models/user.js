const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

//USER TABLE
class User extends Model {
    //comparing the password stored in the db with the password being passed in on the client side
    checkPassword(pw) {
        return bcrypt.compareSync(pw, this.password)
    }
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [6],
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8],
            },
        }
    },
    {
        hooks: {
            beforeCreate: async (newUserData) => {
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
                return newUserData;
            },
        },
        sequelize,
        timestamps: false,
        underscored: true,
        modelName: 'user'
    }
);

module.exports = User;