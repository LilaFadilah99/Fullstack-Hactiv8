let line = ['Dila']


function ganjilGenap(plat ) {

  let ganjil = 0
  let genap = 0
  let output = ''
  if (plat === undefined) {
    return 'invalid data'
  }
  for (let i = 0; i < plat.length; i++) {
    if (plat[i] === ';') {
      output += plat[i] + ' '
      // temp = ''
    }else {
      output += plat[i]
    }
    
  }
  let temp = output.split(' ')
  // return temp
  for (let j = 0; j < temp.length; j++) {
    if (parseInt(temp[j]) %2 === 0) {
      genap ++
    } else if (parseInt(temp[j]) % 2 === 1)
      ganjil ++
  }
    if (plat === '') {
    return 'plat tidak ditemukan'
  } else if (ganjil === 0 && genap >= 1) {
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

function antrian(line, person) {
  // your code here
   line.push(person)
  return line
}
console.log(antrian(line, 'Reihan'));

function panggilAntrian(line) {
  // your code here
  line.shift()
  return line
}
console.log(panggilAntrian(line));

function tumpukan(line, title) {
  // your code here
  line.unshift(title)
  return line
}

console.log(tumpukan(line, 'Anugrah'));



module.exports = {
  antrian,
  panggilAntrian,
  tumpukan,
  ganjilGenap
}

// let kata = 'halo aku dila';
// let kalimat = kata.split(' ')
// console.log(kalimat);

// const str = 'The quick brown fox jumps over the lazy dog.';
// const strCopy = str.split();
// console.log(strCopy);

// let nama = 'ini aku dila';
// let pecah = nama.split(' ')
// console.log(pecah);