import getConfig from 'next/config';
import mysql from 'mysql2/promise';
import { Sequelize } from 'sequelize';

const { serverRuntimeConfig } = getConfig();
import { createUserModel } from "@/models/users";

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

    db.User =  createUserModel(sequelize);
    sequelize.sync({alter:true});
    db.isInitialized = true;

};

export const db = {
    initialize,
    isInitialized:false,
}