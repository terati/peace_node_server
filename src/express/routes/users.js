const { models } = require('../../sequelize');


async function getAll(req, res, next) {
  // console.log("getAll_attempted");
  try {
    const ALL = await models.example.findAll({
      attributes: ['user_id', 'name']
    });
    return res.status(200).json(ALL);
  } catch (error) {
    return res.status(500).json(error);
  }
}

async function createUser(req, res, next) {
  // console.log("createUser_attempted");
  try {
    console.log(req);
    const ALL = await models.example.create({
      user_id: req.body.user_id,
      name: req.body.name
    });
    return res.status(201).json(ALL).end();
  } catch (error) {
    console.log(error)
    return res.status(400).json(error);
  }
}

module.exports = {
  getAll,
  createUser,
}
