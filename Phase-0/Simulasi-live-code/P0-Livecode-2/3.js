function findDistance(asal, tujuan) {
    let map = ['A', 'B', 'C', 'D', 'E', 'F']
    let total = 0
    let awal = 0
    let akhir = 0
        // write your code here ...
    for (let i = 0; i < map.length; i++) {
        if (map[i] === asal) {
            awal = i
        }
        if (map[i] === tujuan) {
            akhir = i
        }
    }
    console.log(awal);
    return akhir - awal
}
console.log(findDistance('D', 'F'));

function cost(jarak, kendaraan) {
    // write your code here ...
    let biaya = 0
    if (kendaraan === 'car') {
        biaya = jarak * 5000
    } else if (kendaraan === 'bike') {
        biaya = jarak * 2000
    }
    return biaya
}

function customerHistory(data) {
    // write your code here ...
    let output = {}
    if (data === undefined) {
        return 'Invalid data'
    } else if (data.length === 0) {
        return 'Data not found!'
    }

    for (let i = 0; i < data.length; i++) {
        console.log(data[i]);
        let name = data[i][0]
        console.log(name);
        let asal = data[i][1][0]
        let tujuan = data[i][1][2]
        console.log(asal);
        console.log(tujuan);
        let jarak = findDistance(asal, tujuan)
        let ongkos = cost(jarak)

    }
    return output
}

let data = [
    ['Alvin', 'A-B', 'car'],
    ['Ridza', 'A-C', 'bike'],
    ['Ganang', 'D-E', 'bike'],
    ['Xavier', 'A-F', 'car'],
    ['Ganda', 'A-F', 'bike'],
    ['Rian', 'B-C', 'car']
]

console.log(customerHistory(data));
/*
{
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
}
*/

console.log(customerHistory([]));
// Data not found!

console.log(customerHistory());
// Invalid data

module.exports = {
    cost,
    findDistance,
    customerHistory
}