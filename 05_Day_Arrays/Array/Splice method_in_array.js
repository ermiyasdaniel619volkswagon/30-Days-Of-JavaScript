//splice() is used to remove, add, or replace elements in an array — and it changes the original array
// array.splice(startIndex, deleteCount, item1, item2, ...)
// | Part          | Meaning                  |
// | ------------- | ------------------------ |
// | `startIndex`  | Where to start           |
// | `deleteCount` | How many items to remove |
// | `items`       | What to add (optional)   |
let fruits = ["🍎", "🍌", "🍇", "🍊"];

fruits.splice(1, 2);
/////
console.log(fruits); // start index 1 remove 2 items
let colors = ["red", "blue", "green"];

colors.splice(1, 0, "yellow", "pink"); // start index 1 remove 0 items add 2 items
console.log(colors);

// 🔥 Real-Life Use Case Remove a student by ID
let students = ["Ali", "Sara", "John", "Mimi"];

let index = students.indexOf("John");
if (index !== -1) {
  students.splice(index, 1);
}

console.log(students); //["Ali", "Sara", "Mimi"]
