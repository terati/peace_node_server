const { models } = require('../../sequelize');
const { Op } = require("sequelize");

async function search_inventory_record(req, res, next) {
  try {
    let search = req.query.search;
    let offset = req.query.offset ?? 0;
    let limit = req.query.limit ?? 50;
    const ALL = await models.inventory_tracker.findAndCountAll({
      where: {
        ndc_package_code_without_hyphens: {
          [Op.iLike]: `%${search}%`
        }
      },
      offset,
      limit,
    });
    return res.status(200).json(ALL);
  } catch (error) {
    return res.status(500).json(error);
  }
}

async function insert_inventory_record(req, res, next) {
  try {
    const ALL = await models.inventory_tracker.create({
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
    const ALL = await models.inventory_tracker.update({
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
  insert_inventory_record,
  update_inventory_record,
  search_inventory_record,
}