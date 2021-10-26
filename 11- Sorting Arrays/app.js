// #Lets now learn about a much disscused term in computer sience called sorting.

// +Sorting mutate the original array.

//String
const owner = ["Jonas", "Zach", "Adam", "Martha"];
console.log(owner.sort());

//Numbers
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// return < 0, a,b (keep order)
// return > 0, b,a (swithc order)

// Ascending
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });

movements.sort((a, b) => a - b);
console.log(movements);

// Descending
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (a < b) return 1;
// });
movements.sort((a, b) => b - a);
console.log(movements);
