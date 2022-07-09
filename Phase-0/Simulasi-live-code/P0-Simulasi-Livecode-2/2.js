function getNumber(num) {
    // Write your code here
    let output = num[3] + num[4]

    return output
}
console.log(getNumber("JS-07")); // '07'

function groupingByRoute(numbers) {
    // Write your code here
    let output = {
        'Jakarta Pusat': [],
        'Jakarta Barat': [],
        'Jakarta Utara': [],
        'Jakarta Timur': [],
        'Jakarta Selatan': []
    }

    for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i]);
        let platNumbers = numbers[i]
        let plat = getNumber(platNumbers)
        console.log(plat);
        let platCode = numbers[i][0] + numbers[i][1]
        console.log(platCode);

        switch (platCode) {
            case 'JP':
                output["Jakarta Pusat"].push(plat)
                break;

            case 'JB':
                output["Jakarta Barat"].push(plat)
                break;

            case 'JU':
                output["Jakarta Utara"].push(plat)
                break;

            case 'JT':
                output["Jakarta Timur"].push(plat)
                break;

            case 'JS':
                output["Jakarta Selatan"].push(plat)
                break;

        }
    }

    return output
}




const numbers = [
    'JP-07', 'JS-01', 'JU-03', 'JB-09', 'JT-11',
    'JT-02', 'JU-20', 'JS-14', 'JB-88', 'JP-22',
    'JB-87', 'JS-07', 'JU-11', 'JS-54', 'JT-23',
    'JB-66', 'JT-98', 'JT-32', 'JU-98', 'JP-32',
    'JP-33', 'JU-65', 'JB-33', 'JS-76', 'JP-09'
]

let namesByRoute = groupingByRoute(numbers)
console.log(namesByRoute);
/*
{
    'Jakarta Pusat': [ '07', '22', '32', '33', '09' ],
    'Jakarta Barat': [ '09', '88', '87', '66', '33' ],
    'Jakarta Utara': [ '03', '20', '11', '98', '65' ],
    'Jakarta Timur': [ '11', '02', '23', '98', '32' ],
    'Jakarta Selatan': [ '01', '14', '07', '54', '76' ]
}
*/


module.exports = {
    getNumber,
    groupingByRoute
}