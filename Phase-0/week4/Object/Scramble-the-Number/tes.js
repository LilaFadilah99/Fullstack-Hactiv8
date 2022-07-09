const { log } = require("npm/node_modules/npmlog");

function splitNum(str) {
    // Your code here
    let output = []
    for (let i = 0; i < str.length; i++) {

    }
    return output
}
console.log(splitNum('081234567890'));


function reverseNum(input) {
    // Your code here

}
console.log(reverseNum(['0812', '3456', '7890']))

function changeNumber(str, opt) {
    // Your code here


}
console.log(changeNumber('33312220811', 'ganjil')) // 3#3#2#2#8#1
console.log(changeNumber('33312220811', 'genap'))


function scrambleNumber(numStr, opt) {
    // Your code here
    if (numStr.length < 11 || numStr.length > 12) {
        return 'Invalid Number'
    }
    let split = splitNum(numStr)
}

console.log(scrambleNumber('082187683128', 'ganjil'))
    // result : #8#0#4#6#8#2

// console.log(scrambleNumber('081234567890', 'ganjil'))
//     //     // result : 7#9#3#5#0#1#

// console.log(scrambleNumber('08516253172', 'genap'))
//     //     // result : #7#6#5#0#5#

// console.log(scrambleNumber('081234567809809', 'ganjil'))
//     // Invalid Number

// console.log(scrambleNumber('08218768316', 'ganjil'))
//     // result : 3#6#7#8#8#1