const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const User = sequelize.define('example', {
    // Model attributes are defined here
    user_id: {
      type: DataTypes.BIGINT,
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
