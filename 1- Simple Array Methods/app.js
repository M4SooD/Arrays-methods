// #Lets Learn some Simple Array Methods

// #Why Arrays do actually have methods?
// + Methods are simply functions that we can call on Objects. So they are functions attached to Objects
// + If we have array methods that means arrays themsleves are also Objects
// + Arrays methods are simply functions that are attached to all arrays that we create in JS.

let arr = ["a", "b", "c", "d", "e"];
let arr2 = ["a", "b", "c", "d", "e"];
let arr3 = ["j", "i", "f", "h", "o"];
// #Slice Method
// + With the slice method, we can extract part of any array, but without changing the original array.
// + It won't mutate the original array, instead returns a copy of the array but only with the extracted part.
// #start Parameter: Index at which will start extracting.
// #End Parameter: Index at which will finish extracting.
console.log(arr.slice(2)); // ['c', 'd', 'e']
console.log(arr.slice(2, 4)); // ["c", "d"];
// + We can define a negetive begin parameter and then it will start a copy from the end of the array.
console.log(arr.slice(-2)); // ['d', 'e']
console.log(arr.slice(-1)); // ['e']
// + We can define a negetive end parameter and then it will finishes a copy from the end of the array.
console.log(arr.slice(1, -2)); // ['b', 'c']
// + We can use Slice method to create a shallow copy of any array.
console.log(arr.slice()); // ['a', 'b', 'c', 'd', 'e']

// #Splice Method
// + Splice method works in almost the same way as slice
// + The diffrance is that Splice Method acutally change the original array (Mutates that array).
console.log(arr.splice(2)); // ['c', 'd', 'e'];
// + The extracted elemetns will be gone.
console.log(arr); // ['a', 'b']
// + We use splice to delete one or more elements from an array.
// + One common use is deleting the last element from array
console.log(arr.splice(-1)); // ["b"];
console.log(arr); // ['a']
// + the seccond paramater in Splice works little diffrant and called Delete Count
console.log(arr2.splice(1, 2)); // ['b', 'c']

// #Reverse Method
// + We use it for reversing our arrays
console.log(arr3.reverse()); // ['o', 'h', 'f', 'i', 'j']
// + Reverse method will mutate the original array.
console.log(arr3); // ['o', 'h', 'f', 'i', 'j']

// #Concat Method
// + This one is used to concatinating arrays
const letters = arr2.concat(arr3); // ['b', 'c'] + ['o', 'h', 'f', 'i', 'j']
// + The first array will be the one on which the method is called.
// + The second one is the one that we pass into the concat method
console.log(letters); // ['a', 'd', 'e', 'o', 'h', 'f', 'i', 'j']

// #Join Method
/* + creates and returns a new string by concatenating all of the elements in an array (or an array-like object), 
separated by commas or a specified separator string
*/
console.log(letters.join(" - ")); // a - d - e - o - h - f - i - j
