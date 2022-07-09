function getPassengers(psg) {
    // your code here
    let output = []
    let temp = ''
    for (let i = 0; i < psg.length; i++) {
        // console.log(psg[i]);
        let passengers = psg[i]
        temp = ''
        let sementara = []
        for (let j = 0; j < passengers.length; j++) {
            // console.log(passengers[j]);
            if (passengers[j] === ',') {
                sementara.push(temp)
                temp = ''
                    // output = []
            } else {
                temp += passengers[j]
            }
        }
        sementara.push(temp)
            // console.log(sementara);
        output.push(sementara)
    }

    let result = []
    for (let i = 0; i < output.length; i++) {
        //  console.log(output[i]);
        let passengersOutput = output[i]
        let value = {
            name: passengersOutput[0],
            status: passengersOutput[1],
            up: passengersOutput[2],
            land: passengersOutput[3],
            member: passengersOutput[4]
        }
        console.log(value);
        result.push(value)
    }
    // console.log(result);
    // console.log(output);
    return result
}

function getDistance(psg) {
    // jangan rubah kode dibawah
    const city = "ABCDEFGHIJKLMNOPQRSTUVWX"
        // console.log(psg);
        // jangan rubah kode diatas
        // your code here
    let titikAwal = 0
    let titikAkhir = 0
    let distance = 0
    let result = []
    for (const key in psg) {
        let jarak = psg[key]
            // console.log(jarak);
        let up = jarak.up
        let land = jarak.land
        let total = 0
        for (let j = 0; j < city.length; j++) {
            let totalDistance = city[j]
            if (totalDistance === up) {
                titikAwal = j
            }
            if (totalDistance === land) {
                titikAkhir = j
            }
            total = titikAkhir - titikAwal
        }
        jarak['distance'] = total
        result.push(jarak)
    }
    // console.log(result);
    // console.log(total);
    return result
}

function paymentInfo(psg) {
    // jangan rubah kode dibawah
    const member = {
            Lite: 3800,
            Silver: 3500,
            Gold: 3200
        }
        // jangan rubah kode diatas
        // your code here
    let result = []
    let output = {}
    for (const key in psg) {
        let info = psg[key]
        let jarak = info.distance
        let memberStatus = info.member
        let land = info.land
            // console.log(land);

        for (const key in member) {
            let biaya = member[key]
            let keys = key
            if (memberStatus === keys) {
                info['pay'] = jarak * biaya
            }
        }
        // console.log(info);
        result.push(info)
    }
    // console.log(result);
    return result
}

function getDropped(psg) {
    // your code here
    let result = {}
    let arr = []
    for (const key in psg) {
        let info = psg[key]
        let land = info.land
            // console.log(land);
            //  arr.push(info)
            // result[land] = []
            // result[land].push(info)
        if (result[land] === undefined) {
            result[land] = []
        }
        result[land].push(info)
    }
    // console.log(arr);
    // console.log(result);
    return result
}

function transportation(psgInput) {
    let passengers = getPassengers(psgInput)
    let distance = getDistance(passengers)
    let payment = paymentInfo(distance)
    let result = getDropped(payment)
    return result
}

let input = [
    "Aby,offBoard,E,G,Gold",
    "Bela,offBoard,E,F,Silver",
    "Kany,offBoard,E,S,Silver",
    "Sunny,offBoard,F,G,Gold",
    "Shew,offBoard,F,H,Silver",
    "Opp,offBoard,F,U,Silver"
]

// let input2 = [
//     "Aby,offBoard,H,L,Gold",
//     "Bela,offBoard,H,M,Silver",
//     "Kany,offBoard,H,U,Silver",
//     "Sunny,offBoard,J,K,Gold",
//     "Shew,offBoard,J,X,Silver",
//     "Opp,offBoard,J,U,Silver"
// ]

console.log(transportation(input))


/**
{
  G: [
    {
      name: 'Aby',
      status: 'offBoard',
      up: 'E',
      land: 'G',
      member: 'Gold',
      distance: 2,
      pay: 6400
    },
    {
      name: 'Sunny',
      status: 'offBoard',
      up: 'F',
      land: 'G',
      member: 'Gold',
      distance: 1,
      pay: 3200
    }
  ],
  F: [
    {
      name: 'Bela',
      status: 'offBoard',
      up: 'E',
      land: 'F',
      member: 'Silver',
      distance: 1,
      pay: 3500
    }
  ],
  S: [
    {
      name: 'Kany',
      status: 'offBoard',
      up: 'E',
      land: 'S',
      member: 'Silver',
      distance: 14,
      pay: 49000
    }
  ],
  H: [
    {
      name: 'Shew',
      status: 'offBoard',
      up: 'F',
      land: 'H',
      member: 'Silver',
      distance: 2,
      pay: 7000
    }
  ],
  U: [
    {
      name: 'Opp',
      status: 'offBoard',
      up: 'F',
      land: 'U',
      member: 'Silver',
      distance: 15,
      pay: 52500
    }
  ]
}
 */

// console.log(transportation(input2))
/**
{
  L: [
    {
      name: 'Aby',
      status: 'offBoard',
      up: 'H',
      land: 'L',
      member: 'Gold',
      distance: 4,
      pay: 12800
    }
  ],
  M: [
    {
      name: 'Bela',
      status: 'offBoard',
      up: 'H',
      land: 'M',
      member: 'Silver',
      distance: 5,
      pay: 17500
    }
  ],
  U: [
    {
      name: 'Kany',
      status: 'offBoard',
      up: 'H',
      land: 'U',
      member: 'Silver',
      distance: 13,
      pay: 45500
    },
    {
      name: 'Opp',
      status: 'offBoard',
      up: 'J',
      land: 'U',
      member: 'Silver',
      distance: 11,
      pay: 38500
    }
  ],
  K: [
    {
      name: 'Sunny',
      status: 'offBoard',
      up: 'J',
      land: 'K',
      member: 'Gold',
      distance: 1,
      pay: 3200
    }
  ],
  X: [
    {
      name: 'Shew',
      status: 'offBoard',
      up: 'J',
      land: 'X',
      member: 'Silver',
      distance: 14,
      pay: 49000
    }
  ]
}
 */


module.exports = {
    getPassengers,
    getDistance,
    paymentInfo,
    getDropped,
    transportation
}