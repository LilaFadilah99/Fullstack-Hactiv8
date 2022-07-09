const Restriction = require('hacktiv8-restriction');
const fileName = '../3.js';
const {
    cost,
    findDistance,
    customerHistory
} = require(fileName);

describe('3.js -- Advance Ojek Online', () => {
    test('should return correct answer if data is undefinded', () => {
        expect(customerHistory()).toEqual("Invalid data")
    })

    test('should return correct answer if data is empty array', () => {
        expect(customerHistory([])).toEqual("Data not found!")
    })

    test('should return correct answer if cost parameter exist', () => {
        expect(cost(1, 'car')).toEqual(5000)
        expect(cost(2, 'bike')).toEqual(4000)
        expect(cost(1, 'bike')).toEqual(2000)
        expect(cost(5, 'car')).toEqual(25000)
        expect(cost(5, 'bike')).toEqual(10000)
        expect(cost(1, 'car')).toEqual(5000)
    })

    test('should return correct answer if findDistance parameter exist', () => {
        expect(findDistance('A', 'B')).toEqual(1)
        expect(findDistance('A', 'C')).toEqual(2)
        expect(findDistance('D', 'E')).toEqual(1)
        expect(findDistance('A', 'F')).toEqual(5)
        expect(findDistance('A', 'F')).toEqual(5)
        expect(findDistance('B', 'C')).toEqual(1)
    })

    test('should return correct answer if customerHistory data exist', () => {
        expect(customerHistory([
            ['Alvin', 'A-B', 'car'],
            ['Ridza', 'A-C', 'bike'],
            ['Ganang', 'D-E', 'bike'],
            ['Xavier', 'A-F', 'car'],
            ['Ganda', 'A-F', 'bike'],
            ['Rian', 'B-C', 'car']
        ])).toEqual({
            Alvin: {
                kendaraan: 'car',
                asal: 'Kota A',
                tujuan: 'Kota B',
                jarak: '1 Kota',
                ongkos: 'Rp.5000'
            },
            Ridza: {
                kendaraan: 'bike',
                asal: 'Kota A',
                tujuan: 'Kota C',
                jarak: '2 Kota',
                ongkos: 'Rp.4000'
            },
            Ganang: {
                kendaraan: 'bike',
                asal: 'Kota D',
                tujuan: 'Kota E',
                jarak: '1 Kota',
                ongkos: 'Rp.2000'
            },
            Xavier: {
                kendaraan: 'car',
                asal: 'Kota A',
                tujuan: 'Kota F',
                jarak: '5 Kota',
                ongkos: 'Rp.25000'
            },
            Ganda: {
                kendaraan: 'bike',
                asal: 'Kota A',
                tujuan: 'Kota F',
                jarak: '5 Kota',
                ongkos: 'Rp.10000'
            },
            Rian: {
                kendaraan: 'car',
                asal: 'Kota B',
                tujuan: 'Kota C',
                jarak: '1 Kota',
                ongkos: 'Rp.5000'
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