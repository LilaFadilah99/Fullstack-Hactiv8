function changeMe(arr) {
    // write your code here
    let output = ''
    for (let i = 0; i < arr.length; i++) {
        let people = arr[i]
        let fullName = `1. ${people[0]} ${people[1]}:`
        let value = {
            firstName: people[0],
            lastName: people[1],
            gender: people[2],
            age: people[3]
        }
        if (value.age === undefined) {
            value.age = 'Invalid Birth Year'
        } else {
            value.age = 2021 - value.age
        }
        output = value
        console.log(fullName, output);
    }
    return output
}

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