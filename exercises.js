function flattening(list) {
  return list.reduce((acc, curr) => acc.concat(curr), []);
}

let arrays = [[1, 2, 3], [4, 5], [6]];
console.log(flattening(arrays)); // Output: [1, 2, 3, 4, 5, 6]
function loop(value, test, update, body) {
  for (let i = value; test(i); i = update(i)) {
    body(i);
  }
}

// Example usage:
loop(3, n => n > 0, n => n - 1, console.log);
// Output:
// 3
// 2
// 1
// Implementation of everyLoop using a loop
function everyLoop(array, test) {
  for (let element of array) {
    if (!test(element)) {
      return false;
    }
  }
  return true;
}

// Implementation of everySome using the some method
function everySome(array, test) {
  return !array.some(element => !test(element));
}

// Example usage:
console.log(everyLoop([1, 3, 5], n => n < 10));  // Output: true
console.log(everyLoop([2, 4, 16], n => n < 10)); // Output: false
console.log(everyLoop([], n => n < 10));        // Output: true

console.log(everySome([1, 3, 5], n => n < 10));  // Output: true
console.log(everySome([2, 4, 16], n => n < 10)); // Output: false
console.log(everySome([], n => n < 10));        // Output: true


