// Array of objects

var people = [
  {
    name: 'Alper',
    profession: 'Developer',
    favoritePizza: 'Philly Steak'
  }, 
  {
    name: 'Tim',
    profession: 'Coder',
    favoritePizza: 'Anchovy'
  }, 
  {
    name: 'Hooman',
    profession: 'Sales',
    favoritePizza: 'Cheese',
    favoriteColors: [
      {
        name: 'Blue'
      },
      {
        name: 'Purple'
      }
    ]
  }
];

console.log(people[1].name + ' loves ' + people[1].favoritePizza + ' pizza!'); // Tim loves Anchovy pizza!

console.log(people[2].name + ' loves ' + people[2].favoriteColors[1].name + ' color!'); // Hooman loves Purple color!
