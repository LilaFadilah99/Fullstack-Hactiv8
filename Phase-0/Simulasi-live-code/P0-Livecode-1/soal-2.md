# HIDDEN FOX VILLAGE

### RESTRICTION
- Dilarang menggunakan built in function apapun

### HINTS
- Kalian menggunakan built-in function .length

## Objectives
- Mampu menyelesaikan masalah yang diberikan.
- Mengerti konsep dan cara penggunaan `loop`, `conditional` dan `data primitive`.

## Directions
Hidden Fox Village adalah sebuah desa para developer, 
didesa ini para anak - anak muda dilatih melalui bootcamp untuk menjadi developer - developer handal untuk masa depan.
Setelah lulus dari bootcamp, para Developer muda ini akan menjalani misi dari para client. untuk membuat berbagai macam Web App dan Mobile App.

Ada 3 jenis rank developer, tergantung dari berapa besar score yang developer itu miliki.
rank dan score minimal dari yang paling rendah ke paling tinggi, yaitu :
1. Genin = 8
2. Chunnin = 16
3. Jounin = 32

Dan ada 3 jenis tingkatan misi. Setiap tingkatan mempunyai score nya sendiri, yaitu :
1. C = 1 point 
2. B = 2 point
3. A = 4 point

Kamu diminta untuk membuat sistem yang akan menampilkan nama dan rank dari developer yang diinput.
Ada 2 data yang akan kamu terima, yaitu :
1. `nama` sebagai variabel yang akan menampung nama developer yang bersangkutan
2. `missions` sebagai variabel yang akan menampung history dari misi yang sudah diselesaikan oleh developer yang bersangkutan

Sebelum masuk ke proses pengecekan, ada satu kondisi yang harus di cek terlebih dahulu, yaitu :
1. Jika `nama` developer tidak ada, maka ouput nya 'Developer tidak terdaftar'
___

Jika nanti hasil pengecekan score nya dibawah standart kategori, maka ranknya menjadi dijadikan 'Unclassified'

## TEST CASE
```js
1.
Input   :
    let nama = ""
    let missions = "AAAAAAA"
Output  : 
    "Developer tidak terdaftar"
```

```js
2.
Input   :
    let nama = "Ardi"
    let missions = "AAAAAAAAAA"
Output  : 
    "Nama : Ardi, Rank : Jounin"
```

```js
3.
Input   :
    let nama = "Idham"
    let missions = "CCBBCB"
Output  : 
    "Nama : Idham, Rank : Genin"
```

```js
4.
Input   :
    let nama = "Patra"
    let missions = "BC"
Output  : 
    "Nama : Patra, Rank : Unclassified"
```