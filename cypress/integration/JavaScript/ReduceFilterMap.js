var marks2 = [10, 20, 58, 85, 45, 32];

var sum = 0;
for (let i = 0; i < marks2.length; i++) {
  sum = sum + marks2[i];
}
console.log("Using For Loop- " + sum);

//reduce() -> When any iteration related ctask are there we can use that
let total = marks2.reduce((sum, mark) => sum + mark, 0);
console.log("Using reduce()- " + total);

//-------------------------------------------------------------------------
var scores = [45, 14, 20, 17];
var evenArray = [];
for (let i = 0; i < scores.length; i++) {
  if (scores[i] % 2 == 0) {
    evenArray.push(scores[i]);
  }
}
console.log("Even Array For Loop- " + evenArray);

//filter() -> when any update task we can use that
let evenScore = scores.filter((score) => score % 2 == 0);
console.log("Even Array filter()- " + evenScore);

//-------------------------------------------------------------------------
//[Multiply each value by 5]
let multiArray = [];
for (let i = 0; i < evenScore.length; i++) {
  multiArray.push(evenScore[i] * 5);
}
console.log("Multiply number using for loop- " + multiArray);

let arryByFiv = evenScore.map((scroe) => scroe * 5);
console.log("Multiply number using map()- " + arryByFiv);
//-----------------------------------------------

let newArr = [76, 45, 43, 20, 44, 79];

let newArr2 = newArr.filter((a) => a % 5 == 0).map((b) => b * 3);
console.log(newArr2);
