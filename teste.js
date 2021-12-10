const content = [
    {name: 'a'},
    {name: 'c'},
    {name: 'b'},
]


content.sort((a, b) => {
    return a.name.toLowerCase().localeCompare(b.name.toLowerCase())
})

console.log(isNaN(true), typeof(true) == 'boolean')

