const pg = require('pg');
delete pg.native;

import { Sequelize } from 'sequelize';
import { UserFactory } from './models/user';

const database: string = process.env.DATABASE || '';
const username: string = process.env.USERNAME || '';
const password: string = process.env.PASSWORD || '';

const sequelize = new Sequelize({
  database,
  username,
  password,
  host: process.env.HOST,
  native: false,
  dialect: 'postgres',
  logging: false,
  dialectModule: pg,
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
  sync: { force: false },
});

const models = {
  User: UserFactory(sequelize),
};

// For the future when we set up associations
// Object.values(models)
//   .filter((model) => typeof model.associate === 'function')
//   .forEach((model) => model.associate(models));

const db = {
  models,
  sequelize,
};

//eslint-ignore-next-line
(async () => {
  try {
    await sequelize.authenticate();
    // console.log('Database connection has been established successfully.');
  } catch (error) {
    // console.error('Unable to connect to the database:', error);
  }
})();

export default db;
