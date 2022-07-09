const { test, expect } = require('@jest/globals')
const Restriction = require('hacktiv8-restriction')
const fileName = '../index.js'
// const { convertToObject, heroBuilder } = require(fileName)
const {convertToObject, heroBuilder } = require('../index')

describe('Hero Builder', ()=>{
    let skillsBook1 = [
        ['Punch',100],
        ['Kick',80],
        ['Headbang',30],
        ['Flick',10]
    ];

    let skillsBook2 = [
        ['Invisibility',300],
        ['Teleportation',150],
        ['Blink',100]
    ];

    test('should return correct answer if there expected object from convertToObject function (5)', ()=>{
        expect(convertToObject([
            ['Punch',100],
            ['Kick',80],
            ['Headbang',30],
            ['Flick',10]
        ])).toEqual({
            Punch:100,
            Kick:80,
            Headbang:30,
            Flick:10,
        })
    })


    test('should return correct answer if there expected object from heroBuilder function (85)', ()=>{
        expect(heroBuilder('Saitama', 100, skillsBook1)).toEqual({
            heroesName: 'Saitama',
            power: 100,
            skill: [ 'Punch' ],
            sisaPower: 0
        })

        expect(heroBuilder('Garou', 150, skillsBook1)).toEqual({
            heroesName: 'Garou',
            power: 150,
            skill: [ 'Punch', 'Headbang', 'Flick' ],
            sisaPower: 10
        })

        expect(heroBuilder('Boros', 200, skillsBook1)).toEqual({
            heroesName: 'Boros',
            power: 200,
            skill: [ 'Punch', 'Kick', 'Flick' ],
            sisaPower: 10
        })


        expect(heroBuilder('Rikimaru', 550, skillsBook2)).toEqual({
            heroesName: 'Rikimaru',
            power: 550,
            skill: [ 'Invisibility', 'Teleportation', 'Blink' ],
            sisaPower: 0
          })
    })

    test('should not return any object if name is empty (5)',()=>{
        expect(heroBuilder('',100, skillsBook1)).toEqual('Invalid Input, please input heroes name and power properly')
    })

    test('should not return any object if power below than 100 (5)', ()=>{
        expect(heroBuilder('Saitama', 90, skillsBook1)).toEqual('Your Heroes is too weak !')
    })

    test('check restriction (-30)', async ()=>{
        const checkRestriction = new Restriction(fileName)
        checkRestriction.rules = ['match', 'split', 'concat', 'search', 'unshift', 'shift']
        const result = await checkRestriction.readCode()
        expect(result).toBe(null)
    })
})
