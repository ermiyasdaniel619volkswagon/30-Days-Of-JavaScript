// Getting a value from Map
countries = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
  ["Ethiopia", "AddisAbaba"],
];
const map = new Map(countries);

//  find the capital city of Ethiopia
console.log(map.get("Ethiopia")); // AdissAbaba
