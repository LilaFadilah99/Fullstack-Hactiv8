function ladder(word) {
    //your code here
    let temp = []
    let tempLength = word.length
    let ind = 0
        // let output = []
    for (let i = 0; i < word.length; i++) {
        console.log(i);
        for (let j = 0; j < tempLength; j++) {
            console.log(j);
            // console.log(tempLength);
            if (j === 0) {
                temp.push([word[j]])
                    // console.log(temp);
            } else {
                temp[ind].push(word[j])
            }
        }
        ind++
        tempLength--
    }
    // console.log(temp);
    return temp
}

// DRIVER CODE
console.log(ladder('hacktiv8'));


//   [ 'h', 'a', 'c', 'k', 't', 'i', 'v', '8' ],
//   [ 'h', 'a', 'c', 'k', 't', 'i', 'v' ],
//   [ 'h', 'a', 'c', 'k', 't', 'i' ],
//   [ 'h', 'a', 'c', 'k', 't' ],
//   [ 'h', 'a', 'c', 'k' ],
//   [ 'h', 'a', 'c' ],
//   [ 'h', 'a' ],
//   [ 'h' ]
// ]

module.exports = ladder;