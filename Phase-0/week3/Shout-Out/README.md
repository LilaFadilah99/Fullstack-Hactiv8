# Mengenal Penggunaan Function

### NOTES

- Jalankan `npm install` terlebih dahulu
- Pada skeleton terdapat folder `__tests__`, folder ini beserta file-file di dalamnya tidak boleh diubah sama sekali.
- untuk menjalankan test untuk memastikan solusi kamu sudah benar, jalankan command `npm test`

### RESTRICTION

- Tidak boleh menggunakan built-in function apapun

### HINTS

- Nama function haruslah `shoutOut`, `calculateMultiply` dan `processSentence` dan __tidak boleh diganti dengan nama function lainnya__. Untuk detail fungsi akan mengacu kepada [Directions](#directions) yang disebutkan di bawah

---

## Objectives

- Mampu memahami serta mengimplementasi penggunaan function pada JavaScript

## Directions

1. Lanjutkan kode berikut ini hingga dapat menampilkan nilai / output yang diminta!

**TUGAS 1**

Buatlah sebuah fungsi bernama shoutOut(), yang mengembalikan nilai berupa "Halo Function!", yang kemudian akan ditampilkan di console.

```
/*
 BUATLAH KODE FUNCTION DISINI
*/

console.log(shoutOut()) // Menampilkan "Halo Function!" di console
```

**TUGAS 2**

Buatlah sebuah fungsi bernama calculateMultiply(), yang mengembalikan nilai berupa hasil kali dari dua parameter yang dikirim.

```
/*
 BUATLAH KODE FUNCTION DISINI
*/

var num1 = 5;
var num2 = 6;

var hasilPerkalian = calculateMultiply(num1,num2);
console.log(hasilPerkalian); // Menampilkan angka 30
```
**TUGAS 3**

Buatlah sebuah fungsi bernama processSentence(), yang akan memproses seluruh parameter yang diinput menjadi satu kalimat berikut: "Nama saya [Name], umur saya [Age] tahun, alamat saya di [Address], dan saya punya hobby yaitu [hobby]!"

```
/*
 BUATLAH KODE FUNCTION DISINI
*/

var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence); // Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogjakarta, dan saya punya hobby yaitu gaming!"
```
