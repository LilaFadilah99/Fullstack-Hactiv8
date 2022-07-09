# Censored Word

### RESTRICTION
- Dilarang menggunakan built in function apapaun, kecuali yang diperbolehkan.

## Objectives
- Mampu menyelesaikan masalah yang diberikan.
- Mengerti konsep dan cara penggunaan `loop`, `nested loop`, `conditional` dan `data primitive`.

## Directions
Diberikan 2 buah variable yaitu,
- `password` adalah sebuah variable yang bervalue string yang akan di ubah sesuai dengan requirement yang diminta
- `censoredWord` adalah sebuah variable yang bervalue string yang menyimpan huruf-huruf yang akan di sensor

kalian diminta untuk merubah huruf-huruf yang mengandung huruf di variable 'censoredWord' menjadi "*" dan menghapusnya spasi di kata yang diberikan.

## TEST CASE
```js
Input :

let password = 'I Love Javascript'
let censoredWord = 'iljtp'

Output :
/*
**ove*avascr***
*/
```

```js
Input :

let password = 'Aku akan menjadi seorang developer hebat'
let censoredWord = 'iljtp'

Output :
/*
Akuakanmen*ad*seorangdeve*o*erheba*
*/
```

```js
Input :

let password = 'Aku akan menjadi seorang developer hebat'
let censoredWord = 'n'

Output :
/*
Akuaka*me*jadiseora*gdeveloperhebat
*/
```