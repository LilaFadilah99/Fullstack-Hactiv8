const { execSync } = require('child_process')
const fs = require('fs')

const reconstructedFilename = 'reconstructed.js'


const fruitShop=(uang, stokMangga, stokApel, stokPisang)=>{
    let solution = fs.readFileSync('./index.js', 'utf-8')

    solution = solution.replace(
        /(let|var) uang .*/g,
        // to handle undefined or null, it should not be quoted
        `$1 uang = ${typeof uang === 'number' ? Number(uang) : uang}`
    )


    solution = solution.replace(
        /(let|var) stokMangga .*/g,
        // to handle undefined or null, it should not be quoted
        `$1 stokMangga = ${typeof stokMangga === 'number' ? Number(stokMangga) : stokMangga}`
    )
    solution = solution.replace(
        /(let|var) stokApel .*/g,
        // to handle undefined or null, it should not be quoted
        `$1 stokApel = ${typeof stokApel === 'number' ? Number(stokApel) : stokApel}`
    )
    solution = solution.replace(
        /(let|var) stokPisang .*/g,
        // to handle undefined or null, it should not be quoted
        `$1 stokPisang = ${typeof stokPisang === 'number' ? Number(stokPisang) : stokPisang}`
    )

    fs.writeFileSync(reconstructedFilename, solution)

    return String(execSync(`node ${reconstructedFilename}`))
}


afterAll(() => {
    if (fs.existsSync(reconstructedFilename)) {
        fs.unlinkSync(reconstructedFilename)
    }
})


describe('Hacktiv8 Fruit Shop', () => {
    it('Make output correct as example given (85)', () =>{
        const result1 = fruitShop(25000,2,3,3)
        const result2 = fruitShop(40000,4,5,3)
        const result3 = fruitShop(50000,1,10,3)
        const result4 = fruitShop(80000,1,10,3)

        expect(result1).toEqual(expect.stringMatching(/dapat membeli 2x mangga, 0x apel, 1x pisang dan sisa uang adalah 0/i))
        expect(result2).toEqual(expect.stringMatching(/dapat membeli 4x mangga, 0x apel, 0x pisang dan sisa uang adalah 0/i))
        expect(result3).toEqual(expect.stringMatching(/dapat membeli 1x mangga, 5x apel, 1x pisang dan sisa uang adalah 0 dan mendapatkan cashback/i))
        expect(result4).toEqual(expect.stringMatching(/dapat membeli 1x mangga, 10x apel, 0x pisang dan sisa uang adalah 0 dan mendapatkan cashback/i))
    })

    it('Able to handle cashback (15)', ()=>{
        const result1 = fruitShop(50000,1,10,3)
        const result2 = fruitShop(80000,1,10,3)
        expect(result1).toEqual(expect.stringMatching(/mendapatkan cashback/i))
        expect(result2).toEqual(expect.stringMatching(/mendapatkan cashback/i))
        
    })
})