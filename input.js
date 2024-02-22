// stores active TCP connection obj
let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  //ctrl + c is the only way to exit the application, now checks to see if what key is and moves snake accordingly
  const handleUserInput = function (key) {
      if (key === '\u0003') {
        process.exit();
      }
      if (key === "w") {
        conn.write('Move: up')
        // console.log('pressed ' + key)
      }
      if (key === "a") {
        conn.write('Move: left')
        // console.log('pressed ' + key)
      }
      if (key === "s") {
        conn.write('Move: down')
        // console.log('pressed ' + key)
      }
      if (key === "d") {
        conn.write('Move: right')
        // console.log('pressed ' + key)
      }
  }

  // when data is being sent to the server, it calls back handleUserInput
  stdin.on("data", handleUserInput);

  return stdin;
};

module.exports = {
  setupInput,
}