//substr(): It takes two arguments,the starting index and number of characters to slice.
//substr() (OLD / DEPRECATED ) substr() is deprecated →  not recommended for new code
//string.substr(startIndex, length)
let string = "JavaScript";
console.log(string.substr(4, 6)); // Script
let country = "Finland";
console.log(country.substr(3, 4)); // land
console.log(string.substr(-6, 6)); // Script

//substring() (MODERN & SAFE )
//string.substring(startIndex, endIndex)
console.log(string.substring(4, 10)); // Script
