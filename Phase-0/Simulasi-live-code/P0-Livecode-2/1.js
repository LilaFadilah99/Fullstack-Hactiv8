function numberReport(numArr) {
    // write your code here ...
    if (numArr === undefined) {
        return 'invalid input'
    } else if (numArr.length === 0) {
        return 'data is empty'
    }
    let output = { ganjil: 0, genap: 0 }

    let angkaGenap = 0
    let angkaGanjil = 0
    for (let i = 0; i < numArr.length; i++) {
        // console.log(numArr[i]);
        for (let j = 0; j < numArr[i].length; j++) {
            // console.log(numArr[i][j]);
            if (numArr[i][j] % 2 === 0) {
                angkaGenap = numArr[i][j]
                console.log(angkaGenap);
                if (angkaGenap > output.genap) {
                    output.genap = angkaGenap
                }
            } else if (numArr[i][j] % 2 === 1) {
                angkaGanjil = numArr[i][j]
                console.log(angkaGanjil);
                if (angkaGanjil > output.ganjil) {
                    output.ganjil = angkaGanjil
                }

            }
        }

        console.log(angkaGanjil);
        console.log(angkaGenap);

    }

    return output
}

console.log(numberReport([
        [180, 2, 30, 39],
        [20, 98, 23, 10, 12, 10],
        [11, 1, 0, -1, -40],
        [3, 100, 200, 30]
    ]))
    // { ganjil: 39, genap: 200 }

console.log(numberReport([
        [18, 2, 200, 39, 1000]
    ]))
    // { ganjil: 39, genap: 1000 }

console.log(numberReport([]))
    // data is empty

console.log(numberReport())
    // invalid input

module.exports = numberReport