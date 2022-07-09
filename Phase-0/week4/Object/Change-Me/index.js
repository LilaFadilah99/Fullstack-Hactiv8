function changeMe(arr) {
    // write your code here
    if (arr.length === 0) {
        console.log("");
    }

    let temp = {}
    let fullName = ''
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            fullName = (i + 1) + '.' + ' ' + arr[i][0] + ' ' + arr[i][1] + ':'
            let firstName = arr[i][0]
            let lastName = arr[i][1]
            let gender = arr[i][2]
            let age = arr[i][3]
            if (age === undefined) {
                age = 'Invalid Birth Year'
            } else {
                age = 2021 - age
            }
            temp = { firstName, lastName, gender, age }


        }
        console.log(fullName, temp);
    }



}
// ==========================================
// console.log(changeMe([
//     ['Christ', 'Evans', 'Male', 1982],
//     ['Robert', 'Downey', 'Male']
// ]));

changeMe([
        ['Christ', 'Evans', 'Male', 1982],
        ['Robert', 'Downey', 'Male']
    ])
    // 1. Christ Evans:
    // { firstName: 'Christ',
    //   lastName: 'Evans',
    //   gender: 'Male',
    //   age: 39 }
    // 2. Robert Downey:
    // { firstName: 'Robert',
    //   lastName: 'Downey',
    //   gender: 'Male',
    //   age: 'Invalid Birth Year' }
    // ==========================================
changeMe([]) // ""

module.exports = changeMe