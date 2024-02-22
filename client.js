const net = require("net");
// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: "172.30.156.235",
    port: 50541
  });


  // on connection connect, prints below and write Name: to server
  conn.on("connect", () => {
    console.log(`Successfully connected to game server`);
    conn.write("Name: NAM");
    conn.write("Say: beep");
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