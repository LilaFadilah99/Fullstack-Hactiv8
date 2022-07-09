function convertToObject(array) {
    console.log(array);
    let output = {}
    for (let i = 0; i < array.length; i++) {
        let arr = array[i]
        console.log(arr[1]);
        output[arr[0]] = arr[1]
    }
    console.log(output);
    return output

}

function heroBuilder(name, power, skillsBook) {
    /*
    listSkill akan menjadi seperti,
    
    listSkill = {
        'Punch':100,
        'Kick':80,
        'Headbang':30,
        'Flick':10,
    }
    */
    if (!name || !power) {
        return 'Invalid Input, please input heroes name and power properly'
    } else if (power < 100) {
        return 'Your Heroes is too weak !'
    }
    let skills = convertToObject(skillsBook)
    console.log(skills);

    let output = {
        heroesName: name,
        power: power,
        skill: [],
        sisaPower: 0
    }

    let svPower = power

    for (const key in skills) {
        let allSkill = skills[key]

        if (svPower >= allSkill) {
            svPower -= allSkill
            output.sisaPower = svPower
            output.skill.push(key)
        }

    }
    console.log(output);
    return output
}

let skillsBook1 = [
    ['Punch', 100],
    ['Kick', 80],
    ['Headbang', 30],
    ['Flick', 10]
];

let skillsBook2 = [
    ['Invisibility', 300],
    ['Teleportation', 150],
    ['Blink', 100]
];

console.log(heroBuilder('Saitama', 100, skillsBook1))
    /*
    {
        heroesName: 'Saitama',
        power: 100,
        skill: [ 'Punch' ],
        sisaPower: 0
    }
    */
    // console.log(heroBuilder('Garou', 150, skillsBook1))
    /*
    {
        heroesName': 'Garou',
        power: 150,
        skill: [ 'Punch', 'Headbang', 'Flick' ],
        sisa Power': 10
    }
    */
    // console.log(heroBuilder('Boros', 200, skillsBook1))

/*
{
    heroesName: 'Boros',
    power: 200,
    skill: [ 'Punch', 'Kick', 'Flick' ],
    sisaPower': 10
}
*/

// console.log(heroBuilder('Rikimaru', 550, skillsBook2))

/*
{
  heroesName: 'Rikimaru',
  power: 550,
  skill: [ 'Invisibility', 'Teleportation', 'Blink' ],
  sisaPower: 0
}
*/

// console.log(heroBuilder('Hancock', 110, skillsBook2))

/*
{
  heroesName: 'Hancock',
  power: 110,
  skill: [ 'Blink' ],
  sisaPower: 10
}
*/


console.log(heroBuilder('', 100, skillsBook1))
    /*
    'Invalid Input, please input heroes name and power properly'
    */

console.log(heroBuilder('Saitama', 90, skillsBook1))
    /*
    'Your Heroes is too weak !'
    */



module.exports = {
    convertToObject,
    heroBuilder
}