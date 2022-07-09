function getName(name) {
    // Write your code here
    let output = ''
    let babyNames = ''

    for (let j = 0; j < name.length - 3; j++) {
        console.log(name[j]);
        output += name[j]

    }
    console.log(output);
    return output

}
console.log(getName("Esmeralda-ER")); // Esmeralda

function groupingByContinent(names) {
    // Write your code here
    let output = {
        Asia: [],
        Afrika: [],
        Amerika: [],
        Eropa: [],
        Australia: []
    }
    let babyNames = ''
    let tempBaby = ''
    for (let i = 0; i < names.length; i++) {
        let out = ''
        for (let j = names[i].length - 2; j < names[i].length; j++) {
            console.log(names[i][j]);
            out += names[i][j]
        }
        console.log(names[i]);
        let allName = names[i]
        let babyNames = getName(allName)
        console.log(babyNames);
        console.log(out);

        switch (out) {
            case 'AS':
                output.Asia.push(babyNames)
                break;
            case 'AF':
                output.Afrika.push(babyNames)
                break;
            case 'AM':
                output.Amerika.push(babyNames)
                break;
            case 'AU':
                output.Australia.push(babyNames)
                break;
            case 'ER':
                output.Eropa.push(babyNames)
                break;
        }
    }

    return output
}
console.log(groupingByContinent(['Aaron-AS', 'Dila-AM']));



const names = [
    'Aaron-AM', 'Afya-AF', 'Alberto-AU', 'Alex-AU', 'Ansen-AM', 'Arley-AM', 'Armita-AS', 'Axton-AM',
    'Bobby-AM', 'Brandy-AM', 'Brian-AU', 'Budi-AS', 'Calum-AU', 'Chaga-AF', 'Chiharu-AS', 'Daren-AM',
    'Dario-AF', 'Davu-AF', 'Deka-AF', 'Devan-AM', 'Emily-ER', 'Enzo-ER', 'Fremont-AF', 'Grace-ER',
    'Graham-AM', 'Harith-AF', 'Hector-ER', 'Inggrid-ER', 'Jasper-ER', 'Jeff-AM', 'John-AU', 'Kesha-AM',
    'Kiara-AS', 'Ling-AS', 'Lucas-AU', 'Mayumi-AS', 'Mia-ER', 'Nadif-AF', 'Norman-AS', 'Oliver-ER',
    'Patch-AU', 'Rai-AS', 'Raymond-AU', 'Sakda-AS', 'Sebastian-AU', 'Shino-AS', 'Siti-AS', 'Tama-AS',
    'Theodore-AF', 'Ulvric-AU', 'Venya-AS', 'Victor-ER', 'Wenquian-AS', 'Willian-ER', 'Xavier-AU', 'Yera-AF',
    'Yoshiko-AS', 'Zarifa-AS', 'Zhacary-ER', 'Zhen-AS', 'Zoe-AU'
]

let namesByContinent = groupingByContinent(names)
console.log(namesByContinent);


/*
{
    Asia: [
        'Armita',  'Budi',
        'Chiharu', 'Kiara',
        'Ling',    'Mayumi',
        'Norman',  'Rai',
        'Sakda',   'Shino',
        'Siti',    'Tama',
        'Venya',   'Wenquian',
        'Yoshiko', 'Zarifa',
        'Zhen'
    ],
    Afrika: [
        'Afya',     'Chaga',
        'Dario',    'Davu',
        'Deka',     'Fremont',
        'Harith',   'Nadif',
        'Theodore', 'Yera'
    ],
    Amerika: [
        'Aaron',  'Ansen',
        'Arley',  'Axton',
        'Bobby',  'Brandy',
        'Daren',  'Devan',
        'Graham', 'Jeff',
        'Kesha'
    ],
    Eropa: [
        'Emily',   'Enzo',
        'Grace',   'Hector',
        'Inggrid', 'Jasper',
        'Mia',     'Oliver',
        'Victor',  'Willian',
        'Zhacary'
    ],
    Australia: [
        'Alberto',   'Alex',
        'Brian',     'Calum',
        'John',      'Lucas',
        'Patch',     'Raymond',
        'Sebastian', 'Ulvric',
        'Xavier',    'Zoe'
    ]
}
*/

// let cek = ['Aaron-AM', 'Dila-AM']
// let fix = ''
// for (let i = 0; i < cek.length; i++) {
//     let out = ''
//     console.log(cek[i]);
//     for (let j = cek[i].length - 2; j < cek[i].length; j++) {
//         console.log(cek[i][j]);
//         out += cek[i][j]
//     }
//     console.log(out);
//     fix = out
// }
// console.log(fix);

module.exports = {
    getName,
    groupingByContinent
}