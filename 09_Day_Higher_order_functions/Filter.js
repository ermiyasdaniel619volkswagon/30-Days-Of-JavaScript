//  find out the student names wich have the letter 'l'
const studentName = ["almaz", "abebe", "kebede", "abebu", "belete", "melat"];
const NameWithL = studentName.filter((studname) => studname.includes("l"));
console.log(NameWithL);
// identifing the  phone number
const phoneNumber = [
  "0912233456",
  "07889976",
  "09676589",
  "098973434",
  "072348700",
];
const telePhoneNumber = phoneNumber.filter((phone) => phone[1] === "9");
const safariaPhoneNumber = phoneNumber.filter((phone) => phone[1] === "7");
console.log(telePhoneNumber);
console.log(safariaPhoneNumber);
