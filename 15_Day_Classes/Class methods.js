class person {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.city = city;
  }
  Full_info() {
    const fullName = this.firstName + " " + this.lastName;
    const Infotmation = ` your are ${this.age} years old and you live in ${this.country}  in the city of ${this.city} `;

    return fullName + Infotmation;
  }
}

const person1 = new person("ermiyas", "daniel", 28, "Ethiopia", "AdissAbaba");
console.log(person1.Full_info());
