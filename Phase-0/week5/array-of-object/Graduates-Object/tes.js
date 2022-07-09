function graduates(students) {
    // write your code here
    let result = {}
    for (const key in students) {
        console.log(students[key]);
        let data = students[key]
        let classData = data.class
        let nilai = data.score

        let value = {
            name: data.name,
            score: data.score
        }

        if (nilai > 75) {

            if (result[classData] === undefined) {
                result[classData] = []
            }
            result[classData].push(value)
        }

    }
    console.log(result);
    return result

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

// {
//   foxes: [{ name: 'Dimitri', score: 90 }],
//   wolves: [{ name: 'Alexei' , score: 85 }, { name:         'Anastasia', score: 78 } ]
// }