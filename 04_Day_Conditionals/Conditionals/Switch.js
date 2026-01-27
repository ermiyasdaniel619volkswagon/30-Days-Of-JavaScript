/* Switch is an alternative for if else if else else. 
The switch statement starts with a switch keyword followed by a parenthesis and code block. 
Inside the code block we will have different cases. Case block runs if the value in the switch statement parenthesis matches with the case value.
 The break statement is to terminate execution so the code execution does not go down after the condition is satisfied. 
 The default block runs if all the cases don't satisfy the condition.*/
let weather = "cloudy";
switch (weather) {
  case "rainy":
    console.log("you need a rain coat");
    break;
  case "cloudy":
    console.log("you need a jacket");
    break;
  case "sunny":
    console.log("go out freely");
  default:
    console.log("no need for rain coat");
}
