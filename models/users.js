import { DataTypes } from 'sequelize';
export const createUserModel = (sequelize) => {

    const attributes = {
        id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true,
        },
        email : {
            type : DataTypes.STRING,
            allowNull : false 
        },
        firstName : {
            type : DataTypes.STRING,
            allowNull : false
        },
        lastName :{
            type:DataTypes.STRING,
            allowNull : true
        },
        photoUrl :{
            type:DataTypes.STRING,
        },
    }

    return sequelize.define('User',attributes);
}