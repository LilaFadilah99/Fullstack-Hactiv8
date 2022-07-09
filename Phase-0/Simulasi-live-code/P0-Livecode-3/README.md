# Live-Code-3-Phase-0

## RULES

1. **Untuk kampus remote**: **WAJIB** melakukan **share screen** (**DESKTOP/ENTIRE SCREEN**) dan **unmute microphone** ketika Live Code berjalan (tidak melakukan share screen/salah screen atau tidak unmute microphone akan di ingatkan).
2. Kerjakan secara individu. Segala bentuk kecurangan (mencontek ataupun diskusi) akan menyebabkan skor live code ini 0.
3. Clone repo ini kemudian buatlah **branch dengan nama masing - masing**.
4. Kerjakan pada file JavaScript (\*.js) dan HTML (\*.html) yang telah disediakan dan jangan melakukan perubahan terhadap file lain.
5. Waktu pengerjaan:
   - **120 menit** untuk **3 soal**.
6. **Pada text editor hanya ada file yang terdapat pada repository ini**.
7. Membuka referensi eksternal seperti Google, StackOverflow, dan MDN diperbolehkan.
8. Dilarang membuka repository di organisasi tugas, baik pada organisasi batch sendiri ataupun batch lain, baik branch sendiri maupun branch orang lain (**setelah melakukan clone, close tab GitHub pada web browser kalian**).
9. Lakukan `git push origin <branch-name>` dan create pull request **hanya jika waktu Live Code telah usai (bukan ketika kalian sudah selesai mengerjakan)**. Tuliskan nama lengkap kalian saat membuat pull request dan assign buddy.
10. **Penilaian berbasis logika dan hasil akhir**. Pastikan keduanya sudah benar.
11. **Khusus untuk nomer 3**, Pastikan output di browser kalian sudah sesuai dengan screenshot yang diberikan.

## Notes

- Live code ini memiliki testing. Pastikan telah mengeksekusi command `npm install` sebelum melakukan test. Command line untuk test adalah `npm test -- <nama_file>`.

  | Soal | Command            |
  | ---- | ------------------ |
  | 1    | `npm test -- 1.js` |
  | 2    | `npm test -- 2.js` |
  | 3    | Test di browser    |

  Untuk soal nomor 3, karna soal berbentuk `html` dan `css`, kalian tidak perlu melakukan `npm test`, kalian dapat membandingkan dengan requirements yang di inginkan di gambar `3.png`

- Built-in functions yang tidak dilarang oleh RULES:

  - Basic primitive data types: `Number()`, `String()`, `Boolean()`
  - Informatives: `typeof`, `.length`, `isInteger()`, `isArray()`, `isNaN()`
  - Maths: `Math.floor()`, `Math.round()`, `Math.ceil()`, `Math.abs()`, `Math.sqrt()`, `Math.random()`
  - Strings: `toString()`, `toUpperCase()`, `toLowerCase()`, `parseInt()`
  - Object: `Object.keys()`, `Object.values()`
  - Array: `push()`
