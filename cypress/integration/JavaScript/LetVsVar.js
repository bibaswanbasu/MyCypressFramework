function withVar() {
  var x = 10;
  if (true) {
    var y = 20;
  }
  console.log(x); // This works (x is accessible)
  console.log(y); // This works (y is also accessible due to var's function scope)
}

function withLet() {
  let x = 10;
  if (true) {
    let y = 20;
  }
  console.log(x); // This works (x is accessible)
  //   console.log(y); // This will throw an error (y is not accessible outside the if block)
}

withVar();
withLet();

let day = "Friday";
console.log(day.length);
//substring
console.log(day.slice(1, 4));
console.log(day.split("i"));

//conver to int
let a = "52";
let b = "35";
let c = parseInt(a) - parseInt(b);
console.log(c.toString());
