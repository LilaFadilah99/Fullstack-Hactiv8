# Damage Calculation

### NOTES

- Jalankan `npm install` terlebih dahulu
- Pada skeleton terdapat folder `__tests__`, folder ini beserta file-file di dalamnya tidak boleh diubah sama sekali.
- untuk menjalankan test untuk memastikan solusi kamu sudah benar, jalankan command `npm test`

### RESTRICTION

- Tidak boleh menggunakan built-in function apapun

### HINTS

- Nama function haruslah `damageCalculation` dan `attack` dan __tidak boleh diganti dengan nama function lainnya__. Untuk detail fungsi akan mengacu kepada [Directions](#directions) yang disebutkan di bawah

---

## Directions

Diberikan 2 function:

- `damageCalculation` akan menerima 2 parameter yaitu `numberOfAttacks` dan `damagePerAttack`
- `attack` function akan menerima 1 parameter yaitu `damage`

Gunakan function `damageCalculation` untuk menghitung damage yang diterima dan gunakan function `attack` untuk mensimulasikan setiap attack dengan rumus `damage - 2` disetiap attack.


Perhatikan contoh berikut:

`damageCalculation(3, 10)` akan mengembalikan nilai `24`
Karena attack akan dikurangi 2, maka setiap attack akan menghasilkan damage `8`

```js
// Code disini
}

function damageCalculation (numberOfAttacks, damagePerAttack) {
// Code disini
}

// TEST CASE
console.log(damageCalculation(9, 25)); // 207

console.log(damageCalculation(10, 4)); // 20

console.log(damageCalculation(5, 20)); // 90
```
