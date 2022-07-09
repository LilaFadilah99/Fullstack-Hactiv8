# Grade Students

### NOTES

- Jalankan `npm install` terlebih dahulu
- Pada skeleton terdapat folder `__tests__`, folder ini beserta file-file di dalamnya tidak boleh diubah sama sekali.
- untuk menjalankan test untuk memastikan solusi kamu sudah benar, jalankan command `npm test`

### RESTRICTION

- Tidak boleh menggunakan built-in function apapun

### HINTS

- Variable `nama` dan `nilai` __tidak boleh diganti dengan variabel lain__ dan penggunaannya sesuai dengan [Directions](#directions) yang disebutkan di bawah.

---

## Objectives

Mengerti Cara Menggunakan `If-Else`
Mengerti Logika `If-Else`
Mengerti Cara Menggunakan Operator Evaluasi `===`, `!==`

## Directions

Buatlah algoritma dan implementasi di javascript untuk kasus berikut: Seorang pengajar sedang memeriksa ujian mahasiswa dan akan memberikan desc nilai dari A-E dengan ketentuan sebagai berikut:

- Nilai 80 - 100: A
- Nilai 65 - 79: B
- Nilai 50 - 64: C
- Nilai 35 - 49: D
- Nilai 0 - 34: E

Tampilkan desc nilai dan nama siswa saat pengajar tersebut memasukkan nilai dan nama yang dia inginkan.

```js
Contoh 1:
let nama = 'Andhika'
let nilai = 100

//output yang diharapkan
nama: Andhika; score: A

Contoh 2:
let nama = 'Andhiki'
let nilai = 70

//output yang diharapkan
nama: Andhiki; score: B
```

**NOTED**: Jika nilai mahasiswa kurang dari 0 atau lebih dari 100 maka tampilkan 'Nilai Invalid'
