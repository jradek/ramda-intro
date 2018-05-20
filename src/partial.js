const R = require('ramda')

// // // Intro

const publishedInYear = (book, year) => book.year === year

const titlesForYear = (books, year) => {
    const selected = R.filter(book => publishedInYear(book, year), books)

    return R.map(book => book.title, selected)
}

// // // Partial application

const titlesForYearPartial = (books, year) => {
    const selected = R.filter(R.partialRight(publishedInYear, [year]), books)

    return R.map(book => book.title, selected)
}

// // // Currying

const publishedInYearCurry = R.curry(publishedInYear)

const titlesForYearCurry = (books, year) => {
    // Note: Argument order is reversed!
    const selected = R.filter(R.flip(publishedInYearCurry)(year), books)

    return R.map(book => book.title, selected)
}

// // // Placeholder

const titlesForYearPlaceHolder = (books, year) => {
    const selected = R.filter(publishedInYearCurry(R.__, year), books)

    return R.map(book => book.title, selected)
}

// // // Main

const books = [
    {
        year: 2000,
        title: "In the year 2000",
    },
    {
        year: 2000,
        title: "In the year 2000++",
    },
    {
        year: 2018,
        title: "Hi micha",
    }
]

const run = (message, f) => {
    console.log('--- ' + message + ' ---')
    console.log(f)
    console.log()
}

run('first', titlesForYear(books, 2000))
run('partial', titlesForYearPartial(books, 2000))
run('curry', titlesForYearCurry(books, 2000))
run('placeholder', titlesForYearPlaceHolder(books, 2000))