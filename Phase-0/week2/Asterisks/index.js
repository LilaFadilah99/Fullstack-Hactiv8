// let rows1 = 5; // input the number of rows
// let rows2 = 5; // input the number of rows
// let rows3 = 5; // input the number of rows
// let rows4 = 5; // input the number of rows

// // do loops using rows1 variable to display asterisks in the console.
// // let s = ''
// for (let i = 0; i < rows1; i++) {
//    // s += '*'
//    // s += '\n'
//    console.log('*');
    
// } 
// // console.log(s);
// // // // do loops using rows2 variable to display asterisks in the console.
// for (let i = 0; i < rows2; i++) {
//    let a = ''
//    for (let j = 0; j < rows2; j++) {
//     a += '*'
//    }
   
//    console.log(a);
    
// } 
// // do loops using rows3 variable to display asterisks in the console.
// for (let i = 0; i < rows3; i++) {
//    let b = ''
//     for (let j = 0; j <= i; j++) {
//      b += '*'
//     }
    
//     console.log(b);
     
//  } 
// // do loops using rows4 variable to display asterisks in the console.
// for (let i = rows3; i > 0; i--) {
//    let c = ''
//     for (let j = 0; j < i; j++) {
//      c += '*'
     
//     }
//     console.log(c);
     
//  } 

let rows1 = 5; // input the number of rows
let rows2 = 5; // input the number of rows
let rows3 = 5; // input the number of rows
let rows4 = 5; // input the number of rows

for (let i = 0; i < rows1; i++) {
   console.log('*');
   
}

for (let j = 0; j < rows2; j++) {
   let tampung = ''
//    console.log(`-----------
//    ini j : ${j}
// -----------`);
   for (let k = 0; k < rows2; k++) {
      tampung += '*'
      // console.log(`ini k : ${k}`);
      // console.log(tampung);
      
   }
   console.log(tampung);
      
}

for (let l = 0; l < rows3; l++) {
   let c = ''
   for (let m = 0; m <= l; m++) {
      c += '*'
   }
   console.log(c);
}

for (let n = rows4; n > 0; n--) {
   let d = ''
   for (let o = 0; o < n; o++) {
      d += '*'
   }   
   console.log(d);
}

