let classRoom = ["room1", "room2", "room3", "room4"];
let numberOfClass = new Set();
for (const room of classRoom) {
  numberOfClass.add(room);
}

console.log(numberOfClass);
//     check if there is  "room5"on the set of numberOfClass
console.log(numberOfClass.has("room5")); // false
console.log(numberOfClass.has("room3")); // true
