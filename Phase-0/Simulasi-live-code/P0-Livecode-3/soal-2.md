# `Wedding Guest`

### `NOTES`

- Wajib menggunakan modular function yang telah disediakan

### `RESTRICTION`

- Dilarang menggunakan built in function apapun selain `.push`

### `HINTS`

- Perhatikan setiap bentuk data yang dimasukkan sebagai parameter dan hasil output dari setiap function dengan seksama.

---

## `Direction`

Kali ini kamu diminta untuk mendata para tamu yang hadir dalam suatu acara pernikahan.
telah tersedia array of array yang merupakan data dari para tamu yang meliputi `name`, `gender`, `familyOf` dan `useMask` secara berurutan.

telah disediakan 4 buah function dengan ketentuan sebagai berikut :

1. `setArrayOfGuest`  
   function ini berfungsi untuk mengubah data para tamu yang berupa array of array menjadi array of object (perhatikan contoh yang diberikan).

```js
function setArrayOfGuest(guest) {
  // your code here
}

console.log(
  setArrayOfGuest([
    ["Kristan Sleit", "Female", "Groom", false],
    ["Meredith Edsell", "Female", "Bride", true],
    ["Roxy Poytress", "Female", "Bride", true],
  ])
);

// output:
// [
//   {
//     name: 'Kristan Sleit',
//     gender: 'Female',
//     familyOf: 'Groom',
//     useMask: false
//   },
//   {
//     name: 'Meredith Edsell',
//     gender: 'Female',
//     familyOf: 'Bride',
//     useMask: true
//   },
//   {
//     name: 'Roxy Poytress',
//     gender: 'Female',
//     familyOf: 'Bride',
//     useMask: true
//   }
// ]
```

2. `onlyAllowedMask`  
   function ini akan memfilter para tamu yang tidak menggunakan masker.

```js
function onlyAllowedMask(guestList) {
  // your code here
}

console.log(
  onlyAllowedMask([
    {
      name: "Freemon Hyne",
      gender: "Male",
      familyOf: "Groom",
      useMask: false,
    },
    {
      name: "Constance Rennebach",
      gender: "Female",
      familyOf: "Groom",
      useMask: true,
    },
  ])
);

// output :
// [
//   {
//     name: 'Constance Rennebach',
//     gender: 'Female',
//     familyOf: 'Groom',
//     useMask: true,
//   }
// ]
```

3. `giveSouvenir`  
   function ini berfungsi untuk memberikan souvenir kepada tamu sesuai urutan, souvenir yang akan diberikan sudah disediakan pada function.
   Setiap souvenir yang diberikan kepada tamu maka akan mengurangi stock souvenir tersebut,
   jika souvenir pertama habis maka lanjut ke souvenir kedua _(mug > wine_opener > lighter > key chain)_
   jika semua souvenir yang tersedia tidak cukup(habis), maka tamu yang tersisa akan mendapatkan `ballpoint` sebagai souvenirnya.
   lebih jelasnya perhatikan contoh output dari function `giveSouvenir`.

```js
function giveSouvenir(guest) {
  const souvenirs = { mug: 4, wine_opener: 3, lighter: 1, "key chain": 2 };
  // your code here
}

console.log(
  giveSouvenir([
    {
      name: "Constance Rennebach",
      gender: "Female",
      familyOf: "Groom",
      useMask: true,
    },
  ])
);
// output: [{ name: 'Constance Rennebach', gender: 'Female', familyOf: 'Groom', useMask: true, souvenirs: "mug" }]
```

4. `weddingGuest` 
   function ini merupakan main function yang akan bertugas memanggil function lainnya untuk menjalankan program ini.
   untuk lebih jelasnya perhatikan contoh output dari function `weddingGuest` ini.

```js
function weddingGuest(guest) {
  // your code here
}

const tamu = [
  ["Kristan Sleit", "Female", "Groom", false],
  ["Meredith Edsell", "Female", "Bride", true],
  ["Roxy Poytress", "Female", "Bride", true],
  ["Ebenezer Sandle", "Male", "Groom", true],
  ["Daria Edmundson", "Female", "Groom", false],
  ["Rosanna Deackes", "Female", "Groom", true],
  ["Erskine Petronis", "Male", "Groom", true],
];

console.log(weddingGuest(tamu));
// [
//   { name: 'Meredith Edsell',  gender: 'Female', familyOf: 'Bride', useMask: true, souvenirs: 'mug' },
//   { name: 'Roxy Poytress',    gender: 'Female', familyOf: 'Bride', useMask: true, souvenirs: 'mug' },
//   { name: 'Ebenezer Sandle',  gender: 'Male',   familyOf: 'Groom', useMask: true, souvenirs: 'mug' },
//   { name: 'Rosanna Deackes',  gender: 'Female', familyOf: 'Groom', useMask: true, souvenirs: 'mug' },
//   { name: 'Erskine Petronis', gender: 'Male',   familyOf: 'Groom', useMask: true, souvenirs: 'wine_opener'  }
// ]
```

Silahkan tulis code kamu didalam setiap function agar program ini dapat berjalan semestinya.
Good Luck 😊
