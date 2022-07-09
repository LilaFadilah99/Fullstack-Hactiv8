# All Around You

### NOTES

- Jalankan command `npm install` terlebih dahulu di terminal pada folder project ini.
- Pada skeleton terdapat folder `__tests__` dan `testHelpers`, folder-folder ini beserta file-file di dalamnya tidak boleh diubah sama sekali.
- Cara menjalankan test untuk memastikan solusi kamu sudah benar, jalankan command `npm test`

## Restriction
1. Tidak boleh menggunakan built-in function apapun.

## Objective
- Mampu menyelesaikan masalah yang diberikan.
- Mengerti konsep dan cara penggunaan `loop`, `nested loop`, `conditional`, `array` dan `nested array`.
- Mampu menggunakan `nested loop` untuk mengakses `nested array`.

## Directions
Dalam soal ini kamu diminta untuk membuat penyelesaian masalah untuk mengakses angka dari posisi / koordinat yang kamu terima dan angka disekitaranya, lalu dijumlahkan.

Pada function `allAroundYou` ini kamu akan menerima 3 parameter, yaitu :
1. `board` yang berupa nested array, dimana setiap inner array berisi kumpulan angka random dari angka 0 - 9.
2. `posX` yang berupa number, dimana parameter ini berfungsi menjadi koordinat x / horizontal pada board.
3. `posY` yang berupa number, dimana parameter ini berfungsi menjadi koordinat y / vertikal pada board.

## NOTE : 
1. `posX` dan `posY` ini akan dikombinasikan menjadi titik tengah lokasi pengecekan pada board.
2. Radius pengecekan dari titik koordinat adalah 1 index disemua sisi titik tengah.
3. Perhatikan keterangan antara `posX` dan `posY`.
4. Simbol `<>` ini adalah titik tengah area pengecekan yang didapat dari posX dan posY.
5. Simbol `()` ini adalah area disekitar titik tengah.

## Example
```js
let board = [
    [1, 1, 1, 1, 1],
    [1, 2, 2, 2, 1],
    [1, 2, 3, 2, 1],
    [1, 2, 2, 2, 1],
    [1, 1, 1, 1, 1],
];
```

### Test Case 1
```js
console.log(sumAround(board, 0, 0)); 
/*
let board = [
    [<1>, (1), 1, 1, 1],
    [(1), (2), 2, 2, 1],
    [  1,   2, 3, 2, 1],
    [  1,   2, 2, 2, 1],
    [  1,   1, 1, 1, 1],
];

maka proses yang terjadi adalah : 1 + 1 + 1 + 2 = 5
output : 5
*/
```

### Test Case 2
```js
console.log(sumAround(board, 2, 2));
/*
let board = [
    [1,   1,   1,   1, 1],
    [1, (2), (2), (2), 1],
    [1, (2), <3>, (2), 1],
    [1, (2), (2), (2), 1],
    [1,   1,   1,   1, 1],
];

maka proses yang terjadi adalah : 2 + 2 + 2 + 2 + 3 + 2 + 2 + 2 + 2 = 19
output : 19
*/
```

### Test Case 3
```js
console.log(sumAround(board, 4, 4));/*
let board = [
    [1, 1, 1,   1,   1],
    [1, 2, 2,   2,   1],
    [1, 2, 3,   2,   1],
    [1, 2, 2, (2), (1)],
    [1, 1, 1, (1), <1>],
];

maka proses yang terjadi adalah : 2 + 1 + 1 + 1 = 5
output : 5
*/
```

### Test Case 4
```js
console.log(allAroundYou(board, 8, 3));/*
let board = [
    [2, 1, 3, 9, 0, 5, 8, 5, 7],
    [4, 4, 2, 5, 3, 2, 6, 9, 7],
    [2, 1, 3, 9, 0, 5, 8, (2), (1)],
    [6, 5, 3, 0, 3, 0, 4, (1), <1>],
];

maka proses yang terjadi adalah : 2 + 1 + 1 + 1 = 5
output : 5
*/
```