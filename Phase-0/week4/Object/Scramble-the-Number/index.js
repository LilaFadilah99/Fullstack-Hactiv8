function splitNum(str) {
    // Your code here
    let temp = []
    let nilai = 0
    let add = 0

    for (let i = 0; i < str.length; i++) {
        console.log(str[i]);

        if (nilai === 0) {
            console.log(str[i]);
            temp.push(str[i])
            console.log(temp);
        } else if (nilai > 0) {
            temp[add] += str[i]
        }
        nilai++
        if (nilai === 4) {
            nilai = 0
            add++
        }
    }
    console.log(temp);
    return temp
}
console.log(splitNum('081234567890'));


function reverseNum(input) {
    // Your code here
    let temp = ''
    for (let i = input.length - 1; i >= 0; i--) {
        temp += input[i]

    }
    console.log(temp);
    return temp
}


function changeNumber(str, opt) {
    // Your code here
    let output = ''
    for (let i = 0; i < str.length; i++) {
        if (opt === 'ganjil' && i % 2 === 1) {
            output += '#'
        } else if (opt === 'genap' && i % 2 === 0) {
            output += '#'
        } else {
            output += str[i]
        }
    }
    console.log(output);
    return output
}
console.log(changeNumber('33312220811', 'ganjil'))
console.log(changeNumber('33312220811', 'genap'))


function scrambleNumber(numStr, opt) {
    // Your code here
    if (numStr.length < 11 || numStr.length > 12) {
        return 'Invalid Number'
    }

    let split = splitNum(numStr)
    let reverse = reverseNum(split)
    let change = changeNumber(reverse, opt)

    return `result : ${change}`
}

console.log(scrambleNumber('081234567890', 'genap'))
    // result : #8#0#4#6#8#2

console.log(scrambleNumber('081234567890', 'ganjil'))
    // result : 7#9#3#5#0#1#

console.log(scrambleNumber('08516253172', 'genap'))
    // result : #7#6#5#0#5#

console.log(scrambleNumber('081234567809809', 'ganjil'))
    // Invalid Number

console.log(scrambleNumber('08218768316', 'ganjil'))
    // result : 3#6#7#8#8#1

module.exports = {
    splitNum,
    reverseNum,
    changeNumber,
    scrambleNumber
}