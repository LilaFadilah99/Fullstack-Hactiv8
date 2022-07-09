# QWERTY Company

### RESTRICTION
- Dilarang menggunakan built in function apapaun

## Objectives
- Mampu menyelesaikan masalah yang diberikan.
- Mengerti konsep dan cara penggunaan `conditional` dan `data primitive`.

## Directions
QWERTY Company ingin membuat kartu identitas, kalian diminta untuk mengecek apakah data-data yang sudah di submit sesuai dengan yang di butuhkan dengan syarat-syarat yang diberikan.
Syarat-syarat yang diberikan adalah,

- `nama` tidak boleh kosong, jika kosong maka hanya akan menampilkan "Silahkan isi nama terlebih dahulu", jika `nama` tidak kosong maka akan masuk ke tahap selanjutnya

- ditahap selanjutnya akan memeriksa `berkas` jika berkas bernilai 'false' maka hanya akan menampilkan "Berkas tidak lengkap silahkan lengkapi berkas terlebih dahulu", jika `berkas` bernilai 'true' maka akan masuk ke tahap selanjutnya.

- setelah memeriksa `berkas`, maka akan memeriksa 3 variable yaitu `tahunLahir`, `statusNikah`, `warganegaraIndonesia`
- Jika `tahunLahir` adalah ganjil maka akan menampilkan "Background Photo : Merah", Jika `tahunLahir` adalah genap maka akan menampilkan "Background Photo : Biru"
- Jika `statusNikah` adalah 'true' maka akan menampilkan "Status Perkawinan : Kawin", jika `statusNikah` adalah 'false' maka akan menampilkan "Status Perkawinan : Belum Kawin"
- Jika `warganegaraIndonesia` adalah 'true' maka akan menampilkan "Kewarganegaraan : WNI", jika `warganegaraIndonesia` adalah 'false' maka akan menampilkan "Kewarganegaraan : WNA"


## TEST CASE
```js
Input :

let nama = 'Mohammad Idham'
let berkas = true
let tahunLahir = 1996
let statusNikah = true
let warganegaraIndonesia = true

Output :
/*
Nama : Mohammad Idham 
Background Photo : Biru 
Status Perkawinan : Kawin 
Kewarganegaraan : WNI
*/
```

```js
Input :

let nama = 'Bagus'
let berkas = true
let tahunLahir = 2001
let statusNikah = false
let warganegaraIndonesia = false

Output :
/*
Nama : Bagus 
Background Photo : Merah 
Status Perkawinan : Belum Kawin 
Kewarganegaraan : WNA
*/
```

```js
Input :

let nama = 'Ardi'
let berkas = false
let tahunLahir = 1994
let statusNikah = true
let warganegaraIndonesia = true

Output :
/*
Berkas tidak lengkap silahkan lengkapi berkas terlebih dahulu
*/
```

```js
Input :

let nama = ''
let berkas = true
let tahunLahir = 2001
let statusNikah = false
let warganegaraIndonesia = false

Output :
/*
Silahkan isi nama terlebih dahulu
*/

```