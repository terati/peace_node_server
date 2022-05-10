
const app = require('./express/app');
const sequelize = require('./sequelize');
const PORT = 3000;

let ex;
const start = async () => {
  try {
    // await sequelizeInstance.sync(
    //   { force: false }
    // );
    try {
      await sequelizeInstance.authenticate();
      ex = 'Connection has been established successfully.';
      await User.sync({ force: false });
    } catch (error) {
      ex = 'Unable to connect to the database:';
    }

    app.listen(PORT);

  } catch (error) {
    console.log(error);
  }
}

start();

