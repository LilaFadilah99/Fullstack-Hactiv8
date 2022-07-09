# Most Frequent Largest Number

### NOTES

- Jalankan `npm install` terlebih dahulu
- Pada skeleton terdapat folder `__tests__`, folder ini beserta file-file di dalamnya tidak boleh diubah sama sekali.
- untuk menjalankan test untuk memastikan solusi kamu sudah benar, jalankan command `npm test`

### RESTRICTION

- Hanya boleh menggunakan built-in function untuk menambahkan atau mengurangi data dalam array, seperti .shift(), unShift(), push(), dan pop()

### HINTS

- Nama function haruslah `sorting`, `getTotal` dan `mostFrequentLargestNumbers` dan __tidak boleh diganti dengan nama function lainnya__. Untuk detail fungsi akan mengacu kepada [Directions](#directions) yang disebutkan di bawah

---

## Directions

Implementasikan function `sorting` dan `getTotal` untuk mendapatkan angka yang paling besar dan mengetahui berapa kali angka tersebut muncul di dalam `arrNumber`.

Dilarang mengubah mengubah 2 lines di dalam function `mostFrequentLargestNumbers` yaitu lines:

```
var listSort = sorting(arrNumber)
var countHighest = getTotal(listSort)
```

```js
function sorting(arrNumber) {
  // code di sini
  // kamu bisa mengggunakan function sorting yang sudah kamu buat saat weekend
}

function getTotal(arrNumber) {
  // code di sini
}

function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);
  return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''
```
