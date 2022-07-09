# Graduates - Object Literal

### NOTES

- Jalankan `npm install` terlebih dahulu
- Pada skeleton terdapat folder `__tests__`, folder ini beserta file-file di dalamnya tidak boleh diubah sama sekali.
- untuk menjalankan test untuk memastikan solusi kamu sudah benar, jalankan command `npm test`

### RESTRICTION

- Hanya boleh menggunakan built-in function untuk menambahkan atau mengurangi data dalam array, seperti .shift(), unShift(), push(), dan pop() dan built-in function untuk mengakses isi dalam object seperti for..in, for...of, Object.keys(), dll

### HINTS

- Nama function haruslah `graduates` dan __tidak boleh diganti dengan nama function lainnya__. Untuk detail fungsi akan mengacu kepada [Directions](#directions) yang disebutkan di bawah

---

## Directions

Implementasikan function graduates untuk mendapatkan daftar student yang lulus dengan aturan:

- Student dapat dinyatakan lulus apabila score lebih besar dari 75.
- Masukkan name dan score dari student ke class yang dia ikuti.
- Student yang tidak lulus tidak perlu ditampilkan.

Output yang diharapkan berupa Object Literal dengan format sebagai berikut:

```js
<class>: [
  { name: <name>, score: <score> },
  ...
],
<class>: [
  { name: <name>, score: <score> },
  ...
],
<class>: [] //NOTE: Jika tidak ada student yang lulus, class ini akan diisi oleh array kosong
}
```

Perhatikan contoh test case berikut:

```js
function graduates (students) {
  // Code disini
}

console.log(graduates([
  {
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
  },
  {
    name: 'Alexei',
    score: 85,
    class: 'wolves'
  },
  {
    name: 'Sergei',
    score: 74,
    class: 'foxes'
  },
  {
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
  }
]));

// {
//   foxes: [{ name: 'Dimitri', score: 90 }],
//   wolves: [{ name: 'Alexei' , score: 85 }, { name:         'Anastasia', score: 78 } ]
// }

console.log(graduates([
  {
    name: 'Alexander',
    score: 100,
    class: 'foxes'
  },
  {
    name: 'Alisa',
    score: 76,
    class: 'wolves'
  },
  {
    name: 'Vladimir',
    score: 92,
    class: 'foxes'
  },
  {
    name: 'Albert',
    score: 71,
    class: 'wolves'
  },
  {
    name: 'Viktor',
    score: 80,
    class: 'tigers'
  }
]));

// {
//   foxes: [
//     { name: 'Alexander', score: 100 },
//     { name: 'Vladimir', score: 92 }
//   ],
//   wolves: [
//     { name: 'Alisa', score: 76 },
//   ],
//   tigers: [
//     { name: 'Viktor', score: 80 }
//   ]
// }


console.log(graduates([])); //{}
```
