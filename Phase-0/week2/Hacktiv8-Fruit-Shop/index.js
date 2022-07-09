let uang = 25_000
let stokMangga = 2
let stokApel = 3
let stokPisang = 3
let totalMangga = 0;
let totalApel = 0;
let totalPisang = 0;

for (stokMangga; stokMangga > 0; stokMangga--) {
    if (uang >= 10_000) {
        uang -= 10_000
        totalMangga += 1
    }    
}

for (stokApel; stokApel > 0; stokApel--) {
    if (uang >= 7_000) {
        uang -= 7_000
        totalApel += 1
    }
}

for (stokPisang; stokPisang > 0; stokPisang--) {
    if (uang >= 5_000) {
        uang -= 5_000
        totalPisang += 1
    }  
}
if (totalMangga + totalApel + totalPisang > 5) {
    let bonus = (Math.floor(Math.random()*5)+1)*1000

    console.log(`dapat membeli ${totalMangga}x mangga, ${totalApel}x apel, ${totalPisang}x pisang dan sisa uang adalah ${uang} dan mendapatkan cashback ${bonus}`)
} else {
    console.log(`dapat membeli ${totalMangga}x mangga, ${totalApel}x apel, ${totalPisang}x pisang dan sisa uang adalah ${uang}`)
}
