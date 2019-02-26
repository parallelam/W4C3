// Object with methods, lexical this

var myCat = {
  name: 'Bella',
  age: 3,
  sleep: function(hr) {
    console.log('sleeping for ' + hr + ' hours...');
  },
  yell: function() {
    console.log('my name is ' + this.name + ' meooooowwwwwwwww');
    var temp = this;

    var secondFunc = function() { // Regular function which have it's own scope for 'this'
      console.log(this.age); // undefined since 'this' points to Window object
    };

    var thirdFunc = () => { // Created an arrow function, which foesn't create a new scope for 'this'
      console.log(this.age); // 3
    }

    secondFunc();
    thirdFunc();
  }
};

console.log(myCat.name); // Bella
console.log(myCat.age);  // 3

myCat.sleep(5); // sleeping for 5 hours

myCat.yell(); // my name is Bella meooooowwwwwwwww
