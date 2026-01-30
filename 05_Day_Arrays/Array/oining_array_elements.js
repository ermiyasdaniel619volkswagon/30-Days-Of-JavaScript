/* join: It is used to join the elements of the array.
 the argument we passed in the join method will be joined in the array and return as a string.
 By default, it joins with a comma, but we can pass different string parameter which can be joined between the items.*/
const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
]; // List of web technologies

console.log(webTechs.join()); // default using ","
console.log(webTechs.join("$"));
