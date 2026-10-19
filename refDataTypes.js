// ### 1. Reference data types: Array, Object, Function

//1.1 Array []
// Create an array
let a = [1, 2, 3];

// Copy the reference, not the array itself
let b = a;

// Remove the last element through b
b.pop();

// Both variables refer to the same array
console.log(a); // [1, 2]
console.log(b); // [1, 2]

// Check whether both refer to the same array
console.log(a === b); // true


// Step by step:
// 1. a একটি array-কে reference করে।
// 2. b = a করলে b একই array-কে reference করে।
// 3. b.pop() array থেকে 3 সরিয়ে দেয়।
// 4. তাই a দিয়েও পরিবর্তিত array দেখা যায়।


//1.2 Object {}

// Create an object
let obj = {
    name: "Piyash",
    age: 31,
    email: "piyash@example.com"
};

// Copy the reference
let obj2 = obj;

// Modify a property through obj2
obj2.age = 32;

// Both variables see the change
console.log(obj.age);  // 32
console.log(obj2.age); // 32

console.log(obj === obj2); // true


// 1.3 Function
// Function expression
let greet = function () {
    console.log("Hello, World!");
};

// Execute the function
greet();

// Output:
// Hello, World!


// - function — function তৈরি করে।
// - greet — function-টি ধরে রাখা variable।
// - () — function call-এর সময় arguments দেওয়া হয়।
// - {} — function body।
// - greet() — function execute করে।


//### 2. Function parameters এবং return


// 2.1 Function with parameters
function add(a, b) {
    console.log(a + b);
}

add(10, 20);

// Output: 30


// এখানে a এবং b হলো parameters, আর 10 ও 20 হলো arguments।


// 2.2 Function with return
function multiply(a, b) {
    return a * b;
}

let result = multiply(10, 20);

console.log(result); // 200


// console.log() শুধু output দেখায়। return function থেকে একটি value ফেরত দেয়, যেটি পরে অন্য কাজে ব্যবহার করা যায়।


//2.3 Arrow function
// Regular arrow function
const square = (n) => {
    return n * n;
};

console.log(square(5)); // 25

// Shorter arrow function
const square1 = n => n * n;

console.log(square1(6)); // 36

// একটি parameter থাকলে parentheses বাদ দেওয়া যায়। আর single expression implicit return করলে {} ও return বাদ দেওয়া যায়।


// ### 3. Dynamic typing in JavaScript



// JavaScript dynamically typed। অর্থাৎ variable-এর জন্য আগে থেকে data type declare করতে হয় না; assigned value-এর type runtime-এ নির্ধারিত হয়।

let myVariable = 42;
console.log(typeof myVariable); // "number"

myVariable = true;
console.log(typeof myVariable); // "boolean"

myVariable = "Hello, world!";
console.log(typeof myVariable); // "string"

myVariable = [1, 2, 3];
console.log(typeof myVariable); // "object"

myVariable = null;
console.log(typeof myVariable); // "object" (historical quirk)

myVariable = undefined;
console.log(typeof myVariable); // "undefined"


//মূল কথা: let variable-এ বিভিন্ন type-এর value assign করা যায়। তবে const variable-কে reassignment করা যায় না।

// ### 4. typeof quirks
console.log(typeof null);        // "object"
console.log(typeof []);          // "object"
console.log(typeof {});          // "object"
console.log(typeof NaN);         // "number"
console.log(typeof undefined);   // "undefined"
console.log(typeof function () {}); // "function"


// বিশেষভাবে মনে রাখবে:
// - typeof null → "object" — ঐতিহাসিক JavaScript quirk।
// - typeof [] → "object" — array হলো object।
// - typeof NaN → "number" — NaN numeric type-এর special value।
// - typeof function () {} → "function"।

// Array check করতে:
console.log(Array.isArray([1, 2, 3])); // true
console.log(Array.isArray({}));        // false

console.log(null === null);            // true
console.log(Number.isNaN(NaN));        // true



