const Restriction = require('hacktiv8-restriction');
const { getNumber, groupingByRoute } = require("../2.js")

describe("2.js - Route Number", () => {
    describe("getNumber", () => {
        it("should remove city code from number", () => {
            let num1 = getNumber("JP-01")
            let num2 = getNumber("JB-02")
            let num3 = getNumber("JU-03")
            let num4 = getNumber("JT-04")
            let num5 = getNumber("JS-05")
            expect(num1).toBe("01")
            expect(num2).toBe("02")
            expect(num3).toBe("03")
            expect(num4).toBe("04")
            expect(num5).toBe("05")
        })
    })

    describe("groupingByRoute", () => {
        it("should return correct answer", () => {
            let result1 = groupingByRoute([
                'JB-87', 'JS-07', 'JU-11', 'JS-54', 'JT-23',
                'JB-66', 'JT-98', 'JT-32', 'JU-98', 'JP-32'
            ])

            let result2 = groupingByRoute([
                'JP-07', 'JS-01', 'JU-03', 'JB-09', 'JT-11',
                'JT-02', 'JU-20', 'JS-14', 'JB-88', 'JP-22',
                'JB-87', 'JS-07', 'JU-11', 'JS-54', 'JT-23',
                'JB-66', 'JT-98', 'JT-32', 'JU-98', 'JP-32',
                'JP-33', 'JU-65', 'JB-33', 'JS-76', 'JP-09'
            ])

            expect(result1).toEqual({
                'Jakarta Pusat': [ '32' ],
                'Jakarta Barat': [ '87', '66' ],
                'Jakarta Utara': [ '11', '98' ],
                'Jakarta Timur': [ '23', '98', '32' ],    
                'Jakarta Selatan': [ '07', '54' ]
            })

            expect(result2).toEqual({
                'Jakarta Pusat': [ '07', '22', '32', '33', '09' ],
                'Jakarta Barat': [ '09', '88', '87', '66', '33' ],
                'Jakarta Utara': [ '03', '20', '11', '98', '65' ],
                'Jakarta Timur': [ '11', '02', '23', '98', '32' ],
                'Jakarta Selatan': [ '01', '14', '07', '54', '76' ]
            })
        })
    })

    it('should check restriction rules', async () => {
        const checkRestriction = new Restriction('../2.js')
        const restrictedUse = await checkRestriction.readCode()
        expect(restrictedUse).toBe(null)
    })
})
