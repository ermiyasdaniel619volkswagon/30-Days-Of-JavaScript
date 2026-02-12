class Person {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.city = city;
    this.score = 0;
    this.skills = [];
  }
  getFullName() {
    const fullName = this.firstName + " " + this.lastName;
    return fullName;
  }
}

// Let us create a Student child class from Person parent class.

class Student extends Person {
  saySomething() {
    console.log("I am a child of the person class");
  }
  getPersonInfo() {
    let fullName = this.getFullName();
    let skills =
      this.skills.length > 0 &&
      this.skills.slice(0, this.skills.length - 1).join(", ") +
        ` and ${this.skills[this.skills.length - 1]}`;
    let formattedSkills = skills ? `He knows ${skills}` : "";

    let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`;
    return info;
  }
}

const s1 = new Student("Asabeneh", "Yetayeh", "Finland", 250, "Helsinki");
console.log(s1);
console.log(s1.saySomething());
console.log(s1.getFullName());
console.log(s1.getPersonInfo());
