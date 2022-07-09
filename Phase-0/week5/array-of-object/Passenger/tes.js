function getPassengers(psg) {
    // your code here
    let output = []

    for (let i = 0; i < psg.length; i++) {
        let passengers = psg[i]
            //   console.log(passengers);
        let temp = ''
        let arr = []
        for (let j = 0; j < passengers.length; j++) {
            console.log(passengers[j]);
            if (passengers[j] === ',') {
                arr.push(temp)
                temp = ''
            } else {
                temp += passengers[j]
            }
        }
        arr.push(temp)
        output.push(arr)
    }
    let result = []
    for (let k = 0; k < output.length; k++) {
        let passOutput = output[k]
        let value = {
            name: passOutput[0],
            status: passOutput[1],
            up: passOutput[2],
            land: passOutput[3],
            member: passOutput[4]
        }
        console.log(value);
        result.push(value)
    }
    console.log(result);
    return result
}

function getDistance(psg) {
    // jangan rubah kode dibawah
    let result = []
    const city = "ABCDEFGHIJKLMNOPQRSTUVWX"
    for (let i = 0; i < psg.length; i++) {
        let psgDistance = psg[i]
        let passUp = psgDistance.up
            // console.log(passUp);
        let passLand = psgDistance.land
            // console.log(passLand);
        let totalDistance = 0
        let awal = 0
        let akhir = 0
        for (let j = 0; j < city.length; j++) {
            let alp = city[j]

            if (passUp === alp) {
                awal = j
            }
            if (passLand === alp) {
                akhir = j
            }
            totalDistance = akhir - awal
            console.log(totalDistance);
            psgDistance['distance'] = totalDistance
        }
        result.push(psgDistance)
    }
    console.log(result);
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
    for (const k in psg) {
        let payment = psg[k]
        let distance = payment.distance
        let memberType = payment.member

        for (const key in member) {
            let memberPay = member[key]
            if (memberType === key) {
                payment['pay'] = distance * memberPay
            }
        }
        result.push(payment)
    }
    console.log(result);
    return result
}

function getDropped(psg) {
    // your code here
    let result = {}
    for (const key in psg) {
        let droppedInfo = psg[key]
        let land = droppedInfo.land
        if (result[land] === undefined) {
            result[land] = []
        }
        result[land].push(droppedInfo)
    }
    console.log(result);
    return result
}

function transportation(psgInput) {
    let passengers = getPassengers(psgInput)
    let distance = getDistance(passengers)
    let payment = paymentInfo(distance)
    let dropped = getDropped(payment)

    return dropped

}

let input = [
    "Aby,offBoard,E,G,Gold",
    "Bela,offBoard,E,F,Silver",
    "Kany,offBoard,E,S,Silver",
    "Sunny,offBoard,F,G,Gold",
    "Shew,offBoard,F,H,Silver",
    "Opp,offBoard,F,U,Silver"
]

console.log(transportation(input))