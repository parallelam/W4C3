"use strict";

function add() {
  x = 3; // ReferenceError: x is not defined
  console.log(x + 5);
}

add(); 
console.log(x);

// If you remove "use strict" above, JS will not complain anymore.
