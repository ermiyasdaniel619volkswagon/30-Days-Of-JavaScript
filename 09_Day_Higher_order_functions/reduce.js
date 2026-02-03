const Values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const ValueSum = Values.reduce((acc, cur) => acc + cur, 0);
console.log(ValueSum); // 55
//What does the 0 do?
// The 0 is the initial value of the accumulator (acc).
//  It tells JavaScript where to start.
//  if we change 0 to 1 we get 56
