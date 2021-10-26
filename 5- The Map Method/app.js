// #Lets now see map method in work.
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const euroToUSD = 1.1;

const movementsUSD = movements.map(function (mov) {
  return mov * euroToUSD;
});

// #Use map with arrow functions
// const movementsUSD = movements.map((mov) => mov * euroToUSD);

// + Map method returns a entire new array, and it won't mutate the original array.
console.log(movements);
console.log(movementsUSD);

// + We can use map to get the currenct index and the whole array.

const movementDisc = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? " deposited" : "withdrew"} ${Math.abs(
      mov
    )}`
);

console.log(movementDisc);
