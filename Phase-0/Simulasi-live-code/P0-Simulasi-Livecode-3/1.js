function setsKidsToObject(kids) {
    // write your code here ...
    let output = []
    for (let i = 0; i < kids.length; i++) {
        console.log(kids[i]);
        let kidsData = kids[i]
        let value = {
            name: kidsData[0],
            age: kidsData[1]
        }
        output.push(value)
    }
    console.log(output);
    return output
}

function checkAges(kids) {
    // write your code here ...
    let output = []
    for (const key in kids) {
        let kidsInfo = kids[key]
        let age = kidsInfo.age

        if (age < 17) {
            output.push(kidsInfo)
        }

    }
    console.log(output);
    return output
}

function trickOrTreat(kids) {
    let gifts = {
            cake: 1,
            chocolate: 2,
            cookie: 3,
        }
        // write your code here ...
    let output = []
    for (const key in kids) {
        let kidsData = kids[key]
        for (const key in gifts) {
            console.log(gifts[key]);
            let totalGift = gifts[key]
            let giftName = key
        }

        if (gifts.cake >= 1) {
            gifts.cake--
                kidsData['gift'] = 'cake'
        } else if (gifts.chocolate >= 1) {
            gifts.chocolate--
                kidsData['gift'] = 'chocolate'
        } else if (gifts.cookie >= 1) {
            gifts.cookie--
                kidsData['gift'] = 'cookie'
        } else {
            kidsData['gift'] = 'candy'
        }
        console.log(kidsData);
        output.push(kidsData)
    }
    console.log(output);
    return output
}

function halloween(kids) {
    // write your code here ...
    if (kids.length === 0) {
        return 'Tidak ada anak kecil disekitar tempat tinggal kamu'
    }

    let kidsObj = setsKidsToObject(kids)
    let kidsSge = checkAges(kidsObj)
    let gift = trickOrTreat(kidsSge)
    return gift
}

// [name, age]
let kids = [
    ["Andy", 10],
    ["Grace", 13],
    ["Melvin", 17],
    ["Tiffany", 15],
    ["Merry", 16],
    ["Lucas", 12],
    ["Diego", 8],
    ["Marcelina", 6],
    ["Dicky", 20],
    ["Joko", 11]
]

console.log(halloween(kids));
/*
[
    { name: 'Andy', age: 10, gift: 'cake' },
    { name: 'Grace', age: 13, gift: 'chocolate' },
    { name: 'Tiffany', age: 15, gift: 'chocolate' },
    { name: 'Merry', age: 16, gift: 'cookie' },
    { name: 'Lucas', age: 12, gift: 'cookie' },
    { name: 'Diego', age: 8, gift: 'cookie' },
    { name: 'Marcelina', age: 6, gift: 'candy' },
    { name: 'Joko', age: 11, gift: 'candy' }
]
*/

console.log(halloween([])); // Tidak ada anak kecil disekitar tempat tinggal kamu