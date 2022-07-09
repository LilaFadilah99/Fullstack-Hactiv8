function sittingArrangement(person, column) {
    // Your code here


    if (!column) { // data yang nilainya falsy tidak akan diproses 
        return 'Invalid number'
    }

    let output = [] // untuk menampung hasil akhir
    let temp = person.length / column // agar hasil looping dapat dinamis dengan inputan column
    let jumlah = 0 // nilainya akan bertambah ketika looping selesai dan akan menjadi pembanding untuk panjang person 

    for (let i = 0; i < temp; i++) { // looping terjadi  3 kali 
        console.log(person[i]);
        for (let j = 0; j < column; j++) { // looping untuk menyeleksi 2 index yang muncul di array
            console.log(j);
            console.log(jumlah);
            console.log(person[j]);
            if (jumlah < person.length) { // jika panjang dari variabel 'jumlah' kurang dari 5 maka masuk ke conditional untuk mencetak isi variavel person dengan nomor index dari nilai 'jumlah'
                if (j === 0) {
                    output.push([person[jumlah]])
                    console.log(jumlah);
                    // console.log(output);
                } else {
                    output[i].push(person[jumlah])
                        // console.log(output);
                }
            } else if (jumlah >= person.length) { // jika nilai variabel jumlah lebih/ sama dengan 5 maka akan menambahkan keterangan kursi kosong
                if (j === 0) {
                    output.push(['Kursi Kosong'])
                } else {
                    output[i].push('Kursi Kosong')
                }
            }
            jumlah++ // nilai jumlah akan bertambah setelah proses looping selesai
        }
    }
    return output // hasil dari output akan ditampilkan sesuai dengan yang sidah ditampu dari hasil conditional dan looping
}

//DRIVER CODE

console.log(sittingArrangement(['A', 'B', 'C'], 0)); //Invalid number
console.log(sittingArrangement(['Juli', 'Nisa', 'Desi', 'Ulfa', 'Puji'], 2)); //[ [ 'Juli', 'Nisa' ], [ 'Desi', 'Ulfa' ], [ 'Puji', 'Kursi Kosong' ] ]
// console.log(sittingArrangement(['Yosia', 'Asrawi', 'Andru'], 3)); //[ [ 'Yosia', 'Asrawi', 'Andru' ] ]
// console.log(sittingArrangement(['Lukman', 'Adam', 'Dimas', 'Hansin', 'Orion'], 4));
// // [
//   [ 'Lukman', 'Adam', 'Dimas', 'Hansin' ],
//   [ 'Orion', 'Kursi Kosong', 'Kursi Kosong', 'Kursi Kosong' ]
// ]