const { models } = require('../../sequelize');
const { Op } = require("sequelize");


async function search(req, res, next) {
  try {
    let search = req.query.search;
    let offset = req.query.offset ?? 0;
    let limit = req.query.limit ?? 50;
    const ALL = await models.inventory_db.findAndCountAll({
      where: {
        ndc_package_code_without_hyphens: {
          [Op.iLike]: `${search}%`
        }
      },
      offset,
      limit,
      // attributes: ['product_id', 'product_ndc', 'ndc_package_code', 'ndc_package_code_without_hyphens',
      //   'package_description', 'start_marketing_date', 'end_marketing_date', 'ndc_exclude_flag',
      //   'sample_package', 'product_type_name', 'propietary_name', 'propietary_name_suffix', 'nonpropietary_name',
      //   'dosage_form_name', 'route_name', 'marketing_category_name', 'application_number', 'labeler_name', 'substance_name',
      //   'active_numerator_strength', 'active_ingredient_unit', 'pharm_classes', 'deaschedule', 'ndc_exclude_flag', 'listing_record_certified_through'
      // ]
    });
    return res.status(200).json(ALL);
  } catch (error) {
    return res.status(500).json(error);
  }
}

async function create_inventory_db_entry(req, res, next) {
  try {
    let row = req.body; 
    await models.inventory_db.create({
      product_id: row.product_id,
      product_ndc: row.product_ndc,
      ndc_package_code: row.ndc_package_code,
      ndc_package_code_without_hyphens: row.ndc_package_code_without_hyphens,
      package_description: row.package_description,
      start_marketing_date: row.start_marketing_date,
      end_marketing_date: row.end_marketing_date,
      ndc_exclude_flag: row.ndc_exclude_flag,
      sample_package: row.sample_package,
      product_type_name: row.product_type_name,
      propietary_name: row.propietary_name,
      propietary_name_suffix: row.propietary_name_suffix,
      nonpropietary_name: row.nonpropietary_name,
      dosage_form_name: row.dosage_form_name,
      route_name: row.route_name,
      marketing_category_name: row.marketing_category_name,
      application_number: row.application_number,
      labeler_name: row.labeler_name,
      substance_name: row.substance_name,
      active_numerator_strength: row.active_numerator_strength,
      active_ingredient_unit: row.active_ingredient_unit,
      pharm_classes: row.pharm_classes,
      deaschedule: row.deaschedule,
      ndc_exclude_flag: row.ndc_exclude_flag,
      listing_record_certified_through: row.listing_record_certified_through
    })
    return res.status(201).end();
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
}

module.exports = {
  search,
  create_inventory_db_entry,
}