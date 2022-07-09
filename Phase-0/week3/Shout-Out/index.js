/*
 BUATLAH KODE FUNCTION DISINI
*/
function shoutOut() {
  return 'Halo Function!'
}
console.log(shoutOut()) // Menampilkan "Halo Function!" di console

/*
 BUATLAH KODE FUNCTION DISINI
*/
function calculateMultiply(perkalian1, perkalian2) {
  return perkalian1 * perkalian2
}

var num1 = 5;
var num2 = 6;

var hasilPerkalian = calculateMultiply(num1,num2);
console.log(hasilPerkalian); // Menampilkan angka 30

/*
 BUATLAH KODE FUNCTION DISINI
*/
function processSentence(n, a, ad, h) {
  return (
  // `Nama saya : ${n} umur saya : ${a} tahun, alamat saya di ${ad}, dan saya punya hobby yaitu ${h}!`
  `"Nama saya ${n}, umur saya ${a} tahun, alamat saya di ${ad}, dan saya punya hobby yaitu ${h}!"`
  )
}

var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence); // Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogjakarta, dan saya punya hobby yaitu gaming!"


/*
========================================================================================================
ABAIKAN BLOCK CODE INI
========================================================================================================
*/
module.exports = {
  shoutOut,
  calculateMultiply,
  processSentence
}
/*
========================================================================================================
ABAIKAN BLOCK CODE INI
========================================================================================================
*/
