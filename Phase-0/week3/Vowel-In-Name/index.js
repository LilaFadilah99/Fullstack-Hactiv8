function findName(arr, vowel) {
    let output = []
    let temp = 0
    if (arr === undefined) {
        return 'Invalid Input'
    } else if (arr === '' || arr.length === 0) {
        return 'Data not Available'
    }
    for (let i = 0; i < arr.length; i++) {
        // output += arr[i] + ' '
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j].toLowerCase() === vowel) {
                output.push(arr[i])
                break
            }
        }
    }
    if (output.length === 0) {
        return `Tidak ada nama yang mengandung vokal ${vowel}`
    }
    // console.log(output);
    return output
}
console.log(findName(['Abimayu', 'Bramanty', 'Cendric', 'Darpa', 'Ekata'], 'a'));
['Abimayu', 'Bramanty', 'Darpa', 'Ekata']

console.log(findName(['Feshikha', 'Gantari', 'Hara', 'Isvara', 'Javas'], 'i'));
// [ 'Feshikha', 'Gantari', 'Isvara' ]

console.log(findName(['Kayana', 'Laksita', 'Meena', 'Nagendra', 'Opalina'], 'u'));
// Tidak ada nama yang mengandung vokal u

console.log(findName(['Pastika', 'Qirani', 'Radmila', 'Savrinadeya', 'Teripta'], 'e'));
// [ 'Savrinadeya', 'Teripta' ]

console.log(findName(['Utalika', 'Virendra', 'Waradana', 'Yozita', 'Zanitha'], 'o'));
// [ 'Yozita' ]

console.log(findName([], ''));
// Data not Available

console.log(findName());
// Invalid Input

/*
 */

module.exports = findName