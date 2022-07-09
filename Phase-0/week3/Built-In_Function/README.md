# Built in Function Challenges

### NOTES

- Jalankan `npm install` terlebih dahulu
- Pada skeleton terdapat folder `__tests__`, folder ini beserta file-file di dalamnya tidak boleh diubah sama sekali.
- untuk menjalankan test untuk memastikan solusi kamu sudah benar, jalankan command `npm test`

### RESTRICTION

- Hanya boleh menggunakan built-in function untuk menambahkan atau mengurangi data dalam array, seperti `.shift()`, `.unShift()`, `push()`, dan `pop()`

### HINTS

- Nama function haruslah `antrian`, `panggilAntrian`, `tumpukan` dan `ganjilGenap` sedangkann variabel yang sudah disediakan yaitu `line`. Function dan variabel yang tersebut __tidak boleh diganti dengan nama function lainnya__. Untuk detail fungsi akan mengacu kepada [Directions](#directions) yang disebutkan di bawah

---

## Objectives

- Mampu menggunakan built in function pada Array seperti .push, .shift, .unshift, dll
- Mampu membuat function dan mengerti penggunaan parameter dari sebuah function
- Mampu menggunakan template literals

## Directions

**Antrian**

Diberikan sebuah function antrian yang menerima dua parameter yaitu `line` bertipe array dan `person` bertipe string. Function ini akan mengembalikan array yang dimana data array tersebut sudah bertambah diakhir array sesuai dengan parameter `person`.

```js
let line = ['Rhaegar']

function antrian(line, person) {
  // your code here
}

console.log(antrian(line, 'Snow')) // ['Rhaegar', 'Snow']
```

**Panggil Antrian**

Diberikan sebuah function panggilAntrian yang menerima parameter `line` bertipe array. Function ini akan mengembalikan array yang dimana data array tersebut berkurang 1 didepannya.

```js
let line = ['Rhaegar', 'Snow']

function panggilAntrian(line) {
  // your code here
}

console.log(panggilAntrian(line)) // ['Snow']
```

**Tumpukan**

Diberikan sebuah function tumpukan yang menerima dua parameter `line` bertipe array dan `title` bertipe string. Function ini akan mengembalikan array yang dimana data array sudah bertambah diawal array sesuai dengan parameter `title`.

```js
let line = ['Snow']

function tumpukan(line, title) {
  // your code here
}

console.log(tumpukan(line, 'Jon')) // ['Jon', 'Snow']
```

**Ganjil Genap**

Diberikan sebuah function ganjilGenap yang menerima satu parameter `plat` bertipe string. Parameter plat berisi informasi kumpulan plat dimana nomor antar plat dipisahkan oleh titik koma(;).

Function ini akan mengembalikan keterangan jumlah plat genap dan jumlah plat ganjil.

```js
function ganjilGenap(plat) {
  // your code here
}

console.log(ganjilGenap('2341;3429;864;1309;1276')) //plat genap sebanyak 2 dan plat ganjil sebanyak 3
console.log(ganjilGenap('2347;3429;1305')) //plat ganjil sebanyak 3 dan plat genap tidak ditemukan
console.log(ganjilGenap('864;1308;1276;1432')) //plat genap sebanyak 4 dan plat ganjil tidak ditemukan
console.log(ganjilGenap('')) //plat tidak ditemukan
console.log(ganjilGenap()) //invalid data
```
