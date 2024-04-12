class Person {
  //CONSTRUCTOR
  constructor(firstName, age) {
    console.log("U R INSIDE CONS");
    this.fristName = firstName;
    this.age = age;
  }
  //   fristName = "Bibaswan";
  //   age = 33;
  get location() {
    return "INDIA";
  }

  fullName() {
    console.log(this.fristName + this.age);
  }
}

let person = new Person("Bibaswan", "Basu");
console.log(person.firstName);
console.log(person.location);
person.fullname();
