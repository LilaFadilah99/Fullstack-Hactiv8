function sorting(arrNumber) {
    // code di sini
    let output = ''
    let max = arrNumber[0]
    for (let i = 0; i < arrNumber.length; i++) {
        console.log(arrNumber[i]);
        if (arrNumber[i] > max) {
            max = arrNumber[i]
        }
    }
    console.log(max);
    output = max
    return output
}
console.log(sorting([2, 8, 4, 6, 8, 5, 8, 4]));

function getTotal(arrNumber) {
    // code di sini
    let max = sorting(arrNumber)
    let output = 0
    for (let j = 0; j < arrNumber.length; j++) {
        console.log(arrNumber[j]);
        if (arrNumber[j] === max) {
            output++
        }
    }

    return output

}

console.log(getTotal([2, 8, 4, 6, 8, 5, 8, 4]));

function mostFrequentLargestNumbers(arrNumber) {
    /*TIDAK BOLEH DIUBAH*/
    if (arrNumber.length === 0) {
        return "''"
    }
    let output = ''
    let listSort = sorting(arrNumber)
    let countHighest = getTotal(arrNumber)
    output = `angka paling besar adalah ${listSort} dan jumlah kemunculan sebanyak ${countHighest} kali`
        /*TIDAK BOLEH DIUBAH*/
    return output
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''