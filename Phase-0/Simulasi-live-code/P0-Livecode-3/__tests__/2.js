const { setArrayOfGuest, onlyAllowedMask, giveSouvenir, weddingGuest } = require('../2.js')

describe("Livecode 3 - soal 2", () => {
    describe("setArrayOfGuest", () => {
        it("should return the correct output", () => {
            const tamu1 = setArrayOfGuest([
                ['Kristan Sleit', 'Female', 'Groom', false],
                ['Meredith Edsell', 'Female', 'Bride', true],
                ['Roxy Poytress', 'Female', 'Bride', true],
                ['Ebenezer Sandle', 'Male', 'Groom', true],
                ['Daria Edmundson', 'Female', 'Groom', false],
                ['Rosanna Deackes', 'Female', 'Groom', true],
                ['Erskine Petronis', 'Male', 'Groom', true]
            ])

            let tamu2 = setArrayOfGuest([
                ['Freemon Hyne', 'Male', 'Groom', true],
                ['Constance Rennebach', 'Female', 'Groom', true],
                ['Eudora Somerscales', 'Female', 'Bride', true],
                ['Matthaeus Bownd', 'Male', 'Groom', true],
                ['Gabey Poxton', 'Female', 'Groom', true],
                ['Roxana Cradock', 'Female', 'Bride', true],
                ['Sibelle Gronaver', 'Female', 'Groom', true],
                ['Cherise Netti', 'Female', 'Bride', true],
                ['Peggie Hassey', 'Female', 'Groom', false],
                ['Rice Yeardsley', 'Male', 'Bride', true],
                ['Firdaus Ardy', 'Other', 'Groom', false]
            ])

            let tamu3 = setArrayOfGuest([
                ['Lyda Brosh', 'Female', 'Groom', true],
                ['Brice Espadate', 'Male', 'Bride', true],
                ['Shandeigh Kybert', 'Female', 'Bride', true],
                ['Van Shropshire', 'Female', 'Bride', true],
                ['Brigg Bulleyn', 'Male', 'Bride', true],
                ['Donall Blagburn', 'Male', 'Groom', false]
            ])

            expect(tamu1).toEqual([
                { name: 'Kristan Sleit', gender: 'Female', familyOf: 'Groom', useMask: false },
                { name: 'Meredith Edsell', gender: 'Female', familyOf: 'Bride', useMask: true },
                { name: 'Roxy Poytress', gender: 'Female', familyOf: 'Bride', useMask: true },
                { name: 'Ebenezer Sandle', gender: 'Male', familyOf: 'Groom', useMask: true },
                { name: 'Daria Edmundson', gender: 'Female', familyOf: 'Groom', useMask: false },
                { name: 'Rosanna Deackes', gender: 'Female', familyOf: 'Groom', useMask: true },
                { name: 'Erskine Petronis', gender: 'Male', familyOf: 'Groom', useMask: true }
            ])
            expect(tamu2).toEqual([
                { name: 'Freemon Hyne', gender: 'Male', familyOf: 'Groom', useMask: true },
                { name: 'Constance Rennebach', gender: 'Female', familyOf: 'Groom', useMask: true },
                { name: 'Eudora Somerscales', gender: 'Female', familyOf: 'Bride', useMask: true },
                { name: 'Matthaeus Bownd', gender: 'Male', familyOf: 'Groom', useMask: true },
                { name: 'Gabey Poxton', gender: 'Female', familyOf: 'Groom', useMask: true },
                { name: 'Roxana Cradock', gender: 'Female', familyOf: 'Bride', useMask: true },
                { name: 'Sibelle Gronaver', gender: 'Female', familyOf: 'Groom', useMask: true },
                { name: 'Cherise Netti', gender: 'Female', familyOf: 'Bride', useMask: true },
                { name: 'Peggie Hassey', gender: 'Female', familyOf: 'Groom', useMask: false },
                { name: 'Rice Yeardsley', gender: 'Male', familyOf: 'Bride', useMask: true },
                { name: 'Firdaus Ardy', gender: 'Other', familyOf: 'Groom', useMask: false }
            ])
            expect(tamu3).toEqual([
                { name: 'Lyda Brosh', gender: 'Female', familyOf: 'Groom', useMask: true },
                { name: 'Brice Espadate', gender: 'Male', familyOf: 'Bride', useMask: true },
                { name: 'Shandeigh Kybert', gender: 'Female', familyOf: 'Bride', useMask: true },
                { name: 'Van Shropshire', gender: 'Female', familyOf: 'Bride', useMask: true },
                { name: 'Brigg Bulleyn', gender: 'Male', familyOf: 'Bride', useMask: true },
                { name: 'Donall Blagburn', gender: 'Male', familyOf: 'Groom', useMask: false }
            ])
        })
    })

    describe("onlyAllowedMask", () => {
        it("should return the correct output", () => {
            const tamu1 = onlyAllowedMask([
                { name: 'Kristan Sleit', gender: 'Female', familyOf: 'Groom', useMask: false },
                { name: 'Meredith Edsell', gender: 'Female', familyOf: 'Bride', useMask: true },
                { name: 'Roxy Poytress', gender: 'Female', familyOf: 'Bride', useMask: true },
                { name: 'Ebenezer Sandle', gender: 'Male', familyOf: 'Groom', useMask: true },
                { name: 'Daria Edmundson', gender: 'Female', familyOf: 'Groom', useMask: false },
                { name: 'Rosanna Deackes', gender: 'Female', familyOf: 'Groom', useMask: true },
                { name: 'Erskine Petronis', gender: 'Male', familyOf: 'Groom', useMask: true }
            ])
            const tamu2 = onlyAllowedMask([
                { name: 'Freemon Hyne', gender: 'Male', familyOf: 'Groom', useMask: true },
                { name: 'Constance Rennebach', gender: 'Female', familyOf: 'Groom', useMask: true },
                { name: 'Eudora Somerscales', gender: 'Female', familyOf: 'Bride', useMask: true },
                { name: 'Matthaeus Bownd', gender: 'Male', familyOf: 'Groom', useMask: true },
                { name: 'Gabey Poxton', gender: 'Female', familyOf: 'Groom', useMask: true },
                { name: 'Roxana Cradock', gender: 'Female', familyOf: 'Bride', useMask: true },
                { name: 'Sibelle Gronaver', gender: 'Female', familyOf: 'Groom', useMask: true },
                { name: 'Cherise Netti', gender: 'Female', familyOf: 'Bride', useMask: true },
                { name: 'Peggie Hassey', gender: 'Female', familyOf: 'Groom', useMask: false },
                { name: 'Rice Yeardsley', gender: 'Male', familyOf: 'Bride', useMask: true },
                { name: 'Firdaus Ardy', gender: 'Other', familyOf: 'Groom', useMask: false }
            ])
            const tamu3 = onlyAllowedMask([
                { name: 'Lyda Brosh', gender: 'Female', familyOf: 'Groom', useMask: true },
                { name: 'Brice Espadate', gender: 'Male', familyOf: 'Bride', useMask: true },
                { name: 'Shandeigh Kybert', gender: 'Female', familyOf: 'Bride', useMask: true },
                { name: 'Van Shropshire', gender: 'Female', familyOf: 'Bride', useMask: true },
                { name: 'Brigg Bulleyn', gender: 'Male', familyOf: 'Bride', useMask: true },
                { name: 'Donall Blagburn', gender: 'Male', familyOf: 'Groom', useMask: false }
            ])

            expect(tamu1).toEqual([
                { name: 'Meredith Edsell', gender: 'Female', familyOf: 'Bride', useMask: true },
                { name: 'Roxy Poytress', gender: 'Female', familyOf: 'Bride', useMask: true },
                { name: 'Ebenezer Sandle', gender: 'Male', familyOf: 'Groom', useMask: true },
                { name: 'Rosanna Deackes', gender: 'Female', familyOf: 'Groom', useMask: true },
                { name: 'Erskine Petronis', gender: 'Male', familyOf: 'Groom', useMask: true }
            ])
            expect(tamu2).toEqual([
                { name: 'Freemon Hyne', gender: 'Male', familyOf: 'Groom', useMask: true },
                { name: 'Constance Rennebach', gender: 'Female', familyOf: 'Groom', useMask: true },
                { name: 'Eudora Somerscales', gender: 'Female', familyOf: 'Bride', useMask: true },
                { name: 'Matthaeus Bownd', gender: 'Male', familyOf: 'Groom', useMask: true },
                { name: 'Gabey Poxton', gender: 'Female', familyOf: 'Groom', useMask: true },
                { name: 'Roxana Cradock', gender: 'Female', familyOf: 'Bride', useMask: true },
                { name: 'Sibelle Gronaver', gender: 'Female', familyOf: 'Groom', useMask: true },
                { name: 'Cherise Netti', gender: 'Female', familyOf: 'Bride', useMask: true },
                { name: 'Rice Yeardsley', gender: 'Male', familyOf: 'Bride', useMask: true }
            ])
            expect(tamu3).toEqual([
                { name: 'Lyda Brosh', gender: 'Female', familyOf: 'Groom', useMask: true },
                { name: 'Brice Espadate', gender: 'Male', familyOf: 'Bride', useMask: true },
                { name: 'Shandeigh Kybert', gender: 'Female', familyOf: 'Bride', useMask: true },
                { name: 'Van Shropshire', gender: 'Female', familyOf: 'Bride', useMask: true },
                { name: 'Brigg Bulleyn', gender: 'Male', familyOf: 'Bride', useMask: true }
            ])
        })
    })

    describe("giveSouvenir", () => {
        it("should return the correct output", () => {
            const tamu1 = giveSouvenir([
                { name: 'Meredith Edsell', gender: 'Female', familyOf: 'Bride', useMask: true },
                { name: 'Roxy Poytress', gender: 'Female', familyOf: 'Bride', useMask: true },
                { name: 'Ebenezer Sandle', gender: 'Male', familyOf: 'Groom', useMask: true },
                { name: 'Rosanna Deackes', gender: 'Female', familyOf: 'Groom', useMask: true },
                { name: 'Erskine Petronis', gender: 'Male', familyOf: 'Groom', useMask: true }
            ])
            const tamu2 = giveSouvenir([
                { name: 'Freemon Hyne', gender: 'Male', familyOf: 'Groom', useMask: true },
                { name: 'Constance Rennebach', gender: 'Female', familyOf: 'Groom', useMask: true },
                { name: 'Eudora Somerscales', gender: 'Female', familyOf: 'Bride', useMask: true },
                { name: 'Matthaeus Bownd', gender: 'Male', familyOf: 'Groom', useMask: true },
                { name: 'Gabey Poxton', gender: 'Female', familyOf: 'Groom', useMask: true },
                { name: 'Roxana Cradock', gender: 'Female', familyOf: 'Bride', useMask: true },
                { name: 'Sibelle Gronaver', gender: 'Female', familyOf: 'Groom', useMask: true },
                { name: 'Cherise Netti', gender: 'Female', familyOf: 'Bride', useMask: true },
                { name: 'Rice Yeardsley', gender: 'Male', familyOf: 'Bride', useMask: true },
                { name: 'Rice Yeardsley Jr', gender: 'Male', familyOf: 'Bride', useMask: true },
                { name: 'Matthaeus Hyne', gender: 'Male', familyOf: 'Groom', useMask: true },
                { name: 'Robert Hyne', gender: 'Male', familyOf: 'Groom', useMask: true },
                { name: 'Gilbert Poxton', gender: 'Male', familyOf: 'Groom', useMask: true }
            ])
            const tamu3 = giveSouvenir([
                { name: 'Lyda Brosh', gender: 'Female', familyOf: 'Groom', useMask: true },
                { name: 'Brice Espadate', gender: 'Male', familyOf: 'Bride', useMask: true },
                { name: 'Shandeigh Kybert', gender: 'Female', familyOf: 'Bride', useMask: true },
                { name: 'Van Shropshire', gender: 'Female', familyOf: 'Bride', useMask: true },
                { name: 'Brigg Bulleyn', gender: 'Male', familyOf: 'Bride', useMask: true }
            ])

            expect(tamu1).toEqual([
                { name: 'Meredith Edsell', gender: 'Female', familyOf: 'Bride', useMask: true, souvenirs: 'mug' },
                { name: 'Roxy Poytress', gender: 'Female', familyOf: 'Bride', useMask: true, souvenirs: 'mug' },
                { name: 'Ebenezer Sandle', gender: 'Male', familyOf: 'Groom', useMask: true, souvenirs: 'mug' },
                { name: 'Rosanna Deackes', gender: 'Female', familyOf: 'Groom', useMask: true, souvenirs: 'mug' },
                { name: 'Erskine Petronis', gender: 'Male', familyOf: 'Groom', useMask: true, souvenirs: 'wine_opener' }
            ])
            expect(tamu2).toEqual([
                { name: 'Freemon Hyne', gender: 'Male', familyOf: 'Groom', useMask: true, souvenirs: 'mug' },
                { name: 'Constance Rennebach', gender: 'Female', familyOf: 'Groom', useMask: true, souvenirs: 'mug' },
                { name: 'Eudora Somerscales', gender: 'Female', familyOf: 'Bride', useMask: true, souvenirs: 'mug' },
                { name: 'Matthaeus Bownd', gender: 'Male', familyOf: 'Groom', useMask: true, souvenirs: 'mug' },
                { name: 'Gabey Poxton', gender: 'Female', familyOf: 'Groom', useMask: true, souvenirs: 'wine_opener' },
                { name: 'Roxana Cradock', gender: 'Female', familyOf: 'Bride', useMask: true, souvenirs: 'wine_opener' },
                { name: 'Sibelle Gronaver', gender: 'Female', familyOf: 'Groom', useMask: true, souvenirs: 'wine_opener' },
                { name: 'Cherise Netti', gender: 'Female', familyOf: 'Bride', useMask: true, souvenirs: 'lighter' },
                { name: 'Rice Yeardsley', gender: 'Male', familyOf: 'Bride', useMask: true, souvenirs: 'key chain' },
                { name: 'Rice Yeardsley Jr', gender: 'Male', familyOf: 'Bride', useMask: true, souvenirs: 'key chain' },
                { name: 'Matthaeus Hyne', gender: 'Male', familyOf: 'Groom', useMask: true, souvenirs: 'ballpoint' },
                { name: 'Robert Hyne', gender: 'Male', familyOf: 'Groom', useMask: true, souvenirs: 'ballpoint' },
                { name: 'Gilbert Poxton', gender: 'Male', familyOf: 'Groom', useMask: true, souvenirs: 'ballpoint' }
            ])
            expect(tamu3).toEqual([
                { name: 'Lyda Brosh', gender: 'Female', familyOf: 'Groom', useMask: true, souvenirs: 'mug' },
                { name: 'Brice Espadate', gender: 'Male', familyOf: 'Bride', useMask: true, souvenirs: 'mug' },
                { name: 'Shandeigh Kybert', gender: 'Female', familyOf: 'Bride', useMask: true, souvenirs: 'mug' },
                { name: 'Van Shropshire', gender: 'Female', familyOf: 'Bride', useMask: true, souvenirs: 'mug' },
                { name: 'Brigg Bulleyn', gender: 'Male', familyOf: 'Bride', useMask: true, souvenirs: 'wine_opener' }
            ])
        })
    })

    describe("weddingGuest", () => {
        it("should return the correct output", () => {
            const tamu1 = weddingGuest([
                ['Kristan Sleit', 'Female', 'Groom', false],
                ['Meredith Edsell', 'Female', 'Bride', true],
                ['Roxy Poytress', 'Female', 'Bride', true],
                ['Ebenezer Sandle', 'Male', 'Groom', true],
                ['Daria Edmundson', 'Female', 'Groom', false],
                ['Rosanna Deackes', 'Female', 'Groom', true],
                ['Erskine Petronis', 'Male', 'Groom', true]
            ])

            let tamu2 = weddingGuest([
                ['Freemon Hyne', 'Male', 'Groom', true],
                ['Constance Rennebach', 'Female', 'Groom', true],
                ['Eudora Somerscales', 'Female', 'Bride', true],
                ['Matthaeus Bownd', 'Male', 'Groom', true],
                ['Gabey Poxton', 'Female', 'Groom', true],
                ['Roxana Cradock', 'Female', 'Bride', true],
                ['Sibelle Gronaver', 'Female', 'Groom', true],
                ['Cherise Netti', 'Female', 'Bride', true],
                ['Peggie Hassey', 'Female', 'Groom', false],
                ['Rice Yeardsley', 'Male', 'Bride', true],
                ['Rice Yeardsley Jr', 'Male', 'Bride', true],
                ['Firdaus Ardy', 'Other', 'Groom', false],
                ['Matthaeus Hyne', 'Male', 'Groom', true],
                ['Robert Hyne', 'Male', 'Groom', true],
                ['Gilbert Poxton', 'Male', 'Groom', true],
            ])

            let tamu3 = weddingGuest([
                ['Lyda Brosh', 'Female', 'Groom', true],
                ['Brice Espadate', 'Male', 'Bride', true],
                ['Shandeigh Kybert', 'Female', 'Bride', true],
                ['Van Shropshire', 'Female', 'Bride', true],
                ['Brigg Bulleyn', 'Male', 'Bride', true],
                ['Donall Blagburn', 'Male', 'Groom', false]
            ])

            expect(tamu1).toEqual([
                { name: 'Meredith Edsell', gender: 'Female', familyOf: 'Bride', useMask: true, souvenirs: 'mug' },
                { name: 'Roxy Poytress', gender: 'Female', familyOf: 'Bride', useMask: true, souvenirs: 'mug' },
                { name: 'Ebenezer Sandle', gender: 'Male', familyOf: 'Groom', useMask: true, souvenirs: 'mug' },
                { name: 'Rosanna Deackes', gender: 'Female', familyOf: 'Groom', useMask: true, souvenirs: 'mug' },
                { name: 'Erskine Petronis', gender: 'Male', familyOf: 'Groom', useMask: true, souvenirs: 'wine_opener' }
            ])
            expect(tamu2).toEqual([
                { name: 'Freemon Hyne', gender: 'Male', familyOf: 'Groom', useMask: true, souvenirs: 'mug' },
                { name: 'Constance Rennebach', gender: 'Female', familyOf: 'Groom', useMask: true, souvenirs: 'mug' },
                { name: 'Eudora Somerscales', gender: 'Female', familyOf: 'Bride', useMask: true, souvenirs: 'mug' },
                { name: 'Matthaeus Bownd', gender: 'Male', familyOf: 'Groom', useMask: true, souvenirs: 'mug' },
                { name: 'Gabey Poxton', gender: 'Female', familyOf: 'Groom', useMask: true, souvenirs: 'wine_opener' },
                { name: 'Roxana Cradock', gender: 'Female', familyOf: 'Bride', useMask: true, souvenirs: 'wine_opener' },
                { name: 'Sibelle Gronaver', gender: 'Female', familyOf: 'Groom', useMask: true, souvenirs: 'wine_opener' },
                { name: 'Cherise Netti', gender: 'Female', familyOf: 'Bride', useMask: true, souvenirs: 'lighter' },
                { name: 'Rice Yeardsley', gender: 'Male', familyOf: 'Bride', useMask: true, souvenirs: 'key chain' },
                { name: 'Rice Yeardsley Jr', gender: 'Male', familyOf: 'Bride', useMask: true, souvenirs: 'key chain' },
                { name: 'Matthaeus Hyne', gender: 'Male', familyOf: 'Groom', useMask: true, souvenirs: 'ballpoint' },
                { name: 'Robert Hyne', gender: 'Male', familyOf: 'Groom', useMask: true, souvenirs: 'ballpoint' },
                { name: 'Gilbert Poxton', gender: 'Male', familyOf: 'Groom', useMask: true, souvenirs: 'ballpoint' }
            ])
            expect(tamu3).toEqual([
                { name: 'Lyda Brosh', gender: 'Female', familyOf: 'Groom', useMask: true, souvenirs: 'mug' },
                { name: 'Brice Espadate', gender: 'Male', familyOf: 'Bride', useMask: true, souvenirs: 'mug' },
                { name: 'Shandeigh Kybert', gender: 'Female', familyOf: 'Bride', useMask: true, souvenirs: 'mug' },
                { name: 'Van Shropshire', gender: 'Female', familyOf: 'Bride', useMask: true, souvenirs: 'mug' },
                { name: 'Brigg Bulleyn', gender: 'Male', familyOf: 'Bride', useMask: true, souvenirs: 'wine_opener' }
            ])
        })
    })
})