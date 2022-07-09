const Restriction = require('hacktiv8-restriction');
const fileName = '../index.js';
const findName = require(fileName);

describe('Find Word', () => {
    test('should return correct answer if parameters is undefinded (6)', () => {
        expect(findName()).toEqual("Invalid Input")
    })

    test('should return correct answer if arr and vovel is empty (6)', () => {
        expect(findName([], '')).toEqual("Data not Available")
    })

    test('should return correct answer if there are any vowels in names (37)', () => {
        expect(findName(['Abimayu', 'Bramanty', 'Cendric', 'Darpa', 'Ekata'], 'a')).toEqual(['Abimayu', 'Bramanty', 'Darpa', 'Ekata'])
        expect(findName(['Feshikha', 'Gantari', 'Hara', 'Isvara', 'Javas'], 'i')).toEqual(['Feshikha', 'Gantari', 'Isvara'])
        expect(findName(['Pastika', 'Qirani', 'Radmila', 'Savrinadeya', 'Teripta'], 'e')).toEqual(['Savrinadeya', 'Teripta'])
        expect(findName(['Utalika', 'Virendra', 'Waradana', 'Yozita', 'Zanitha'], 'o')).toEqual(['Yozita'])
    })

    test('should return correct answer if there are no vowels in names (36)', () => {
        expect(findName(['Kayana', 'Laksita', 'Meena', 'Nagendra', 'Opalina'], 'u')).toEqual("Tidak ada nama yang mengandung vokal u")
    })

    test('check restriction (-30)', async () => {
        const checkRestriction = new Restriction(fileName);
        checkRestriction.rules = ['match', 'split', 'concat', 'search', 'unshift', 'shift'];
        const result = await checkRestriction.readCode();
        expect(result).toBe(null);
    })
})

it('should check restriction rules', async () => {
    const checkRestriction = new Restriction('../index.js')
    const restrictedUse = await checkRestriction.readCode()
    expect(restrictedUse).toBe(null)
})
