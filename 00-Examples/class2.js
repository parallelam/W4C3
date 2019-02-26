// Filtering arrays

// Our version
function filterArray(arrayName, letter, index) {
  var result = [];
  for (var i = 0; i < arrayName.length; i++) {
    if(arrayName[i].charAt(index).toLowerCase() === letter.toLowerCase()) {
      result.push(arrayName[i]);
    }
  }
  return result;
}

var names = ["Sophie", "George", "Waldo", "Stephen", "Henry"];
var filteredArray = filterArray(names, 's', 0);

console.log(filteredArray); // ["Sophie", "Stephen"]


// Built-in JS version
// Result of filter method will always be a new array
 var newArray = names.filter(function(name) {
  if(name.charAt(1) === "e") {
    return name;
  }
 });

 console.log(newArray); // [ 'George', 'Henry' ]
