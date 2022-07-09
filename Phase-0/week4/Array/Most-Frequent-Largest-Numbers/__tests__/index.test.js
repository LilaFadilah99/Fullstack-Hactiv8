const Restriction = require('hacktiv8-restriction')
const { sorting, mostFrequentLargestNumbers, getTotal } = require('../index')

describe('Most Frequent Largest numbers', () => {
  it('should check restriction rules (-30)', async () => {
    const checkRestriction = new Restriction('../index.js');
    checkRestriction.rules = ['match', 'split', 'concat'];
    const restrictedUse = await checkRestriction.readCode();
    expect(restrictedUse).toBe(null);
  })

  it('should correctly returning value from sorting function (40)', () => {
    const input1 = [2, 8, 4, 6, 8, 5, 8, 4]
    const input2 = [122, 122, 130, 100, 135, 100, 135, 150]
    const input3 = [1, 1, 1, 1]
    const input4 = [5, 3, 2, 5, 10, 10, 11]

    expect(Array.isArray(sorting(input1))).toBe(true)
    expect(sorting(input1)).toEqual([2, 4, 4, 5, 6, 8, 8, 8])

    expect(Array.isArray(sorting(input2))).toBe(true)
    expect(sorting(input2)).toEqual([100, 100, 122, 122, 130, 135, 135, 150])

    expect(Array.isArray(sorting(input3))).toBe(true)
    expect(sorting(input3)).toEqual([1, 1, 1, 1])

    expect(Array.isArray(sorting(input4))).toBe(true)
    expect(sorting(input4)).toEqual([2, 3, 5, 5, 10, 10, 11])
  })

  it('should correctly returning value from getTotal function (40)', () => {
    const input1 = [2, 4, 4, 5, 6, 8, 8, 8]
    const input2 = [100, 100, 122, 122, 130, 135, 135, 150]
    const input3 = [1, 1, 1, 1]
    const input4 = [2, 3, 5, 5, 10, 10, 11]

    expect(getTotal(input1)).toEqual(3)
    expect(getTotal(input2)).toEqual(1)
    expect(getTotal(input3)).toEqual(4)
    expect(getTotal(input4)).toEqual(1)
  })

  it('should correctly returning value from mostFrequentLargestNumbers function (20)', () => {
    const input1 = [2, 8, 4, 6, 8, 5, 8, 4]
    const input2 = [122, 122, 130, 100, 135, 100, 135, 150]
    const input3 = [1, 1, 1, 1]
    const input4 = [5, 3, 2, 5, 10, 11, 10]

    expect(mostFrequentLargestNumbers(input1)).toMatch(/angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali/i)
    expect(mostFrequentLargestNumbers(input2)).toMatch(/angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali/i)
    expect(mostFrequentLargestNumbers(input3)).toMatch(/angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali/i)
    expect(mostFrequentLargestNumbers(input4)).toMatch(/angka paling besar adalah 11 dan jumlah kemunculan sebanyak 1 kali/i)
  })
})
