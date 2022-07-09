function letterReport(letters) {
    let output = { X: 0, O: 0 }
    if (letters === undefined) {
        return 'invalid input'
    } else if (letters.length === 0) {
        return 'data is empty'
    }

    for (let i = 0; i < letters.length; i++) {
        console.log(letters[i]);
        for (let j = 0; j < letters[i].length; j++) {
            console.log(letters[i][j]);
            if (letters[i][j] === 'x') {
                output.X++
            } else if (letters[i][j] === 'o') {
                output.O++
            }
        }
    }
    return output
}
// console.log(letterReport());

console.log(letterReport([
    ['x', 'x', 'o', 'x'],
    ['o', 'o', 'o', 'x', 'x', 'x'],
    ['o', 'x', 'x', 'o', 'o'],
    ['x', 'x', 'x', 'x']
]))

console.log(letterReport([
        ['x', 'x', 'x', 'x', 'x']
    ]))
    // { X: 5, O: 0 }

console.log(letterReport([
        ['x', 'x', 'o', 'x'],
        ['o', 'o', 'o', 'x', 'x', 'x'],
        ['o', 'x', 'x', 'o', 'o'],
        ['x', 'x', 'x', 'x']
    ]))
    // { X: 12, O: 7 }

console.log(letterReport([
        ['x', 'x', 'x', 'x', 'x']
    ]))
    // { X: 5, O: 0 }

console.log(letterReport([]))
    // // data is empty

console.log(letterReport())
    // invalid input

module.exports = letterReport