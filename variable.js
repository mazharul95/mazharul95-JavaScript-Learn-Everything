// var let const
// declarations & initialization

var a; //declare karna
var a = 12; //declare and initialize(initialize means first value assign)

//window te add hoy auto 
//function scoped
// var redeclare kora jai same name and same value diye error asbe nah,

// var: Older way to declare variables:
var age = 20;
age = 21;       // allowed
// var age = 22;   // also allowed

//The important issue is that var is function-scoped, not block-scoped:
function abcd(){
    if (true) {
        var x = 10;
    }  
}  //  var function-scoped howar karone, var ke funtion er jekono jaiga theke access kora jai that is another problem, 
 
//console.log(x); // 10



// let: Use let when the value needs to change:

let score = 10;
score = 20; // allowed

//It is block-scoped:

if (true) {
    let x = 10;
}
// // console.log(x); // ReferenceError

//And you can't redeclare it in the same scope:

// let age = 20;
// let age = 30; // SyntaxError


// const: Use const when the variable should not be reassigned:

const name = "John";
// name = "Sam"; // TypeError
// One important detail: with objects and arrays, const prevents reassignment, not modification:

const user = {
    name: "John"
};

user.name = "Sam"; // ✅ allowed

//But: //user = {}; // ❌Uncaught TypeError: Assignment to constant variable.
//Easy rule to remember
//Use const by default. Use let when you know the variable needs to change. Generally avoid var in modern JavaScript.

//const name = "Alex"; // doesn't need reassignment
//let score = 0;       // will change
//score++;





//***Scope (global, block {}, functional)*/ 

var a = 12; // global Scope value declare whole code e eita use kora jabe tai global hay;

// block Scope
{
    var b = 13; // global Scope reason are: var is leaks outside the block scope, var ignored { } block scope, 
}

// functional Scope 
function abcd(){
    if(true){
        var a = 20;// var whole function  acccessable,
    }
}


// let example: every time let use korbo;
function abcd (){
    let a = 12; // let a access whole function inside;
}


function abcd (){
    if(true)
    {
        let a = 12; // let just access in this block,which we called block scope  
    }
}


// reassignment, redeclaration

// var a = 12 
// a = 31;

// var a = 22 // var a = 22, redeclare with var its allowed in js; 

// let b = 12;
// b = 32;

// let b = 20; // let b = 20, redeclare with let its not possible or allowed in js, UnCaught erro occured in browser;




//*** Temporal Dead Zone (TDZ) */

// The Temporal Dead Zone is the period between entering a scope and the point where a let or const variable is declared. 
// During this period, you cannot access the variable.
// Example
// console.log(age); // ❌ ReferenceError

//let age = 25;
// Here, age exists in the scope due to hoisting, but it cannot be accessed before its declaration. 
// The area from the start of the scope until let age is the Temporal Dead Zone.

// Compare with var
// console.log(age); // undefined

//var age = 25;
//var is hoisted and initialized with undefined, so accessing it before the declaration doesn't cause a TDZ error.

// const also has TDZ
// console.log(name); // ❌ ReferenceError
// const name = "Alex";



// Easy way to remember
// let / const
//      ↓
// Scope starts
//      ↓
//   🚫 TDZ
//      ↓
// Declaration
//      ↓
//   ✅ Can access

// Important: let and const are hoisted, but they are not initialized until execution reaches their declaration. That's why the TDZ exists.


//*** Hoisting impact per type */

// hoisting -> JavaScript-এ যখন একটি variable তৈরি করা হয়, তখন সেটি দুই ভাগে ভাগ হয়ে যায়—এর declaration অংশটি উপরে চলে যায়, আর initialization অংশটি নিচে থেকে যায়।
//Hoisting means JavaScript processes declarations before executing the code. But the effect is different for each type.

// var -> hoist -> undefined
// let -> hoist -> x
// const-> hoist -> x

// 1. var
//console.log(x);

// var x = 10; // Output: undefined

//Conceptually, JavaScript treats it roughly like:
// var x;
// console.log(x); // undefined

// x = 10;
//So var is hoisted and initialized with undefined.

//2. let
//console.log(x); // ❌ ReferenceError

//let x = 10;
//let is hoisted, but not initialized.

// Conceptually:

// x exists, but is in TDZ
// x is not initialized until the line let x = 10; is executed.
// console.log(x); // ❌ Cannot access before initialization

// let x = 10;     // TDZ ends here
//That's the Temporal Dead Zone.

//3. const
// const behaves like let regarding hoisting:

//console.log(x); // ❌ ReferenceError

// const x = 10;
// It is hoisted but remains in the TDZ until the declaration is reached.


// In short: var gives you undefined; let and const give you a TDZ error before declaration.



