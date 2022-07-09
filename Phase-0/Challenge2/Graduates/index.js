/* Algoritma

- deklarasikan variable nama dengan tipe data string kosong
- deklarasikan variable nilai dengan angka 
- deklarasikan variable absen dengan angka
- jika nilai lebih dari 70 dan absen kurang dari 5 maka tampilkan keterang lulus
- jika nilai dan absen tidak sesuai dengan nilai diatas maka tampilkan keterangan tidak lulus
*/

/* Pseudocode
STORE nama WITH STRING
STORE nilai WITH ANY NUMBER
STORE absen WITH ANY NUMBER

IF nilai LESS THAN 70 AND absen LESS THAN 5
    DISPLAY name ADD "lulus"

ELSE 
    DISPLAY nama ADD "tidak lulus"

END IF

*/


var nama = "Dila"
var nilai = 90
var absen = 5

// your code here


if (nilai >= 70 && absen < 5) {
    console.log(`${nama}  lulus`);
} else {
    console.log(`${nama} tidak lulus`);
}

// if (nilai < 70 || absen >= 5) {
//     console.log(`${nama} tidak lulus`);
// } else {
//     console.log(`${nama}  lulus`);
// }

