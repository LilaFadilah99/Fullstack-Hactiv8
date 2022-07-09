/*
SERIES LIST AND RECOMENDATION

Kali ini Anton lagi kebingungan untuk milih series superhero apa yang mau ia tonton, terdapat list series yang berupa Array of Objects, yang isinya title, main character, publisher dan rating seriesnya. kalian diminta untuk membantu Anton untuk menampilkan setiap series berdasarkan publisher dan rekomendasikan series berdasarkan rating terbesar dari masing-masing publihser.

kalian diberikan 3 buah function sebagai berikut: 
1. addYear
  pada function ini kalian diminta menambahkan tahun yang terdapat pada variable year ke list yang terdapat pada variable series
2. seriesCatalogue
  pada function ini kalian di minta untuk mengelompokan series berdasarkan publishernya
3. watchSeries.
  pada function ini kalian di minta untuk memanggil function addyear dan seriesCatalogue serta menampilkan series apa yang memiliki rating paling tinggi dari tiap publisher.

Restriction:
 DILARANG menggunakan built-in function selain .push()

*/
let year = ['2014', '2017', '2015', '2017', '2015', '2012', '2015', '2019', '2016', '2018']

let series = [{
        title: 'The Flash',
        mainCharacter: 'Barry Allen',
        publisher: 'DC Comics',
        rate: 7.7
    },
    {
        title: 'The Punisher',
        mainCharacter: 'Frank Castle',
        publisher: 'Marvel',
        rate: 8.5
    },
    {
        title: 'Supergirl',
        mainCharacter: 'Kara Zor‑El',
        publisher: 'DC Comics',
        rate: 6.3
    },
    {
        title: 'Iron Fist',
        mainCharacter: 'Danny Rand',
        publisher: 'Marvel',
        rate: 6.5
    },
    {
        title: 'Jessica Jones',
        mainCharacter: 'Jessica Jones',
        publisher: 'Marvel',
        rate: 7.9
    },
    {
        title: 'Arrow',
        mainCharacter: 'Oliver Queen',
        publisher: 'DC Comics',
        rate: 7.5
    },
    {
        title: 'Daredevil',
        mainCharacter: 'Matt Murdock',
        publisher: 'Marvel',
        rate: 8.6
    },
    {
        title: 'Batwoman',
        mainCharacter: 'Kate Kane',
        publisher: 'DC Comics',
        rate: 3.5
    },
    {
        title: 'Luke Cage',
        mainCharacter: 'Luke Cage',
        publisher: 'Marvel',
        rate: 7.3
    },
    {
        title: 'Black Lightning',
        mainCharacter: 'Jefferson Pierce',
        publisher: 'DC Comics',
        rate: 6.1
    }
]

function addYear(list, year) {
    let output = []

    for (let i = 0; i < list.length; i++) {
        let series = list[i]
        series['year'] = year[i]
        output.push(series)
    }
    console.log(output);
    return output

}


console.log(addYear(series, year));

function seriesCatalogue(seriesInfo) {
    let output = {}
    for (let i = 0; i < seriesInfo.length; i++) {
        console.log(seriesInfo[i]);
        let series = seriesInfo[i]
        let info = series.publisher

        if (output[info] === undefined) {
            output[info] = []
        }
        output[info].push(series)

    }
    console.log(output);
    return output
}

function watchSeries(seriesList, year) {
    let output = {}
    let max = 0

    for (let i = 0; i < series.length; i++) {
        let series = seriesList[i]
        let rate = series.rate
        let years = addYear(seriesList, year)
        let catalogue = seriesCatalogue(years)
        let title = years[i].title
        let tahun = years[i].year
        let character = years[i].mainCharacter
        console.log(character);
        //LANJUT BESOK PAGI. UDAH NGANTUK
        for (const key in catalogue) {
            if (max < rate) {
                if (series.publisher === key) {
                    max = rate
                    output[key] = {
                        title: title,
                        character: character,
                        year: tahun,
                        rate: max
                    }
                }
            }
        }
    }

    console.log(output);
    return output
}

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

module.exports = {
    addYear,
    seriesCatalogue,
    watchSeries
}