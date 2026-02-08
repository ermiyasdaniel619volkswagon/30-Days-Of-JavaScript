const pattern = /[a]./g; // this square bracket means a and . means any character except new line
const txt = "Apple and banana are fruits";
const matches = txt.match(pattern);

console.log(matches); // ["an", "an", "an", "a ", "ar"]
/////////
console.log("Zero or More times");
// Zero or one times(?)
// Zero or one times. The pattern may not occur or it may occur once.

const txt1 =
  "I am not sure if there is a convention how to write the word e-mail.\
Some people write it email others may write it as Email or E-mail.";
const pattern1 = /[Ee]-?mail/g; // ? means optional
matches1 = txt1.match(pattern1);

console.log(matches1); // ["e-mail", "email", "Email", "E-mail"]
