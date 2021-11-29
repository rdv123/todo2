var array = [5, 3, 2, 8, 1, 4];
var indices = [];

var array1 = array.filter((v, i) => v % 2 && indices.push(i));
console.log(indices);
console.log(array1);
var array2 = array1.sort((a, b) => a - b);
console.log(array2);

array2.forEach((v, i) => {
  console.log(indices[i]);
  array[indices[i]] = v;
  console.log(array[indices[i]]);
});
// console.log(array[indices[i]])
console.log(array);
// console.log(array3);

array
  .filter((v, i) => v % 2 && indices.push(i))
  .sort((a, b) => a - b)
  .forEach((v, i) => (array[indices[i]] = v));

console.log(array);
