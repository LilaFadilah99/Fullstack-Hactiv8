const {antrian, panggilAntrian, tumpukan, ganjilGenap} = require('../index')

describe('built-in function', () => {
  test('should (100)', () => {
    let line = ['Rhaegar'];

    const result = antrian(line, 'Snow');
    expect(result).toEqual(['Rhaegar', 'Snow']);

    const result2 = panggilAntrian(line);
    expect(result2).toEqual(['Snow']);

    const result3 = tumpukan(line, 'Jon');
    expect(result3).toEqual(['Jon', 'Snow']);

    const result4 = ganjilGenap('2341;3429;864;1309;1276');
    expect(result4).toMatch(/plat genap sebanyak 2 dan plat ganjil sebanyak 3/);

    const result5 = ganjilGenap('2347;3429;1305');
    expect(result5).toMatch(/plat ganjil sebanyak 3 dan plat genap tidak ditemukan/);

    const result6 = ganjilGenap('864;1308;1276;1432');
    expect(result6).toMatch(/plat genap sebanyak 4 dan plat ganjil tidak ditemukan/);

    const result7 = ganjilGenap('');
    expect(result7).toMatch(/plat tidak ditemukan/);

    const result8 = ganjilGenap();
    expect(result8).toMatch(/invalid data/);
  });
});