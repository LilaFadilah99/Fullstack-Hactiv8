const Restriction = require('hacktiv8-restriction');

const {
  splitNum,
  reverseNum,
  changeNumber,
  scrambleNumber
} = require('../index')

describe('Scrumble the number', () => {
  it('should split into array of 3 string (15)', () => {
    const result1 = splitNum('081234567890')
    const result2 = splitNum('08111222333')
    expect([...result1]).toMatchObject(['0812', '3456', '7890'])
    expect([...result2]).toMatchObject(['0811', '1222', '333'])
  })

  it('should reverse the array and output in string (15)', () => {
    const result1 = reverseNum(['0812', '3456', '7890'])
    const result2 = reverseNum(['0811', '1222', '333'])
    expect(result1).toBe('789034560812')
    expect(result2).toBe('33312220811')
  })

  it('should change (odd/even) number to alfabet (15)', () => {
    const result1 = changeNumber('789034560812', 'genap')
    const result2 = changeNumber('33312220811', 'ganjil')
    expect(result1).toBe('#8#0#4#6#8#2')
    expect(result2).toBe('3#3#2#2#8#1')
  })

  it('should implementing modular function (30)', () => {
    expect(typeof splitNum).toBe('function')
    expect(typeof reverseNum).toBe('function')
    expect(typeof changeNumber).toBe('function')
    expect(typeof scrambleNumber).toBe('function')
  })

  it('should validate string if input is less than 11 and greather than 12 characters (5)', () => {
    const result1 = scrambleNumber('081234567809809', 'ganjil')
    expect(result1).toMatch('Invalid Number')
  })

  it('should produce output which match with requirements (20)', () => {
    const result = scrambleNumber('081234567890', 'genap')
    const result2 = scrambleNumber('08516253172', 'genap')
    const result3 = scrambleNumber('082187683128', 'ganjil')
    expect(result).toBe('result : #8#0#4#6#8#2')
    expect(result2).toBe('result : #7#6#5#0#5#')
    expect(result3).toBe('result : 3#2#8#6#0#2#')
  })

  it('should check restriction rules (-30)', async () => {
    const checkRestriction = new Restriction('../index.js')
    const restrictedUse = await checkRestriction.readCode()
    expect(restrictedUse).toBe(null)
  })
})
