const ProfileLink = user => `<a href=${user.id}>${user.name}</a>`

const Heading = str => `<h1>Now Viewing ${str}</h1>`

const state = {
    pageName: 'Home',
    currentUser: {id: 10, name: "Micha"}}

const Component = g => ({
    // :: a -> HTML
    fold: g,
    // ::
    contramap: f => Component(x => g(f(x))),
    // :: 
    concat: other => Component(x => `<div>${g(x)}${other.fold(x)}</div>`)
})

const Title = Component(Heading).contramap(s => s.pageName)
const Link = Component(ProfileLink).contramap(s => s.currentUser)

console.log(Title.fold(state))
console.log(Link.fold(state))

const App = Title.concat(Link)
console.log(App.fold(state))
