var pets1 = ["cat", "dog", "rabbit"];

var pets2 = pets1;

pets2.push("giraffe");

console.log(pets1);
console.log(pets2);

// We pushed a new item into the pets2 array, but pets1 got affected by that
// Since the both arrays point to the same memory spot

// To prevent this, we need to deep copy the array, to create a new array, not 
// reference another array

var myPets1 = ["cat", "dog", "rabbit"];

var myPets2 = [...myPets1];

myPets2.push("giraffe");

console.log(myPets1);
console.log(myPets2);

// Now myPets2 array have the new item while the original array did not get the new one.
