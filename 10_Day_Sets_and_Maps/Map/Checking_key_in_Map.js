//Checking key in Map
// Check if a key exists in a map using has method. It returns true or false.

countries = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
  ["Ethiopia", "AddisAbaba"],
];
const map = new Map(countries);
console.log(map.has("Finland")); // true
console.log(map.has("kartum")); // false
