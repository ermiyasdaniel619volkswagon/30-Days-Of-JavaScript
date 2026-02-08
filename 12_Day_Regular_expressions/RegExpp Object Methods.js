/*
Let us see some of RegExp methods

Testing for a match
test():Tests for a match in a string. It returns true or false.
*/
const str = "my name is ermiyas daniel";
const pattern = /daniel/;
const result = pattern.test(str);
console.log(result);
