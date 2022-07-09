let nama = 'Dila' // value boleh di ganti sesuai dengan kebutuhan
let berkas = true // value boleh di ganti sesuai dengan kebutuhan
let tahunLahir = 2001 // value boleh di ganti sesuai dengan kebutuhan
let statusNikah = true // value boleh di ganti sesuai dengan kebutuhan
let warganegaraIndonesia = false // value boleh di ganti sesuai dengan kebutuhan
let output = ''
// Write your code here ...

if (!nama) {
    console.log('Silahkan isi nama terlebih dahulu');
} else {
    switch (berkas) {
        case false:
            console.log('Berkas tidak lengkap silahkan lengkapi berkas terlebih dahulu');
            break;
    
        case true:
            console.log(`Nama : ${nama}`);
            if (tahunLahir % 2 === 1) {
                console.log('Background Photo : Merah');
            } else if (tahunLahir % 2 === 0) {
                console.log('Background Photo : Biru');
            }
            switch (statusNikah) {
                case true:
                   console.log('Status Perkawinan : Kawin');
                    break;
            
                case false:
                    console.log('Status Perkawinan : Belum Kawin');
            }
            
            switch (warganegaraIndonesia) {
                case true:
                    console.log('Kewarganegaraan : WNI');
                    break;
            
                case false:
                    console.log('Kewarganegaraan : WNA');
                    break;
            }
    }
}

