/*console.time()
Starts a timer you can use to track how long an operation takes. 
You give each timer a unique name, and may have up to 10,000 timers running on a given page.
 When you call console.timeEnd() with the same name, the browser will output the time, in milliseconds, that elapsed since the timer was started.*/
const countriesA = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
];

console.time("Regular for loop");
for (let i = 0; i < countriesA.length; i++) {
  console.log(countriesA[i][0], countriesA[i][1]);
}
console.timeEnd("Regular for loop");

console.time("for of loop");
for (const [name, city] of countriesA) {
  console.log(name, city);
}
console.timeEnd("for of loop");

console.time("forEach loop");
countriesA.forEach(([name, city]) => {
  console.log(name, city);
});
console.timeEnd("forEach loop");
