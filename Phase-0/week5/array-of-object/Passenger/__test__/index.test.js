const Restriction = require('hacktiv8-restriction')
const { getPassengers, getDistance, paymentInfo, getDropped, transportation } = require('../index.js')

describe('Transportation', () => {
  describe('getPassengers', () => {
    it('should return correct output', () => {
      let result1 = getPassengers([
          "Aby,offBoard,E,G,Gold",
          "Bela,offBoard,E,F,Silver",
          "Kany,offBoard,E,S,Silver",
          "Sunny,offBoard,F,G,Gold",
          "Shew,offBoard,F,H,Silver",
          "Opp,offBoard,F,U,Silver"
      ])

      let result2 = getPassengers([
          "Aby,offBoard,H,L,Gold",
          "Bela,offBoard,H,M,Silver",
          "Kany,offBoard,H,U,Silver",
          "Sunny,offBoard,J,K,Gold",
          "Shew,offBoard,J,X,Silver",
          "Opp,offBoard,J,U,Silver"
      ])

      expect(result1).toEqual([
        {
          name: 'Aby',
          status: 'offBoard',
          up: 'E',
          land: 'G',
          member: 'Gold'
        },
        {
          name: 'Bela',
          status: 'offBoard',
          up: 'E',
          land: 'F',
          member: 'Silver'
        },
        {
          name: 'Kany',
          status: 'offBoard',
          up: 'E',
          land: 'S',
          member: 'Silver'
        },
        {
          name: 'Sunny',
          status: 'offBoard',
          up: 'F',
          land: 'G',
          member: 'Gold'
        },
        {
          name: 'Shew',
          status: 'offBoard',
          up: 'F',
          land: 'H',
          member: 'Silver'
        },
        {
          name: 'Opp',
          status: 'offBoard',
          up: 'F',
          land: 'U',
          member: 'Silver'
        }
      ])

      expect(result2).toEqual([
        {
          name: 'Aby',
          status: 'offBoard',
          up: 'H',
          land: 'L',
          member: 'Gold'
        },
        {
          name: 'Bela',
          status: 'offBoard',
          up: 'H',
          land: 'M',
          member: 'Silver'
        },
        {
          name: 'Kany',
          status: 'offBoard',
          up: 'H',
          land: 'U',
          member: 'Silver'
        },
        {
          name: 'Sunny',
          status: 'offBoard',
          up: 'J',
          land: 'K',
          member: 'Gold'
        },
        {
          name: 'Shew',
          status: 'offBoard',
          up: 'J',
          land: 'X',
          member: 'Silver'
        },
        {
          name: 'Opp',
          status: 'offBoard',
          up: 'J',
          land: 'U',
          member: 'Silver'
        }
      ])
    })
  })

  describe('getDistance', () => {
    it('should return correct output', () => {
      let result1 = getDistance([
        {
          name: 'Aby',
          status: 'offBoard',
          up: 'E',
          land: 'G',
          member: 'Gold'
        },
        {
          name: 'Bela',
          status: 'offBoard',
          up: 'E',
          land: 'F',
          member: 'Silver'
        },
        {
          name: 'Kany',
          status: 'offBoard',
          up: 'E',
          land: 'S',
          member: 'Silver'
        },
        {
          name: 'Sunny',
          status: 'offBoard',
          up: 'F',
          land: 'G',
          member: 'Gold'
        },
        {
          name: 'Shew',
          status: 'offBoard',
          up: 'F',
          land: 'H',
          member: 'Silver'
        },
        {
          name: 'Opp',
          status: 'offBoard',
          up: 'F',
          land: 'U',
          member: 'Silver'
        }
      ])

      let result2 = getDistance([
        {
          name: 'Aby',
          status: 'offBoard',
          up: 'H',
          land: 'L',
          member: 'Gold'
        },
        {
          name: 'Bela',
          status: 'offBoard',
          up: 'H',
          land: 'M',
          member: 'Silver'
        },
        {
          name: 'Kany',
          status: 'offBoard',
          up: 'H',
          land: 'U',
          member: 'Silver'
        },
        {
          name: 'Sunny',
          status: 'offBoard',
          up: 'J',
          land: 'K',
          member: 'Gold'
        },
        {
          name: 'Shew',
          status: 'offBoard',
          up: 'J',
          land: 'X',
          member: 'Silver'
        },
        {
          name: 'Opp',
          status: 'offBoard',
          up: 'J',
          land: 'U',
          member: 'Silver'
        }
      ])

      expect(result1).toEqual([
        {
          name: 'Aby',
          status: 'offBoard',
          up: 'E',
          land: 'G',
          member: 'Gold',
          distance: 2
        },
        {
          name: 'Bela',
          status: 'offBoard',
          up: 'E',
          land: 'F',
          member: 'Silver',
          distance: 1
        },
        {
          name: 'Kany',
          status: 'offBoard',
          up: 'E',
          land: 'S',
          member: 'Silver',
          distance: 14
        },
        {
          name: 'Sunny',
          status: 'offBoard',
          up: 'F',
          land: 'G',
          member: 'Gold',
          distance: 1
        },
        {
          name: 'Shew',
          status: 'offBoard',
          up: 'F',
          land: 'H',
          member: 'Silver',
          distance: 2
        },
        {
          name: 'Opp',
          status: 'offBoard',
          up: 'F',
          land: 'U',
          member: 'Silver',
          distance: 15
        }
      ])

      expect(result2).toEqual([
        {
          name: 'Aby',
          status: 'offBoard',
          up: 'H',
          land: 'L',
          member: 'Gold',
          distance: 4
        },
        {
          name: 'Bela',
          status: 'offBoard',
          up: 'H',
          land: 'M',
          member: 'Silver',
          distance: 5
        },
        {
          name: 'Kany',
          status: 'offBoard',
          up: 'H',
          land: 'U',
          member: 'Silver',
          distance: 13
        },
        {
          name: 'Sunny',
          status: 'offBoard',
          up: 'J',
          land: 'K',
          member: 'Gold',
          distance: 1
        },
        {
          name: 'Shew',
          status: 'offBoard',
          up: 'J',
          land: 'X',
          member: 'Silver',
          distance: 14
        },
        {
          name: 'Opp',
          status: 'offBoard',
          up: 'J',
          land: 'U',
          member: 'Silver',
          distance: 11
        }
      ])
    })
  })

  describe('paymentInfo', () => {
    it('should return correct output', () => {
      let result1 = paymentInfo([
        {
          name: 'Aby',
          status: 'offBoard',
          up: 'E',
          land: 'G',
          member: 'Gold',
          distance: 2
        },
        {
          name: 'Bela',
          status: 'offBoard',
          up: 'E',
          land: 'F',
          member: 'Silver',
          distance: 1
        },
        {
          name: 'Kany',
          status: 'offBoard',
          up: 'E',
          land: 'S',
          member: 'Silver',
          distance: 14
        },
        {
          name: 'Sunny',
          status: 'offBoard',
          up: 'F',
          land: 'G',
          member: 'Gold',
          distance: 1
        },
        {
          name: 'Shew',
          status: 'offBoard',
          up: 'F',
          land: 'H',
          member: 'Silver',
          distance: 2
        },
        {
          name: 'Opp',
          status: 'offBoard',
          up: 'F',
          land: 'U',
          member: 'Silver',
          distance: 15
        }
      ])

      let result2 = paymentInfo([
        {
          name: 'Aby',
          status: 'offBoard',
          up: 'H',
          land: 'L',
          member: 'Gold',
          distance: 4
        },
        {
          name: 'Bela',
          status: 'offBoard',
          up: 'H',
          land: 'M',
          member: 'Silver',
          distance: 5
        },
        {
          name: 'Kany',
          status: 'offBoard',
          up: 'H',
          land: 'U',
          member: 'Silver',
          distance: 13
        },
        {
          name: 'Sunny',
          status: 'offBoard',
          up: 'J',
          land: 'K',
          member: 'Gold',
          distance: 1
        },
        {
          name: 'Shew',
          status: 'offBoard',
          up: 'J',
          land: 'X',
          member: 'Silver',
          distance: 14
        },
        {
          name: 'Opp',
          status: 'offBoard',
          up: 'J',
          land: 'U',
          member: 'Silver',
          distance: 11
        }
      ])

      expect(result1).toEqual([
        {
          name: 'Aby',
          status: 'offBoard',
          up: 'E',
          land: 'G',
          member: 'Gold',
          distance: 2,
          pay: 6400
        },
        {
          name: 'Bela',
          status: 'offBoard',
          up: 'E',
          land: 'F',
          member: 'Silver',
          distance: 1,
          pay: 3500
        },
        {
          name: 'Kany',
          status: 'offBoard',
          up: 'E',
          land: 'S',
          member: 'Silver',
          distance: 14,
          pay: 49000
        },
        {
          name: 'Sunny',
          status: 'offBoard',
          up: 'F',
          land: 'G',
          member: 'Gold',
          distance: 1,
          pay: 3200
        },
        {
          name: 'Shew',
          status: 'offBoard',
          up: 'F',
          land: 'H',
          member: 'Silver',
          distance: 2,
          pay: 7000
        },
        {
          name: 'Opp',
          status: 'offBoard',
          up: 'F',
          land: 'U',
          member: 'Silver',
          distance: 15,
          pay: 52500
        }
      ])

      expect(result2).toEqual([
        {
          name: 'Aby',
          status: 'offBoard',
          up: 'H',
          land: 'L',
          member: 'Gold',
          distance: 4,
          pay: 12800
        },
        {
          name: 'Bela',
          status: 'offBoard',
          up: 'H',
          land: 'M',
          member: 'Silver',
          distance: 5,
          pay: 17500
        },
        {
          name: 'Kany',
          status: 'offBoard',
          up: 'H',
          land: 'U',
          member: 'Silver',
          distance: 13,
          pay: 45500
        },
        {
          name: 'Sunny',
          status: 'offBoard',
          up: 'J',
          land: 'K',
          member: 'Gold',
          distance: 1,
          pay: 3200
        },
        {
          name: 'Shew',
          status: 'offBoard',
          up: 'J',
          land: 'X',
          member: 'Silver',
          distance: 14,
          pay: 49000
        },
        {
          name: 'Opp',
          status: 'offBoard',
          up: 'J',
          land: 'U',
          member: 'Silver',
          distance: 11,
          pay: 38500
        }
      ])
    })
  })

  describe('getDropped', () => {
    it('should return correct output', () => {
      let result1 = getDropped([
        {
          name: 'Aby',
          status: 'offBoard',
          up: 'E',
          land: 'G',
          member: 'Gold',
          distance: 2,
          pay: 6400
        },
        {
          name: 'Bela',
          status: 'offBoard',
          up: 'E',
          land: 'F',
          member: 'Silver',
          distance: 1,
          pay: 3500
        },
        {
          name: 'Kany',
          status: 'offBoard',
          up: 'E',
          land: 'S',
          member: 'Silver',
          distance: 14,
          pay: 49000
        },
        {
          name: 'Sunny',
          status: 'offBoard',
          up: 'F',
          land: 'G',
          member: 'Gold',
          distance: 1,
          pay: 3200
        },
        {
          name: 'Shew',
          status: 'offBoard',
          up: 'F',
          land: 'H',
          member: 'Silver',
          distance: 2,
          pay: 7000
        },
        {
          name: 'Opp',
          status: 'offBoard',
          up: 'F',
          land: 'U',
          member: 'Silver',
          distance: 15,
          pay: 52500
        }
      ])

      let result2 = getDropped([
        {
          name: 'Aby',
          status: 'offBoard',
          up: 'H',
          land: 'L',
          member: 'Gold',
          distance: 4,
          pay: 12800
        },
        {
          name: 'Bela',
          status: 'offBoard',
          up: 'H',
          land: 'M',
          member: 'Silver',
          distance: 5,
          pay: 17500
        },
        {
          name: 'Kany',
          status: 'offBoard',
          up: 'H',
          land: 'U',
          member: 'Silver',
          distance: 13,
          pay: 45500
        },
        {
          name: 'Sunny',
          status: 'offBoard',
          up: 'J',
          land: 'K',
          member: 'Gold',
          distance: 1,
          pay: 3200
        },
        {
          name: 'Shew',
          status: 'offBoard',
          up: 'J',
          land: 'X',
          member: 'Silver',
          distance: 14,
          pay: 49000
        },
        {
          name: 'Opp',
          status: 'offBoard',
          up: 'J',
          land: 'U',
          member: 'Silver',
          distance: 11,
          pay: 38500
        }
      ])

      expect(result1).toEqual({
        G: [
          {
            name: 'Aby',
            status: 'offBoard',
            up: 'E',
            land: 'G',
            member: 'Gold',
            distance: 2,
            pay: 6400
          },
          {
            name: 'Sunny',
            status: 'offBoard',
            up: 'F',
            land: 'G',
            member: 'Gold',
            distance: 1,
            pay: 3200
          }
        ],
        F: [
          {
            name: 'Bela',
            status: 'offBoard',
            up: 'E',
            land: 'F',
            member: 'Silver',
            distance: 1,
            pay: 3500
          }
        ],
        S: [
          {
            name: 'Kany',
            status: 'offBoard',
            up: 'E',
            land: 'S',
            member: 'Silver',
            distance: 14,
            pay: 49000
          }
        ],
        H: [
          {
            name: 'Shew',
            status: 'offBoard',
            up: 'F',
            land: 'H',
            member: 'Silver',
            distance: 2,
            pay: 7000
          }
        ],
        U: [
          {
            name: 'Opp',
            status: 'offBoard',
            up: 'F',
            land: 'U',
            member: 'Silver',
            distance: 15,
            pay: 52500
          }
        ]
      })

      expect(result2).toEqual({
        L: [
          {
            name: 'Aby',
            status: 'offBoard',
            up: 'H',
            land: 'L',
            member: 'Gold',
            distance: 4,
            pay: 12800
          }
        ],
        M: [
          {
            name: 'Bela',
            status: 'offBoard',
            up: 'H',
            land: 'M',
            member: 'Silver',
            distance: 5,
            pay: 17500
          }
        ],
        U: [
          {
            name: 'Kany',
            status: 'offBoard',
            up: 'H',
            land: 'U',
            member: 'Silver',
            distance: 13,
            pay: 45500
          },
          {
            name: 'Opp',
            status: 'offBoard',
            up: 'J',
            land: 'U',
            member: 'Silver',
            distance: 11,
            pay: 38500
          }
        ],
        K: [
          {
            name: 'Sunny',
            status: 'offBoard',
            up: 'J',
            land: 'K',
            member: 'Gold',
            distance: 1,
            pay: 3200
          }
        ],
        X: [
          {
            name: 'Shew',
            status: 'offBoard',
            up: 'J',
            land: 'X',
            member: 'Silver',
            distance: 14,
            pay: 49000
          }
        ]
      })
    })
  })

  describe('transportation', () => {
    it('should return correct output', () => {
      let result1 = transportation([
          "Aby,offBoard,E,G,Gold",
          "Bela,offBoard,E,F,Silver",
          "Kany,offBoard,E,S,Silver",
          "Sunny,offBoard,F,G,Gold",
          "Shew,offBoard,F,H,Silver",
          "Opp,offBoard,F,U,Silver"
      ])

      let result2 = transportation([
          "Aby,offBoard,H,L,Gold",
          "Bela,offBoard,H,M,Silver",
          "Kany,offBoard,H,U,Silver",
          "Sunny,offBoard,J,K,Gold",
          "Shew,offBoard,J,X,Silver",
          "Opp,offBoard,J,U,Silver"
      ])

      expect(result1).toEqual({
        G: [
          {
            name: 'Aby',
            status: 'offBoard',
            up: 'E',
            land: 'G',
            member: 'Gold',
            distance: 2,
            pay: 6400
          },
          {
            name: 'Sunny',
            status: 'offBoard',
            up: 'F',
            land: 'G',
            member: 'Gold',
            distance: 1,
            pay: 3200
          }
        ],
        F: [
          {
            name: 'Bela',
            status: 'offBoard',
            up: 'E',
            land: 'F',
            member: 'Silver',
            distance: 1,
            pay: 3500
          }
        ],
        S: [
          {
            name: 'Kany',
            status: 'offBoard',
            up: 'E',
            land: 'S',
            member: 'Silver',
            distance: 14,
            pay: 49000
          }
        ],
        H: [
          {
            name: 'Shew',
            status: 'offBoard',
            up: 'F',
            land: 'H',
            member: 'Silver',
            distance: 2,
            pay: 7000
          }
        ],
        U: [
          {
            name: 'Opp',
            status: 'offBoard',
            up: 'F',
            land: 'U',
            member: 'Silver',
            distance: 15,
            pay: 52500
          }
        ]
      })

      expect(result2).toEqual({
        L: [
          {
            name: 'Aby',
            status: 'offBoard',
            up: 'H',
            land: 'L',
            member: 'Gold',
            distance: 4,
            pay: 12800
          }
        ],
        M: [
          {
            name: 'Bela',
            status: 'offBoard',
            up: 'H',
            land: 'M',
            member: 'Silver',
            distance: 5,
            pay: 17500
          }
        ],
        U: [
          {
            name: 'Kany',
            status: 'offBoard',
            up: 'H',
            land: 'U',
            member: 'Silver',
            distance: 13,
            pay: 45500
          },
          {
            name: 'Opp',
            status: 'offBoard',
            up: 'J',
            land: 'U',
            member: 'Silver',
            distance: 11,
            pay: 38500
          }
        ],
        K: [
          {
            name: 'Sunny',
            status: 'offBoard',
            up: 'J',
            land: 'K',
            member: 'Gold',
            distance: 1,
            pay: 3200
          }
        ],
        X: [
          {
            name: 'Shew',
            status: 'offBoard',
            up: 'J',
            land: 'X',
            member: 'Silver',
            distance: 14,
            pay: 49000
          }
        ]
      })
    })
  })
})

it('should check restriction rules', async () => {
  const checkRestriction = new Restriction('../index.js')
  const restrictedUse = await checkRestriction.readCode()
  expect(restrictedUse).toBe(null)
})
