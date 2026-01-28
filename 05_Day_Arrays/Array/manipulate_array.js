// There are different methods to manipulate an array. These are some of the available methods to deal with arrays:Array, length, concat, indexOf, slice, splice, join, toString, includes, lastIndexOf, isArray, fill, push, pop, shift, unshift
// Array constructor
console.log("Array constructor");
const BOX = Array(10);
console.log(BOX);

// Creating static values with fill
console.log("Creating static values with fill");
const Box_With_Value = BOX.fill(1);
console.log(Box_With_Value);

// Concatenating array using concat
console.log(" Concatenating array using concat");
let sectionA = [1, 2, 3, 4, 5];
let sectionB = [6, 7, 8, 9, 10];
let BothSection = sectionA.concat(sectionB);
console.log(BothSection);

// Getting array length
console.log("Getting array length");
const vegetables = ["Tomato", "Potato", "Cabbage", "Onion", "Carrot"];
console.log(vegetables.length);

//Getting index an element in arr array
// indexOf:To check if an item exist in an array. If it exists it returns the index else it returns -1
console.log("Getting index an element in arr array");
const fruits = ["banana", "orange", "mango", "lemon"];
console.log(fruits.indexOf("lemon")); // 3
console.log(fruits.indexOf("Tomato")); // -1  .... why?

// includes:To check if an item exist in an array. If it exist it returns the true else it returns false.
console.log("includes:To check if an item exist in an array");
const grade = ["A", "B", "C"];
console.log(grade.includes("D")); //false
console.log(grade.includes("A")); // true

// Array.isArray:To check if the data type is an array
console.log("To check if the data type is an array");
const numbers = [1, 2, 3, 4, 5];
console.log(Array.isArray(numbers)); // true
const number = 100;
console.log(Array.isArray(number)); // false

// Converting array to string
// toString:Converts array to string
console.log("Converting array to string");
const num = [1, 2, 3, 4, 5, 6];
console.log();
console.log(num.toString());

// Joining array elements
/*join: It is used to join the elements of the array, the argument we passed in the join method will be joined in the array and return as a string.
 By default, it joins with a comma, but we can pass different string parameter which can be joined between the items.*/
console.log("Joining array elements");
const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
]; // List of web technologies

console.log(webTechs.join()); // "HTML,CSS,JavaScript,React,Redux,Node,MongoDB"
console.log(webTechs.join(" # ")); // "HTML # CSS # JavaScript # React # Redux # Node # MongoDB"

// Slice array elements
// Slice: To cut out a multiple items in range. It takes two parameters:starting and ending position. It doesn't include the ending position.
console.log("Slice array elements");
const digits = [1, 2, 3, 4, 5];

console.log(digits.slice()); // -> it copies all  item
console.log(digits.slice(0)); // -> it copies all  item
console.log(digits.slice(0, numbers.length)); // it copies all  item
console.log(digits.slice(1, 4)); // -> [2,3,4] // it doesn't include the ending position
