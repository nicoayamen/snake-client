const net = require("net");
const { IP, PORT, usersInitials } = require('./constants');

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });


  // on connection connect, prints below and write Name: to server
  conn.on("connect", () => {
    console.log(`Successfully connected to game server`);
    conn.write(`Name: ${usersInitials.name}`);
  });

  // on timeout, passes a msg to the user
  conn.on("data", (data) => {
    console.log(data);
  });


  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = {
  connect,
};