// ### 5. Type coercion: automatic type conversion
// JavaScript কিছু operation-এর সময় স্বয়ংক্রিয়ভাবে type convert করে।
console.log("5" + 2);   // "52"
console.log("5" - 2);   // 3
console.log("5" * 2);   // 10
console.log(true + 1);  // 2
console.log(false + 1); // 1


// কেন এমন হয়?
// - "5" + 2 → string concatenation, ফলাফল "52"।
// - "5" - 2 → numeric conversion, ফলাফল 3।
// - true + 1 → 1 + 1, ফলাফল 2।
// - false + 1 → 0 + 1, ফলাফল 1।

// ### 6. Equality: == vs ===
console.log(5 == "5");        // true
console.log(5 === "5");       // false

console.log(false == 0);      // true
console.log(false === 0);     // false

console.log(null == undefined);  // true
console.log(null === undefined); // false


// - == — প্রয়োজন হলে type coercion করে।
// - === — type conversion ছাড়াই strict equality পরীক্ষা করে।
// Best practice: সাধারণত === এবং !== ব্যবহার করবে।

// ### 7. NaN is not equal to itself
console.log(NaN === NaN); // false
console.log(NaN == NaN);  // false

console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN("hello")); // false

// NaN-এর সঙ্গে নিজেকেও compare করলে false পাওয়া যায়। Number.isNaN() ব্যবহার করে NaN পরীক্ষা করা যায়।

// 8. Floating-point precision
console.log(0.1 + 0.2);
// 0.30000000000000004

console.log(0.1 + 0.2 === 0.3);
// false

// JavaScript-এর সাধারণ Number IEEE 754 double-precision floating-point format ব্যবহার করে। কিছু decimal fraction সঠিকভাবে binary-তে represent করা যায় না।

// 9. Truthy এবং falsy values
// Falsy values
console.log(Boolean(false));     // false
console.log(Boolean(0));         // false
console.log(Boolean(-0));        // false
console.log(Boolean(0n));        // false
console.log(Boolean(""));        // false
console.log(Boolean(null));      // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN));       // false


// এই আটটি value JavaScript-এর falsy values।
// Truthy values
console.log(Boolean(true));  // true
console.log(Boolean(1));     // true
console.log(Boolean(-1));    // true
console.log(Boolean("0"));   // true
console.log(Boolean(" "));   // true
console.log(Boolean([]));    // true
console.log(Boolean({}));    // true
console.log(Boolean("false")); // true


// গুরুত্বপূর্ণ: Empty array [], empty object {} এবং "false" string—সবই truthy।
// condition-এর উদাহরণ
if ([]) {
    console.log("Array runs"); // Array runs
}

if ({}) {
    console.log("Object runs"); // Object runs
}

if ("") {
    console.log("Empty string runs");
} else {
    console.log("Empty string is falsy");
    // Empty string is falsy
}



// 10. + operator-এর অদ্ভুত আচরণ
console.log([] + []);     // ""
console.log([] + {});     // "[object Object]"
console.log(true + true); // 2


// + operator string concatenation অথবা numeric addition করতে পারে। Object বা array-এর ক্ষেত্রে conversion-এর নিয়ম ফলাফল নির্ধারণ করে।
// এগুলো interview-এর জন্য interesting, কিন্তু production code-এ এ ধরনের implicit conversion-এর ওপর নির্ভর না করাই ভালো।

// 11. null vs undefined
let c;
let d = null;

console.log(c); // undefined
console.log(d); // null

console.log(c == null);  // true
console.log(d == null);  // true

console.log(c === null); // false
console.log(d === null); // true


// - undefined — value assign করা হয়নি বা value অনুপস্থিত।
// - null — ইচ্ছাকৃতভাবে কোনো value নেই বোঝাতে ব্যবহার করা হয়।

// 12. [] == false কেন true?

console.log([] == false); // true
// console.log([] === false); // false

console.log( "" == false);  // true
console.log( "0" == false); // true


