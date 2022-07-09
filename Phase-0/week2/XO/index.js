
let kata = 'xo'
let pembandingX = 'x';
let pembandingO = 'o';
let x = 0;
let o = 0;

for (let i = 0; i < kata.length; i++) {
    if (kata[i] === 'x') {
        x += 1
    } else if (kata[i] === 'o') {
        o += 1
    }
}

if (x === o) {
    console.log(true);
} else {
    console.log(false);
}


// let kata = 'xo'
// let pembandingX = 'x';
// let pembandingO = 'o';
// let x = 0;
// let o = 0;


// for (let i = 0; i < pembandingX.length; i++) {
//     for (let k = 0; k < kata.length; k++) {
//         if (pembandingX[i] === kata[k]) {
//             x += 1            
//         }       
//     } 
// } 

// for (let j = 0; j < pembandingO.length; j++) {
//     for (let m = 0; m < kata.length; m++) {
//         if (pembandingO[j] === kata[m]) {
//             o += 1           
//         }        
//     } 
// } 

// if (x === o) {
//     console.log(true);
// } else {
//     console.log(false);
// }
