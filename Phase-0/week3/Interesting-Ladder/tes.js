function ladder(word) {
    let temp = []
    let ind = 0
    let tempLength = word.length
    for (let i = 0; i < word.length; i++) {
        for (let j = 0; j < tempLength; j++) {
            if (j === 0) {
                temp.push([word[j]])
            } else {
                temp[ind].push(word[j])
            }

        }
        tempLength--
        ind++
    }
    return temp
}

// DRIVER CODE
console.log(ladder('dila'));