// #Lets see how we can chain these method that we just learned together.

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// Converting deposits from euros to dollars
const eurToUSD = 1.1;
const totalDepositsToUSD = movements
  .filter((mov) => mov > 0)
  .map((mov) => mov * eurToUSD)
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsToUSD);

// + We can chain as many methods as we want as long as they return new arrays.
// + We should not overuse chaining, chaining tons of methods can cause huge performance issues.
