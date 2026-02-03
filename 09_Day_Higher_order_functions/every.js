const string_value = ["10", "ten", "one", 1, "six", "6"];
const areALLstring = string_value.every((value) => value === "string");
console.log(areALLstring); // false
// b/c all the is not string b/c of number '1'

const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const areAllStr = names.every((name) => typeof name === "string"); // Are all strings?

console.log(areAllStr);
