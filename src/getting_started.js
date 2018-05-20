const R = require('ramda')

const add = (accum, value) => accum + value
 
const result = R.reduce(add, 5, [1, 2, 3, 4]) // --> 15

console.log(result)