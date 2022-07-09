/* Algoritma
- Deklarasikan variable nama dengan tipe data string
- Deklarasikan variable nilai dengan angka
- jika nilai kurang dari 0 atau lebih dari 100 maka tampilkan invalid
- jika nilai adalah 80 sampai dengan 100 maka tampilkan nama siswa dan score A
- jika nilai adalah 65 sampai dengan 79 maka tampilkan nama siswa dan score B
- jika nilai adalah 50 sampai dengan 64 maka tampilkan nama siswa dan score C
- jika nilai adalah 35 sampai dengan 49 maka tampilkan nama siswa dan score D
- selain nilai dan absen yang disebutkan diatas tampilkan nama siswa dan sore E

*/

/* Pseudocode
STORE nama WITH STRING
STORE nilai WITH ANY NUMBER

IF nilai is LESS THAN 0 OR nilai IS MORE THAN 100
    DISPLAY "nilai invalid"
ELSE IF nilai LESS THAN EQUAL TO 80 OR nilai EQUAL TO 100 
    DISPLAY "nama CONCAT WITH nama Score: A"
ELSE IF nilai LESS THAN EQUAL TO 65 OR nilai EQUAL TO 79
    DISPLAY "nama CONCAT WITH nama Score: B"
ELSE IF nilai LESS THAN EQUAL TO 50 OR nilai EQUAL TO 64
    DISPLAY "nama CONCAT WITH nama Score: C"
ELSE IF nilai LESS THAN EQUAL TO 35 OR nilai EQUAL TO 49 
    DISPLAY "nama CONCAT WITH nama Score: D"
ELSE 
    DISPLAY "nama CONCAT WITH nama Score: E"
*/


var nama = "Dila"
var nilai = 0
// // Insert your code here

// if (nilai < 0 || nilai >100){
//     console.log(`Nilai Invalid`);
// }else if (nilai >= 80 || nilai === 100) {
//     console.log(`nama: ${nama}; score: A`);
// } else if (nilai >= 65 || nilai === 79){
//     console.log(`nama: ${nama}; score: B`);
// } else if (nilai >= 50 || nilai === 64){
//     console.log(`nama: ${nama}; score: C`);
// } else if (nilai >= 35 || nilai === 49){
//     console.log(`nama: ${nama}; score: D`);
// } else {
//     console.log(`nama: ${nama}; score: E`);
// } 


/*
STORE nama WITH ANY STRING
STORE nilai WITH ANY NUMBER

IF nilai LESS THAN 0 OR nilai MORE THAN 100
DISPLAY 'Nilai Invalid'

ELSE IF nilai MORE THAN EQUAL TO 80 OR nilai EQUAL TO 100
DISPLAY nama: CONCAT WITH nama; score: A
ELSE IF nilai MORE THAN EQUAL TO 65 OR nilai EQUAL TO 79
DISPLAY nama: CONCAT WITH nama; score: B
ELSE IF nilai MORE THAN EQUAL TO 50 OR nilai EQUAL TO 64
DISPLAY nama: CONCAT WITH nama; score: C
ELSE IF nilai MORE THAN EQUAL TO 35 OR nilai EQUAL TO 49
DISPLAY nama: CONCAT WITH nama; score: D
ELSE
DISPLAY
DISPLAY nama: CONCAT WITH nama; score: E

*/

if (nilai < 0 || nilai > 100) {
    console.log('Nilai Invalid');
} else if (nilai >= 80 ) {
    console.log(`nama: ${nama}; score: A`);
} else if (nilai >=65 ) {
    console.log(`nama: ${nama}; score: B`);
} else if (nilai >= 50 ) {
    console.log(`nama: ${nama}; score: C`);
} else if (nilai >= 35 ) {
    console.log(`nama: ${nama}; score: D`);
} else  {
    console.log(`nama: ${nama}; score: E`);
}


