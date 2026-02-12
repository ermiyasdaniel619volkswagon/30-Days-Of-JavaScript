//  class constructor  with no proerty
class person {}
const person1 = new person();
console.log(person1); // creating an  object using class

//
class library {
  constructor(libraryName, libraryBranch) {
    console.log(this);
    this.libraryName = libraryName;
    this.libraryBranch = libraryBranch;
  }
}
const wemezeker = new library(); //  no value is pass

console.log(wemezeker);

const wemezekerAA = new library("wemzeker", "Adissababa");
console.log(wemezekerAA);
