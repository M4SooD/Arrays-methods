// #Lets now learn how loop over an array using forEach.
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// + We used loop like this for an array before
for (const movement of movements) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
}

console.log("===forEach Method===");
// + now lets achive this using forEach
// + forEach is a higher order function which requires a callback function in order to tell it what to do.
// + it's the forEach method here that will call this callback function, We are not calling it ourselves.
// + forEach loops over the array and in each iteration it will execute the callback function.
// + As the forEach method calls this callback function, in each iteration it will pass in the current element of the array as an argument.
// + We use a callback function to tell another higher order function exactly what is should do.
movements.forEach(function (movement) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
});
// 0: function(200)
// 1: function(450)
// 2: function(400)
// 3: function(3000)
// 4: ...

// #When we need access to a counter variable, so we can access the current index.
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1} You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1} You withdrew ${Math.abs(movement)}`);
  }
}

console.log("===forEach Method===");
// #Now we're gonna do the same using forEach
// + forEach passes in the current element, the indes and the entire array that we are looping.
// + the order of parameters are important here.
// + the first parameter always needs to be the current element
// + the second parameter always needs to be the current index
// + the third parameter always needs to be the entire array that we are looping over

movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1} You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1} You withdrew ${Math.abs(mov)}`);
  }
});

// + forEach will awlays loop over the entire array, and that means we can break out of a loop.
