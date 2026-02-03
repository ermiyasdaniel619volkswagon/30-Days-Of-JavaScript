let arr = [2, 4, 3, 4, 5, 6];
console.log(" 1st way");
arr.forEach(function (element, index, arr) {
  console.log(index, element, arr);
});
console.log("2nd way");
// The above code can be written using arrow function
arr.forEach((element, index, arr) => {
  console.log(index, element, arr);
});
console.log("3rd way");
// The above code can be written using arrow function and explicit return
arr.forEach((element, index, arr) => console.log(index, element, arr));
//  find out the total salary
let EmploySalary = [2000, 2990, 3000, 6785, 9879];
let sum = 0;
EmploySalary.forEach((Salary) => (sum += Salary));
console.log(sum); //24654
