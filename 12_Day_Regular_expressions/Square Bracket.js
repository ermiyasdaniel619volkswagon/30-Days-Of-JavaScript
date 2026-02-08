// Let's use square bracket to include lower and upper case
const pattern = "[Aa]pple"; // this square bracket means either A or a
const txt =
  "Apple and banana are fruits. An old cliche says an apple a day keeps the  doctor way has been replaced by a banana a day keeps the doctor far far away. ";
const matches = txt.match(pattern);

console.log(matches);

const pattern1 = /[Aa]pple|[Bb]anana/g; // this square bracket mean either A or a
const txt1 =
  "Apple and banana are fruits. An old cliche says an apple a day a doctor way has been replaced by a banana a day keeps the doctor far far away. Banana is easy to eat too.";
const matches1 = txt.match(pattern);

console.log(matches1);
