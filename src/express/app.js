const express = require('express');
const bodyParser = require('body-parser');

const routes = {
  users: require('./routes/users'),
};

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// wrapper for async errors
function makeHandlerAwareOfAsyncErrors(handler) {
  return async function(req, res, next) {
    try {
      await handler(req, res);
    } catch (error) {
      next(error);
    }
  };
}

app.get('/', (req, res) => {
  res.send('yo watsup my dudes!!')
})


for (const [routeName, routeController] of Object.entries(routes)) {
  if (routeController.getAll) {
    app.get(
      `/api/${routeName}`,
      makeHandlerAwareOfAsyncErrors(routeController.getAll)
    );
  }
  if (routeController.createUser) {
    app.post(
      `/api/${routeName}`,
      makeHandlerAwareOfAsyncErrors(routeController.createUser)
    );
  }
}

module.exports = app;
