function attack(damage) {
    // Code disini
    let perAttack = damage - 2
    return perAttack
}

function damageCalculation(numberOfAttacks, damagePerAttack) {
    // Code disini
    let total = attack(damagePerAttack)
        // console.log(total);
    let output = total * numberOfAttacks
    return output
}

// TEST CASE
console.log(damageCalculation(9, 25)) // 207

console.log(damageCalculation(10, 4)) // 20

console.log(damageCalculation(5, 20)) // 90

module.exports = {
    damageCalculation,
    attack
}