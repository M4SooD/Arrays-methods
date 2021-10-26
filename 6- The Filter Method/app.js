// #Now lets see how Filter Method works.
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposits = movements.filter(function (mov) {
  return mov > 0;
});

console.log(deposits);
const withdrawls = movements.filter((mov) => mov < 0);
console.log(withdrawls);
