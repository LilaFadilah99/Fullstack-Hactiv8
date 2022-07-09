# `HERO BUILDER`

### `RESTRICTION`

- Tidak boleh menggunakan built-in function apapun selain .push().

### `HINTS`

- Dilarang mengganti nama function yang diberikan skeleton code.

---

## `Objectives`
- Mampu menggunakan `Modular Function`
- Mampu Mengakses `Multi dimensi array`
- Mampu Merubah `array menjadi object`
- Mampu `Mengakses Object`
- Mampu melakukan `Looping pada Object`
- Mampu `menghandle special case` seperti input undefined, null atau power yang tidak memenuhi syarat

## `Directions`

Kalian akan diberikan 2 buah function,

## `Function convertToObject`
Function bantuan adalah convertToObject, dimana kalian diminta untuk merubah sebuah array menjadi sebuah object dan hasilnya akan dipakai di function utama.

Contoh 1, 
```js
- Input : [
            ['Punch',100],
            ['Kick',80],
            ['Headbang',30],
            ['Flick',10]
          ]

- Output : { Punch: 100, Kick: 80, Headbang: 30, Flick: 10 }
```

Contoh 2,
```js
- Input : [
            ['Invisibility',300],
            ['Teleportation',150],
            ['Blink',100]
          ]

- Output : { Invisibility: 300, Teleportation: 150, Blink: 100 }
```
## `Function heroBuider`
Function utama adalah heroBuilder, kalian akan diberikan dua buah parameter yaitu `name`, `power`, dan `skillsBook`.

Jika `name` nya kosong, maka program akan mengebalikan nilai `"Invalid Input, please input heroes name and power properly"` dan program akan berhenti.

Jika `power` lebih kecil dari 100, maka program akan mengebalikan nilai `"Your Heroes is too weak !"` dan program akan berhenti.

Kalian akan diberikan variable listSkill yang bertujuan untuk menyimpan hasil dari function `convertToObject`.

Dalam variable tersebut terdapat hasil manipulasi kalian yang didapatkan dari function covertToObject yang akan menghasilkan object seperti.

- Contoh listSkills:
```js
{
    Punch:100,
    Kick:80,
    Headbang:30,
    Flick:10,
}
```
kalian diminta untuk membuat sebuah object dimana object tersebut akan berisikan,

 - `"heroesName"` yang memiliki value name.
 - `"power"` yang memiliki value power
 - `"skill"` yang memiliki value sebuah array yang kalian dapatkan dari manipulasi object listSkill,
 - `"sisaPower"` yang memiliki value hasil dari pengurangan pengurangan pemakaian power untuk mendapatkan skill

Proses pengecekan dan mendapatkan skill dilakukan mulai dari power skill yang paling besar ke yang paling kecil.



Contoh mendapatkan "skill",
Jika kalian diberikan power 150,
Maka kalian akan mengecek dari listSkill, skill manakah yang memenuhi syarat power tersebut,
Dengan Power 150 dan contoh listSkill diatas , maka kalian dapat memasukan 'Punch', 'Headbang', 'Flick' kedalam skill,
dikarena kan 'Punch' membutuhkan 100 power 'Headbang' 30 power 'Flick' 10 power dan memiliki sisa 10 power

## `NOTE`
*- `Diasumsikan listSkill selalu berurutan dari yang paling besar ke paling kecil`*

*- `Proses pengecekan power terhadap listSkill hanya terjadi 1x dan apabila masih tersisa power akan di masukan ke sisaPower`*

Contoh dari function HeroBuilder,

Contoh 1
```js
- Input :   
1. let name : 'Saitama'
2. let power : 100
3. let skillBook : [
    ['Punch',100],
    ['Kick',80],
    ['Headbang',30],
    ['Flick',10]
]

- Output : {
    heroesName: 'Saitama',
    power: 100,
    skill: [ 'Punch' ],
    sisaPower: 0
}
```
Contoh 2
```js
- Input :   
1. let name : 'Rikimaru'
2. let power : 550
3. let skillBook : [
    ['Invisibility',300],
    ['Teleportation',150],
    ['Blink',100]
]

- Output : {
  heroesName: 'Rikimaru',
  power: 550,
  skill: [ 'Invisibility', 'Teleportation', 'Blink' ],
  sisaPower: 0
}
```


Contoh 3
```js
- Input : 

1. let name : ""
2. let power : 100
3. let skillBook : [
    ['Punch',100],
    ['Kick',80],
    ['Headbang',30],
    ['Flick',10]
]

- Output : "Invalid Input, please input heroes name and power properly"
```
Contoh 4
```js
- Input : 

1. let name : 'Saitama'
2. let power : 90
3. let skillBook : [
    ['Punch',100],
    ['Kick',80],
    ['Headbang',30],
    ['Flick',10]
]

- Output : "Your Heroes is too weak !"
```
### Test Case
```js

let skillsBook1 = [
    ['Punch',100],
    ['Kick',80],
    ['Headbang',30],
    ['Flick',10]
];

console.log(heroBuilder('Saitama', 100, skillsBook1))

/*
{
    heroesName: 'Saitama',
    power: 100,
    skill: [ 'Punch' ],
    sisaPower: 0
}
*/
console.log(heroBuilder('Garou', 150, skillsBook1))

/*
{
    heroesName': 'Garou',
    power: 150,
    skill: [ 'Punch', 'Headbang', 'Flick' ],
    sisa Power': 10
}
*/
console.log(heroBuilder('Boros', 200, skillsBook1))
/*
{
    heroesName: 'Boros',
    power: 200,
    skill: [ 'Punch', 'Kick', 'Flick'],
    sisaPower': 10
}
*/

console.log(heroBuilder('', 100, skillsBook1))
/*
'Invalid Input, please input heroes name and power properly'
*/

console.log(heroBuilder('Saitama', 90, skillsBook1))
/*
'Your Heroes is too weak !'
*/
