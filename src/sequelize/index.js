const { Sequelize, DataTypes } = require('sequelize');
const express = require('express');

const { json } = require('express/lib/response');

const sequelizeInstance = new Sequelize(
  process.env.PGDATABASE,
  process.env.PGUSER,
  process.env.PGPASSWORD,
  {
    host: process.env.PGHOST,
    dialect: 'postgres',
  },
)

const modelDefiners = [
  require('./models/user.model'),
]

// defined all models according to their files.
for (const modelDefiner of modelDefiners) {
  modelDefiner(sequelizeInstance);
}

module.exports = sequelizeInstance;




// async function getAll(req, res, next) {
//   try {
//     const ALL = await User.findAll({
//       attributes: ['user_id', 'name']
//     });
//     return res.status(200).json(ALL);
//   } catch (error) {
//     return res.status(500).json(error);
//   }

// }




// const app = express()

// let ex = 'empty';

// app.get('/', (req, res) => {
//   res.send(ex);
// } )

// app.get('/users', getAll);

// // app.post('/users', parser, createOne);

// const start = async () => {
//   try {
//     // await sequelizeInstance.sync(
//     //   { force: false }
//     // );
//     try {
//       await sequelizeInstance.authenticate();
//       ex = 'Connection has been established successfully.';
//       await User.sync({ force: false });
//     } catch (error) {
//       ex = 'Unable to connect to the database:';
//     }

//     app.listen(3000);

//   } catch (error) {
//     console.log(error);
//   }
// }

// start();








