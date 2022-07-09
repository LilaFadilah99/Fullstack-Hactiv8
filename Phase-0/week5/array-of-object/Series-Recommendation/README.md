# `SERIES LIST AND RECOMMENDATION`

## `RESTRICTION`

- Tidak boleh menggunakan built-in function apapun selain .push().

## `HINTS`

- Parameter `series` dan `year` _tidak boleh diganti dengan parameter apapun_.

---

## `Objectives`

- Mampu menyelesaikan masalah yang diberikan
- Mampu mengakses objek
- Mampu mengakses array of object
- Mampu menggunakan modular function

## `Directions`

Kali ini Anton lagi kebingungan untuk milih series superhero apa yang mau ia tonton, terdapat list `series` yang berupa _Array of Objects_, yang isinya `title`, `main character`, `publisher` dan `rating seriesnya`. kalian diminta untuk membantu Anton untuk menampilkan setiap `series` berdasarkan `publisher` dan rekomendasikan series berdasarkan `rating` terbesar dari masing-masing publihser.

kalian diberikan 3 buah function sebagai berikut: 
## `Function addYear`
Pada function bantuan ini kalian diminta menambahkan tahun yang terdapat pada variable year ke list yang terdapat pada variable series.

  ### `NOTE`
  - *`Diasumsikan jumlah ada pada year dan series selalu sama`*.

  contoh input:
```js
let year = ['2014', '2017', '2015', '2017']
let series = [
    {
      title: 'Ibuku bukan Bapakku',
      mainCharacter: 'Tante Erni',
      publisher: 'Indisiir',
      rate: 7.7
    },
    {
      title: 'Balada Jomblo Kebayoaran',
      mainCharacter: 'Vey Ruby Jane',
      publisher: 'KIMPIS TIVI',
      rate: 8.1
    },
    {
      title: 'Dilema tante muda',
      mainCharacter: 'Tante Atien',
      publisher: 'Indisiir',
      rate: 8.3
    },
    {
      title: 'Pembantu cantik itu pacarku',
      mainCharacter: 'Anastasyakh',
      publisher: 'KIMPIS TIVI',
      rate: 8.4
    }
]
```

  contoh output:

```js
[
    {
        title: 'Ibuku bukan Bapakku',
        mainCharacter: 'Tante Erni',
        publisher: 'Indisiir',
        rate: 7.7,
        year: '2014'
    },
    {
        title: 'Balada Jomblo Kebayoaran',
        mainCharacter: 'Vey Ruby Jane',
        publisher: 'KIMPIS TIVI',
        rate: 8.1,
        year: '2017'
    },
    {
        title: 'Dilema tante muda',
        mainCharacter: 'Tante Atien',
        publisher: 'Indisiir',
        rate: 8.3,
        year: '2015'
    },
    {
        title: 'Pembantu cantik itu pacarku',
        mainCharacter: 'Anastasyakh',
        publisher: 'KIMPIS TIVI',
        rate: 8.4,
        year: '2017'
    }
]
```
## `Function seriesCatalogue`
Pada function bantuan ini kalian di minta untuk mengelompokan series berdasarkan publishernya

contoh output:

```js
{
    Indisiir: [
        {
            title: 'Ibuku bukan Bapakku',
            mainCharacter: 'Tante Erni',
            publisher: 'Indisiir',
            rate: 7.7,
            year: '2014'
        },
        {
            title: 'Dilema tante muda',
            mainCharacter: 'Tante Atien',
            publisher: 'Indisiir',
            rate: 8.3,
            year: '2015'
        }
    ]
    'KIMPIS TIVI':[
        {
            title: 'Balada Jomblo Kebayoaran',
            mainCharacter: 'Vey Ruby Jane',
            publisher: 'KIMPIS TIVI',
            rate: 8.1,
            year: '2017'
        },
        {
            title: 'Pembantu cantik itu pacarku',
            mainCharacter: 'Anastasyakh',
            publisher: 'KIMPIS TIVI',
            rate: 8.4,
            year: '2017'
        }
    ]
}
```

## `Function watchSeries`
Pada function utama ini kalian di minta untuk menampilkan series apa yang memiliki rating paling tinggi dari tiap publisher.

contoh output:

```js
  {
    Indisiir: {
        title: 'Dilema tante muda',
        mainCharacter: 'Tante Atien',
        publisher: 'Indisiir',
        rate: 8.3,
        year: '2015'
    },
    'KIMPIS TIVI': {
        title: 'Pembantu cantik itu pacarku',
        mainCharacter: 'Anastasyakh',
        publisher: 'KIMPIS TIVI',
        rate: 8.4,
        year: '2017'
    }
  }
```
---

### Test Case
```js

console.log(watchSeries(series, year))
/*
{
  'DC Comics': {
    title: 'The Flash',
    character: 'Barry Allen',
    year: '2014',
    rate: 7.7
  },
  Marvel: {
    title: 'Daredevil',
    character: 'Matt Murdock',
    year: '2015',
    rate: 8.6
  }
}
*/

```
