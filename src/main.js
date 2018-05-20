const R = require('ramda')

/**
 * foo bar
 */
const f1 = arg => R.concat('haha ')(arg)

function my_test() {

    R.pipe(
        R.map(f1),
        R.map(console.log)
    )(['hello', 'michael', 'du', 'held'])

    console.log(f1('hello XXXX'))
}


// my_test()

// const f = (x, y, z) => x + y + z
const inc = R.subtract(5, R.__)

var getMetrics = R.applySpec({
    sum: R.add,
    sub: R.subtract,
    nested: { mul: R.multiply }
})

data = [10, 20, 10]

const gt09 = R.gte(R.__, 9)
const lt20 = R.lt(R.__, 20)

console.log(R.map(R.allPass([gt09, lt20]), data))

console.log(
    R.adjust(x => x + 10)(0)(data)
    // R.add(1, R.__)(2)
)


console.log(R.clamp([-3], [4], [20, 4,5]))
