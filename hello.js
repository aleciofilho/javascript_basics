// REPL for js (on terminal)
// node

// Run js files on terminal
// node <filepath>

// Print
console.log("Hello from Javascript");

// PRIMITIVE TYPES (7)
("Js"); // string
42; // number
3.14; // number
true; // boolean
undefined; // empty
null; // nothing

// Checking types
console.log(typeof 42);
console.log(typeof "Js");

// Casting types
// string => number
// Number.parseInt(<número>, <base decimal>)
console.log(Number.parseInt("42", 10));
// console.log(Number("42"))

// number => string
console.log((42).toString());

// Data structures
js_arr = ["first", 2, true];

js_obj = { name: "alecio", age: 23 };

// VARIABLES and variable naming convention

// var something = "something"

// Variable that won't be re-assigned
// const firstName = "alecio";

// Variable that will be re-assigned
let avatar = "Aang";
avatar += ", the last airbender";

// STRINGS

// length
avatar.length;

// character access
avatar[4];

// substring
console.log(avatar.substring(5, 9));

// Case manipulation
console.log(avatar.toLocaleUpperCase());
avatar.toLocaleLowerCase();

// split
// string => array
teamAvatarString = "Aang, Katara, Sokka";
console.log(teamAvatarString.split(", "));

const firstName = "Toph";
const lastName = "Beifong";

// interpolation
console.log(`${firstName} ${lastName} is the fourth member of team Avatar`);

// ARRAYS
const team_avatar = ["Aang", "Katara", "Sokka"];

// Array CRUD
team_avatar.push("Toph"); // create
team_avatar[3]; // read
team_avatar[2] = "Zuko";
team_avatar.splice(2, 1);

// Loop with foreach
team_avatar.forEach((member) => {
  console.log(member.toUpperCase());
});

// CONTROL FLOW

const bender = "Katara";

if (bender === "Toph") {
  console.log(`${bender} is the best bender!`);
} else if (bender === "Katara") {
  console.log(`${bender} is alsog great, but not the best`);
} else {
  console.log(`Nice try, but no.`);
}

// ternary operator

console.log(bender === "Toph" ? "Best bender!" : "Nice try");

// Falsy values
// null
// undefined
// false
// ""
// 0
// NaN

// OBJECTS
const team_avatar_benders = { aang: "air", katara: "water", toph: "earth" };

// reading a property
console.log(team_avatar_benders["aang"]);
console.log(team_avatar_benders.katara);

// setting a property
team_avatar_benders["zuko"] = "fire";
// team_avatar_benders.zuko = 'fire';
// console.log(team_avatar_benders);

// iterating through an object
console.log(Object.values(team_avatar_benders));
Object.entries(team_avatar_benders).forEach(([member, element]) => {
  console.log(`${member} bends ${element}`);
});

// FUNCTIONS

// function statement

// function introducePet(name) {
//   console.log(`${name} is an awesome pet`);
// }

// function expression
const introducePet = function (name) {
  console.log(`${name} is an awesome pet`);
};
introducePet("Appa");

// arrow function
const introducePetArrow = (name) => {
  console.log(`${name} is an awesome pet`);
};
introducePetArrow("Momo");

// Capitalize example

const capitalize = (word) => {
  const firstLetter = word[0].toUpperCase();
  const restOfTheWord = word.slice(1).toLowerCase();
  return `${firstLetter}${restOfTheWord}`;
};

console.log(capitalize("MOMO"));
