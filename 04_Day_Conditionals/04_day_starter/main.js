console.log("Conditionals");
// 💻 Exercises1
/*Get user input using prompt(“Enter your age:”). 
If user is 18 or older , give feedback:'You are old enough to drive'
 but if not 18 give another feedback stating to wait for the number of years he needs to turn 18. */

let input = prompt("enter your age:");

if (input >= 18) {
  console.log("you are old enough to drive");
} else {
  console.log(`wait for ${18 - input} years`);
}

// 💻 Exercises2
// Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer

let month = prompt("Enter a month").toLowerCase();

if (["september", "october", "november"].includes(month)) {
  console.log("The season is Autumn");
} else if (["december", "january", "february"].includes(month)) {
  console.log("The season is Winter");
} else if (["march", "april", "may"].includes(month)) {
  console.log("The season is Spring");
} else if (["june", "july", "august"].includes(month)) {
  console.log("The season is Summer");
} else {
  console.log("Invalid month");
}
