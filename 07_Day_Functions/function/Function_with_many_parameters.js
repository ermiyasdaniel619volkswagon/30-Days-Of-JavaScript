//  a function can take an array element
function sumArrayElements(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}
const result = [19, 18, 10, 10, 10];
const value = sumArrayElements(result);
console.log(value);
