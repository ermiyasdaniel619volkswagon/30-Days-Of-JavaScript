//The methods we use to get date and time information from a date object values are started with a word get because it provide the information.
let now = new Date();
console.log(now);
// Getting full year
console.log(now.getFullYear());

// Getting month
console.log(now.getMonth());

// Getting date
console.log(now.getDate());

// Getting hours
console.log(now.getHours());

// Getting minutes
console.log(now.getMinutes());

// Getting time and  Date.now()
//  Unix time-> We can get the unix time in two ways
// 1 Using getTime()
console.log(now.getTime());
// Using Date.now()
const allSeconds = Date.now(); //
console.log(allSeconds);
const timeInSeconds = new Date().getTime();
console.log(allSeconds == timeInSeconds); // true
// Let us format these values to a human readable time format. Example:

const Now = new Date();
const year = Now.getFullYear(); // return year
const month = Now.getMonth() + 1; // return month(0 - 11)
const date = Now.getDate(); // return date (1 - 31)
const hours = Now.getHours(); // return number (0 - 23)
const minutes = Now.getMinutes(); // return number (0 -59)

console.log(
  ` human readable time format ${date}/${month}/${year} ${hours}:${minutes}`,
); // 4/1/2020 0:56
