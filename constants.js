const IP = "localhost";
const PORT = 50541;

// object that holds key press and its value. so in func below, if  user presses w, will send move up to server etc...
const MOVE_KEYS = {
  w: "up",
  s: "down",
  a: "left",
  d: "right",
};

// obj that holds messages and mapped to unused keys
const sayMessage = {
  z: "Hello",
  x: "Nice work!",
  c: "Eat my tail!",
  v: "Bye!"
};

const usersInitials = {
  name: undefined
};

// users, add initials here! can only be <= 3 charaters or numerical 
usersInitials.name = "NAM"; // <== your initials here!

module.exports = {
  IP,
  PORT,
  MOVE_KEYS,
  sayMessage,
  usersInitials
};