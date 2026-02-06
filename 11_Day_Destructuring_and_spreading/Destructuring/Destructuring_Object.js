// Destructuring Object
// When we destructure the name of the variable we use to destructure should be exactly the same as the key or property of the object. See the example below.
const student = {
  Fname: "ermiyas",
  Lname: "daniel",
  Age: 28,
};
let { Fname, Lname, Age } = student;
console.log(Fname);
console.log(Lname);
console.log(Age);
