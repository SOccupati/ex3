function flattening(list) {
  return list.reduce((acc, curr) => acc.concat(curr), []);
}

let arrays = [[1, 2, 3], [4, 5], [6]];
console.log(flattening(arrays)); // Output: [1, 2, 3, 4, 5, 6]
