// start with strings, numbers and booleans
  /*
  let age = 100;
  let age2 = age;
  console.log(age ,age2);
  age = 200;
  console.log(age ,age2);

  let name = "nuno";
  let name2 = name;
  console.log(name, name2)
  name = "nunocompleto";
  console.log(name, name2)
  */

// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// and we want to make a copy of it.
const team = players; // we just create a reference! 
console.log(team, players);

// You might think we can just do something like this:
team[3] = 'Lux';
console.log(team, players);

// however what happens when we update that array?
// now here is the problem!
// oh no - we have edited the original array too!
// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!
// one way
const team2 = players.slice();
team2[3] = 'team2';
console.log(team2, players);

// or create a new array and concat the old one in
const team3 = [].concat(players);
team3[3] = 'team3';
console.log(team3, players);

// or use the new ES6 Spread
const team4 = [...players];
team4[3] = 'team4';
console.log(team4, players);

// or array.from
const team5 = Array.from(players)
team5[3] = 'team5';
console.log(team5, players);

// now when we update it, the original one isn't changed
// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
  name: 'Wes Bos',
  age: 80
};

// and think we make a copy:
const captain = person; // we just create a reference! 
captain.number = 99; 

// how do we take a copy instead?
const newPerson = Object.assign({}, person, {text: "new copy"});
console.log(person, newPerson);

// We will hopefully soon see the object ...spread
const newPerson2 = {...person};
newPerson2.text = "new copy2";
console.log(person, newPerson2);

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.

console.clear();
const nuno = {
  name: 'nuno',
  age: 25,
  social: {
    twitter: 'nuno'
  }
};
console.log(nuno);

const dev = {...nuno};
dev.name = "dev" // work 1 level
dev.social.twitter = "dev" // DONT WORK - update the original object 
console.log(nuno, dev)

// solution - with bad performance
const dev2 = JSON.parse(JSON.stringify(nuno));
dev2.name ="dev2"; // work 1 level
dev2.social.twitter = "dev2"; //work 2 level
console.log(nuno, dev2);
