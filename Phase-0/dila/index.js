var nama = 'Dila'
var usia = 22
var uang = 18_000_000
var rekening = 'Tabungan'
// Write your code below
if (nama === '') {
    console.log('Terdapat kesalahan pada pengisian nama');
} else if (usia < 17) {
    console.log('Usia untuk membuka tabungan belum mencukupi');
} else if (rekening !== 'Giro' && rekening !== 'Tabungan') {
        console.log('Jenis rekening tidak ditemukan');
}else if (rekening === 'Giro' && uang < 1_000_000) {
    uang = 1_000_000 - uang
    console.log(`Tidak bisa membuka rekening ${rekening}, minimum deposit kurang ${uang}`);
} else if (rekening === 'Tabungan' && uang < 500_000) {
    uang = 500_000 - uang
    console.log(`Tidak bisa membuka rekening ${rekening}, minimum deposit kurang ${uang}`);
} else {
    console.log(`Rekening ${rekening}, atas nama ${nama} berhasil dibuka`);
}

