function lastIndexOf(array, num) {
  let output = ''
  for (let i = 0; i < array.length; i++) {
    if (array[i] === num) {
      output = i
    }
  }
  if (output === '') {
    output = -1
  }
  return output
}

console.log(lastIndexOf([0, 1, 4, 1, 2], 1))
console.log(lastIndexOf([0, 1, 4, 1, 2], 2))
console.log(lastIndexOf([0, 1, 4, 1, 2], 3))
console.log(lastIndexOf([5, 5, 5], 5))
console.log(lastIndexOf([], 3))