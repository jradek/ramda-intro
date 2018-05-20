const R = require('ramda')

 // // // arithmetic pipeline

const multiply = (a, b) => a * b
const addOne = x => x + 1
const square = x => x * x

const operate = R.pipe(
    multiply,
    addOne,
    square
)

// // // ramda arithmetic functions

const operateRamda = R.pipe(
    R.multiply,
    R.inc,
    square
)

// // // ramda comaprison
OUR_COUNTRY = 'ger'

const wasBornInCountry = person => R.equals(person.birthCountry, OUR_COUNTRY)
const wasNaturalized = person => Boolean(person.naturalizationDate)
const isOver18 = person => R.gte(person.age, 18)

const isCitizen = R.either(wasBornInCountry, wasNaturalized)
const isEligibleToVote = R.both(isOver18, isCitizen)

// // // ifElse

const forever21 = age => R.ifElse(R.gte(R.__, 21), () => 21, R.inc)(age)
const forever21_2 = age => R.ifElse(R.gte(R.__, 21), R.always(21), R.inc)(age)

// // // identity

const alwaysDrivingAge = age => R.ifElse(R.lt(R.__, 16), R.always(16), a => a)(age)

const alwaysDrivingAge_2 = age => R.ifElse(R.lt(R.__, 16), R.always(16), R.identity)(age)

// // // cond

const water = temperatur => R.cond([
    [R.equals(0),   R.always('water freezes as 0 C')],
    [R.equals(100), R.always('water boils at 100 C')],
    [R.T,           temp => `nothing special happens at ${temp} C`]
])(temperatur)

// // // main

persons = [
    {
        birthCountry: 'ger',
        naturalizationDate: '2018',
        age: 18
    }
]

// => ((3 * 4) + 1)^2 => (12 + 1)^2 => 13^2 => 169
console.log(operate(3, 4))

console.log(operateRamda(3, 4))

console.log(isEligibleToVote(persons[0]))

console.log(forever21(35))
console.log(forever21_2(35))

console.log(alwaysDrivingAge(18))
console.log(alwaysDrivingAge_2(13))

console.log(water(100))
console.log(water(70))