//////////// data type can be grouped in to  primitive and non-primitive(objects)///////////////

//primitiv data type
//Primitive data types are <<<<immutable(non-modifiable)>>>> data types. Once a primitive data type is created we cannot modify it.
// example of primtive data type ->Number,string,booleans, null,undefined,symbol
let number = 344;
let string = "hi";
let booleans = true;
let no_value = null;
let undefined_value = undefined;
let x = Symbol;
const PI = Math.PI;
console.log(`
number: ${number}
string: ${string}
boolean: ${booleans}
null: ${no_value}
undefined: ${undefined_value}
symbol: ${x}
PI: ${PI}
`);

////////////////////////////////////////////////////// example
let my_name = "ermiyas";
console.log(`my name is ${my_name}`); // ermiyas before
console.log(my_name[1]); //r
my_name[1] = "z"; // try to change the r with z
console.log(`my name is ${my_name}`); // ermiyas after
/////////////////////////////////////////////////////////
// non-primitive(objects)
//Non-primitive data types are<<<< modifiable or mutable>>>>. We can modify the value of non-primitive data types after it gets created.
// example of non-primitiv datatype -> object and array
let temprature = [29, 45, 44, 5, 87]; // an array
let student = {
  name: "ermiyas",
  age: 27,
  CGPA: 3.7,
}; // object
console.log(temprature, temprature[2]);
console.log(student, student.CGPA);
