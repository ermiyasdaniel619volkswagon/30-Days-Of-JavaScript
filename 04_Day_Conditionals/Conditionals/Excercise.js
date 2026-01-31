// FizzBizz challenge
//  problem stetment
//  if the number is divide by 3 say "Fizz"
//  if the number is divide by 5 say "Buzz"
//  if the number is divide by both  say "FissBuzz"
//  if the number is not divide by both   return the number it self
//  if the input is not  a number  sy " Not Number"
// let input = prompt(
//   " enter a number  to check the number is divisible by 3 or5 and both ",
// );
function FizzBuzz(num) {
  if (typeof num !== typeof NaN) {
    console.log("Not Number");
  } else if (num % 3 === 0 && num % 5 === 0) {
    console.log("FizzBuzz");
  } else if (num % 3 === 0) {
    console.log("Fizz");
  } else if (num % 5 === 0) {
    console.log("Buzz");
  } else if (num % 3 !== 0 && num % 5 !== 0) {
    console.log(num);
  }
}
FizzBuzz(8); // 8
FizzBuzz(30); //FizzBuzz
FizzBuzz(9); //Fizz
FizzBuzz(10); //Buzz
FizzBuzz("l"); // Not Number
