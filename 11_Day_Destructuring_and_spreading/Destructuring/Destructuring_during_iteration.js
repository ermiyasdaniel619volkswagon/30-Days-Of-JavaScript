// Destructuring array during iteration
console.log("Array");
const countries = [
  ["Ethiopia", "Addis Ababa"],
  ["Finland", "Helsinki"],
];
for (const [country, city] of countries) {
  console.log(country, city);
}
// Destructuring object during iteration
console.log("Object");
const todoList = [
  {
    task: "Prepare JS Test",
    time: "4/1/2020 8:30",
    completed: true,
  },
  {
    task: "Give JS Test",
    time: "4/1/2020 10:00",
    completed: false,
  },
  {
    task: "Assess Test Result",
    time: "4/1/2020 1:00",
    completed: false,
  },
];

for (const { task, time, completed } of todoList) {
  console.log(task, time, completed);
}
