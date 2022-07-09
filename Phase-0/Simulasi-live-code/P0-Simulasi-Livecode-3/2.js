function getMVP(uniteData) {
    // write your code here
    // console.log(uniteData);
    let output = ''
    let higherGoals = 0
    for (const key in uniteData) {
        let allTrainer = uniteData[key]
        let name = allTrainer.trainer
        let totalGoal = allTrainer.goal

        if (totalGoal > higherGoals) {
            higherGoals = totalGoal
            output = name
        }
        console.log(name);
    }
    console.log(higherGoals);
    console.log(output);
    return output
}

function getTotalPoint(uniteData) {
    // write your code here
    let output = 0
    for (const key in uniteData) {
        let data = uniteData[key]
        output += data.goal

    }
    console.log(output);
    return output
}

function uniteReview(uniteData) {
    // write your code here
    if (uniteData === undefined) {
        return 'Argument for uniteData cannot be empty'
    } else if (uniteData.length === 0) {
        return "There's No Data To Review"
    }
    let mvp = getMVP(uniteData)
    let totalPoint = getTotalPoint(uniteData)
    let output = {
        trainers: [],
        pokemons: [],
        mvp,
        totalGoal: totalPoint
    }

    for (const key in uniteData) {
        let data = uniteData[key]
        output.trainers.push(data.trainer)
        output.pokemons.push(data.pokemon)
    }
    console.log(output);
    return output
}

const data1 = [
    { trainer: "MenangTerus", pokemon: "Pikachu", goal: 45 },
    { trainer: "PakBambang", pokemon: "Crustle", goal: 23 },
    { trainer: "SiapaNih", pokemon: "Cramorant", goal: 54 },
    { trainer: "LaNino", pokemon: "Lucario", goal: 63 },
    { trainer: "GassPoll", pokemon: "Absol", goal: 30 }
]

console.log(uniteReview(data1))

/**
{
    trainers: ["MenangTerus", "PakBambang", "SiapaNih", "LaNino", "GassPoll"],
    pokemons: ["Pikachu", "Crustle", "Cramorant", "Lucario", "Absol"],
    mvp: "LaNino",
    totalGoal: 215
}
*/

const data2 = [
    { trainer: "HiddenPerson", pokemon: "Charizard", goal: 80 },
    { trainer: "PlayerBiasa", pokemon: "Talonflame", goal: 65 },
    { trainer: "__Reff", pokemon: "Venusaur", goal: 81 },
    { trainer: "Arggggg", pokemon: "Snorlax", goal: 63 },
    { trainer: "sendal_jepit", pokemon: "Wigglytuff", goal: 60 }
]

// console.log(uniteReview(data2))
/**
{
    trainers: ['HiddenPerson', 'PlayerBiasa', '__Reff', 'Arggggg', 'sendal_jepit'],
    pokemons: [ 'Charizard', 'Talonflame', 'Venusaur', 'Snorlax', 'Wigglytuff' ],
    mvp: '__Reff',
    totalGoal: 349
}
 */

console.log(uniteReview([])) // "There's No Data To Review"
console.log(uniteReview()) // "Argument for uniteData cannot be empty"