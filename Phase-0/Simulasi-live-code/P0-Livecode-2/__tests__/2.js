const Restriction = require('hacktiv8-restriction');
const { getName, groupingByContinent } = require("../2.js")

describe("2.js - Nama Bayi", () => {
    describe("getName", () => {
        it("should remove continent code from name", () => {
            let name1 = getName("James-AU")
            let name2 = getName("Danang-AS")
            let name3 = getName("Gaca-AF")
            let name4 = getName("Oscar-AM")
            let name5 = getName("Eldric-ER")
            expect(name1).toBe("James")
            expect(name2).toBe("Danang")
            expect(name3).toBe("Gaca")
            expect(name4).toBe("Oscar")
            expect(name5).toBe("Eldric")
        })
    })

    describe("groupingByContinent", () => {
        it("should return correct answer", () => {
            let result1 = groupingByContinent([
                'Graham-AM', 'Harith-AF', 'Hector-ER', 'Inggrid-ER', 'Jasper-ER', 'Jeff-AM', 'John-AU', 'Kesha-AM',
                'Kiara-AS', 'Ling-AS', 'Lucas-AU', 'Mayumi-AS', 'Nadif-AF', 'Norman-AS', 'Oliver-ER',
                'Theodore-AF', 'Ulvric-AU', 'Venya-AS', 'Wenquian-AS', 'Xavier-AU', 'Yera-AF',
            ])

            let result2 = groupingByContinent([
                'Aaron-AM', 'Afya-AF', 'Alberto-AU', 'Alex-AU', 'Ansen-AM', 'Arley-AM', 'Axton-AM',
                'Dario-AF', 'Davu-AF', 'Deka-AF', 'Devan-AM', 'Emily-ER', 'Enzo-ER', 'Fremont-AF', 'Grace-ER',
                'Patch-AU', 'Raymond-AU', 'Sebastian-AU', 'Shino-AS', 'Siti-AS', 'Tama-AS',
                'Yoshiko-AS', 'Zarifa-AS', 'Zhacary-ER', 'Zhen-AS', 'Zoe-AU'
            ])

            expect(result1).toEqual({
                Asia: ['Kiara', 'Ling', 'Mayumi', 'Norman', 'Venya', 'Wenquian'],
                Afrika: ['Harith', 'Nadif', 'Theodore', 'Yera'],
                Amerika: ['Graham', 'Jeff', 'Kesha'],
                Eropa: ['Hector', 'Inggrid', 'Jasper', 'Oliver'],
                Australia: ['John', 'Lucas', 'Ulvric', 'Xavier']
            })

            expect(result2).toEqual({
                Asia: ['Shino', 'Siti', 'Tama', 'Yoshiko', 'Zarifa', 'Zhen'],
                Afrika: ['Afya', 'Dario', 'Davu', 'Deka', 'Fremont'],
                Amerika: ['Aaron', 'Ansen', 'Arley', 'Axton', 'Devan'],
                Eropa: ['Emily', 'Enzo', 'Grace', 'Zhacary'],
                Australia: ['Alberto', 'Alex', 'Patch', 'Raymond', 'Sebastian', 'Zoe']
            })
        })
    })

    it('should check restriction rules', async () => {
        const checkRestriction = new Restriction('../2.js')
        const restrictedUse = await checkRestriction.readCode()
        expect(restrictedUse).toBe(null)
    })
})
