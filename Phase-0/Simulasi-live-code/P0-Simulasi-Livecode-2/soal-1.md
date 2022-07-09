# `Letters Report`

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

Kamu diminta untuk memebuat program yang menyeleksi kumpulan huruf berbentuk array menjadi object. Dimana objectnya akan mempunyai 2 property yaitu:
1. `X` yang didapat dari jumlah huruf `x` dari kumpulan huruf tersebut
2. `O` yang didapat dari jumlah huruf `o` dari kumpulan huruf tersebut

Jika tidak ada argument tampilkan 'invalid input'

___

## `TEST CASE`

Contoh:
```js
1.  Input: [
      ['x', 'x', 'o', 'x'],
      ['o', 'o', 'o', 'x', 'x', 'x'],
      ['o', 'x', 'x', 'o', 'o'],
      ['x', 'x', 'x', 'x']
    ]
    output: { X: 12, O: 7 }

2.  Input: [
      ['x', 'x', 'x', 'x', 'x']
    ]
    output: { X: 5, O: 0 }
```

Buatlah implementasi Javascriptnya