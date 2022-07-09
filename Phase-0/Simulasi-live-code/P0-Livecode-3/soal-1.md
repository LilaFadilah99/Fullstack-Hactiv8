# `FoxVid21`

### `NOTES`

- Wajib menggunakan modular function yang telah disediakan

### `RESTRICTION`

- Dilarang menggunakan built in function apapun selain `.push`

### `HINTS`

- Gunakanlah modular function untuk mendapatkan informasi jumlah without symptomps pasien dan pasien-pasien prioritas


## `Directions`
Pada tahun 2021 Planet Foxie mengahadapi wabah Foxvid-21, salah satu client di Planet Foxie ingin membuat sebuah app yang dapat melakukan pendataan dan membuat prediksi tentang orang-orang yang berada di Planet Foxie.

Terdapat 2 modular function `withoutSymptomsPatient` dan `priorityPatient` dan sebuah main function `Foxvid21`

### `function withoutSymptomsPatient` `(data)`
- berfungsi untuk menghitung jumlah pasien yang memiliki symptoms 'without symptoms' yang akan mereturn sebuah number

contoh:
```js
function withoutSymptomsPatient(data) {
  // your code here
}

let result = withoutSymptomsPatient([
    {name:'James',age:24,status:'Positive', symptoms:'without symptoms'},
    {name:'Edward',age:30,status:'Recover', symptoms:'diarrhea'},
    {name:'Kurt',age:24,status:'Negative', symptoms:'Flu'},
    {name:'Sam',age:24,status:'Recover', symptoms:'without symptoms'},
    {name:'Cole',age:50,status:'Positive', symptoms:'Cough'},
    {name:'Ashley',age:41,status:'Positive', symptoms:'Fever'},
    {name:'Jane',age:30,status:'Positive', symptoms:'without symptoms'},
])

console.log(result) // 3
```

### `function priorityPatient``(data)`

- berfungsi untuk memberikan prediksi nama-nama pasien yang masuk prioritas
- Pasien Prioritas adalah Pasien yang berumur diatas 40 tahun dan memiliki status Positive

contoh:
```js
function priorityPatient(data) { 
  // your code here
}

let result = priorityPatient([
    {name:'James',age:24,status:'Positive', symptoms:'without symptoms'},
    {name:'Edward',age:30,status:'Recover', symptoms:'diarrhea'},
    {name:'Kurt',age:24,status:'Negative', symptoms:'Flu'},
    {name:'Sam',age:24,status:'Recover', symptoms:'without symptoms'},
    {name:'Cole',age:50,status:'Positive', symptoms:'Cough'},
    {name:'Ashley',age:41,status:'Positive', symptoms:'Fever'},
    {name:'Jane',age:30,status:'Positive', symptoms:'without symptoms'},
])

console.log(result) // "Cole, Ashley, is Priority Patient"
```

### `Foxvid21``(data)`

- berfungsi untuk memberikan data yang sudah di olah yang akan mereturn sebuah object
- apabila data yang diterima adalah array kosong maka akan mereturn `Empty Data`
- apabila data yang diterima adalah undefined maka akan mereturn `Invalid Data`
- apabila data yang diterima sudah sesuai, maka output nya adalah sebuah objek yang memiliki 5 properti, yaitu:
  1. `positive`   : Akan memiliki value array yang menyimpan nama pasien yang memiliki status Positive
  2. `recover`    : Akan memiliki value array yang menyimpan nama pasien yang memiliki status Recover
  3. `negative`   : Akan memiliki value array yang menyimpan nama pasien yang memiliki status Negative
  4. `undetected` : Akan memiliki value number, yang didapat dari function `withoutSymptomsPatient`
  5. `priority`   : Akan memiliki value string, yang didapat dari function `priorityPatient`

contoh:
```js
function Foxvid21(data) {
  // your code here
}

let result = Foxvid21([
    {name:'James',age:24,status:'Positive', symptoms:'without symptoms'},
    {name:'Edward',age:30,status:'Recover', symptoms:'diarrhea'},
    {name:'Kurt',age:24,status:'Negative', symptoms:'Flu'},
    {name:'Sam',age:24,status:'Recover', symptoms:'without symptoms'},
    {name:'Cole',age:50,status:'Positive', symptoms:'Cough'},
    {name:'Ashley',age:41,status:'Positive', symptoms:'Fever'},
    {name:'Jane',age:30,status:'Positive', symptoms:'without symptoms'},
])
console.log(result)
/*
{
    Positive: [ 'James', 'Cole', 'Ashley', 'Jane' ],
    Recover: [ 'Edward', 'Sam' ],
    Negative: [ 'Kurt' ],
    undetected: 3,
    priority: 'Cole, Ashley, is Priority Patient'
}
*/

let result2 = Foxvid21([])
console.log(result2) // "Empty Data"

let result3 = Foxvid21()
console.log(result3) // "Invalid Data"
```