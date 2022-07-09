# `Route Number`

## `Objective`

- Mampu memecahkan masalah yang diberikan
- Bisa menggabungkan konsep *looping* / *iteration* dan *kondisional*
- Mampu mengolah type data Array
- Mengerti *keterhubungan* satu function dengan function lainnya

## `Direction`

Kamu akan diberikan list nomor angkutan kota di sekitar Jakarta.  <br>
Tugas kamu adalah mengelompokkan setiap nomor berdasarkan routenya dan menghapus kode kota pada setiap nama. <br><br>

Kalian akan diberikan 2 buah function, _groupingByRoute_ dan _getNumber_

1. _groupingByRoute_ merupakan sebuah function yang berfungsi untuk untuk mengelompokkan nomor berdasarkan routenya. <br>
function _groupingByRoute_ ini menerima 1 buah parameter berupa *array of string*,<br>setiap nomor yang diterima memiliki kode kota dibagian depannya,
berikut arti dari kode-kode tersebut :
- JP : Jakarta Pusat
- JB : Jakarta Barat
- JU : Jakarta Utara
- JT : Jakarta Timur
- JS : Jakarta Selatan

```js
function groupingByRoute(numbers) {
    // Write your code here
}

const numbers = [
  'JB-87', 'JS-07', 'JU-11', 'JS-54', 'JT-23',
  'JB-66', 'JT-98', 'JT-32', 'JU-98', 'JP-32'
]
let groupNames = groupingByRoute(numbers)
console.log(groupNames)
/* 
Output :
{
  'Jakarta Pusat': [ '32' ],
  'Jakarta Barat': [ '87', '66' ],
  'Jakarta Utara': [ '11', '98' ],
  'Jakarta Timur': [ '23', '98', '32' ],    
  'Jakarta Selatan': [ '07', '54' ]
}
*/
```


2. _getNumber_ merupakan function yang fungsi untuk menghapus kode - kode yang menempel pada nomor angkutan
```js
function getNumber(num) {
    // Write your code here
}
console.log(getNumber("JS-07")); // '07'
```