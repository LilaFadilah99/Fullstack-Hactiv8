let line = ['Dila']

function antrian(temp, person) {
    temp.push(person)
    return temp
}
console.log(antrian(line, 'Snow')) // ['Rhaegar', 'Snow']

function panggilAntrian(line) {
    line.shift()
    return line
}

console.log(panggilAntrian(line)) // ['Snow']


function tumpukan(line, title) {
    line.unshift(title)
    return line
}

console.log(tumpukan(line, 'Jon')) // ['Jon', 'Snow']

function ganjilGenap(plat) {
    if (plat === '') {
        return 'plat tidak ditemukan'
    } else if (plat === undefined) {
        return 'invalid data'
    }
    let ganjil = 0
    let genap = 0
    let output = ''
    for (let i = 0; i < plat.length; i++) {
        if (plat[i] === ';') {
            output += plat[i] + ' '
        } else {
            output += plat[i]
        }

    }
    let temp = output.split(' ')
    for (let j = 0; j < temp.length; j++) {
        if (parseInt(temp[j]) % 2 === 0) {
            genap++
        } else if (parseInt(temp[j]) % 2 === 1) {
            ganjil++
        }

    }
    if (ganjil === 0 && genap >= 1) {
        return `plat genap sebanyak ${genap} dan plat ganjil tidak ditemukan`
    } else if (genap === 0 && ganjil >= 1) {
        return `plat ganjil sebanyak ${ganjil} dan plat genap tidak ditemukan`
    } else {
        return `plat genap sebanyak ${genap} dan plat ganjil sebanyak ${ganjil}`
    }
}

console.log(ganjilGenap('2341;3429;864;1309;1276')) //plat genap sebanyak 2 dan plat ganjil sebanyak 3
console.log(ganjilGenap('2347;3429;1305')) //plat ganjil sebanyak 3 dan plat genap tidak ditemukan
console.log(ganjilGenap('864;1308;1276;1432')) //plat genap sebanyak 4 dan plat ganjil tidak ditemukan
console.log(ganjilGenap('')) //plat tidak ditemukan
console.log(ganjilGenap()) //invalid data