// Loose equality-এর conversion rules অনুযায়ী:
// 1. false numeric context-এ 0 হয়।
// 2. Empty array [] primitive value-তে convert হয়ে "" হয়।
// 3. "" numeric context-এ 0 হয়।
// 4. ফলে তুলনাটি শেষ পর্যন্ত 0 == 0, যা true।
// কিন্তু [] === false হলো false, কারণ array এবং boolean ভিন্ন type-এর।




// 13. var vs let
if (true) {
    var x = 10;
    let y = 20;
}

console.log(x); // 10

// console.log(y); // ReferenceError


// - var function-scoped, তাই if block-এর বাইরে x ব্যবহার করা যায়।
// - let block-scoped, তাই y শুধু ওই block-এর মধ্যে accessible।
// Modern JavaScript-এ সাধারণত let এবং const ব্যবহার করবে।

// 14. const does not make objects immutable
const user = {
    name: "Rahim",
    age: 25
};

// Allowed: Modify existing properties
user.name = "Karim";
user.age = 30;

console.log(user);
// { name: "Karim", age: 30 }

// Not allowed: Reassign the variable
// user = { name: "Hasan" }; // TypeError
// const variable-এর binding-কে reassignment থেকে রক্ষা করে, কিন্তু object-এর properties-কে immutable করে না।


// Array example
const fruits = ["Apple", "Banana"];

fruits[0] = "Mango";       // Allowed
fruits.push("Orange");     // Allowed

console.log(fruits);
// ["Mango", "Banana", "Orange"]

// fruits = ["Grapes"]; // TypeError


// Object.freeze() দিয়ে property পরিবর্তন বন্ধ করা
"use strict";

const profile = {
    name: "Rahim",
    age: 25
};

Object.freeze(profile);

// profile.name = "Karim"; // TypeError in strict mode

console.log(profile.name); // "Rahim"


// Object.freeze() shallow। Nested object আলাদাভাবে freeze না করলে তার properties পরিবর্তন করা যেতে পারে।

// 15. Reference equality: arrays and objects
// console.log([] === []); // false
// console.log({} === {}); // false

const aa = [];
const bb = aa;

console.log(aa === bb); // true


// প্রতিটি [] বা {} literal নতুন object তৈরি করে। তাই দুটি আলাদা object-এর contents একই হলেও reference আলাদা হলে strict equality false হয়。



// 16. Infinity এবং numeric special values
console.log(1 / 0);       // Infinity
console.log(-1 / 0);      // -Infinity
console.log(0 / 0);       // NaN

console.log(typeof Infinity); // "number"
console.log(Number.isFinite(Infinity)); // false

//Infinity, -Infinity এবং NaN—সবই JavaScript-এর Number type-এর special numeric values।




// 17. Automatic Semicolon Insertion (ASI)

// ভুল উদাহরণ
function getValue() {
    return
    {
        name: "Rahim"
    };
}
console.log(getValue()); // undefined

// return-এর পর সরাসরি newline থাকায় JavaScript এখানে কার্যত return; হিসেবে interpret করে।
// সঠিক উদাহরণ

function getValue() {
    return {
        name: "Rahim"
    };
}

console.log(getValue());
// { name: "Rahim" }

// Rule: Value return করতে চাইলে return-এর পর একই লাইনে expression শুরু করবে। Expression পরের লাইনগুলোতে চলতে পারে।





// ### 18. Predict the result

// এবার তোমার দেওয়া চারটি expression একে একে বুঝি।
// Example 1: true + false

console.log(true + false);
// Output: 1

//  Explanation Step by step:
// 1. true numeric context-এ 1 হয়।
// 2. false numeric context-এ 0 হয়।
// 3. 1 + 0 = 1।


// Example 2: null + 1
 console.log(null + 1);
// Output: 1

// Explanation Step by step:
// 1. Numeric context-এ null convert হয়ে 0 হয়।
// 2. 0 + 1 = 1।



// Example 3: 5 + "hello"
   console.log(5 + "hello");
// Output: "5hello"

