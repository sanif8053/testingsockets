const http = require('http')
const express = require("express");
const app = express();
const WebSocket = require("ws");
const PORT = process.env.PORT || 8000;
const path = require('path');
const moment = require("moment");
app.set("port", PORT);

var connectedClient = [];
var connectedController = {};
const server = http.createServer(
    app
  );

server.listen(PORT);
const wss = new WebSocket.Server({ server });

app.use(express.static(path.join(__dirname, '/public')))
wss.on("connection", function connection(ws) {
    ws.on("message", function incoming(message) {
          if (connectedClient.length == 0) {
            console.log(connectedClient.length)
            console.log('client agya')
            connectedClient.push(ws)
          }
          else {
          connectedClient[0].send(message)
          }
    });
  });
 

  