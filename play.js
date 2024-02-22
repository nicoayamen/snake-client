const { connect } = require("./client");
const { setupInput } = require('./input');

// logs this first
console.log("Connecting ...");
//runs the game
setupInput(connect());
