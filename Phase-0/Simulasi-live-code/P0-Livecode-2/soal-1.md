# `Ganjil Genap`

### `NOTES`

- Jalankan command `npm install` terlebih dahulu di terminal pada folder project ini.
- Pada skeleton terdapat folder `__tests__` dan `testHelpers`, folder-folder ini beserta file-file di dalamnya tidak boleh diubah sama sekali.
- Cara menjalankan test untuk memastikan solusi kamu sudah benar, jalankan command `npm test`

---

## `Objectives`

- Mampu menyelesaikan masalah yang diberikan
- Mampu menggunakan `loop`, `nested loop`, `conditional` atau `advance conditional`
- Mampu membuat dan mengisi property `object`
- Mampu mengakses `array`

## `Directions`

Kamu diminta untuk membuat program yang menyeleksi kumpulan angka berbentuk array menjadi object. Dimana objectnya akan mempunyai 2 property yaitu:
1. Genap yang didapat dari angka genap terbesar dari kumpulan angka tersebut
2. Ganjil yang didapat dari angka ganjil terbesar dari kumpulan angka tersebut

Jika tidak ada argument tampilkan 'invalid input'

___

## `TEST CASE`

Contoh:
```js
1.  Input: [
      [180, 2, 30, 39],
      [20, 98, 23, 10, 12, 10],
      [11, 1, 0, -1, -40],
      [3, 100, 200, 30]
    ]
    output: { ganjil: 39, genap: 200 }

2.  Input: [
      [18, 2, 200, 39, 1000]
    ]
    output: { ganjil: 39, genap: 1000 }
```

Buatlah implementasi Javascriptnya

```js
function numberReport(numArr) {
  // write your code here ...
}

console.log(numberReport([
  [180, 2, 30, 39],
  [20, 98, 23, 10, 12, 10],
  [11, 1, 0, -1, -40],
  [3, 100, 200, 30]
])) // { ganjil: 39, genap: 200 }

console.log(numberReport([
  [18, 2, 200, 39, 1000]
])) // { ganjil: 39, genap: 1000 }

console.log(numberReport([])) // data is empty

console.log(numberReport()) // invalid input
```
     