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

// const modelDefiners = [
//   require('./models/user.model'),
//   require('./models/inventory_db.model'),
//   require('./models/inventory_tracker.model'),
// ]

// // defined all models according to their files.
// for (const modelDefiner of modelDefiners) {
//   modelDefiner(sequelizeInstance);
// }

const user_model = require('./models/user.model')(sequelizeInstance);
const inventory_db_model = require('./models/inventory_db.model')(sequelizeInstance);
const inventory_tracker_model = require('./models/inventory_tracker.model')(sequelizeInstance);

// inventory_db_model.hasOne(inventory_tracker_model, {
//   sourceKey: 'ndc_package_code_without_hyphens',
//   foreignKey: 'inventory_db_fk'
// });

// inventory_tracker_model.hasOne(inventory_db_model, {
//   sourceKey: 'ndc_package_code_without_hyphens',
//   foreignKey: 'inventory_tracker_fk'
// });


(async () => {
  await sequelizeInstance.sync();
})();



module.exports = sequelizeInstance;










