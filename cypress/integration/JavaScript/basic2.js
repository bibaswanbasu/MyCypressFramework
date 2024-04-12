const flag = true;

if (!flag) {
  console.log("Satisfied");
} else {
  console.log("Not Satisfied");
}

let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

// do {
//   i++;
// } while (i > 10);
// console.log(i);
for (let k = 0; k < 10; k++) {
  console.log(k);
}

console.log("Common Multiplier by 2 and 5...");
let n = 0;
for (let k = 0; k < 100; k++) {
  if (k % 2 == 0 && k % 5 == 0) {
    n++;
    console.log(k);
    if (n == 3) {
      break;
    }
  }
}