// Explanation Step by step:
// 1. একটি operand হলো string "hello"।
// 2. + string concatenation করে।
// 3. Number 5 string "5" হয়।
// 4. ফলাফল "5hello"।



// Example 4: !!undefined
   console.log(!!undefined);
// Output: false

// Explanation Step by step:
// 1. undefined একটি falsy value।
// 2. প্রথম !undefined → true।
// 3. দ্বিতীয় !true → false।
// Double negation !!value দিয়ে কোনো value-এর Boolean equivalent পাওয়া যায়।

// Example 5: NaN
   console.log(NaN);
// Output: NaN

 console.log(Boolean(NaN)); // false
 console.log(typeof NaN);   // "number"
 console.log(NaN === NaN);  // false

 // NaN নিজে একটি special numeric value। এটি falsy, এর type "number", এবং এটি নিজের সঙ্গেও equal নয়।


 //  false,  0, -0, 0n, "", null, undefined, NaN, — এগুলো falsy values। //মোট আটটি falsy value. 
 // rest all value are -> truthy ।

 //এগুলো ছাড়া সাধারণ JavaScript values truthy—এমনকি empty array এবং empty object-ও।
 console.log(Boolean(0));         // false
 console.log(Boolean(""));        // false
 console.log(Boolean(null));      // false
 console.log(Boolean(undefined)); // false
 console.log(Boolean(NaN));       // false

 console.log(Boolean("0"));       // true
 console.log(Boolean("false"));   // true
 console.log(Boolean([]));        // true
 console.log(Boolean({}));        // true
 console.log(typeof NaN === "number"); // true



// !!value কী করে?
// Double negation কোনো value-এর Boolean equivalent দেয়।

console.log(!!0);           // false
console.log(!!1);           // true
console.log(!!"");          // false
console.log(!!"Hello");     // true
console.log(!!undefined);   // false
console.log(!![]);          // true
// প্রথম ! Boolean-কে উল্টে দেয়। দ্বিতীয় ! আবার উল্টে দেয়, ফলে original value-এর truthiness পাওয়া যায়।



// Practical example
let username = "";

if (username) {
    console.log("Welcome!");
} else {
    console.log("Username is empty");
}
// Output: Username is empty


// এখানে username হলো empty string, যা falsy।
// 4. Reference Equality
// এই topic-টি object, array এবং React state বোঝার জন্যও গুরুত্বপূর্ণ।

//Example A: দুটি আলাদা array
//let c1 = [1, 2, 3];
//let d1 = [1, 2, 3];

// console.log(c1 === d1); // false


//দুটি array-এর content একই, কিন্তু তারা দুটি আলাদা object।
// c1 → [1, 2, 3]

//আলাদা array object
// d1 → [1, 2, 3]

// c1 === d1 → false

//Example B: একই array-এর reference
//let c1 = [1, 2, 3];
//let d1 = c1;

// console.log(c1 === d1); // true

//d1.push(4);

// console.log(c1); // [1, 2, 3, 4]
// console.log(d1); // [1, 2, 3, 4]


//এখানে d1 = c1 নতুন array বানায়নি। দুটি variable একই array-কে reference করছে।
//Object-এর ক্ষেত্রেও একই নিয়ম
const user1 = { name: "Rahim" };
const user2 = { name: "Rahim" };

console.log(user1 === user2); // false

const user3 = user1;

console.log(user1 === user3); // true


//Golden rule: Primitive values সাধারণত value অনুযায়ী compare হয়; object এবং array-এর equality reference অনুযায়ী নির্ধারিত হয়।


// Quick revision table

// Expression	        Output
// --------------------------------
// true + false	        =   1
// null + 1	            =   1
// 5 + "hello"	        = "5hello"
// !!undefined	        = false
// Boolean(NaN)	        = false
// typeof NaN	        = "number"
// typeof null	        = "object"
// [] == false	        = true
// [] === false	        = false
// 0.1 + 0.2 === 0.3    = false
// typeof []	        = "object"
// Array.isArray([])	= true