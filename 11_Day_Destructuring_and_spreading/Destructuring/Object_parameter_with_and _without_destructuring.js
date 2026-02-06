// Object parameter without destructuring
const rectangle = {
  length: 10,
  width: 20,
};
const Area = (obj) => {
  return obj.length * obj.width;
};
console.log(Area(rectangle)); // 200s

//  Object parameter with destructuring
const Parameter = ({ length, width }) => {
  return 2 * (length + width);
};
console.log(Parameter(rectangle));
