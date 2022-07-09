# Vowels in Names

### NOTES

- Jalankan command `npm install` terlebih dahulu di terminal pada folder project ini.
- Pada skeleton terdapat folder `__tests__` dan `testHelpers`, folder-folder ini beserta file-file di dalamnya tidak boleh diubah sama sekali.
- Cara menjalankan test untuk memastikan solusi kamu sudah benar, jalankan command `npm test`

### RESTRICTION

- Hanya boleh menggunakan .push(), .toLowerCase(), toUpperCase()

### HINTS

- Dilarang mengganti nama function serta isi parameter yang diberikan.
- Huruf besar dan kecil pada nama tidak mempengaruhi validasi pencarian huruf vokal (tidak case sensitive)
  mis. `A`ndre sama dengan `a`ndre

---

## Objectives
- Mampu menyelesaikan masalah yang diberikan
- Mampu mengakses `array` menggunakan loop `FOR` atau `WHILE`
- Mampu mengimplementasikan nested loop
- Mampu membuat conditional menggunakan `IF...IF`, `IF...ELSE`, `IF...ELSE IF...ELSE` atau `SWITCH CASE`

## Directions
_findName_ merupakan sebuah function yang menerima 2 buah parameter.
parameter pertama berupa array yang berisi kumpulan nama, parameter kedua merupakan huruf vokal.
dalam function ini kalian diminta, untuk mencari nama-nama yang mengandung huruf vokal pada parameter kedua.
kalian juga diminta untuk bisa menghandle beberapa hal seperti:

- jika tidak ada nama yang mengandung huruf vokal 
- jika array merupakan array kosong
- jika huruf vokal merupakan string kosong
- jika parameter tidak ada

---

### Test Case
```js
/*

console.log(findName(['Abimayu', 'Bramanty', 'Cendric', 'Darpa', 'Ekata'], 'a'));
// [ 'Abimayu', 'Bramanty', 'Darpa', 'Ekata' ]

console.log(findName(['Feshikha', 'Gantari', 'Hara', 'Isvara', 'Javas'], 'i'));
// [ 'Feshikha', 'Gantari', 'Isvara' ]

console.log(findName(['Kayana', 'Laksita', 'Meena', 'Nagendra', 'Opalina'], 'u'));
// Tidak ada nama yang mengandung vokal u

console.log(findName(['Pastika', 'Qirani', 'Radmila', 'Savrinadeya', 'Teripta'], 'e'));
// [ 'Savrinadeya', 'Teripta' ]

console.log(findName(['Utalika', 'Virendra', 'Waradana', 'Yozita', 'Zanitha'], 'o'));
// [ 'Yozita' ]

console.log(findName([], ''));
// Data not Available

console.log(findName());
// Invalid Input

*/
```