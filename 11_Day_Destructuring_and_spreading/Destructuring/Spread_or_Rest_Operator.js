/*
Spread or Rest Operator
When we destructure an array we use the spread operator(...) to get the rest elements as array.
 In addition to that we use spread operator to spread array elements to another array.
*/
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let [num1, num2, num3, ...rest] = numbers;
console.log(rest); //[ 4, 5, 6, 7, 8 ]
console.log(numbers); //[1, 2, 3, 4, 5, 6, 7, 8]

//  spread operator to copy array
const even = [0, 2, 4, 6, 8, 10];
const even_numbers = [...even];
const odd = [1, 3, 5, 7, 9];
const ood_numbers = [...odd];
const Whole_numbers = [...even, ...odd];
console.log(even_numbers);
console.log(ood_numbers);
console.log(Whole_numbers);

// Spread operator to copy object
// We can copy an object using a spread operator
const student = {
  Name: "ermiyas",
  Departement: "computer science",
  ID: "091389",
};
const OtherStudent = { ...student, Name: "ibro", ID: "234" }; // but changing the value of name and id

console.log(OtherStudent);
