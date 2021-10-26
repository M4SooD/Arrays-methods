// #Lets now learn what Find method is
// + we can use the Find method to retrieve one element of an array based on a condition.
// + The find method also accepts a condition.
// + Just like other array methods, The find method accepts a callback function.
// + Find is just another method  that loops over the array
// + The find method will not return a ne array, it only return the first element that pass the condition.
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const firstWithdrawal = movements.find((mov) => mov < 0);
console.log(firstWithdrawal);

/* #Differance between Find & Filter:
    1.Filter returns all the elements that match the condition while find method only returns the first one.
    2.Filter returns a new array while find only returns the elements itself and not an array.
    */
const account1 = {
  owner: "Donald Draper",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Peggy Olsen",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Roger Sterling",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Joan Harris",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];
console.log(accounts);

// + With find we can basically find an object in the array based on some property of the object.
const account = accounts.find((acc) => acc.owner === "Joan Harris");
console.log(account);
/* + Usually the goal of the find method is to just find one element and therefore we usually set up a condition where only 
one element can satisfy that condition. */

// #Findindex Method:
// + Findindex return the index of the found element and not the element itself.
// + Both Find and Findindex get access to also the current index and the current entire array.
// + Bot find and findindex methods were added in JS in ES6
