function withoutSymptomsPatient(data) {
    // Write your code here
    let output = 0
    for (const patient of data) {
        let patientStatus = patient.symptoms

        if (patientStatus === 'without symptoms') {
            output++
        }
    }
    console.log(output);
    return output
}

function priorityPatient(data) {
    // Write your code here
    let output = ''
    for (const patientStatus of data) {
        let age = patientStatus.age
        let status = patientStatus.status
        let name = patientStatus.name

        if (status === 'Positive' && age > 40) {
            output += name + ',' + ' '
        }
    }
    return `${output}is Priority Patient`
}

function Foxvid21(data) {
    // Write your code here
    if (data === undefined) {
        return 'Invalid Data'
    } else if (data.length === 0) {
        return 'Empty Data'
    }
    let patient = withoutSymptomsPatient(data)
    let patientStatus = priorityPatient(data)
    let output = {
        Positive: [],
        Recover: [],
        Negative: [],
        undetected: patient,
        priority: patientStatus
    }
    for (const patientData of data) {
        let status = patientData.status
        let name = patientData.name
        if (status === 'Positive') {
            output.Positive.push(name)
        } else if (status === 'Recover') {
            output.Recover.push(name)
        } else if (status === 'Negative') {
            output.Negative.push(name)
        }
    }
    console.log(output);
    return output
}


let data = [{
        name: 'James',
        age: 24,
        status: 'Positive',
        symptoms: 'without symptoms'
    },
    {
        name: 'Edward',
        age: 30,
        status: 'Recover',
        symptoms: 'diarrhea'
    },
    {
        name: 'Kurt',
        age: 24,
        status: 'Negative',
        symptoms: 'Flu'
    },
    {
        name: 'Sam',
        age: 24,
        status: 'Recover',
        symptoms: 'without symptoms'
    },
    {
        name: 'Cole',
        age: 50,
        status: 'Positive',
        symptoms: 'Cough'
    },
    {
        name: 'Ashley',
        age: 41,
        status: 'Positive',
        symptoms: 'Fever'
    },
    {
        name: 'Jane',
        age: 30,
        status: 'Positive',
        symptoms: 'without symptoms'
    },
]

// let data2 = [{
//         name: 'Naruto',
//         age: 30,
//         status: 'Negative',
//         symptoms: 'without symptoms'
//     },
//     {
//         name: 'Sasuke',
//         age: 30,
//         status: 'Recover',
//         symptoms: 'without symptoms'
//     },
//     {
//         name: 'Sakura',
//         age: 30,
//         status: 'Negative',
//         symptoms: 'without symptoms'
//     },
//     {
//         name: 'Hinata',
//         age: 45,
//         status: 'Recover',
//         symptoms: 'without symptoms'
//     },
//     {
//         name: 'Kakashi',
//         age: 60,
//         status: 'Negative',
//         symptoms: 'Cough'
//     },
//     {
//         name: 'Gaara',
//         age: 50,
//         status: 'Positive',
//         symptoms: 'Fever'
//     },
//     {
//         name: 'Itachi',
//         age: 70,
//         status: 'Positive',
//         symptoms: 'without symptoms'
//     },
// ]


console.log(Foxvid21(data))
    /*
    {
        Positive: [ 'James', 'Cole', 'Ashley', 'Jane' ],
        Recover: [ 'Edward', 'Sam' ],
        Negative: [ 'Kurt' ],
        undetected: 3,
        priority: 'Cole, Ashley, is Priority Patient'
    }
    */
    // console.log(Foxvid21(data2))
    /*
    {
        Negative: [ 'Naruto', 'Sakura', 'Kakashi' ],
        Recover: [ 'Sasuke', 'Hinata' ],
        Positive: [ 'Gaara', 'Itachi' ],
        undetected: 5,
        priority: 'Gaara, Itachi, is Priority Patient'
    }
    */

console.log(Foxvid21([])) // Empty Data
console.log(Foxvid21()) // Invalid Data



module.exports = {
    Foxvid21,
    priorityPatient,
    withoutSymptomsPatient
}