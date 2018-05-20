const R = require('ramda')

const OUR_COUNTRY = 'ger'
const wasBornInCountry = person => person.birthCountry === OUR_COUNTRY

// use method ...
const wasBornInCountry_1 = person => R.equals(person.birthCountry, OUR_COUNTRY)

// use property ...
const wasBornInCountry_2 = person => R.equals(R.props('birthCountry', person), OUR_COUNTRY)

// swap order ...
const wasBornInCountry_3 = person => R.equals(OUR_COUNTRY, R.prop('birthCountry', person))

// currying
const wasBornInCountry_4 = person => R.equals(OUR_COUNTRY)(R.prop('birthCountry', person))

// more currying
const wasBornInCountry_5 = person => R.equals(OUR_COUNTRY)(R.prop('birthCountry')(person))

// compose
const wasBornInCountry_6 = person => R.compose(R.equals(OUR_COUNTRY), R.prop('birthCountry'))(person)

// point free
const wasBornInCountry_7 = R.compose(R.equals(OUR_COUNTRY), R.prop('birthCountry'))


// // // transforming

const nextAge = R.compose(R.inc, R.prop('age'))
const celebrateBirthday = person => R.assoc('age', nextAge(person), person)

const celebrateBirthday_2 = R.evolve({age: R.inc})

// // // main

const micha = {
    birthCountry: 'ger',
    age: 35
}

console.log(wasBornInCountry(micha))
console.log(wasBornInCountry_1(micha))
console.log(wasBornInCountry_2(micha))
console.log(wasBornInCountry_3(micha))
console.log(wasBornInCountry_4(micha))
console.log(wasBornInCountry_5(micha))
console.log(wasBornInCountry_6(micha))
console.log(wasBornInCountry_7(micha))

console.log(celebrateBirthday(micha))
console.log(celebrateBirthday_2(micha))