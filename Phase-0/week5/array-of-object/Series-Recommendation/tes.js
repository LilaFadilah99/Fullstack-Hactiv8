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
    // {
    //     title: 'Arrow',
    //     mainCharacter: 'Oliver Queen',
    //     publisher: 'DC Comics',
    //     rate: 7.5
    // },
    // {
    //     title: 'Daredevil',
    //     mainCharacter: 'Matt Murdock',
    //     publisher: 'Marvel',
    //     rate: 8.6
    // },
    // {
    //     title: 'Batwoman',
    //     mainCharacter: 'Kate Kane',
    //     publisher: 'DC Comics',
    //     rate: 3.5
    // },
    // {
    //     title: 'Luke Cage',
    //     mainCharacter: 'Luke Cage',
    //     publisher: 'Marvel',
    //     rate: 7.3
    // },
    // {
    //     title: 'Black Lightning',
    //     mainCharacter: 'Jefferson Pierce',
    //     publisher: 'DC Comics',
    //     rate: 6.1
    // }
]

function addYear(list, year) {
    let output = []
    console.log(list);
    for (const key in list) {
        let allList = list[key]
        allList['year'] = year[key]
        output.push(allList)
    }
    console.log(output);
    return output
}


console.log(addYear(series, year));

function seriesCatalogue(seriesInfo) {
    let output = {}
    for (const key in seriesInfo) {
        let series = seriesInfo[key]
            //    console.log(series);
        let publish = series.publisher
        console.log(publish);

        if (output[publish] === undefined) {
            output[publish] = []
        }
        output[publish].push(series)


    }
    console.log(output);

}

function watchSeries(seriesList, year) {
    let output = {}
    let max = 0
    let years = addYear(seriesList, year)
    let catalogue = seriesCatalogue(years)
    for (const key in seriesList) {
        let series = seriesList[key]
        console.log(series);
        let title = series.title
        let character = years[key].year
        let year = years[key].year
        let rate = series.rate
        let publish = series.publisher
        console.log(publish);


    }

}

console.log(watchSeries(series, year))