////////////////////////////
// Phase 0 week 2
// Looping Array
//////////////////////// loopingArray.js

var input = 
[["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
 ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
 ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
 ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]]

for (var angka = 0; angka < 4; input,angka++){
console.log('Nomor ID    :' +input[angka][0])
console.log('Nama Lengkap: ' +input[angka][1])
console.log('TTL         : ' +input[angka][2])
console.log('Hobi        : ' +input[angka][3])
console.log('----------------------------------------------')
}

