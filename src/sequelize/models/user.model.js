// import sequelizeInstance from "./database";
// const sequelizeInstance = require("./server");
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('example', {
    // Model attributes are defined here
    user_id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING
      // allowNull defaults to true
    }
  }, {
    freezeTableName: true
    // Other model options go here
  });
}
