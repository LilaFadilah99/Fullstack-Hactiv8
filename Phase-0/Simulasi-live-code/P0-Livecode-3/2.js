function setArrayOfGuest(guest) {
    // Write your code here
    let output = []

    for (let i = 0; i < guest.length; i++) {
        let people = guest[i]
        let value = {
            name: people[0],
            gender: people[1],
            familyOf: people[2],
            useMask: people[3]
        }
        console.log(value);
        output.push(value)
    }
    console.log(output);
    return output
}

function onlyAllowedMask(guestList) {
    // Write your code here
    let output = []
    for (const useMask of guestList) {
        let mask = useMask.useMask
        if (mask === true) {
            output.push(useMask)
        }
    }
    console.log(output);
    return output
}

function giveSouvenir(guest) {
    const souvenirs = {
            mug: 4,
            wine_opener: 3,
            lighter: 1,
            'key chain': 2
        }
        // Write your code here
    let output = []
    for (const souvenir of guest) {
        if (souvenirs.mug > 0) {
            souvenir['souvenirs'] = 'mug'
            souvenirs.mug--
        } else if (souvenirs.wine_opener > 0) {
            souvenir['souvenirs'] = 'wine_opener'
            souvenirs.wine_opener--
        } else if (souvenirs.lighter > 0) {
            souvenir['souvenirs'] = 'lighter'
            souvenirs.lighter--
        } else if (souvenirs['key chain'] > 0) {
            souvenir['souvenirs'] = 'key chain'
            souvenirs["key chain"]--
        } else {
            souvenir['souvenirs'] = 'ballpoint'
        }
        output.push(souvenir)
    }
    console.log(output);
    return output
}

function weddingGuest(guest) {
    // Write your code here
    let people = setArrayOfGuest(guest)
    let useMask = onlyAllowedMask(people)
    let souvenirs = giveSouvenir(useMask)

    return souvenirs
}


// const tamu1 = [
//     ['Kristan Sleit', 'Female', 'Groom', false],
//     ['Meredith Edsell', 'Female', 'Bride', true],
//     ['Roxy Poytress', 'Female', 'Bride', true],
//     ['Ebenezer Sandle', 'Male', 'Groom', true],
//     ['Daria Edmundson', 'Female', 'Groom', false],
//     ['Rosanna Deackes', 'Female', 'Groom', true],
//     ['Erskine Petronis', 'Male', 'Groom', true]
// ]

// console.log(weddingGuest(tamu1))
/*
[
    { name: 'Meredith Edsell',  gender: 'Female', familyOf: 'Bride', useMask: true, souvenirs: 'mug' },
    { name: 'Roxy Poytress',    gender: 'Female', familyOf: 'Bride', useMask: true, souvenirs: 'mug' },
    { name: 'Ebenezer Sandle',  gender: 'Male',   familyOf: 'Groom', useMask: true, souvenirs: 'mug' },
    { name: 'Rosanna Deackes',  gender: 'Female', familyOf: 'Groom', useMask: true, souvenirs: 'mug' },
    { name: 'Erskine Petronis', gender: 'Male',   familyOf: 'Groom', useMask: true, souvenirs: 'wine_opener'  }
]
 */

let tamu2 = [
    ['Freemon Hyne', 'Male', 'Groom', true],
    ['Constance Rennebach', 'Female', 'Groom', true],
    ['Eudora Somerscales', 'Female', 'Bride', true],
    ['Matthaeus Bownd', 'Male', 'Groom', true],
    ['Gabey Poxton', 'Female', 'Groom', true],
    ['Roxana Cradock', 'Female', 'Bride', true],
    ['Sibelle Gronaver', 'Female', 'Groom', true],
    ['Cherise Netti', 'Female', 'Bride', true],
    // ['Peggie Hassey', 'Female', 'Groom', false],
    ['Rice Yeardsley', 'Male', 'Bride', true],
    ['Rice Yeardsley Jr', 'Male', 'Bride', true],
    // ['Firdaus Ardy', 'Other', 'Groom', false],
    ['Matthaeus Hyne', 'Male', 'Groom', true],
    ['Robert Hyne', 'Male', 'Groom', true],
    ['Gilbert Poxton', 'Male', 'Groom', true],
]


console.log(weddingGuest(tamu2));
/* 
[
    { name: 'Freemon Hyne',        gender: 'Male',   familyOf: 'Groom', useMask: true, souvenirs: 'mug' },
    { name: 'Constance Rennebach', gender: 'Female', familyOf: 'Groom', useMask: true, souvenirs: 'mug' },
    { name: 'Eudora Somerscales',  gender: 'Female', familyOf: 'Bride', useMask: true, souvenirs: 'mug' },
    { name: 'Matthaeus Bownd',     gender: 'Male',   familyOf: 'Groom', useMask: true, souvenirs: 'mug' },
    { name: 'Gabey Poxton',        gender: 'Female', familyOf: 'Groom', useMask: true, souvenirs: 'wine_opener' },
    { name: 'Roxana Cradock',      gender: 'Female', familyOf: 'Bride', useMask: true, souvenirs: 'wine_opener' },
    { name: 'Sibelle Gronaver',    gender: 'Female', familyOf: 'Groom', useMask: true, souvenirs: 'wine_opener' },
    { name: 'Cherise Netti',       gender: 'Female', familyOf: 'Bride', useMask: true, souvenirs: 'lighter' },
    { name: 'Rice Yeardsley',      gender: 'Male',   familyOf: 'Bride', useMask: true, souvenirs: 'key chain' },
    { name: 'Rice Yeardsley Jr',   gender: 'Male',   familyOf: 'Bride', useMask: true, souvenirs: 'key chain' },
    { name: 'Matthaeus Hyne',      gender: 'Male',   familyOf: 'Groom', useMask: true, souvenirs: 'ballpoint' },
    { name: 'Robert Hyne',         gender: 'Male',   familyOf: 'Groom', useMask: true, souvenirs: 'ballpoint' },
    { name: 'Gilbert Poxton',      gender: 'Male',   familyOf: 'Groom', useMask: true, souvenirs: 'ballpoint' }
]*/


// let tamu3 = [
//     ['Lyda Brosh', 'Female', 'Groom', true],
//     ['Brice Espadate', 'Male', 'Bride', true],
//     ['Shandeigh Kybert', 'Female', 'Bride', true],
//     ['Van Shropshire', 'Female', 'Bride', true],
//     ['Brigg Bulleyn', 'Male', 'Bride', true],
//     ['Donall Blagburn', 'Male', 'Groom', false]
// ]

// console.log(weddingGuest(tamu3));
/*
[
    { name: 'Lyda Brosh', gender: 'Female', familyOf: 'Groom', useMask: true, souvenirs: 'mug' },
    { name: 'Brice Espadate', gender: 'Male', familyOf: 'Bride', useMask: true, souvenirs: 'mug' },
    { name: 'Shandeigh Kybert', gender: 'Female', familyOf: 'Bride', useMask: true, souvenirs: 'mug' },
    { name: 'Van Shropshire', gender: 'Female', familyOf: 'Bride', useMask: true, souvenirs: 'mug' },
    { name: 'Brigg Bulleyn', gender: 'Male', familyOf: 'Bride', useMask: true, souvenirs: 'wine_opener'  }
]
*/

module.exports = {
    setArrayOfGuest,
    onlyAllowedMask,
    giveSouvenir,
    weddingGuest
}