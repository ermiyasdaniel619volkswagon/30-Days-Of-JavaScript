// return the index  array value
const arr = [12, 3, 4, 5, 6, 78];
modifyArray = arr.map(function (element, index, arr) {
  return index;
});
console.log(modifyArray);

//  arrow function explicit return
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const squareNumbers = number.map((num) => num * num);
console.log(squareNumbers);
//  change to uppercase
const Name = ["ermiyas", "daniel", "ananiya"];
const NameToUpperCase = Name.map((text) => text.toUpperCase());
console.log(NameToUpperCase);
