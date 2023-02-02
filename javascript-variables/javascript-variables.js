/*
Given the existing code below, can you write some code so that their values are switched around?

var a = "3";
var b = "8";

So that the variable a holds the value "8".
And the variable b holds the value "3".
*/

let a = "3";
let b = "8";

// Solution is to employ another variable c to switch their values

let c = a;
a = b;
b = c;

console.log("a is " + a + " and b is " + b);