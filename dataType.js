// data types 
//data ka types 


// 1. Primitive data types-> Number, String, Boolean, Undefined, Null, Symbol, BigInt

// 2. Reference data types-> Array [], Object {}, Function ()


// let a=10; // number
// let b=a; // b will have the same value as a, but they are independent variables

// let b=a+5; // b is now 15, a is still 10


// let a = [1, 2, 3]; // array
// let b = a; // b is now a reference to the same array as a,

//Primitive 

//########### 1. Number:

//12 integer -> number 
//12.35 number 
//both are number data types in JS

//########### 2. String:

//"Hello" (double quotes) string 
//'Hello' (single quotes) string 
//`Hello` (backticks) string 

//all are string data types in JS


//########### 3. Boolean:

//true or false

let a = true; // boolean
let b = false; // boolean   

let isTrue = true; // boolean
let isFalse = false; // boolean



//########### 4. Null: 
let nullValue = null; // null


//########### 5. Undefined:

//Undefined → Variable declared but not assigned
let undefinedValue; // undefined   
// let x; // x is undefined



//########### 6. Null → Intentional empty value
let x = null;



//########### 7. Symbol-> unique and immutable value, often used as an identifier for object properties. 
// Each time you create a new Symbol, it is guaranteed to be unique identifier (rarely used).

// Creating a basic symbol
const id = Symbol('id');
const anotherId = Symbol('id');

console.log(id === anotherId); // false (every symbol is unique)

// Using a symbol as an object property key
const user = {
  name: 'Alice',
  [id]: 12345 // computed property syntax
};

console.log(user[id]); // 12345

// Why Use Symbols?

// 1. Avoiding Property Name Collisions
// If you are working with third-party libraries or large objects and need to add custom properties without risking overwriting existing keys 
// (or having your keys overwritten), symbols provide a safe namespace.

const sensitiveData = Symbol('password');

const account = {
  username: 'johndoe',
  [sensitiveData]: 'superSecret123'
};

// Standard iteration won't expose the symbol key
console.log(Object.keys(account)); // ['username']
console.log(JSON.stringify(account)); // '{"username":"johndoe"}'

// To access symbol keys explicitly:
console.log(Object.getOwnPropertySymbols(account)); // [ Symbol(password) ]


// 2. Well-Known Symbols (Built-in Behavior)
// JavaScript uses built-in symbols known as Well-Known Symbols to customize internal language behaviors. 
// For example, Symbol.iterator defines the default iterator for an object, allowing it to work with loops like for...of.

const collection = {
  items: [1, 2, 3],
  [Symbol.iterator]: function* () {
    let index = 0;
    while (index < this.items.length) {
      yield this.items[index++];
    }
  }
};

for (const num of collection) {
  console.log(num); // Outputs: 1, 2, 3
}


// Global Symbol Registry (Symbol.for and Symbol.keyFor)

// If you need to share symbols across different files or scopes, you can use the global symbol registry:
// Symbol.for(key): Searches for an existing symbol with the given key. If it doesn't exist, a new global symbol is created.
// Symbol.keyFor(symbol): Retrieves the shared key for a given global symbol.

// Create a global symbol
const globalSym = Symbol.for('app.theme');

// Retrieve it elsewhere in your code
const sameSym = Symbol.for('app.theme');

console.log(globalSym === sameSym); // true
console.log(Symbol.keyFor(globalSym)); // 'app.theme'

//symbol -> unique and immutable value, often used as an identifier for object properties.

let obj = {
  uid: 1,
  name: "Piyash",
  age: 26,
  email: "piyash@example.com" 
}
let u1 = Symbol("uid");
obj[u1] = "001";





//########### 8. BigInt → Very large integers
123456789012345678901234567890n

//2. Reference Data Types

//Array → [10, 20, 30]
//Object → { name: "Harsh", age: 26 }
//Function → function greet() {}

//Type Coercion (Auto-Conversion)

//JavaScript auto-converts types in some operations:
"5" + 1 // "51" → number converted to string
"5" - 1 // 4 → string converted to number
true + 1 // 2
null + 1 // 1
undefined + 1 // NaN

//== compares value with type conversion
//=== compares value + type (no conversion)
//js
5 == "5" // true
5 === "5" // false


 //NaN – Not a Number

 //typeof NaN // "number"

//Even though it means “Not a Number”, NaN is actually of type number .
//This is because operations like 0 / 0 or parseInt("abc") still produce a numeric result —
//just an invalid one


// Truthy and Falsy Values

//Falsy values:
//false , 0 , "" , null , undefined , NaN
//Everything else is truthy, including:
//"0" , "false" , [] , {} , function(){}

if ("0") {
 console.log("Runs"); // "0" is a non-empty string = truthy
}

