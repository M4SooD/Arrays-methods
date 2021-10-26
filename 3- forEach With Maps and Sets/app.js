// #forEach is also available on maps and sets, lets see how it works.
const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);

// #For Map
// + This callback function also have 3 parameters.
// + First one will be the current value in the current iteration.
// + Second one is the key
// + third one is the whole map we are looping around.
currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// #For Set
// + a set doesn't have keys and doesnt' have indexes either.
// + But we should have our 3 arguments.
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});
