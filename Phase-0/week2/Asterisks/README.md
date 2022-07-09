# Asterisk Looping

### NOTES

- Jalankan command `npm install` terlebih dahulu di terminal pada folder project ini.
- Pada skeleton terdapat folder `__tests__`, folder ini beserta file-file di dalamnya tidak boleh diubah sama sekali.
- Cara menjalankan test untuk memastikan solusi kamu sudah benar, jalankan command `npm test`

### RESTRICTION

- Tidak boleh menggunakan built-in function apapun

### HINTS

- Variable `rows1`, `rows2`, `rows3` dan `rows4` digunakan untuk menyimpan jumlah rows yang nantinya digunakan untuk menyelesaikan masing-masing masalah yang disebutkan di bagian [Directions](#directions) dan __tidak boleh diganti dengan variabel lain__.

---

## Objectives

- Mampu memecahkan sebuah masalah dengan `nested loop`
- Mengerti logika `nested loop`
- Dapat melihat pola dari posisi baris dan kolom Asterisk


## Directions

**1. Menyusun Barisan Bintang**

Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript untuk menampilkan di console barisan asterisks (bintang). Setiap baris memiliki 1 simbol '*'.

**Skeleton Code**

```js
let rows1; // input the number of rows

// do loops to display asterisks in the console.
```

**Output**

jika rows1 = 5

```shell
*
*
*
*
*
```

**2. Menyusun Barisan Bintang Dengan Nested Looping**

Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript untuk menampilkan di console barisan asterisks (bintang). Setiap baris memiliki jumlah simbol '*' sesuai dengan jumlah baris. Manfaatkan *nested loop* atau loop di dalam loop untuk menyelesaikan kasus ini.

**Skeleton Code**

```js
let rows2; // input the number of rows

// do loops to display asterisks in the console.
```

**Output**

jika rows2 = 5

```shell
*****
*****
*****
*****
*****
```

**3. Menyusun Barisan Tangga Bintang Dengan Nested Looping**

Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript untuk menampilkan di console barisan asterisks (bintang) dalam bentuk tangga. Setiap baris memiliki jumlah simbol '*' sesuai dengan nomor baris. Baris pertama, hanya ada satu bintang. Baris kedua, dua bintang, baris ketiga tiga bintang, dan seterusnya. Manfaatkan *nested loop* atau loop di dalam loop untuk menyelesaikan kasus ini.


**Skeleton Code**

```js
let rows3; // input the number of rows

// do loops to display asterisks in the console.
```

**Output**

jika rows3 = 5

```shell
*
**
***
****
*****
```

**4. Menyusun Barisan Tangga Bintang Terbalik Dengan Nested Looping**

Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript untuk menampilkan di console barisan asterisks (bintang) dalam bentuk tangga. Setiap baris memiliki jumlah simbol \'\*\' sesuai dengan nomor baris. Baris pertama, jumlah bintang sesuai dengan value dari letiabel rows4. Baris kedua jumlah bintang berkurang 1, dan seterusnya hingga bintang hanya sisa 1. Manfaatkan **nested loop** atau loop di dalam loop untuk menyelesaikan kasus ini.


**Skeleton Code**

```js
let rows4; // input the number of rows

// do loops to display asterisks in the console.
```

**Output**

jika rows4 = 5

```shell
*****
****
***
**
*
```
