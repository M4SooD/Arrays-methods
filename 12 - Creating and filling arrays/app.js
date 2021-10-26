// #How to programmaticaly create and fill arrays.

const arr = [1, 2, 3, 4, 5, 6, 7];
// Creating an empty array
const x = new Array(7);
console.log(x);

// + With Fill method we can put element in our emprty array
// + First one is the element we're gonna pass in that array.
// + Second one is the begin parameter.
// + last on is the end parameter.
x.fill(1, 3, 5);
console.log(x);

// + We can use fill to the arrays that already have elements.
arr.fill(23, 2, 6);
console.log(arr);

// #Array.from
// + We can first pass in an object with length property in this method.
// + The second argument is a callback function.(it's like the callback function that we pass into the map method)
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);
// + We can use Array.from to create arrays from iterables(String, Maps, Sets).
// + We can turn NodeList(querySelectorAll) into array using Arra.from.
