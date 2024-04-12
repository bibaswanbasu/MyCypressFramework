let marks = Array(6);
marks = new Array(20, 40, 45, 55, 85, 42);

var marks2 = [10, 20, 58, 85, 45, 32];
var subMarks = marks2.slice(2, 5);

console.log(marks2[2]);
marks2[2] = 99;
console.log(marks2[2]);
console.log(marks2.length);
marks2.push(88);
console.log(marks2);
marks2.pop();
console.log(marks2);
// .unshift() method will add charecter in the first
marks2.unshift(11);
console.log(marks2);
console.log("Index of " + marks2[5] + " is- " + marks2.indexOf(45));
// to check element is present in the array or not
console.log(marks2.includes(120));
//break a array
console.log(subMarks);
var sum = 0;
for (let i = 0; i < marks2.length; i++) {
  console.log(marks2[i]);
  sum = sum + marks2[i];
}
console.log("Sum is " + sum);
