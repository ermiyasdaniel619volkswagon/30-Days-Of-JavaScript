// throw "Error2"; // generates an exception with a string value
// throw 42; // generates an exception with the value 42
// throw true; // generates an exception with the value true
// throw new Error("Required"); // generates an error object with the message of Required

const throwErrorExampleFun = () => {
  //   let message;
  let x = prompt("Enter a number: ");
  try {
    if (x == "") throw "empty";
    if (isNaN(x)) throw "not a number";
    x = Number(x);
    if (x < 5) throw "too low";
    if (x > 10) throw "too high";
  } catch (err) {
    console.log(err); // the error is defind on the try block using throw keyword
  }
};
throwErrorExampleFun();
