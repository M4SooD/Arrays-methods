// #Lets now work with the third method (and the most powerful one) which is reduce method
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// + In Reduce method the first paramether is accumulator.
// + The secon paramether is the current element of the array
// + The third one is index
// + The forth one is entire array

// Acumulator : It's like a snowball that keeps accumulating the value that we ultimetely want to return.
// + In each return we return the updated accumulator.
const balance = movements.reduce(function (acc, cur, i, arr) {
  console.log(`Iteration ${i}: ${acc}`);
  return acc + cur;
}, 0);
// + The reduce method has another parameter which is the initial value of the accumulator.
console.log(balance);

// #Reduce Method using arrow function
const balance2 = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balance2);

// #Getting the Max value using reduce method
// + Reduce value dosen't need to be only sum, it could be multiplication or even an object or string.

const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
console.log(max);
