const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const inventory_db = sequelize.define('inventory_db', { 
    product_id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    product_ndc: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ndc_package_code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ndc_package_code_without_hyphens: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false
    },
    package_description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    start_marketing_date: {
      type: DataTypes.STRING,
      allowNull: true
    },
    end_marketing_date: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ndc_exclude_flag: {
      type: DataTypes.CHAR
    },
    sample_package: {
      type: DataTypes.CHAR
    },
    product_type_name: {
      type: DataTypes.TEXT
    },
    propietary_name: {
      type: DataTypes.TEXT
    },
    propietary_name_suffix: {
      type: DataTypes.TEXT
    },
    nonpropietary_name: {
      type: DataTypes.TEXT
    },
    dosage_form_name: {
      type: DataTypes.TEXT
    },
    route_name: {
      type: DataTypes.STRING
    },
    marketing_category_name: {
      type: DataTypes.TEXT
    },
    application_number: {
      type: DataTypes.STRING
    },
    labeler_name: {
      type: DataTypes.TEXT
    },
    substance_name: {
      type: DataTypes.TEXT
    },
    active_numerator_strength: {
      type: DataTypes.TEXT
    },
    active_ingredient_unit: {
      type: DataTypes.TEXT
    },
    pharm_classes: {
      type: DataTypes.TEXT
    },
    deaschedule: {
      type: DataTypes.TEXT
    },
    ndc_exclude_flag: {
      type: DataTypes.TEXT
    },
    listing_record_certified_through: {
      type: DataTypes.STRING
    },
// ----------------------------------------------------
    


  }, {
    freezeTableName: true
  })
}


