const Restriction = require('hacktiv8-restriction')
const fileName = '../index.js'
const { addYear, seriesCatalogue, watchSeries } = require(fileName)

describe('Series list and recomendation', () => {
  let year = ['2014', '2017', '2015', '2017', '2015', '2012', '2015', '2019', '2016', '2018']

  let series = [
    {
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

  test('Mampu memasukan tahun kedalam data list series (10)', () => {
    expect(addYear(series, year)).toEqual([
      {
        title: 'The Flash',
        mainCharacter: 'Barry Allen',
        publisher: 'DC Comics',
        rate: 7.7,
        year: '2014'
      },
      {
        title: 'The Punisher',
        mainCharacter: 'Frank Castle',
        publisher: 'Marvel',
        rate: 8.5,
        year: '2017'
      },
      {
        title: 'Supergirl',
        mainCharacter: 'Kara Zor‑El',
        publisher: 'DC Comics',
        rate: 6.3,
        year: '2015'
      },
      {
        title: 'Iron Fist',
        mainCharacter: 'Danny Rand',
        publisher: 'Marvel',
        rate: 6.5,
        year: '2017'
      },
      {
        title: 'Jessica Jones',
        mainCharacter: 'Jessica Jones',
        publisher: 'Marvel',
        rate: 7.9,
        year: '2015'
      },
      {
        title: 'Arrow',
        mainCharacter: 'Oliver Queen',
        publisher: 'DC Comics',
        rate: 7.5,
        year: '2012'
      },
      {
        title: 'Daredevil',
        mainCharacter: 'Matt Murdock',
        publisher: 'Marvel',
        rate: 8.6,
        year: '2015'
      },
      {
        title: 'Batwoman',
        mainCharacter: 'Kate Kane',
        publisher: 'DC Comics',
        rate: 3.5,
        year: '2019'
      },
      {
        title: 'Luke Cage',
        mainCharacter: 'Luke Cage',
        publisher: 'Marvel',
        rate: 7.3,
        year: '2016'
      },
      {
        title: 'Black Lightning',
        mainCharacter: 'Jefferson Pierce',
        publisher: 'DC Comics',
        rate: 6.1,
        year: '2018'
      }
    ])
  })

  test('Mampu membuat objek dan mengelompokan series berdasarkan publishernya (35)', () => {
    let seriesInfo = [
      {
        title: 'The Flash',
        mainCharacter: 'Barry Allen',
        publisher: 'DC Comics',
        rate: 7.7,
        year: '2014'
      },
      {
        title: 'The Punisher',
        mainCharacter: 'Frank Castle',
        publisher: 'Marvel',
        rate: 8.5,
        year: '2017'
      },
      {
        title: 'Supergirl',
        mainCharacter: 'Kara Zor‑El',
        publisher: 'DC Comics',
        rate: 6.3,
        year: '2015'
      },
      {
        title: 'Iron Fist',
        mainCharacter: 'Danny Rand',
        publisher: 'Marvel',
        rate: 6.5,
        year: '2017'
      },
      {
        title: 'Jessica Jones',
        mainCharacter: 'Jessica Jones',
        publisher: 'Marvel',
        rate: 7.9,
        year: '2015'
      },
      {
        title: 'Arrow',
        mainCharacter: 'Oliver Queen',
        publisher: 'DC Comics',
        rate: 7.5,
        year: '2012'
      },
      {
        title: 'Daredevil',
        mainCharacter: 'Matt Murdock',
        publisher: 'Marvel',
        rate: 8.6,
        year: '2015'
      },
      {
        title: 'Batwoman',
        mainCharacter: 'Kate Kane',
        publisher: 'DC Comics',
        rate: 3.5,
        year: '2019'
      },
      {
        title: 'Luke Cage',
        mainCharacter: 'Luke Cage',
        publisher: 'Marvel',
        rate: 7.3,
        year: '2016'
      },
      {
        title: 'Black Lightning',
        mainCharacter: 'Jefferson Pierce',
        publisher: 'DC Comics',
        rate: 6.1,
        year: '2018'
      }
    ]
    expect(seriesCatalogue(seriesInfo)).toEqual({
      'DC Comics': [
        {
          title: 'The Flash',
          mainCharacter: 'Barry Allen',
          publisher: 'DC Comics',
          rate: 7.7,
          year: '2014'
        },
        {
          title: 'Supergirl',
          mainCharacter: 'Kara Zor‑El',
          publisher: 'DC Comics',
          rate: 6.3,
          year: '2015'
        },
        {
          title: 'Arrow',
          mainCharacter: 'Oliver Queen',
          publisher: 'DC Comics',
          rate: 7.5,
          year: '2012'
        },
        {
          title: 'Batwoman',
          mainCharacter: 'Kate Kane',
          publisher: 'DC Comics',
          rate: 3.5,
          year: '2019'
        },
        {
          title: 'Black Lightning',
          mainCharacter: 'Jefferson Pierce',
          publisher: 'DC Comics',
          rate: 6.1,
          year: '2018'
        }
      ],
      Marvel: [
        {
          title: 'The Punisher',
          mainCharacter: 'Frank Castle',
          publisher: 'Marvel',
          rate: 8.5,
          year: '2017'
        },
        {
          title: 'Iron Fist',
          mainCharacter: 'Danny Rand',
          publisher: 'Marvel',
          rate: 6.5,
          year: '2017'
        },
        {
          title: 'Jessica Jones',
          mainCharacter: 'Jessica Jones',
          publisher: 'Marvel',
          rate: 7.9,
          year: '2015'
        },
        {
          title: 'Daredevil',
          mainCharacter: 'Matt Murdock',
          publisher: 'Marvel',
          rate: 8.6,
          year: '2015'
        },
        {
          title: 'Luke Cage',
          mainCharacter: 'Luke Cage',
          publisher: 'Marvel',
          rate: 7.3,
          year: '2016'
        }
      ]
    })
  })

  test('Mampu membuat objek dan mengelompokan serta mencari nilai tertinggi series berdasarkan publishernya (35)', () => {
    expect(watchSeries(series, year)).toEqual({
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
    })
  })

  test('check restriction (-30)', async () => {
    const checkRestriction = new Restriction(fileName);
    checkRestriction.rules = ['match', 'split', 'concat', 'search', 'unshift', 'shift']
    const result = await checkRestriction.readCode();
    expect(result).toBe(null);
  })
})