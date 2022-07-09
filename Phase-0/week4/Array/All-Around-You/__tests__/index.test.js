const Restriction = require('hacktiv8-restriction');
const fileName = '../index.js';
const allAroundYou = require(fileName);

describe('Jumlahkan Angka Dalam Array ', () => {
    test('should return correct answer if coordinate position stick to corner', () => {
        let board1 = [
            [1, 1, 1, 1, 1],
            [1, 2, 2, 2, 1],
            [1, 2, 3, 2, 1],
            [1, 2, 2, 2, 1],
            [1, 1, 1, 1, 1],
        ];

        let board2 = [
            [2, 1, 3, 9, 0, 5, 8, 5, 7],
            [4, 4, 2, 5, 3, 2, 6, 9, 7],
            [2, 1, 3, 9, 0, 5, 8, 2, 1],
            [6, 5, 3, 0, 3, 0, 4, 1, 1],
        ];
        expect(allAroundYou(board1, 0, 0)).toEqual(5);
        expect(allAroundYou(board1, 4, 0)).toEqual(5);
        expect(allAroundYou(board1, 0, 4)).toEqual(5);
        expect(allAroundYou(board1, 4, 4)).toEqual(5);
        expect(allAroundYou(board1, 2, 4)).toEqual(9);
        expect(allAroundYou(board1, 4, 2)).toEqual(9);
        expect(allAroundYou(board2, 0, 0)).toEqual(11);
        expect(allAroundYou(board2, 8, 3)).toEqual(5);
        expect(allAroundYou(board2, 8, 0)).toEqual(28);
        expect(allAroundYou(board2, 0, 3)).toEqual(14);
        expect(allAroundYou(board2, 4, 3)).toEqual(17);
        expect(allAroundYou(board2, 0, 1)).toEqual(14);
    })

    test('should return correct answer if coordinate position doesnt stick to corner', () => {
        let board1 = [
            [1, 1, 1, 1, 1],
            [1, 2, 2, 2, 1],
            [1, 2, 3, 2, 1],
            [1, 2, 2, 2, 1],
            [1, 1, 1, 1, 1],
        ];

        let board2 = [
            [2, 1, 3, 9, 0, 5, 8, 5, 7],
            [4, 4, 2, 5, 3, 2, 6, 9, 7],
            [2, 1, 3, 9, 0, 5, 8, 2, 1],
            [6, 5, 3, 0, 3, 0, 4, 1, 1],
        ];

        expect(allAroundYou(board1, 1, 1)).toEqual(14);
        expect(allAroundYou(board1, 2, 3)).toEqual(16);
        expect(allAroundYou(board1, 2, 2)).toEqual(19);
        expect(allAroundYou(board1, 3, 2)).toEqual(16);
        expect(allAroundYou(board1, 1, 2)).toEqual(16);
        expect(allAroundYou(board1, 3, 3)).toEqual(14);
        expect(allAroundYou(board2, 1, 1)).toEqual(22);
        expect(allAroundYou(board2, 7, 2)).toEqual(39);
        expect(allAroundYou(board2, 4, 2)).toEqual(27);
        expect(allAroundYou(board2, 4, 1)).toEqual(38);
        expect(allAroundYou(board2, 2, 1)).toEqual(37);
        expect(allAroundYou(board2, 7, 1)).toEqual(53);
    })

    test('check restriction', async () => {
        const checkRestriction = new Restriction(fileName)
        checkRestriction.rules = ['match', 'split', 'concat', 'search', 'unshift', 'shift', 'push']
        const result = await checkRestriction.readCode()
        expect(result).toBe(null)
    })
})

it('should check restriction rules', async () => {
    const checkRestriction = new Restriction('../index.js')
    const restrictedUse = await checkRestriction.readCode()
    expect(restrictedUse).toBe(null)
})
