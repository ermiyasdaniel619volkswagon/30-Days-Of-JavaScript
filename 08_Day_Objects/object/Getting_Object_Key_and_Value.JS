// Object.keys: To get the keys or properties of an object as an array
// Object.values:To get values of an object as an array

const person = {
  firstName: "Asabeneh",
  lastName: "Yetayeh",
  age: 250,
  country: "Finland",
  city: "Helsinki",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node",
    "MongoDB",
    "Python",
    "D3.js",
  ],
  isMarried: true,
};
// copy the value of person to other object "copyPerson"
console.log("copyperson value");
const copyPerson = Object.assign({}, person);
console.log(copyPerson);

//  to list all the the key of person
console.log("key of object");
const keysofperson = Object.keys(person);
console.log(keysofperson);
// to list all the  the key values of person
console.log("values of object");
const Valueofperson = Object.values(person);
console.log(Valueofperson);
