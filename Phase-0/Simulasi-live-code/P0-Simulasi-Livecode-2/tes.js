function missionPoint(mission) {
    // write your code here ...
    let output = 0
    for (let i = 0; i < mission.length; i++) {
        console.log(mission[i]);
        if (mission[i] === 'A') {
            output += 4
        } else if (mission[i] === 'B') {
            output += 2
        } else if (mission[i] === 'C') {
            output += 1
        }
    }
    return output
}
console.log(missionPoint('ABC')); // 7

function developerRank(score) {
    // write your code here ...
    let output = ''
    if (score < 8) {
        output = 'Unclassified'
    } else if (score < 16) {
        output = 'Gennin'
    } else if (score < 32) {
        output = 'Chunnin'
    } else if (score > 31) {
        output = 'Jounnin'
    }
    return output
}
console.log(developerRank(20))

function developerHistory(data) {
    // write your code here ...
    if (data === undefined) {
        return 'Invalid data'
    } else if (data.length === 0) {
        return 'Data not found!'
    }
    let output = {}
    for (let i = 0; i < data.length; i++) {
        console.log(data[i]);
        let name = data[i][0]
        let village = data[i][2]
        let point = data[i][1]
        let score = missionPoint(point)
        let rank = developerRank(score)
        output[name] = { village, score: `${score} point`, rank: `Rank ${rank}` }
    }

    return output
}

let developers = [
    ['Naruto', 'AAAAAAAAAA', 'Konoha'],
    ['Gaara', 'CCBBCB', 'Suna'],
    ['Mei Terumi', 'ABCABCABC', 'Kiri'],
    ['Darui', 'CCBBCCBB', 'Kumo'],
    ['Kurotsuchi', 'CBC', 'Iwa'],
];

console.log(developerHistory(developers))
console.log(developerHistory([]));
// Data not found!

console.log(developerHistory());
// Invalid data


/*
{
    Naruto: {
        village: 'Konoha',
        score: '40 point',
        rank: 'Rank Jounnin'
    },
    Gaara: {
        village: 'Suna',
        score: '9 point',
        rank: 'Rank Gennin'
    },
    'Mei Terumi': {
        village: 'Kiri',
        score: '21 point',
        rank: 'Rank Chunnin'
    },
    Darui: {
        village: 'Kumo',
        score: '12 point',
        rank: 'Rank Gennin'
    },
    Kurotsuchi: {
        village: 'Iwa',
        score: '4 point',
        rank: 'Rank Unclassified'
    }
}
*/