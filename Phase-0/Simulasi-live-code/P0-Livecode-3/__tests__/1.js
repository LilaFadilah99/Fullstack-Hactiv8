const {
    Foxvid21,
    withoutSymptomsPatient,
    priorityPatient
} = require('../1.js')

describe("Livecode 3 - soal 1", () => {
    describe("Foxvid21 Function", () => {
        it("should return the correct output", () => {
            let data = Foxvid21([{
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
            ])

            let data2 = Foxvid21([{
                    name: 'Naruto',
                    age: 30,
                    status: 'Negative',
                    symptoms: 'without symptoms'
                },
                {
                    name: 'Sasuke',
                    age: 30,
                    status: 'Recover',
                    symptoms: 'without symptoms'
                },
                {
                    name: 'Sakura',
                    age: 30,
                    status: 'Negative',
                    symptoms: 'without symptoms'
                },
                {
                    name: 'Hinata',
                    age: 45,
                    status: 'Recover',
                    symptoms: 'without symptoms'
                },
                {
                    name: 'Kakashi',
                    age: 60,
                    status: 'Negative',
                    symptoms: 'Cough'
                },
                {
                    name: 'Gaara',
                    age: 50,
                    status: 'Positive',
                    symptoms: 'Fever'
                },
                {
                    name: 'Itachi',
                    age: 70,
                    status: 'Positive',
                    symptoms: 'without symptoms'
                },
            ])

            let data3 = Foxvid21([])

            let data4 = Foxvid21()

            expect(data).toEqual({
                Positive: ['James', 'Cole', 'Ashley', 'Jane'],
                Recover: ['Edward', 'Sam'],
                Negative: ['Kurt'],
                undetected: 3,
                priority: 'Cole, Ashley, is Priority Patient'
            })
            expect(data2).toEqual({
                Negative: ['Naruto', 'Sakura', 'Kakashi'],
                Recover: ['Sasuke', 'Hinata'],
                Positive: ['Gaara', 'Itachi'],
                undetected: 5,
                priority: 'Gaara, Itachi, is Priority Patient'
            })

            expect(data3).toEqual('Empty Data')

            expect(data4).toEqual('Invalid Data')
        })
    })

    describe("withoutSymptomsPatient", () => {
        it("should return the correct output", () => {
            let data = withoutSymptomsPatient([{
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
            ])

            let data2 = withoutSymptomsPatient([{
                    name: 'Naruto',
                    age: 30,
                    status: 'Negative',
                    symptoms: 'without symptoms'
                },
                {
                    name: 'Sasuke',
                    age: 30,
                    status: 'Recover',
                    symptoms: 'without symptoms'
                },
                {
                    name: 'Sakura',
                    age: 30,
                    status: 'Negative',
                    symptoms: 'without symptoms'
                },
                {
                    name: 'Hinata',
                    age: 45,
                    status: 'Recover',
                    symptoms: 'without symptoms'
                },
                {
                    name: 'Kakashi',
                    age: 60,
                    status: 'Negative',
                    symptoms: 'Cough'
                },
                {
                    name: 'Gaara',
                    age: 50,
                    status: 'Positive',
                    symptoms: 'Fever'
                },
                {
                    name: 'Itachi',
                    age: 70,
                    status: 'Positive',
                    symptoms: 'without symptoms'
                },
            ])

            expect(data).toEqual(3)
            expect(data2).toEqual(5)
        })
    })

    describe("priorityPatient", () => {
        it("should return the correct output", () => {
            let data = priorityPatient([{
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
            ])

            let data2 = priorityPatient([{
                    name: 'Naruto',
                    age: 30,
                    status: 'Negative',
                    symptoms: 'without symptoms'
                },
                {
                    name: 'Sasuke',
                    age: 30,
                    status: 'Recover',
                    symptoms: 'without symptoms'
                },
                {
                    name: 'Sakura',
                    age: 30,
                    status: 'Negative',
                    symptoms: 'without symptoms'
                },
                {
                    name: 'Hinata',
                    age: 45,
                    status: 'Recover',
                    symptoms: 'without symptoms'
                },
                {
                    name: 'Kakashi',
                    age: 60,
                    status: 'Negative',
                    symptoms: 'Cough'
                },
                {
                    name: 'Gaara',
                    age: 50,
                    status: 'Positive',
                    symptoms: 'Fever'
                },
                {
                    name: 'Itachi',
                    age: 70,
                    status: 'Positive',
                    symptoms: 'without symptoms'
                },
            ])

            expect(data).toEqual('Cole, Ashley, is Priority Patient')
            expect(data2).toEqual('Gaara, Itachi, is Priority Patient')
        })
    })
})