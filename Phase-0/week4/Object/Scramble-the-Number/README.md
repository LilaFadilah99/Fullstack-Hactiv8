# `Scramble The Number`

## `Objective`

- mampu memcahkan masalah yang diberikan
- mampu membuat *array* dari *string* dan sebaliknya
- menggabungkan konsep *looping* / *iteration* dan *kondisional*
- mengerti konsep *modular function*
- mengerti *keterhubungan* antar function
- mengerti melempar atau memassukkan data hasil menjadi parameter function lainnya

## `Restriction`

Hanya boleh menggunakan built-in function untuk menambahkan atau mengurangi data dalam array, seperti .shift(), unShift(), push(), dan pop()

## `Notes`

- Jalankan `npm install` terlebih dahulu
- Pada skeleton terdapat folder `__tests__`, folder ini beserta file-file di dalamnya tidak boleh diubah sama sekali.
- untuk menjalankan test untuk memastikan solusi kamu sudah benar, jalankan command `npm test`

- Nama function haruslah `splitNum`, `reverseNum`, `changeNumber`, `formatOutput`, dan `scrambleNumber` dan **tidak boleh diganti** dengan nama function lainnya. Untuk detail fungsi akan mengacu kepada Direction yang disebutkan di bawah

## `Directions`

## `Scramble Number`

Diberikan sebuah function `scrambleNumber` yang menerima *dua* parameter; `numStr` bertipe data string berisi nomer hp dan `opt` berisi `'genap'` atau `'ganjil'`. 
Function ini berfungsi untuk melakukan pengacakan sebuah nomer dari input `numStr`. Berikut adalah proses atau cara kerja untuk function `scrambleNumber`:
1. pastikan panjang string (`numStr`) tidak kurang dari 11 character dan tidak lebih dari 12 character
2. pastikan input adalah *string*
3. pisahkan setiap 4 panjang nomor dengan *splitNum*.
4. reverse urutan masing-masing string dalam array yang berisi angka tersbut dengan output string menggunakan function *reverseStr*.
5. rubah angka yang di minta sesuai operator (ganjil atau genap) menjadi alfabet yang posisinya urutan alfabetnya sesuai dengan angka tersebut dengan function *changeNumber*

Berikut adalah kriteria function `scrambleNumber`:
- Harus memanfaatkan function `splitNum`, `reverseNum`, dan `changeNumber`, ketiga function tersebut akan dipanggil di dalam function `scrambleNumber` secara berurutan.
- Function akan mengembalikan string berdasarkan hasil dari proses nomer 5
- Function akan mengembalikan string `Invalid Number` jika paramter `numStr` yang diberikan panjangnya kurang dari **11 karakter** dan lebih dari **12 karakter**.

Perhatikan Contoh Berikut:
```js
function splitNum(str) {
  // Your code here
}
function reverseNum(input) {
  // Your code here
}
function changeNumber(str, opt) {
  // Your code here
}
function scrambleNumber(numStr, opt) {
  // Your code here
}
console.log(scrambleNumber('08111222333', 'ganjil'))
// result : 3#3#2#2#8#1

console.log(scrambleNumber('08111222333', 'genap')) 
// result : #3#1#2#0#1#

console.log(scrambleNumber('081234567809809', 'ganjil'))
// Invalid Number

console.log(scrambleNumber('082187683128', 'ganjil'))
// result : 3#2#8#6#0#2#
```
---

## `Split Number`

Diberikan function `splitNum` dengan satu parameter (`str`) digunakan untuk memisahakan/splitting input `str` menjadi 3 string dalam array.
Jika input panjangnya 12 character maka akan dipisah `[4 index, 4 index, 4 index]`, jika panjangnya 11 caracter maka dipisah menjadi `[4 index, 4 index, 3 index]`
```js
function splitNum(str) {
  // Your code here
}

console.log(splitNum('081234567890'))
// ['0812', '3456', '7890']

console.log(splitNum('08123456789'))
// ['0812', '3456', '789']
```
---

## `Reverse Number`

Diberikan function `reverseNum` dengan satu parameter (`input`) berupa *array* dimana akan membalik isi dari parameter `input` tersebut.
Di function ini akan menghasilkan output *string* dengan hasil reversing.

```js
function reverseNum(input) {
  // Your code here
}

console.log(reverseNum(['0812', '3456', '7890']))
// 789034560812

console.log(reverseNum(['0811', '2233', '4455']))
// 445522330811
```
---

## `Change Number`

Diberikan function `changeNumber` dengan dua parameter (`str` berupa *string* dan `opt` berupa *string*) dimana akan merubah semua karakter yang memiliki index ganjil atau genap sesuai dengan value `opt` yang diterima.
Jika `opt` nya ganjil, maka semua karakter berindex ganjil akan berubah menjadi #
Jika `opt` nya genap, maka semua karakter berindex genap akan berubah menjadi #
Di function ini akan menghasilkan output *string*.

```js
function changeNumber(str, opt) {
  // Your code here
}

console.log(changeNumber('33312220811', 'ganjil'))
// 3#3#2#2#8#1

console.log(changeNumber('33312220811', 'genap'))
// #3#1#2#0#1#

```
