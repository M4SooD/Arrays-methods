// #Lets now learn about some and every method
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// + If there is any value for which is the condition is true, then the some method will return true.

const anyDeposits = movements.some((mov) => mov > 2900);
console.log(anyDeposits);

// #Every
// + Every only return true if all the elemetns in the array passes the condition.

console.log(movements.every((mov) => mov > 0));

//Seprate callback
const deposit = (mov) => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));
