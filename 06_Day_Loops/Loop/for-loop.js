// for loop structure
//  for ( initalization ,conditin , incriment/decrement ){ body }
for (let i = 1; i <= 10; i++) {
  console.log(`count${i}`);
}
// counting the number 1 upto 10
let bank = ["commercial bank", "abissiniya bank", "abay bank", "awashe bank"];

//   list all bank
for (let i = 0; i < bank.length; i++) {
  console.log(bank[i]);
}

// change all bank to uppercase
let banck_uppercase = []; // creating empty array
for (let i = 0; i < bank.length; i++) {
  banck_uppercase.push(bank[i].toUpperCase());
}
console.log(banck_uppercase);
// sum of numbers from 1 to 100
let sum = 0; // inital sum =0
for (let i = 0; i <= 100; i++) {
  sum += i;
}
console.log(sum);
