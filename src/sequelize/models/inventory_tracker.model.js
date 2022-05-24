const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const inventory_tracker = sequelize.define('inventory_tracker', {
    ndc_package_code_without_hyphens: {
      type: DataTypes.STRING
    },
    notes: {
      type: DataTypes.TEXT,
      defaultValue: ""
    },
    thresh: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    qoh: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    purchase_price: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    vendor: {
      type: DataTypes.STRING,
      allowNull: true
    },
    refill_status: {
      type: DataTypes.STRING,
      allowNull: true
    },
    suggested_selling_price: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    update_date: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    freezeTableName: true
  })
}