const Restriction = require('hacktiv8-restriction');
const fileName = '../3.js';
const {
    missionPoint,
    developerRank,
    developerHistory
} = require(fileName);

describe('3.js -- Developer Rank', () => {
    test('should return correct answer if data is undefinded', () => {
        expect(developerHistory()).toEqual("Invalid data")
    })

    test('should return correct answer if data is empty array', () => {
        expect(developerHistory([])).toEqual("Data not found!")
    })

    test('should return correct answer if missionPoint parameter exist', () => {
        expect(missionPoint('AAAAAAAAAA')).toEqual(40)
        expect(missionPoint('CCBBCB')).toEqual(9)
        expect(missionPoint('ABCABCABC')).toEqual(21)
        expect(missionPoint('CCBBCCBB')).toEqual(12)
        expect(missionPoint('CBC')).toEqual(4)
    })

    test('should return correct answer if developerRank parameter exist', () => {
        expect(developerRank(40)).toEqual('Jounnin')
        expect(developerRank(9)).toEqual('Gennin')
        expect(developerRank(21)).toEqual('Chunnin')
        expect(developerRank(12)).toEqual('Gennin')
        expect(developerRank(4)).toEqual('Unclassified')
    })

    test('should return correct answer if developerHistory data exist', () => {
        expect(developerHistory([
            ['Naruto', 'AAAAAAAAAA', 'Konoha'],
            ['Gaara', 'CCBBCB', 'Suna'],
            ['Mei Terumi', 'ABCABCABC', 'Kiri'],
            ['Darui', 'CCBBCCBB', 'Kumo'],
            ['Kurotsuchi', 'CBC', 'Iwa'],
        ])).toEqual({
            Naruto: {
                village: 'Konoha',
                score: '40 point',
                rank: 'Rank Jounnin'
            },
            Gaara: {
                village: 'Suna',
                score: '9 point',
                rank: 'Rank Gennin'
            },
            'Mei Terumi': {
                village: 'Kiri',
                score: '21 point',
                rank: 'Rank Chunnin'
            },
            Darui: {
                village: 'Kumo',
                score: '12 point',
                rank: 'Rank Gennin'
            },
            Kurotsuchi: {
                village: 'Iwa',
                score: '4 point',
                rank: 'Rank Unclassified'
            }
        })
    })

    test('check restriction (-30)', async () => {
        const checkRestriction = new Restriction(fileName);
        checkRestriction.rules = ['match', 'split', 'concat', 'search', 'unshift', 'shift'];
        const result = await checkRestriction.readCode();
        expect(result).toBe(null);
    })
})