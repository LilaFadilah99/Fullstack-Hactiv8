function passengersData(singlePass) {

    let finalPass = ''
    for (const key in singlePass) {
        console.log(singlePass[key]);
        let info = singlePass[key]
        let number = key
        let name = info.name
        let status = info.status
        let up = info.up
        let land = info.land
        let member = info.member
        let distance = info.distance
        let pay = info.pay
        console.log(pay);

        // let passTable = null;

        if (typeof document !== 'undefined') {
            // will run in client's browser only
            // body = document.getElementsByTagName("body")[0];
            let passTable = document.getElementById('dashboard')
            let passTableBodyRow = document.createElement('tr')
            passTableBodyRow.className = 'passTableBodyRow'

            let passNumber = document.createElement('td')
            passNumber.innerHTML = number
            console.log(passNumber);

            let passName = document.createElement('td')
            passName.innerHTML = name

            let passStatus = document.createElement('td')
            passStatus.innerHTML = status

            let passUp = document.createElement('td')
            passUp.innerHTML = up

            let passDown = document.createElement('td')
            passDown.innerHTML = land

            let passMember = document.createElement('td')
            passMember.innerHTML = member

            let passDistance = document.createElement('td')
            passDistance.innerHTML = distance

            let passPay = document.createElement('td')
            passPay.innerHTML = pay

            passTableBodyRow.append(passNumber, passName, passStatus, passUp, passDown, passMember, passDistance, passPay)
            passTable.append(passTableBodyRow)
            finalPass = passTable
            console.log(finalPass);
        }

    }
    return finalPass
}


let input = [{
        name: 'Aby',
        status: 'offBoard',
        up: 'E',
        land: 'G',
        member: 'Gold',
        distance: 2,
        pay: 6400
    },
    {
        name: 'Bela',
        status: 'offBoard',
        up: 'E',
        land: 'F',
        member: 'Silver',
        distance: 1,
        pay: 3500
    },
    {
        name: 'Kany',
        status: 'offBoard',
        up: 'E',
        land: 'S',
        member: 'Silver',
        distance: 14,
        pay: 49000
    },
    {
        name: 'Sunny',
        status: 'offBoard',
        up: 'F',
        land: 'G',
        member: 'Gold',
        distance: 1,
        pay: 3200
    },
    {
        name: 'Shew',
        status: 'offBoard',
        up: 'F',
        land: 'H',
        member: 'Silver',
        distance: 2,
        pay: 7000
    },
    {
        name: 'Opp',
        status: 'offBoard',
        up: 'F',
        land: 'U',
        member: 'Silver',
        distance: 19,
        pay: 66500
    }
]
console.log(passengersData(input))