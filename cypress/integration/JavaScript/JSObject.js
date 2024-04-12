let person = {
  firstName: "Bibaswan",
  lastName: "Basu",
  age: 33,
  fullname: function () {
    this.firstName + this.lastName;
  },
  //   gadget: [mobile, tv, laptop],
};

console.log(person.firstName);
console.log(person["lastName"]);

person.firstName = "Rajasree";
//update value in runtime
console.log(person.firstName);
//can add property in runtime
person.gender = "female";
console.log(person);
delete person.gender;
console.log(person);

//Check property exist in object or not
console.log("firstName" in person);

//Iterate all the properties in a object
for (let key in person) {
  console.log(key + "- " + person[key]);
}

console.log(person.fullname());
