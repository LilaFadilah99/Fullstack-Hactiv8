let password = 'Aku akan menjadi seorang developer hebat' // Ubah nilai variabel ini untuk test code yang sudah kamu buat.
let censoredWord = 'Aku' // Ubah nilai variabel ini untuk test code yang sudah kamu buat.
let lowerPass = password.toLocaleLowerCase()
let lowerCen = censoredWord.toLocaleLowerCase()
let output = ''
// let temp = ''

// for (let i = 0; i <= password.length; i++) {
//     if (password[i] === ' ' || i === password.length) {
//         if (temp === censoredWord) {
//             for (let j = 0; j < censoredWord.length; j++) {
//                 output += '*'
//             }
//         }else {
//             output += temp
//         }
//         temp = ''
//     } else {
//         temp += password[i]
//     }
// }
// console.log(output);

for (let i = 0; i < password.length; i++) {
    let temp = false
    for (let j = 0; j < censoredWord.length; j++) {
        if (password[i].toLocaleLowerCase() === censoredWord[j].toLocaleLowerCase()) {
            temp = true
        } 
        
    }
    if (temp === true) {
        output += '*'
    } else {
        output += password[i]
    }
    
}
console.log(output);

