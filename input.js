const { MOVE_KEYS, sayMessage } = require('./constants');

// stores active TCP connection obj
let connection;
// declaring a var to pass below to let snake move until new input
let intervalId;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  // when data is being sent to the server, it calls back handleUserInput
  stdin.on("data", handleUserInput);

  return stdin;
};

//ctrl + c is the only way to exit the application, now checks to see if what key is and moves snake accordingly
const handleUserInput = function(key) {
  if (key === '\u0003') {
    console.log(`See ya later!`);
    process.exit();
  }

  // if user presses a key...
  if (MOVE_KEYS[key]) {
    connection.write(`Move: ${MOVE_KEYS[key]}`);
    if (intervalId) clearInterval(intervalId);
    intervalId = setInterval(() => {
      connection.write(`Move: ${MOVE_KEYS[key]}`);
    }, 75);

    return;

  }

  if (sayMessage[key]) {
    connection.write(`Say: ${sayMessage[key]}`);
  }

};

module.exports = {
  setupInput,
};