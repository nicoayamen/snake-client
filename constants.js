const IP = "172.30.156.235";
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
  name: "NAM",
};



module.exports = {
  IP,
  PORT,
  MOVE_KEYS,
  sayMessage,
  usersInitials
};