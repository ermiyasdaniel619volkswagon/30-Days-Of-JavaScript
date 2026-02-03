// Setting Interval using a setInterval function
// In JavaScript, we use setInterval higher order function to do some activity continuously with in some interval of time.

// // syntax
// function callback() {
//   // code goes here
// }
// setInterval(callback, duration);
// example
function sayHello() {
  console.log("Hello");
}
setInterval(sayHello, 1000); // it prints hello in every second, 1000ms is 1s
