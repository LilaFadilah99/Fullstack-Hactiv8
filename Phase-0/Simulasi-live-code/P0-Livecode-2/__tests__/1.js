const Restriction = require('hacktiv8-restriction');
const numberReport = require('../1.js');

describe('1.js -- Number Report', () => {
    test('should return correct answer if data is undefinded', () => {
        expect(numberReport()).toEqual("invalid input")
    })

    test('should return correct answer if data is empty array', () => {
        expect(numberReport([])).toEqual("data is empty")
    })

    test('should return correct answer if input is array multidimention of number', () => {
        expect(numberReport([
            [18, 2, 200, 39, 1000]
        ])).toEqual({
            ganjil: 39,
            genap: 1000
        })
        expect(numberReport([
            [18, 2, 200, 39, 10]
        ])).toEqual({
            ganjil: 39,
            genap: 200
        })
        expect(numberReport([
            [18, 2, 200, 39, 10]
        ])).toMatchObject({
            ganjil: 39,
            genap: 200
        })
        expect(numberReport([
            [180, 2, 30, 39],
            [20, 98, 23, 10, 12, 10],
            [11, 1, 0, -1, -40],
            [3, 100, 200, 30]
        ])).toEqual({
            ganjil: 39,
            genap: 200
        })
    })

    test('check restriction (-30)', async () => {
        const checkRestriction = new Restriction('../1.js');
        checkRestriction.rules = ['match', 'split', 'concat', 'search', 'unshift', 'shift'];
        const result = await checkRestriction.readCode();
        expect(result).toBe(null);
    })
})