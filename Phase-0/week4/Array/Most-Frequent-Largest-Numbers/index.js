//CARA 1

function sorting(arrNumber) {
    // code di sini
    // kamu bisa mengggunakan function sorting yang sudah kamu buat saat weekend

    return arrNumber
        // console.log(maxNumber);
}

function getTotal(arrNumber) {
    // code di sini
    // let max = sorting(arrNumber)

    //temukan yang terbesar
    console.log(arrNumber);
    let maxNumber = arrNumber[0]
    console.log(maxNumber);
    for (let i = 1; i < arrNumber.length; i++) {
        if (arrNumber[i] > maxNumber) {
            maxNumber = arrNumber[i]
        }

    }
    console.log(maxNumber);

    let output = 0
    console.log(output);
    for (let j = 0; j < arrNumber.length; j++) {
        console.log(arrNumber[j]);
        if (arrNumber[j] === maxNumber) {
            output++
        }
    }
    console.log(output);
    return `angka paling besar adalah ${maxNumber} dan jumlah kemunculan sebanyak ${output} kali`
    return output

}
console.log(getTotal([2, 8, 4, 6, 8, 5, 8, 4, ]));

function mostFrequentLargestNumbers(arrNumber) {
    if (arrNumber.length === 0) {
        return "''"
    }
    /*TIDAK BOLEH DIUBAH*/
    var listSort = sorting(arrNumber)
    var countHighest = getTotal(listSort)
        /*TIDAK BOLEH DIUBAH*/

    // write your code here
    return countHighest
}
console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]))
    //'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(
        mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150])
    )
    //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]))
    //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]))
    //''


// CARA 2

// function sorting(arrNumber) {
//     // code di sini
//     let output = ''
//     let max = arrNumber[0]
//     for (let i = 0; i < arrNumber.length; i++) {
//         console.log(arrNumber[i]);
//         if (arrNumber[i] > max) {
//             max = arrNumber[i]
//         }
//     }
//     console.log(max);
//     output = max
//     return output
// }
// console.log(sorting([2, 8, 4, 6, 8, 5, 8, 4]));

// function getTotal(arrNumber) {
//     // code di sini
//     let max = sorting(arrNumber)
//     let output = 0
//     for (let j = 0; j < arrNumber.length; j++) {
//         console.log(arrNumber[j]);
//         if (arrNumber[j] === max) {
//             output++
//         }
//     }

//     return output

// }

// console.log(getTotal([2, 8, 4, 6, 8, 5, 8, 4]));

// function mostFrequentLargestNumbers(arrNumber) {
//     /*TIDAK BOLEH DIUBAH*/
//     if (arrNumber.length === 0) {
//         return "''"
//     }
//     let output = ''
//     let listSort = sorting(arrNumber)
//     let countHighest = getTotal(arrNumber)
//     output = `angka paling besar adalah ${listSort} dan jumlah kemunculan sebanyak ${countHighest} kali`
//         /*TIDAK BOLEH DIUBAH*/
//     return output
// }

module.exports = {
    getTotal,
    mostFrequentLargestNumbers,
    sorting
}