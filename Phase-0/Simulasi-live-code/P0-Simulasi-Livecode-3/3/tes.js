function getMVP(uniteData) {
    // write your code here
    let highGoal = 0 //63
    let output = ''
    for (const unite of uniteData) {
        let name = unite.trainer
        let goal = unite.goal

        if (goal > highGoal) {
            highGoal = goal //63
            output = name
        }
    }
    console.log(output);
    return output
}

function getTotalPoint(uniteData) {
    // write your code here
    let result = 0
    for (const point of uniteData) {
        let goal = point.goal
        result += goal

    }
    console.log(result);
    return result
}

function uniteReview(uniteData) {
    // write your code here
    let mvp = getMVP(uniteData)
    let totalPoint = getTotalPoint(uniteData)
    let result = {
        trainers: [],
        pokemons: [],
        mvp: mvp,
        totalGoal: totalPoint
    }
    for (const data of uniteData) {
        result.trainers.push(data.trainer)
        result.pokemons.push(data.pokemon)
    }
    console.log(result);
    return result
}

const data1 = [
    { trainer: "MenangTerus", pokemon: "Pikachu", goal: 45 },
    { trainer: "PakBambang", pokemon: "Crustle", goal: 23 },
    { trainer: "SiapaNih", pokemon: "Cramorant", goal: 54 },
    { trainer: "LaNino", pokemon: "Lucario", goal: 63 },
    { trainer: "GassPoll", pokemon: "Absol", goal: 30 }
]

console.log(uniteReview(data1))