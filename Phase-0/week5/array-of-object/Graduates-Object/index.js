function graduates(students) {
    // write your code here
    let output = {}
    if (students.length === 0) {
        return output
    }

    for (let i = 0; i < students.length; i++) {
        // console.log(students[i]);
        let allStudent = students[i]
        let key = allStudent.class
        let name = allStudent.name
        let score = allStudent.score
            // console.log(key);
        let temp = { name, score }
        if (score > 75) {
            if (output[key] === undefined) {
                output[key] = []
            }
            output[key].push(temp)
        }
    }
    console.log(output);
    return output
}


console.log(
    graduates([{
            name: 'Dimitri',
            score: 90,
            class: 'foxes'
        },
        {
            name: 'Alexei',
            score: 85,
            class: 'wolves'
        },
        {
            name: 'Sergei',
            score: 74,
            class: 'foxes'
        },
        {
            name: 'Anastasia',
            score: 78,
            class: 'wolves'
        }
    ])
)
console.log(
    graduates([{
            name: 'Rin',
            score: 100,
            class: 'foxes'
        },
        {
            name: 'Saber',
            score: 80,
            class: 'wolves'
        },
        {
            name: 'Gilgamesh',
            score: 30,
            class: 'foxes'
        },
        {
            name: 'Ishtar',
            score: 50,
            class: 'wolves'
        }
    ])
)

// {
//   foxes: [
//     { name: 'Dimitri', score: 90 }
//   ],
//   wolves: [
//     { name: 'Alexei' , score: 85 },
//     { name: 'Anastasia', score: 78 }
//   ]
// }

console.log(
    graduates([{
            name: 'Alexander',
            score: 100,
            class: 'foxes'
        },
        {
            name: 'Alisa',
            score: 76,
            class: 'wolves'
        },
        {
            name: 'Vladimir',
            score: 92,
            class: 'foxes'
        },
        {
            name: 'Albert',
            score: 71,
            class: 'wolves'
        },
        {
            name: 'Viktor',
            score: 80,
            class: 'tigers'
        }
    ])
)

// {
//   foxes: [
//     { name: 'Alexander', score: 100 },
//     { name: 'Vladimir', score: 92 }
//   ],
//   wolves: [
//     { name: 'Alisa', score: 76 },
//   ],
//   tigers: [
//     { name: 'Viktor', score: 80 }
//   ]
// }

console.log(graduates([])) //{}

module.exports = graduates