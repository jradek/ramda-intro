const generate_link = user => `<a href=${user.id}>${user.name}</a>`
const generate_header = str => `<h1>Now Viewing ${str}</h1>`

const data = {
    pageName: 'Home',
    currentUser: {id: 10, name: "Micha"}}

const Component = g => ({
    // :: a -> b
    fold: g,
    // :: (c -> a) -> (a -> b)
    contramap: f => Component(x => g(f(x))),
    // ::
    concat: other => Component(x => `<div>${g(x)} ${other.fold(x)}</div>`)
})

const componentLink = Component(generate_link)
const componentHeader = Component(generate_header)

console.log('\n(a): pass data')
console.log(componentLink.fold(data.currentUser))
console.log(componentHeader.fold(data.pageName))

const Link = componentLink.contramap(s => s.currentUser)
const Title = componentHeader.contramap(s => s.pageName)

console.log('\n(b): extract data')
console.log(Link.fold(data))
console.log(Title.fold(data))

console.log('\n(c): extract and compose')
const App = Title.concat(Link)
console.log(App.fold(data))
