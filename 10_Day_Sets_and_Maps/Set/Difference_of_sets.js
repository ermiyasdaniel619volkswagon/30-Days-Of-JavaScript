//Difference of sets
// To find an the difference between two sets can be achieved using filter. Lets find the different of set A and set B (A \ B) and  (B \ A)
let result1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let result2 = [1, 2, 3, 4, 5, 6, 7, 9, 10];
let R1 = new Set(result1);
let R2 = new Set(result2);
let result3 = result1.filter((num) => !R2.has(num));
let result4 = result2.filter((num) => !R1.has(num));

let R4 = new Set(result4);
console.log(R4);

let R3 = new Set(result3);
console.log(R3);
