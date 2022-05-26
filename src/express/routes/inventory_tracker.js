const sequelize = require('../../sequelize');
const { Op, Sequelize, QueryTypes } = require("sequelize");
// const inventory_dbModel = require('../../sequelize/models/inventory_db.model');

async function search_inventory_db(req, res, next) {
  try {
    let search_var = req.query.search ? `%${req.query.search}%` : '%';
    let offset_var = req.query.offset ?? 0;
    let limit_var = req.query.limit ?? 50;
    const rows = await sequelize.query(
      `SELECT * FROM inventory_db 
        LEFT JOIN inventory_tracker
        ON inventory_db.ndc_package_code_without_hyphens = inventory_tracker.ndc_package_code_without_hyphens
        WHERE inventory_db.ndc_package_code_without_hyphens ILIKE :search_var
        LIMIT :limit_var
        OFFSET :offset_var;
      `,
       {
          replacements: {
            search_var,
            limit_var,
            offset_var
          },
          type: QueryTypes.SELECT 
        }
    );
    const count = await sequelize.query(
      ` SELECT COUNT(*) FROM inventory_db
        LEFT JOIN inventory_tracker
        ON inventory_db.ndc_package_code_without_hyphens = inventory_tracker.ndc_package_code_without_hyphens
        WHERE inventory_db.ndc_package_code_without_hyphens ILIKE :search_var
      `,
      {
        replacements: {
          search_var,
        },
        type: QueryTypes.SELECT 
      }
    );
    return res.status(200).json( { "count": count[0].count, "rows": [...rows] } );
  } catch (error) {
    return res.status(500).json(error);
  }
}

async function search_inventory_record(req, res, next) {
  try {
    let search_var = req.query.search ? `%${req.query.search}%` : '%';
    let offset_var = req.query.offset ?? 0;
    let limit_var = req.query.limit ?? 50;
    const rows = await sequelize.query(
      `SELECT * FROM inventory_tracker 
        LEFT JOIN inventory_db
        ON inventory_db.ndc_package_code_without_hyphens = inventory_tracker.ndc_package_code_without_hyphens
        WHERE inventory_db.ndc_package_code_without_hyphens ILIKE :search_var
        LIMIT :limit_var
        OFFSET :offset_var;
      `,
       {
          replacements: {
            search_var,
            limit_var,
            offset_var
          },
          type: QueryTypes.SELECT 
        }
    );
    const count = await sequelize.query(
      ` SELECT COUNT(*) FROM inventory_tracker 
        LEFT JOIN inventory_db
        ON inventory_db.ndc_package_code_without_hyphens = inventory_tracker.ndc_package_code_without_hyphens
        WHERE inventory_db.ndc_package_code_without_hyphens ILIKE :search_var
      `,
      {
        replacements: {
          search_var,
        },
        type: QueryTypes.SELECT 
      }
    );
    return res.status(200).json( { "count": count[0].count, "rows": [...rows] } );
  } catch (error) {
    return res.status(500).json(error);
  }
}

async function insert_inventory_record(req, res, next) {
  try {
    const ALL = await sequelize.models.inventory_tracker.create({
      ndc_package_code_without_hyphens: req.body.ndc_package_code_without_hyphens,
      notes: req.body.notes,
      thresh: req.body.thresh,
      qoh: req.body.qoh,
      purchase_price: req.body.purchase_price,
      vendor: req.body.vendor,
      refill_status: req.body.refill_status,
      suggested_selling_price: req.body.suggested_selling_price,
      update_date: req.body.update_date,
    });
    return res.status(200).json(ALL);
  } catch (error) {
    return res.status(500).json(error);
  }
}

async function update_inventory_record(req, res, next) {
  try {
    const ALL = await sequelize.models.inventory_tracker.update({
      notes: req.body.notes,
      thresh: req.body.thresh,
      qoh: req.body.qoh,
      purchase_price: req.body.purchase_price,
      vendor: req.body.vendor,
      refill_status: req.body.refill_status,
      suggested_selling_price: req.body.suggested_selling_price,
      update_date: req.body.update_date,
    }, {
      where: {
        ndc_package_code_without_hyphens: req.body.ndc_package_code_without_hyphens
      },
    });
    return res.status(200).json(ALL);
  } catch (error) {
    return res.status(500).json(error);
  }
}


module.exports = {
  search_inventory_db,
  insert_inventory_record,
  update_inventory_record,
  search_inventory_record,
}