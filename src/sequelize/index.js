const { Sequelize, DataTypes } = require('sequelize');
const express = require('express');

// const { models } = require("../sequelize");
const { json } = require('express/lib/response');

const sequelizeInstance = new Sequelize(
  process.env.PGDATABASE,
  process.env.PGUSER,
  process.env.PGPASSWORD,
  {
    host: process.env.PGHOST,
    dialect: 'postgres',
    pool: {
      acquire: 6000000
    }
  },
)

const modelDefiners = [
  require('./models/user.model'),
  require('./models/inventory_db.model'),
  require('./models/inventory_tracker.model'),
]

// defined all models according to their files.
for (const modelDefiner of modelDefiners) {
  modelDefiner(sequelizeInstance);
}


(async () => {
  await sequelizeInstance.sync();
})();



module.exports = sequelizeInstance;










