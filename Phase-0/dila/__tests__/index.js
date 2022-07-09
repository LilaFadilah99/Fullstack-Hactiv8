const { execSync } = require('child_process')
const fs = require('fs')
const reconstructedFilename = 'reconstructed.js'

const bank_hacktiv8 = (nama , usia, uang, rekening ) => {
    let solution = fs.readFileSync('./index.js', 'utf-8')
    solution = solution.replace(/(let|var) nama .*/, `$1 nama = "${nama}"`)
    solution = solution.replace(/(let|var) usia .*/, `$1 usia = ${usia}`)
    solution = solution.replace(/(let|var) uang .*/, `$1 uang = ${uang}`)
    solution = solution.replace(/(let|var) rekening .*/, `$1 rekening = "${rekening}"`)
    fs.writeFileSync(reconstructedFilename, solution)
    return String(execSync(`node ${reconstructedFilename}`))
}

afterAll(() => {
    if (fs.existsSync(reconstructedFilename)) {
        fs.unlinkSync(reconstructedFilename)
    }
})

describe('Bank Hacktiv8', () => {
    it('Should return correct answer if name input invalid', () => {
        const result = bank_hacktiv8('', 18, 1000000, 'Tabungan');
        expect(result).toMatch(/Terdapat kesalahan pada pengisian nama/i);
    })

    it('Should return correct answer if account type input invalid', () => {
        const result = bank_hacktiv8('Ardi', 18, 1000000, 'Asuransi');
        expect(result).toMatch(/Jenis rekening tidak ditemukan/i);
    })

    it('Should return correct answer if `usia` doesnt meet requirment', () => {
        const result1 = bank_hacktiv8('Ardi', 15, 1000000, 'Tabungan');
        const result2 = bank_hacktiv8('Ardi', 15, 100000, 'Tabungan');
        expect(result1).toMatch(/Usia untuk membuka tabungan belum mencukupi/i);
        expect(result2).toMatch(/Usia untuk membuka tabungan belum mencukupi/i);
    })

    it('Should return correct answer if minimum `deposit` doesnt meet requirement', () => {
        const result1 = bank_hacktiv8('Ardi', 18, 100000, 'Tabungan');
        const result2 = bank_hacktiv8('Ardi', 18, 100000, 'Giro');
        expect(result1).toMatch(/Tidak bisa membuka rekening Tabungan, minimum deposit kurang 400000/i);
        expect(result2).toMatch(/Tidak bisa membuka rekening Giro, minimum deposit kurang 900000/i);
    })

    it('Should return correct answer if customer pass all the requirment', () => {
        const result1 = bank_hacktiv8('Ardi', 18, 1000000, 'Tabungan');
        const result2 = bank_hacktiv8('Ardi', 18, 1000000, 'Giro');
        expect(result1).toMatch(/Rekening Tabungan, atas nama Ardi berhasil dibuka/i);
        expect(result2).toMatch(/Rekening Giro, atas nama Ardi berhasil dibuka/i);
    })
})