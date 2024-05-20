console.log("Hello World");

// Variables
let a = 90; // a Contains 90
a = "SOHAM";

// a is the container
// = is the assigning operator

console.log(a);

// Var Let Const
// Var Is A Global Scope Variable
// Let Is A Block Scope Variable
// Const Is A Constant Variable

var b = 90; // It IS A GLOBAL Scope, So It Will CHnage The Value Of B If Inside A Block The Value Of B Is Changed
b = "SOHAM";

// Inside A Block
{
  var b = 100;
  console.log(b);
}

console.log(b);

let c = 90; // Let IS A BLOCK Scope, So It Will Not CHnage The Value Of C If Inside A Block The Value Of C Is Changed
c = "SOHAM"; // U Cannot Redeclare LEt, But Chnage it Directly

// Inside A Block
{
  let c = 100;
  console.log(c);
}

console.log(c);

const d = 90; // Cannot Be Chnaged, Since Constant
console.log(d);

// DATA TYPES
// Primitive Data Types

// NNSSBBU
// Number, Null, String, Symbol, Boolean, BigInt, Undefined

let n = 90; // Number
let nul = null; // Null
let s = "SOHAM"; // String
let sym = Symbol("This Is A Symbol"); // Symbol
let bol = true; // Boolean
let bi = BigInt(900); // BigInt
let u = undefined; // Undefined
let v; // Undefined

console.log(n, nul, s, sym, b, bi, u, v);

// Get The Type Of Data
console.log(
  typeof n,
  typeof nul,
  typeof s,
  typeof sym,
  typeof b,
  typeof bi,
  typeof u,
  typeof v
);

// Objects IN JS - Non Primitive Data Type // Use To Create Complex Data Structures And Mapping
const obj = {
  name: "SOHAM",
  age: 17,
  isStudent: true,
};

console.log(obj["name"]);

let num = Math.random();

if (num > 0.5) {
  console.log("Heads");
} else {
  console.log("Tails");
}

// Conditioning In JS

let time = "Morning";

if (time == "Morning") {
    console.log("Good Morning");
}
else if (time == "Afternoon") {
    console.log("Good Afternoon");
}
else {
    console.log("Good Night");
}

// Increment And Decrement
let i = 0;
console.log(i);
console.log(i++);
console.log(i);

let j = 0;
console.log(j);
console.log(j--);
console.log(j);
