# `DEVELOPER RANK`

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
- Mampu menggunakan `modular function`

## `Directions`

Kali ini kalian diminta untuk menampilkan data dari setiap developer dari desa bootcamp.<br>
Kalian diberikan sebuah variable `data` yang berupa array multidimensi yang setiap array didalamnya memiliki element `nama developer`, `misi yang sudah dijalankan` dan `asal desa developer`.<br>
Selain itu kalian juga diberikan 3 buah function yaitu
`missionPoint`, `developerRank`, dan `developerHistory` dengan keterangan berikut:

---

1. `missionPoint()`
  pada function ini kalian diminta untuk menghitung point dari misi yang telah dijalankan oleh seorang developer.<br>
  Dan ada 3 jenis tingkatan misi. Setiap tingkatan mempunyai score nya sendiri, yaitu :
  - C = 1 point 
  - B = 2 point
  - A = 4 point

example :
```js
funcion missionPoint(mission){
  // Write your code here
}

console.log(missionPoint('ABC')) // 7
console.log(missionPoint('CCBBCB')) // 9
```

---

2. `developerRank()`
  pada function ini kalian diminta untuk menentukan klasifikasi dari setiap developer.
  Ada 3 jenis rank developer, tergantung dari berapa besar score yang developer itu miliki.
  rank dan score minimal dari yang paling rendah ke paling tinggi, yaitu :
  - Gennin = 8
  - Chunnin = 16
  - Jounnin = 32

example :
```js
function developerRank(score){
  // Write your code here
}

console.log(developerRank(40)) // 'Jounnin'
console.log(developerRank(20)) // 'Chunnin'
console.log(developerRank(15)) // 'Gennin'
console.log(developerRank(5)) // 'Unclassified'
```

---

3. `developerHistory()`
  pada function ini kalian diminta untuk mengubah data yang diterima dari array multidimensi menjadi sebuah object multidimensi dengan nama developer sebagai key utama yang memiliki isi berupa object dengan key `village`, `score`, dan `rank`

example :
```js
function developerHistory(data){
  // write your code here ...
}


let developers = [
    ['Naruto', 'AAAAAAAAAA', 'Konoha'],
    ['Gaara', 'CCBBCB', 'Suna'],
    ['Mei Terumi', 'ABCABCABC', 'Kiri'],
    ['Darui', 'CCBBCCBB', 'Kumo'],
    ['Kurotsuchi', 'CBC', 'Iwa'],
];

console.log(customersHistory(developers))
/*
{
    Naruto: {
        village: 'Konoha',
        score: '40 point',
        rank: 'Rank Jounnin'
    },
    Gaara: {
        village: 'Suna',
        score: '9 point',
        rank: 'Rank Gennin'
    },
    'Mei Terumi': {
        village: 'Kiri',
        score: '21 point',
        rank: 'Rank Chunnin'
    },
    Darui: {
        village: 'Kumo',
        score: '12 point',
        rank: 'Rank Gennin'
    },
    Kurotsuchi: {
        village: 'Iwa',
        score: '4 point',
        rank: 'Rank Unclassified'
    }
}
*/
```
<br>


Buatlah implementasi JavaScript-nya!

___