// LEVEL ONE
/*Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2.
 Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.
 Check if a person is underweight, normal, overweight or obese based the information given below.

The same groups apply to both men and women.
Underweight: BMI is less than 18.5
Normal weight: BMI is 18.5 to 24.9
Overweight: BMI is 25 to 29.9
Obese: BMI is 30 or more*/
const BMI = (age, weight, height) => {
  if (age >= 20) {
    const bmi = weight / (height * height);

    if (bmi < 18.5) {
      console.log("Underweight");
    } else if (24.9 > bmi && bmi >= 18.5) {
      console.log("Normal weight");
    } else if (29.9 > bmi && bmi >= 25) {
      console.log("Overweight");
    } else if (bmi > 30) {
      console.log("Obese");
    }
  } else {
    console.log("age must be above 20");
  }
};

BMI(29, 66, 1.78); // underwight
BMI(15, 55, 1.6); // the age must be above 20
BMI(21, 60, 1.8); //Normal weight
BMI(44, 120, 1.9); // obese
BMI(25, 80, 1.75); // overweight
// LEVEL TWO
// Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
function reverseArray(array) {
  let empty = [];
  for (let i = array.length - 1; i >= 0; i--) {
    empty.push(array[i]);
  }

  console.log(empty);
}
const numbers = [1, 2, 3, 4, 5, 6];

reverseArray(numbers); // [6, 5, 4, 3, 2, 1]
// LEVEL THREE
// Modify the userIdGenerator function.
// Declare a function name userIdGeneratedByUser.
// It doesn’t take any parameter but it takes two inputs using prompt().
// One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.
// let NumberOfCharacter = prompt("please enter the number of id character");
// let NumberOfId = prompt("how many id you need?");
// function IdGeneratedByUser(Character, Id) {
//   let generated = Math.floor(Math.random() * Character);
// }
const NumberOfCharacter = Number(prompt("Enter number of characters per ID:"));
const numberOfIds = Number(prompt("Enter number of IDs to generate:"));
function userIdGeneratedByUser(idLength, numberOfIds) {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < numberOfIds; i++) {
    let id = "";

    for (let j = 0; j < idLength; j++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      id += chars[randomIndex];
    }
    console.log(id);
  }
}
userIdGeneratedByUser(NumberOfCharacter, numberOfIds);
//  the main logic
/*Math.random() → number between 0 and 1
* chars.length → scales it to character range
Math.floor() → whole number index
chars[randomIndex] → random character
id += → adds character to the ID */
