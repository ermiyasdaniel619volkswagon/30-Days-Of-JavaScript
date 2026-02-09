// console.table()
// The console.table() method display data as a table on the console. Displays tabular data as a table.
// using an array
let names = ["ermi", "anani", "abebe"];
console.table(names);
// using objects
const student = {
  Fname: "abebe",
  Lname: "kebede",
  Age: 22,
  Department: "Computer Sience",
};
console.table(student);
// what happen if it is nested array
const countries = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
];
console.table(countries);

//  what happen if it is nested object  in an array

const users = [
  {
    name: "Asabeneh",
    title: "Programmer",
    country: "Finland",
    city: "Helsinki",
    age: 250,
  },
  {
    name: "Eyob",
    title: "Teacher",
    country: "Sweden",
    city: "London",
    age: 25,
  },
  {
    name: "Asab",
    title: "Instructor",
    country: "Norway",
    city: "Oslo",
    age: 22,
  },
  {
    name: "Matias",
    title: "Developer",
    country: "Denmark",
    city: "Copenhagen",
    age: 28,
  },
];
console.table(users);
