// what is match():-it takes a regular expertion as an argument and  if  it is find a match it return an array if not return null
//string.match(pattern)
let string = "I love learn new things";
let pattern = /love/;
console.log(string.match(pattern));
let sentense = `i love js if you don't love js  what else can you love `;
//gi-global (find all matches)
let pattern_1 = /love/gi;
console.log(sentense.match(pattern_1));
//\d → means digit (0–9)  ,\ is an escape character
let txt = "In 2026, I run 30 Days of js. Now, in 2029 I super excited";

let regEx = /\d/g;
console.log(txt.match(regEx));
