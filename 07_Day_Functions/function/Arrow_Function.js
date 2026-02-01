// Arrow Function
// Arrow function is an alternative to write a function, however function declaration and arrow function have some minor differences.

// Arrow function uses arrow instead of the keyword function to declare a function. Let us see both function declaration and arrow function.
function square_1(n) {
  return n * n;
}
console.log(square_1(5));

// arrow function
const square_2 = (n) => {
  return n * n;
};
console.log(square_2(9));
// Function that converts each string in an array to the opposite case (uppercase ↔ lowercase)
const StringCaseChanger = (array) => {
  const result = [];
  let i = 0;

  while (i < array.length) {
    let item = array[i];

    if (item === item.toUpperCase()) {
      result.push(item.toLowerCase());
    } else {
      result.push(item.toUpperCase());
    }

    i++;
  }
  return result;
};
console.log(
  StringCaseChanger([
    "HELLO",
    "WORLD",
    "JS",
    "Code",
    "Finland",
    "Sweden",
    "Norway",
    "DOM",
    "Iceland",
  ]),
);
