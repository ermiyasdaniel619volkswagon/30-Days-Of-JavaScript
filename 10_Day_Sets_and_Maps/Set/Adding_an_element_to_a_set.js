// Adding an elemet to the set
const JedanStudents = new Set();
console.log(JedanStudents.size); //  0
JedanStudents.add("ermiyas");
JedanStudents.add("ananiya");
JedanStudents.add("filpose");
JedanStudents.add("miski");
JedanStudents.add("shefai");
JedanStudents.add("ephi");
console.log(JedanStudents.size, JedanStudents);

//  we can also use loop to add an element to the set
const subjects = ["biologi", "english", "amharic", "web"];
const courses = new Set();
for (const subject of subjects) {
  courses.add(subject);
}
console.log(courses);
