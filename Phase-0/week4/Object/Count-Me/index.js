function countMe(arr) {
    // write your code here
    let name = {}
    for (let i = 0; i < arr.length; i++) {
        let count = 0
        for (let j = 0; j < arr.length; j++) {
            console.log(` ${arr[i]}   ${arr[j]}`);
            if (arr[i] === arr[j]) {
                count++
            }

        }
        console.log(count);
        name[arr[i]] = count
    }
    return name
}

console.log(countMe(['Sofyan', 'Ricky', 'Sofyan', 'Semmi', 'Semmi', 'Wika']))
    // { Sofyan: 2, Ricky: 1, Semmi: 2, Wika: 1 }

// console.log(countMe([1, 15, 9, 10, 8, 1, 12, 15, 10, 3]))
// { '1': 2, '3': 1, '8': 1, '9': 1, '10': 2, '12': 1, '15': 2 }

module.exports = countMe