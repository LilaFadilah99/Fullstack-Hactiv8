# Count Me

### NOTES

- Jalankan `npm install` terlebih dahulu
- Pada skeleton terdapat folder `__tests__`, folder ini beserta file-file di dalamnya tidak boleh diubah sama sekali.
- untuk menjalankan test untuk memastikan solusi kamu sudah benar, jalankan command `npm test`

### RESTRICTION

- Hanya boleh menggunakan built-in function untuk menambahkan atau mengurangi data dalam array, seperti .shift(), unShift(), push(), dan pop()

### HINTS

- Nama function haruslah `countMe` dan __tidak boleh diganti dengan nama function lainnya__. Untuk detail fungsi akan mengacu kepada [Directions](#directions) yang disebutkan di bawah

---

## Directions

Diberikan sebuah function `countMe` yang menerima satu parameter berupa array.

Fungsi ini akan mereturn sebuah object dimana key-key dari object tersebut adalah value dari data array. Valuenya adalah total kemunculan data value didalam array

Perhatikan contoh test case berikut:

```js
function countMe(arr) {
  // write your code here
}

console.log(countMe(['Sofyan', 'Ricky', 'Sofyan', 'Semmi', 'Semmi', 'Wika']));
// { Sofyan: 2, Ricky: 1, Semmi: 2, Wika: 1 }

console.log(countMe([ 1, 15, 9, 10, 8, 1, 12, 15, 10, 3 ]));
// { '1': 2, '3': 1, '8': 1, '9': 1, '10': 2, '12': 1, '15': 2 }
```
