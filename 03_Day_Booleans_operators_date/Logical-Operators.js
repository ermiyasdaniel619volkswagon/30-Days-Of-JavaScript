//The following symbols are the common logical operators: &&(ampersand) , ||(pipe) and !(negation).
// && ampersand operator example

const check1 = 4 > 3 && 10 > 5; // true && true -> true
const check2 = 4 > 3 && 10 < 5; // true && false -> false
const check3 = 4 < 3 && 10 < 5; // false && false -> false
console.log(check1, check2, check3);
// || pipe or operator, example
const check4 = 4 > 3 || 10 > 5; // true  || true -> true
const check5 = 4 > 3 || 10 < 5; // true  || false -> true
const check6 = 4 < 3 || 10 < 5; // false || false ->
console.log(check4, check5, check6);
//! Negation examples
let check7 = 4 > 3; // true
let check8 = !(4 > 3); //  false
console.log(check7, check8);
let isLightOn = true;
let isLightOff = !isLightOn; // false
let isMarried = !false; // true
