// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    cats.push(name)
}

function destructivelyPrependCat(name) {
    cats.unshift(name)
}

function destructivelyRemoveLastCat() {
    cats.pop()
}

function destructivelyRemoveFirstCat() {
    cats.shift()
}

function appendCat(name) {
    const moreCats = [...cats, name]
    return moreCats
}

function prependCat(name) {
    const moreCats = [name, ...cats]
    return moreCats
}

function removeLastCat() {
    const moreCats = cats.slice(0, cats.length - 1)
    return moreCats
}

function removeFirstCat() {
    const moreCats = cats.slice(1, cats.length)
    return moreCats
}
