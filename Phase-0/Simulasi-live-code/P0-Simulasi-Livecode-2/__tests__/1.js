const Restriction = require('hacktiv8-restriction');
const letterReport = require('../1.js');

describe('1.js -- Letter Report', () => {
    test('should return correct answer if data is undefinded', () => {
        expect(letterReport()).toEqual("invalid input")
    })

    test('should return correct answer if data is empty array', () => {
        expect(letterReport([])).toEqual("data is empty")
    })

    test('should return correct answer if input is array multidimention of letters', () => {
        expect(letterReport([
            ['x', 'x', 'x', 'x', 'x']
        ])).toEqual({ X: 5, O: 0 })
        expect(letterReport([
            ['x', 'x', 'x', 'x', 'x']
        ])).toMatchObject({ X: 5, O: 0 })
        expect(letterReport([
            ['x', 'x', 'o', 'x'],
            ['o', 'o', 'o', 'x', 'x', 'x'],
            ['o', 'x', 'x', 'o', 'o'],
            ['x', 'x', 'x', 'x']
        ])).toEqual({ X: 12, O: 7 })
    })

    test('check restriction (-30)', async () => {
        const checkRestriction = new Restriction('../1.js');
        checkRestriction.rules = ['match', 'split', 'concat', 'search', 'unshift', 'shift'];
        const result = await checkRestriction.readCode();
        expect(result).toBe(null);
    })
})