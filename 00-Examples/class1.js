// Searching in arrays

// Our version
function checkIfExists(arrayName, keyword) {
  var found = false;
  for (var i = 0; i < arrayName.length; i++) {
    if(arrayName[i] === keyword) {
      found = true;
    }
  }
  return found;
}

var names = ["Sophie", "George", "Waldo", "Stephen", "Henry"];
var result1 = checkIfExists(names, "Waldo");
console.log(result1); // true

var fruits = ["apple", "banana", "strawberry"];
var result2 = checkIfExists(fruits, "pear");
console.log(result2); // false


// Built-in JS methods
var result3 = names.includes("Waldo");
console.log(result3); // true

var result4 = names.indexOf("Stephen");
console.log(result4); // 3

var result5 = names.indexOf("James");
console.log(result5); // -1
