const { models } = require('../../sequelize');


async function getAll(req, res, next) {
  try {
    const ALL = await models.example.findAll({
      attributes: ['user_id', 'name']
    });
    return res.status(200).json(ALL);
  } catch (error) {
    return res.status(500).json(error);
  }
}

module.exports = {
  getAll,
}
