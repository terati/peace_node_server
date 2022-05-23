const { WebSocketServer } = require('ws');

function websocketConnect(expressServer) {
  const websocketServer = new WebSocketServer({
    noServer: true,
    path: '/ws',
  })
  console.log("attach_websockets");
  expressServer.on("upgrade", (request, socket, head) => {
    console.log("attempt upgrade");
    websocketServer.handleUpgrade(request, socket, head, (websocket) => {
      websocketServer.emit("connection", websocket, request);
    });
  });

  websocketServer.on(
    "connection",
    function connection(websocketConnection, connectionRequest) {
      console.log("connection");

      websocketConnection.on("message", (message) => {
        const parsedMessage = JSON.parse(message);
        console.log(parsedMessage);
      })
    }
  )

  return websocketServer;
};

module.exports = (expressServer) => {
  websocketConnect(expressServer);
}