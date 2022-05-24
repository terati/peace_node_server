const express = require('express');
const ws = require('ws');
const bodyParser = require('body-parser');

const routes = {
  users: require('./routes/users'),
  inventory_db: require('./routes/_inventory_db'),
  inventory_tracker: require('./routes/inventory_tracker'),
};

const app = express();

// headless websocket server
// const wsServer({ noServer: true });
// ws.Server.on('connection', socket => {
//   socket.on('message', message => console.log(message));
// });

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
  if (routeController.search) {
    app.get(
      `/api/inventory_db/`,
      makeHandlerAwareOfAsyncErrors(routeController.search)
    );
  }

  // inventory tracker data
  if (routeController.insert_inventory_record) {
    app.put(
      `/api/inventory_tracker`,
      makeHandlerAwareOfAsyncErrors(routeController.insert_inventory_record)
    )
  }
  if (routeController.update_inventory_record) {
    app.post(
      `/api/inventory_tracker`,
      makeHandlerAwareOfAsyncErrors(routeController.update_inventory_record)
    )
  }
  if (routeController.search_inventory_record) {
    app.get(
      `/api/inventory_tracker`,
      makeHandlerAwareOfAsyncErrors(routeController.search_inventory_record)
    )
  }

}



module.exports = app;
