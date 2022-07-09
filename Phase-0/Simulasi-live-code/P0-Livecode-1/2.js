let nama = "Patra"
let missions = "CCBBCB"
let point = 0
// Write your code here ...

if (!nama) {
    console.log('Developer tidak terdaftar');
} else {
    for (let i = 0; i < missions.length; i++) {
        if (missions[i] === 'A') {
            point += 4
        } else if (missions[i] === 'B') {
            point += 2
        } else if (missions[i] === 'C') {
            point += 1
        }
    }

    if (point < 8) {
        console.log(`Nama : ${nama}, Rank : Unclassified`);
    } else if (point < 16) {
        console.log(`Nama : ${nama}, Rank : Genin`);
    } else if (point < 32) {
        console.log(`Nama : ${nama}, Rank : Chunnin`);
    } else if (point > 31) {
        console.log(`Nama : ${nama}, Rank : Jounin`);
    }
}