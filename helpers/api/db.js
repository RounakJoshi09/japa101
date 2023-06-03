import getConfig from 'next/config';
import mysql from 'mysql2/promise';
import { Sequelize } from 'sequelize';
import isIn from './../../node_modules/validator/es/lib/isIn';

const { serverRuntimeConfig } = getConfig();



const initialize = async () => {
  const { database, host, port, user, password } = serverRuntimeConfig.dbConfig;
    console.log(`${database} ${host} ${port} ${user} ${password} `);
  const connection = await mysql.createConnection({
    host,
    port,
    user,
    password,
  });

  await connection.query(`CREATE DATABASE IF NOT EXISTS ${database}`);

  const sequelize = new Sequelize(database, user, password, {
    dialect: 'mysql',
    host,
  });

  try {
    await sequelize.authenticate();
    db.isInitialized = true;
    console.log('Connection has been established successfully.');   
  } catch (error) {
    console.error('Unable to connect to the database:', error); 
  }


};

export const db = {
    initialize,
    isInitialized:false,
}